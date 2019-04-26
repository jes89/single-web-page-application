let leftMenuRenderer = {
    render: (headerEl) => {
        let leftMenuEl = document.createElement("div");
        let leftMenuInnerEl = document.createElement("div");
        let infoEl = document.createElement("div");
        let navEl = document.createElement("nav");
        let guideLinkEl = document.createElement("div");
        let closeEl = document.createElement("div");
        let userThumbWrapEl = document.createElement("div");
        let userThumbImgEl = document.createElement("img");
        let logInfoEl = document.createElement("div");
        let logUserId = document.createElement("h3");
        let dimEl = document.createElement("div");
        let userNoticWrapEl = document.createElement("p");
        let userNoticEl = document.createElement("span");

        dimEl.classList.add("dim");

        leftMenuEl.classList.add("gnb-all-wrap");
        leftMenuInnerEl.classList.add("gnb-all-inner");
        navEl.classList.add("gnb-all");
        guideLinkEl.classList.add("guide-link");
        infoEl.classList.add("info");
        closeEl.classList.add("close");
        userThumbWrapEl.classList.add("user-thumb");
        logInfoEl.classList.add("log-info");

        closeEl.onclick = leftMenuRenderer.toggle;
        
        userThumbImgEl.src = "http://www.changetv.kr/images/LPTV_2018/thumb/thumb_user.jpg";

        navEl.innerHTML = "<ul><li><a onclick=\"leftMenuRenderer.fireGoToUrl(null, null, '/app?view=List')\">프로그램</a></li>"
        + "<li><a onclick=\"leftMenuRenderer.fireGoToUrl(null, null, '/app?view=View')\">시청자후기</a></li>"
        + "<li><a onclick=\"leftMenuRenderer.fireGoToUrl(null, null, '/app?view=Main')\">후원인증</a></li>"
        + "<li><a onclick=\"leftMenuRenderer.fireGoToUrl(null, null, '/app?view=List')\">다인넷인증</a></li>"
        + "<li><a onclick=\"leftMenuRenderer.fireGoToUrl(null, null, '/app?view=View')\">뉴스</a></li></ul>";
    
        guideLinkEl.innerHTML = "<ul>"
        + "<li class='notice-event'>"
        + "<a onclick=\"leftMenuRenderer.fireGoToUrl(null, null, '/app?view=List')\">공지ㆍ이벤트</a>"
        + "</li>"
        + "<li class='customer'>"
        + "<a onclick=\"leftMenuRenderer.fireGoToUrl(null, null, '/app?view=List')\">고객센터</a>"
        + " </li>"
        + "<li class='guide'>"
        + "<a onclick=\"leftMenuRenderer.fireGoToUrl(null, null, '/app?view=List')\">서비스 안내</a>"
        + "</li>"
        + "<li class='channel'>"
        + "<a onclick=\"leftMenuRenderer.fireGoToUrl(null, null, '/app?view=List')\">다양한 채널</a>"
        + "</li>"
        + "</ul>"

        userNoticEl.textContent = global.userNm + "님 귀찮아요~*";
        logUserId.textContent = global.userNm;

        userNoticWrapEl.appendChild(userNoticEl);
        userThumbWrapEl.appendChild(userThumbImgEl);

        logInfoEl.appendChild(logUserId);
        logInfoEl.appendChild(userNoticWrapEl);

        infoEl.appendChild(closeEl);
        infoEl.appendChild(userThumbWrapEl);
        infoEl.appendChild(logInfoEl);
        
        leftMenuInnerEl.appendChild(infoEl);
        leftMenuInnerEl.appendChild(navEl);
        leftMenuInnerEl.appendChild(guideLinkEl);

        leftMenuEl.appendChild(leftMenuInnerEl);

        headerEl.appendChild(dimEl);
        headerEl.appendChild(leftMenuEl);

        global.cacheEl["leftMenuUserNm"] = logUserId;
        global.cacheEl["leftMenu"] = leftMenuEl;
        global.cacheEl["dimEl"] = dimEl;
    },
    fireGoToUrl : (data, title, url ) => {
        global.goToUrl(data, title, url);
        leftMenuRenderer.toggle();
    },
    toggle: () => {

        let leftMenuEl = global.cacheEl["leftMenu"];
        let dimEl = global.cacheEl["dimEl"];
        let classNm = "active";

        if (leftMenuEl.classList.contains(classNm)) {
            leftMenuEl.classList.remove(classNm);
            dimEl.style.display = "none";
        } else {
            leftMenuEl.classList.add(classNm);
            dimEl.style.display = "block";
        }
    }
}


