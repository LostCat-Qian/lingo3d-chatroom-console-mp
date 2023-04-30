"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
require("../../utils/http.js");
const _sfc_main = {
  setup() {
    const account = common_vendor.reactive({
      username: "",
      password: ""
    });
    const login = async () => {
      if (account.username === "" || account.password === "") {
        common_vendor.index.showToast({
          title: "数据不能为空！",
          icon: "error"
        });
        return;
      }
      try {
        const data = await api_index.adminLogin(account);
        console.log(data);
        common_vendor.index.setStorageSync("token", data.token);
        common_vendor.index.switchTab({
          url: "/pages/index/index"
        });
      } catch (e) {
        common_vendor.index.showToast({
          showCancel: false,
          icon: "error",
          title: `登录失败！
${e}`
        });
        console.log(e);
      }
    };
    return {
      account,
      login
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $setup.account.username,
    b: common_vendor.o(($event) => $setup.account.username = $event.detail.value),
    c: $setup.account.password,
    d: common_vendor.o(($event) => $setup.account.password = $event.detail.value),
    e: common_vendor.o((...args) => $setup.login && $setup.login(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/FrontEnd/BiliBili-Study/Lingo3D/lingo3D-chatroom-console-mp/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
