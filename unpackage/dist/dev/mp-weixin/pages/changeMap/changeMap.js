"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
require("../../utils/http.js");
const _sfc_main = {
  setup() {
    const mapsInfo = common_vendor.ref([]);
    const loading = common_vendor.ref(false);
    const switchMap = async (item) => {
      await api_index.switchMapById(item._id);
      getAllMapsInfo();
      common_vendor.index.showModal({
        showCancel: false,
        title: "提示",
        content: `地图-${item.name}-已激活，提醒用户重新登录！`
      });
    };
    const getAllMapsInfo = async () => {
      common_vendor.index.showLoading({
        mask: true
      });
      loading.value = true;
      const data = await api_index.queryAllMaps();
      mapsInfo.value = data;
      common_vendor.index.hideLoading();
      loading.value = false;
    };
    common_vendor.onMounted(() => {
      getAllMapsInfo();
    });
    common_vendor.onShow(() => {
      getAllMapsInfo();
    });
    return {
      switchMap,
      mapsInfo,
      loading
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
      width: "150",
      align: "center"
    }),
    b: common_vendor.p({
      width: "150",
      align: "center"
    }),
    c: common_vendor.p({
      width: "90",
      align: "center"
    }),
    d: common_vendor.f($setup.mapsInfo, (item, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.name),
        b: "38732105-6-" + i0 + "," + ("38732105-5-" + i0),
        c: common_vendor.t(item.src),
        d: "38732105-7-" + i0 + "," + ("38732105-5-" + i0),
        e: item.isCurrentMap
      }, item.isCurrentMap ? {} : {
        f: common_vendor.o(($event) => $setup.switchMap(item), item._id)
      }, {
        g: "38732105-8-" + i0 + "," + ("38732105-5-" + i0),
        h: item._id,
        i: "38732105-5-" + i0 + ",38732105-0"
      });
    }),
    e: common_vendor.p({
      align: "center"
    }),
    f: common_vendor.p({
      align: "center"
    }),
    g: common_vendor.p({
      align: "center"
    }),
    h: common_vendor.sr("table", "38732105-0"),
    i: common_vendor.p({
      loading: $setup.loading,
      border: true,
      stripe: true,
      emptyText: "暂无更多数据"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/FrontEnd/BiliBili-Study/Lingo3D/lingo3D-chatroom-console-mp/pages/changeMap/changeMap.vue"]]);
wx.createPage(MiniProgramPage);
