function renderNotFound() {
    let contentsRenderer = () => {

        let contentsContainer = global.getContentsContainer();
        let recommendEl = document.createElement("section");

        contentsContainer.innerHTML = "";
        recommendEl.innerHTML = "페이지가 없는디유?<br/><br/><img src='/app/image/1.gif' onclick=\"global.goToUrl(null,null,\'/app?view=View&idx=12\')\">";

        contentsContainer.appendChild(recommendEl);
    }

    let render = () => {
        headerRenderer.render();
        contentsRenderer();
        bottomRenderer.render();
    }


    render();
}