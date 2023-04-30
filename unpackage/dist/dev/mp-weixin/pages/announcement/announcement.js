"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
require("../../utils/http.js");
const _sfc_main = {
  setup() {
    const loading = common_vendor.ref(false);
    const announcements = common_vendor.ref([]);
    const fetchAnnouncements = async () => {
      const data = await api_index.getAnnouncements();
      announcements.value = data;
    };
    const deleteAnnouncement = async (id) => {
      try {
        await api_index.delAnnouncement(id);
        common_vendor.index.showModal({
          showCancel: false,
          title: "提示",
          content: `删除成功！`
        });
      } catch (e) {
        common_vendor.index.showModal({
          showCancel: false,
          title: "提示",
          content: `删除失败！`
        });
      }
    };
    common_vendor.onMounted(() => {
      fetchAnnouncements();
    });
    common_vendor.onShow(() => {
      fetchAnnouncements();
    });
    return {
      loading,
      announcements,
      deleteAnnouncement
    };
  }
};
if (!Array) {
  const _easycom_uni_th2 = common_vendor.resolveComponent("uni-th");
  const _easycom_uni_tr2 = common_vendor.resolveComponent("uni-tr");
  const _easycom_uni_td2 = common_vendor.resolveComponent("uni-td");
  const _easycom_uni_table2 = common_vendor.resolveComponent("uni-table");
  (_easycom_uni_th2 + _easycom_uni_tr2 + _easycom_uni_td2 + _easycom_uni_table2)();
}
const _easycom_uni_th = () => "../../uni_modules/uni-table/components/uni-th/uni-th.js";
const _easycom_uni_tr = () => "../../uni_modules/uni-table/components/uni-tr/uni-tr.js";
const _easycom_uni_td = () => "../../uni_modules/uni-table/components/uni-td/uni-td.js";
const _easycom_uni_table = () => "../../uni_modules/uni-table/components/uni-table/uni-table.js";
if (!Math) {
  (_easycom_uni_th + _easycom_uni_tr + _easycom_uni_td + _easycom_uni_table)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      width: "100",
      align: "center"
    }),
    b: common_vendor.p({
      width: "120",
      align: "center"
    }),
    c: common_vendor.p({
      width: "150",
      align: "center"
    }),
    d: common_vendor.p({
      width: "100",
      align: "center"
    }),
    e: common_vendor.f($setup.announcements, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.date.toString().slice(0, 10)),
        b: "acb9396a-7-" + i0 + "," + ("acb9396a-6-" + i0),
        c: common_vendor.t(item.title),
        d: "acb9396a-8-" + i0 + "," + ("acb9396a-6-" + i0),
        e: common_vendor.t(item.content),
        f: "acb9396a-9-" + i0 + "," + ("acb9396a-6-" + i0),
        g: common_vendor.o(($event) => $setup.deleteAnnouncement(item._id), item._id),
        h: "acb9396a-10-" + i0 + "," + ("acb9396a-6-" + i0),
        i: item._id,
        j: "acb9396a-6-" + i0 + ",acb9396a-0"
      };
    }),
    f: common_vendor.p({
      align: "center"
    }),
    g: common_vendor.p({
      align: "center"
    }),
    h: common_vendor.p({
      align: "center"
    }),
    i: common_vendor.sr("table", "acb9396a-0"),
    j: common_vendor.p({
      loading: $setup.loading,
      border: true,
      stripe: true,
      emptyText: "暂无更多数据"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/FrontEnd/BiliBili-Study/Lingo3D/lingo3D-chatroom-console-mp/pages/announcement/announcement.vue"]]);
wx.createPage(MiniProgramPage);
