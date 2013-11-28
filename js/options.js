document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);


function save_options() {
	localStorage["context_menu_title"] = document.getElementById("context_menu_title").value;
	localStorage["admin_page_uri"] = document.getElementById("admin_page_uri").value;

	var status = document.getElementById("status");
	status.innerHTML = "saving...";
	setTimeout(function() {
		status.innerHTML = "";
	}, 750);
}


function restore_options() {
	var context_menu_title = localStorage["context_menu_title"] || "Open ADMIN Tab"
	document.getElementById("context_menu_title").value = context_menu_title;

	var admin_page_uri = localStorage["admin_page_uri"] || "admin";
	document.getElementById("admin_page_uri").value = admin_page_uri;
}

