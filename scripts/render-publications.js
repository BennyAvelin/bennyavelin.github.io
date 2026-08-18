(function () {
  "use strict";

  function addText(parent, text) {
    if (!text) return;
    if (parent.childNodes.length) parent.append(" · ");
    parent.append(text);
  }

  function renderItem(item) {
    const li = document.createElement("li");
    const article = document.createElement("article");
    const year = document.createElement("p");
    const body = document.createElement("div");
    const title = document.createElement("h3");
    const details = document.createElement("p");

    year.className = "year";
    year.textContent = item.year;
    title.textContent = item.title;

    if (item.authors) addText(details, `With ${item.authors}`);
    if (item.note) addText(details, item.note);
    (item.links || []).forEach((link) => {
      if (details.childNodes.length) details.append(" · ");
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.label;
      details.append(anchor);
    });

    body.append(title, details);
    article.append(year, body);
    li.append(article);
    return li;
  }

  document.querySelectorAll("[data-publication-list]").forEach((list) => {
    const key = list.dataset.publicationList;
    const items = window.PUBLICATION_DATA && window.PUBLICATION_DATA[key];
    if (!Array.isArray(items)) return;
    list.replaceChildren(...items.map(renderItem));
  });
})();
