function renderView(payload) {
    let contentsRenderer = () => {

        let contentsContainer = global.getContentsContainer();
        let recommendEl = document.createElement("section");

        contentsContainer.innerHTML = "";
        recommendEl.innerHTML = "<img src='/app/image/2.gif' onclick=\"global.goToUrl(null,null,\'/app?view=View&idx=12\')\">";

        contentsContainer.appendChild(recommendEl);
    }

    let render = () => {
        headerRenderer.render();
        contentsRenderer();
        bottomRenderer.render();
    }


    render();
}