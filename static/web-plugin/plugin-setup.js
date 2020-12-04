const pages = {
  editPlugin: 1,
  listPlugins: 0,
  viewPlugin: 2,
};
const layout = { currentPage: pages.buildPlugin };
const data = {
  currentPlugin: undefined,
  currentCatalogId: undefined,
};
const folders = [];

// UI - start
let pagesElements;
let saveButton;
let createNewButton;
let catalogs;
let pluginsDiv;
let pluginHeader;
let createCatalogButton;
let pluginContainer;
// UI - end

function initUI() {
  saveButton = document.getElementById("saveButton");
  createNewButton = document.getElementById("createNewButton");
  catalogs = document.getElementById("catalogs");
  pluginsDiv = document.getElementById("plugins");
  pluginHeader = document.getElementById("pluginHeader");
  createCatalogButton = document.getElementById("createCatalogButton");

  saveButton.onclick = () => {
    changeLayout(pages.listPlugins);
  };

  createNewButton.onclick = () => {
    data.currentPlugin = registerPlugin();

    changeLayout(pages.editPlugin);
  };

  createCatalogButton.onclick = () => {
    const newCatalog = {
      name: "New catalog",
      items: [],
      iconUrl: "./icon/assert.svg",
    };
    data.currentPlugin.catalogs.push(newCatalog);
    catalogs.appendChild(renderCatalog(newCatalog));
  };

  pagesElements = [];
  for (const property in pages) {
    const value = pages[property];
    pagesElements[value] = document.getElementById(`layout_${value}`);
  }
}

//TODO: merge with initUI()
function initUI_1() {
  pasteIframeCodeButton = document.getElementById("pasteIframeCode");
  pasteIframeCodeButton.onclick = () => {
    miro.board.ui.openModal("iframe-modal.html", { width: 520, height: 280 });
  };
}

function changeLayout(index) {
  layout.currentPage = index;

  const hideLayout = (h) => {
    pagesElements[h].style.display = "none";
  };

  const showLayout = (h) => {
    pagesElements[h].style.display = "block";
  };

  pagesElements.forEach((item, i) => {
    if (index === i) {
      showLayout(i);
    } else {
      hideLayout(i);
    }
  });
}

function bootstrap() {
  initUI();
  initUI_1();
}

miro.onReady(bootstrap);
