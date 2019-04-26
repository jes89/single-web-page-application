let global = {
    cacheEl: {},
    mac: null,
    token: null,
    leftMenu: null,
    header: null,
    footer: null,
    userNm: null,
    expiryTime: 0,
    getContentsContainer: function () {
        let cacheNm = "contentsContainer";
        let contentsContainer = null;

        if (global.cacheEl[cacheNm]) {
            return global.cacheEl[cacheNm];
        }

        contentsContainer = document.createElement("div");

        contentsContainer.classList.add("container");

        global.cacheEl[cacheNm] = contentsContainer;

        global.getEl("body").appendChild(contentsContainer);

        return contentsContainer;
    },
    getEl: id => {
        
        if (global.cacheEl[id]) {
            return global.cacheEl[id];
        }

        global.cacheEl[id] = document.getElementById(id);

        return global.cacheEl[id];
    },
    goToUrl(data, title, url) {
        history.pushState(data, title, url);
        rendererRouter.route();
        global.prevUrl = url;

    }
};

