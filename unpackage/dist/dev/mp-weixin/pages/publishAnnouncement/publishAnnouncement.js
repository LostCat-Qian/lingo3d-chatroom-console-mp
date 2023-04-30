"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
require("../../utils/http.js");
const _sfc_main = {
  setup() {
    const title = common_vendor.ref("");
    const content = common_vendor.ref("");
    const pushAnnouncement = async () => {
      common_vendor.index.showLoading({
        mask: true,
        title: "正在加载中..."
      });
      if (title.value === "" || content.value === "") {
        common_vendor.index.hideLoading();
        return common_vendor.index.showModal({
          showCancel: false,
          title: "提示",
          content: "推送内容不能为空！"
        });
      }
      let data;
      try {
        data = await api_index.addNewAnnouncement({
          date: new Date().getTime(),
          title: title.value,
          content: content.value
        });
        common_vendor.index.showModal({
          showCancel: false,
          title: "提示",
          content: `消息推送成功！`
        });
      } catch (e) {
        common_vendor.index.showModal({
          showCancel: false,
          title: "提示",
          content: `推送失败！${e.message}`
        });
      }
      title.value = "";
      content.value = "";
      common_vendor.index.hideLoading();
    };
    return {
      title,
      content,
      pushAnnouncement
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $setup.title,
    b: common_vendor.o(common_vendor.m(($event) => $setup.title = $event.detail.value, {
      trim: true
    })),
    c: $setup.content,
    d: common_vendor.o(common_vendor.m(($event) => $setup.content = $event.detail.value, {
      trim: true
    })),
    e: common_vendor.o((...args) => $setup.pushAnnouncement && $setup.pushAnnouncement(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/FrontEnd/BiliBili-Study/Lingo3D/lingo3D-chatroom-console-mp/pages/publishAnnouncement/publishAnnouncement.vue"]]);
wx.createPage(MiniProgramPage);
