function app_build({
  id,
  icon,
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
        icon,
      ];
    },
    body: function () {
      return {
        view: "iframe",
        ...dimensions,
        src: pathType === "absolute" ? pathname : rootUrl + pathname,
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
  recipe: app_build({
    id: "recipe",
    title: "Recipe App",
    pathname: "/recipe",
    icon: "img/recipe.png",
  }),
  settings: app_build({
    id: "settings",
    title: "Settings App",
    pathname: "/settings",
    icon: "img/settings.png",
  }),
  inventory: app_build({
    id: "inventory",
    title: "Inventory App",
    pathname: "/inventory",
    icon: "img/inventory.png",
  }),
  store: app_build({
    id: "store",
    title: "Store App",
    pathname: "/online-store",
    icon: "img/store.png",
  }),
  order: app_build({
    id: "order",
    title: "Order App",
    pathname: "/order",
    icon: "img/order.png",
  }),
  safety: app_build({
    id: "safety",
    title: "Safety App",
    pathname: "/safety",
    icon: "img/safety.png",
  }),
  crm: app_build({
    id: "crm",
    title: "CRM App",
    pathname: "/crm",
    icon: "img/crm.png",
  }),
  subscription: app_build({
    id: "subscription",
    title: "Subscription App",
    pathname: "/subscription",
    icon: "img/subscription.png",
  }),
  support: app_build({
    id: "support",
    title: "Support App",
    pathname: "https://dev.dailykit.org",
    pathType: "absolute",
    dimensions: {
      width: 480,
      height: window.innerHeight,
    },
    cssExtend: "support_window",
  }),
};
