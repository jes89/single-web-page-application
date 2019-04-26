
let bottomRenderer = {
    render: () => {

        if (global.footer) {
            return;
        }

        let bodyEl = global.getEl("body");
        let footerEl = document.createElement("footer");
        let logMenuEl = document.createElement("div");
        let fnbEl = document.createElement("nav");
        let infoEl = document.createElement("div");
        let logUl = document.createElement("ul");
        let customerLi = document.createElement("li");
        let customerAnchorEl = document.createElement("a");

        customerAnchorEl.textContent = "푸터당";

        footerEl.classList.add("footer");
        logMenuEl.classList.add("log-menu");
        fnbEl.classList.add("fnb");
        infoEl.classList.add("info");
        customerLi.classList.add("customer");

        customerLi.appendChild(customerAnchorEl);
        logMenuEl.appendChild(logUl);

        footerEl.appendChild(customerLi);
        footerEl.appendChild(logMenuEl);
        footerEl.appendChild(fnbEl);
        footerEl.appendChild(infoEl);

        bodyEl.appendChild(footerEl);

        global.cacheEl["footer"] = footerEl;

        global.footer = footerEl;
    }
}