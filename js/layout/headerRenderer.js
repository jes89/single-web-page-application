
let headerRenderer = {
    render: () => {

        if (global.header){
            return;
        }

        let bodyEl = global.getEl("body");
        let headerEl = document.createElement("header");
        let headerTopEl = document.createElement("div");
        let gnbAllBtnEl = document.createElement("div");
        let logoEl = document.createElement("div");
        let searchEl = document.createElement("div");
        let gbnImg = document.createElement("img");
        let logonImg = document.createElement("img");
        let searchImg = document.createElement("img");
        let searchAnchorEl = document.createElement("a");
        
        gbnImg.src = "http://www.changetv.kr/images/LPTV_2018/mobile/common/btn_header_gnb_all.png";
        logonImg.src = "http://www.dahnworld.com/images/m/detail/h1_logo.gif";
        searchImg.src = "http://www.changetv.kr/images/LPTV_2018/mobile/common/btn_header_search.png";

        gnbAllBtnEl.classList.add("gnb-all-btn");
        logoEl.classList.add("logo");
        searchEl.classList.add("search");

        headerEl.classList.add("header");
        headerTopEl.classList.add("header-top");
       
        gnbAllBtnEl.onclick = leftMenuRenderer.toggle;
        
        searchAnchorEl.appendChild(searchImg);

        gnbAllBtnEl.appendChild(gbnImg);
        logoEl.appendChild(logonImg);
        searchEl.appendChild(searchAnchorEl);

        logoEl.onclick = function () {
            global.goToUrl(null, null, "/app");
        }

        headerTopEl.appendChild(gnbAllBtnEl);
        headerTopEl.appendChild(logoEl);
        headerTopEl.appendChild(searchEl);

        headerEl.appendChild(headerTopEl);

        bodyEl.appendChild(headerEl);

        global.cacheEl["header"] = headerEl;

        global.header = headerEl;

        leftMenuRenderer.render(headerEl);

    }
}


   