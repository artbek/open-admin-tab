chrome.contextMenus.create({
	title: getContextMenuTitle(),
	contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function onClickHandler(info, tab) {
	var segments = info.pageUrl.split(/\/+/);
	var protocol = segments[0];
	var host = segments[1];
	var admin_page_uri = localStorage["admin_page_uri"] || "admin";
	var newTabUrl = protocol + "//" + host + "/" + admin_page_uri;
	chrome.tabs.create({ url: newTabUrl });
});


/* HELPERS */

function getContextMenuTitle() {
	var title = localStorage["context_menu_title"] || "Open ADMIN Tab";
	return title;
}

