
let rendererRouter = {

    route: () => {
        let params = request.getParameters();
        let view = params["view"] || "Main";
        let rendererNm = "render" + view;
        let renderer = null;
        let payload = null;
        let requestUrl = null;
        let reqInfo = {}

        switch (view) {
            case "Main":
                reqInfo.requestUrl = 'http://localhost:8080/test';
                reqInfo.methodType =  'PUT';
                reqInfo.callback = (payload) => {
                    rendererRouter.renderMain(rendererNm, payload);
                };
                break;
            case "List":
                reqInfo.requestUrl = 'http://localhost:8080/api/user/list';
                reqInfo.callback = (payload) => {
                    rendererRouter.renderMain(rendererNm, payload);
                };
                break;
            case "View":
                reqInfo.requestUrl = 'http://localhost:8080/api/user/view?userId=test';
                reqInfo.callback = (payload) => {
                    rendererRouter.renderMain(rendererNm, payload);
                };
                break;
            default:
                renderer = rendererRouter["renderNotFound"];
                rendererNm = "renderNotFound";
                renderer(rendererNm, null);
                break;
        }

        if (reqInfo.requestUrl) {
            new restRequestUtil(reqInfo);
        }
    },
    renderMain: (rendererNm, payload) => {
        rendererRouter.fireRenderer(rendererNm, payload);
    },
    renderView: (rendererNm, payload) => {
        rendererRouter.fireRenderer(rendererNm, payload);
    },
    renderList: (rendererNm, payload) => {
        rendererRouter.fireRenderer(rendererNm, payload);
    },
    renderNotFound: (rendererNm, payload) => {
        rendererRouter.fireRenderer(rendererNm, payload);
    },
    fireRenderer: (rendererNm, payload) => {

        if (rendererNm == null) {
            return;
        }

        let excutefn = (rendererNm, payload) => {
            let renderer = window[rendererNm];

            if (typeof (renderer) === "function") {
                renderer(payload);
            } else {
                console.error("함수명 지정을 확인하세요. : " + rendererNm);
            }
        }

        if (window[rendererNm] == null) {

            let prefix = '/app/js/renderer/'
            let subFix = '.js';
            let script = document.createElement('script');

            script.src = prefix + rendererNm + subFix;
            script.async = true;
            script.onload = () => { excutefn(rendererNm, payload); };

            rendererRouter.headEl.appendChild(script);

        } else {
            excutefn(rendererNm, payload);
        }

    },
    headEl : document.getElementsByTagName("head")[0]

}