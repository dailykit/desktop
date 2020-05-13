function app_build(id, title, pathname) {
  return {
    css: "no_border ",
    toolbar: function () {
      return [
        title,
        function () {
          $$(id + "_win").hide();
          webix.html.removeCss($$(id + "_button").$view, "active");
        },
        function () {
          $$(id + "_win").config.fullscreen = !$$(id + "_win").config
            .fullscreen;
          $$(id + "_win").resize();
        },
        function () {
          $$("toolbar").removeView(id + "_button");
          $$(id + "_win").hide();
          desktopApp.buttonCount--;
        },
      ];
    },
    body: function () {
      return {
        view: "iframe",
        src: "http://localhost:3000" + pathname,
      };
    },
    events: {
      onBeforeShow: function () {
        desktopApp.beforeWinShow(id);
      },
    },
  };
}

var apps = {
  recipe: app_build("recipe", "Recipe App", "/recipe"),
  settings: app_build("settings", "Settings App", "/settings"),
  inventory: app_build("inventory", "Inventory App", "/inventory"),
  store: app_build("store", "Store App", "/online-store"),
};
