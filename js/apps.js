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
  product: app_build({
    id: "product",
    title: "Product",
    pathname: "/product",
    icon: "img/product.png",
  }),
  settings: app_build({
    id: "settings",
    title: "Settings",
    pathname: "/settings",
    icon: "img/settings.png",
  }),
  inventory: app_build({
    id: "inventory",
    title: "Inventory",
    pathname: "/inventory",
    icon: "img/inventory.png",
  }),
  menu: app_build({
    id: "menu",
    title: "Menu",
    pathname: "/online-store",
    icon: "img/menu.png",
  }),
  order: app_build({
    id: "order",
    title: "Order",
    pathname: "/order",
    icon: "img/order.png",
  }),
  safety: app_build({
    id: "safety",
    title: "Safety",
    pathname: "/safety",
    icon: "img/safety.png",
  }),
  crm: app_build({
    id: "crm",
    title: "CRM",
    pathname: "/crm",
    icon: "img/crm.png",
  }),
  subscription: app_build({
    id: "subscription",
    title: "Subscription",
    pathname: "/subscription",
    icon: "img/subscription.png",
  }),
  brand: app_build({
    id: "brand",
    title: "Brand",
    pathname: "/brands",
    icon: "img/brand.png",
  }),
  insights: app_build({
    id: "insights",
    title: "Insights",
    pathname: "/insights",
    icon: "img/insights.png",
  }),
  support: app_build({
    id: "support",
    title: "Support",
    pathname: "https://docs.dailykit.org",
    pathType: "absolute",
    dimensions: {
      width: 480,
      height: window.innerHeight,
    },
    cssExtend: "support_window",
  }),
};
