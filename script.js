"use strict";

function buildPopUpMenu(menu) {
  var body = document.getElementsByTagName("body");
  var div = document.createElement("div");
  div.id = 'Container';
  body[0].appendChild(div);

  function buildSubMenu(menu, cont) {
    var submenu = document.createElement("ul");
    cont.appendChild(submenu);
    submenu.style.listStyleType = "none";
    for (var i = 0; i < menu.length; i++) {
      var li = document.createElement("li");
      if (menu[i].url) {
        var a = document.createElement("a");
        li.appendChild(a);
        a.setAttribute("href", menu[i].url);
        a.textContent = menu[i].name;
      } else li.textContent = menu[i].name;

      submenu.style.position = "absolute";
      submenu.style.padding = "0";
      submenu.style.backgroundColor = "white";
      submenu.style.display = "block";
      if (submenu.parentNode.id != 'Container') {
        submenu.parentNode.addEventListener("mouseover", onMouseOver, false);
        submenu.parentNode.addEventListener("mouseout", onMouseOut, false);
      }
      if (menu[i].submenu) {
        li.style.position = "relative";
        var newsubmenu = buildSubMenu(menu[i].submenu, li);
        li.appendChild(newsubmenu);
        if (submenu.parentNode.id != 'Container') {
          newsubmenu.style.left = "9.5em";
          newsubmenu.style.top = "3px";
        } else {
          newsubmenu.style.left = "0.5em";
          newsubmenu.style.top = "23px";
        }
        newsubmenu.style.zIndex = "10";
        newsubmenu.style.padding = "0";
        newsubmenu.style.backgroundColor = "white";
        newsubmenu.style.display = "none";
      }
      li.style.display = "inline-block";
      li.style.textAlign = "center";
      li.style.minWidth = "10em";
      li.style.padding = '3px 0 3px 0';
      li.style.border = "solid black 1px";
      submenu.appendChild(li);
    }
    function onMouseOver(e) {
      e = e || window.event;
      e.preventDefault();
      this.childNodes[1].style.display = "block";
    }
    function onMouseOut(e) {
      e = e || window.event;
      e.preventDefault();
      this.childNodes[1].style.display = "none";
    }
    return submenu;
  }
  buildSubMenu(menu, div);
}
var menu = [
  {
    name: "Пункт 1",
    submenu: [
      {
        name: "Пункт 1.1",
        submenu: [
          { name: "Пункт 1.1.1", url: "http://www.tut.by" },
          { name: "Пункт 1.1.2 длинный", url: "http://www.tut.by" },
        ],
      },
      { name: "Пункт 1.2", url: "http://www.tut.by" },
      {
        name: "Пункт 1.3 длинный",
        submenu: [
          { name: "Пункт 1.3.1", url: "http://www.tut.by" },
          { name: "Пункт 1.3.2", url: "http://www.tut.by" },
          {
            name: "Пункт 1.3.3", submenu: [
              { name: "Пункт 1.3.3.1", url: "http://www.tut.by" },
              { name: "Пункт 1.3.3.2", url: "http://www.tut.by" },
            ],
          },
          { name: "Пункт 1.3.4 длинный", url: "http://www.tut.by" },
        ],
      },
    ],
  },
  { name: "Пункт 2 длинный", url: "http://www.tut.by" },
  {
    name: "Пункт 3",
    submenu: [
      { name: "Пункт 3.1 длинный", url: "http://www.tut.by" },
      {
        name: "Пункт 3.2", submenu: [
          { name: "Пункт 3.2.1", url: "http://www.tut.by" },
          { name: "Пункт 3.3.2", url: "http://www.tut.by" },
          {
            name: "Пункт 3.2.3", submenu: [
              { name: "Пункт 3.2.3.1", url: "http://www.tut.by" },
              { name: "Пункт 3.2.3.2", url: "http://www.tut.by" },
            ],
          },
          { name: "Пункт 3.2.4 длинный", url: "http://www.tut.by" },
        ]
      },
    ],
  },
];

buildPopUpMenu(menu);
