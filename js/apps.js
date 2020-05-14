function app_build({
  id,
  title,
  pathname,
  pathType,
  dimensions = {},
  cssExtend = "",
}) {
  return {
    css: "no_border " + cssExtend,
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
        ...dimensions,
        src:
          pathType === "absolute"
            ? pathname
            : "http://localhost:3000" + pathname,
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
  recipe: app_build({ id: "recipe", title: "Recipe App", pathname: "/recipe" }),
  settings: app_build({
    id: "settings",
    title: "Settings App",
    pathname: "/settings",
  }),
  inventory: app_build({
    id: "inventory",
    title: "Inventory App",
    pathname: "/inventory",
  }),
  store: app_build({
    id: "store",
    title: "Store App",
    pathname: "/online-store",
  }),
  support: app_build({
    id: "support",
    title: "Support App",
    pathname: "https://docs.dailykit.org",
    pathType: "absolute",
    dimensions: {
      width: 480,
      height: window.innerHeight,
    },
    cssExtend: "support_window",
  }),
};
