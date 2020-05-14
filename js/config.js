let realm = "";
let rootUrl = "";
const keycloak = Keycloak({
  realm: realm,
  url: "http://ec2-18-191-54-7.us-east-2.compute.amazonaws.com:8080/auth",
  "ssl-required": "none",
  clientId: "webix",
  "public-client": true,
  "confidential-port": 0,
  "verify-token-audience": true,
  "use-resource-role-mappings": true,
});
desktopApp.init();
keycloak
  .init({
    onLoad: "check-sso",
    promiseType: "native",
  })
  .then(function (authenticated) {
    if (authenticated) {
      webix.$$("main").show();
      webix.$$("toolbar").show();
    } else {
      desktopApp.wins.hideAllWindows();
      webix.$$("toolbar").hide();
      webix.$$("sign-in").show();
    }
  });
