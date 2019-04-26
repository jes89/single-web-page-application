var restRequestUtil = function (settingObj) {

    if (settingObj == null) {
        console.error('settingObj를 셋팅해주세요');
        return;
    }

    let init = settingObj => {

        this.request = new XMLHttpRequest();
        this.requestUrl = settingObj.requestUrl;
        this.methodType = (settingObj.methodType || 'GET').toUpperCase();
        this.requestHeader = settingObj.requestHeader;
        this.data = settingObj.data;
        this.callback = settingObj.callback;

        this.request.open(this.methodType, this.requestUrl);

        sendRequest.call(this);
    }

    let setRequestHeader = () => {

        let requestHeader = this.requestHeader;
        let request = this.request;
        let keys = null;
        let tempKey = null;

        if (requestHeader == null ) {
            setDefaultRequestHeader.call(this);
            return;
        } 
        
        keys = Object.keys(requestHeader);

        for (let i = 0; i < keys.length; i++) {
            tempKey = keys[i];
            request.setRequestHeader(tempKey, requestHeader[tempKey]);
        }
    }

    let setDefaultRequestHeader = () => {

        this.request.setRequestHeader('Authorization', "Bearer " + global.token);
        this.request.setRequestHeader('mac', global.mac);

        switch (this.methodType) {
            case 'POST':
            case 'PUT':
                this.request.setRequestHeader('Content-type', 'application/json');
                break;
            default:
                break;
        }

    }

    let toggleLoading = isLoading => {

        var loading = document.getElementById("loading-container");

        if(isLoading){
            loading.style.display = "";
        } else{
            loading.style.display = "none";
        }
    }

    let successHandler = (jsonObj, callback) => {
        
        //네이티브도 토큰 업데이트 처리 
        if (jsonObj.msg === 'new token issued') {
            updateToken(jsonObj);
        }

        updateUserInfo(jsonObj);

        if (typeof (callback) === "function") {
            callback(jsonObj.payload);
        }
        
    }

    let updateUserInfo = (jsonObj) => {

        let leftMenuUserNm = global.cacheEl["leftMenuUserNm"];
        if (jsonObj.expiryTime > global.expiryTime) {
            global.expiryTime = jsonObj.expiryTime;
        }

        if (jsonObj.userNm !== global.userNm) {
            global.userNm = jsonObj.userNm;
            if(leftMenuUserNm){
                leftMenuUserNm.textContent = jsonObj.userNm;
            }
        }
    }

    let updateToken = jsonObj => {

        if (jsonObj.expiryTime < global.expiryTime) {
            console.error('expiryTime 오류 : ' + JSON.stringify(jsonObj));
            return;
        }

        if (jsonObj.token == null || jsonObj.token.length === 0) {
            console.error('token 오류 : ' + JSON.stringify(jsonObj));
            return;
        }

        if (jsonObj.token !== global.token) {
            global.token = jsonObj.token;
        }

    }

    let sendRequest = () => {

        setRequestHeader.call(this);

        toggleLoading(true);

        let request = this.request;
        let callback = this.callback;

        let reqPromise = new Promise((resolve, reject) => {
            request.onload = () => resolve(request.responseText);
            request.onerror = () => reject(request.statusText, request.responseText);
            request.send(this.data);
        });

        reqPromise.then((successMessage) => {

            let responseText = request.responseText;
            let jsonObj = null;

            try {
                jsonObj = JSON.parse(responseText);
            } catch (e) {
                console.error(responseText);
            }

            successHandler(jsonObj, callback);

            toggleLoading(false);
      
        }).catch((reason, response) => {

            console.error(reason);
            console.error(response);

            toggleLoading(false);

        });

    }

    init.call(this, settingObj);
    
}