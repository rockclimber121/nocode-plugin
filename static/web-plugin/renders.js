const catalogsToAdd = [
  "Retrospective templates",
  "Planning tools",
  "Ice breakers",
];
const items = [
  {
    preview: "./icon/item-1.png",
  },
  {
    preview: "./icon/item-2.png",
  },
  {
    preview: "./icon/item-3.png",
  },
  {
    preview: "./icon/item-4.png",
  },
];
let currentCatalog = 0;

function renderCatalog() {
  const data = catalogsToAdd[currentCatalog++];
  const catalog = document.createElement("div");
  const catalogImage = document.createElement("div");
  const catalogName = document.createElement("div");
  const closeButton = document.createElement("div");

  catalog.appendChild(catalogImage);
  catalog.appendChild(catalogName);
  catalog.appendChild(closeButton);

  catalog.className = "catalog";
  catalogImage.className = "catalog-image";
  catalogName.innerHTML = data || "New catalog";
  catalogName.className = "catalog-title";
  closeButton.className = "catalog-close-button";

  return catalog;
}

function renderItems(container) {
  items.forEach((item) => container.appendChild(renderItem(item.preview)));
}

function renderItem(data) {
  const item = document.createElement("div");
  const itemImage = document.createElement("img");
  const itemCloseButton = document.createElement("div");

  item.className = "item";
  item.appendChild(itemCloseButton);
  itemCloseButton.className = "item-close-button";
  itemImage.className = "item-image";
  item.appendChild(itemImage);

  itemImage.src = data;

  return item;
}

function renderPlugin(data) {
  const plugin = document.createElement("div");
  const pluginImage = document.createElement("div");
  pluginImage.className = "plugin-image-container";
  pluginImage.innerHTML = `
        <label for="file-input">
            <img class="plugin-image" src="./icon/assert.svg"/>
        </label>

        <input id="file-input" class="hidden" type="file"/>
   `;
  const plugingName = document.createElement("input");
  plugin.appendChild(pluginImage);
  plugin.appendChild(plugingName);

  plugingName.onchange = (t) => {
    data.name = t.target.value;
  };

  plugingName.class = "miro-input--primary miro-input--small";
  plugingName.value = data.name;
  return plugin;
}
