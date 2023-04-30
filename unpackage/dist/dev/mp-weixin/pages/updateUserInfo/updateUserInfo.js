"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
require("../../utils/http.js");
const _sfc_main = {
  setup() {
    const user = common_vendor.reactive({
      _id: "",
      createDate: "",
      nickname: "",
      username: "",
      password: ""
    });
    const updateInfo = async () => {
      common_vendor.index.showLoading({
        mask: true,
        title: "加载中..."
      });
      try {
        const data = await api_index.updateUserInfo(user);
        console.log(data);
        common_vendor.index.showToast({
          title: "用户信息更新成功！"
        });
        common_vendor.index.hideLoading();
        common_vendor.index.navigateBack({
          delta: 1
        });
      } catch (e) {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          showCancel: false,
          title: "提示",
          content: "用户信息更新失败！"
        });
      }
    };
    common_vendor.onLoad((options) => {
      const info = JSON.parse(options.user);
      user._id = info._id;
      user.createDate = info.createDate;
      user.nickname = info.nickname;
      user.username = info.username;
      user.password = info.password;
    });
    return {
      user,
      updateInfo
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($setup.user.createDate.toString().slice(0, 19).split("T")[0]),
    b: common_vendor.t($setup.user.createDate.toString().slice(0, 19).split("T")[1]),
    c: $setup.user.nickname,
    d: common_vendor.o(($event) => $setup.user.nickname = $event.detail.value),
    e: common_vendor.t($setup.user.username),
    f: $setup.user.password,
    g: common_vendor.o(($event) => $setup.user.password = $event.detail.value),
    h: common_vendor.o((...args) => $setup.updateInfo && $setup.updateInfo(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/FrontEnd/BiliBili-Study/Lingo3D/lingo3D-chatroom-console-mp/pages/updateUserInfo/updateUserInfo.vue"]]);
wx.createPage(MiniProgramPage);
