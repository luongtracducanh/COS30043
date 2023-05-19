/*
  Copyright (c) Total Validator.
  All Rights Reserved.
*/
function toggleMenu() {
  var menu = document.getElementById("mainmenu");
  Array.prototype.slice.call(menu.children).forEach(function(item) {
    if (item.classList.contains("dropdown") || item.classList.contains("sidemenudummy")) {
      item.classList.toggle("dropdown");
      item.classList.toggle("sidemenudummy");
      Array.prototype.slice.call(item.children).forEach(function(subitem) {
        if (subitem.classList.contains("dropdown-content") || subitem.classList.contains("sidemenuitem")) {
          subitem.classList.toggle("dropdown-content");
          subitem.classList.toggle("sidemenuitem");
        }
      });
    }
  });
  menu.classList.toggle("sideoff");
  menu.classList.toggle("sideon");
}

//toggleOff if sidemenu is visible
window.onresize = function(e) {
  if (document.getElementById("mainmenu").classList.contains("sideon")) {
    toggleMenu();
  }
};
