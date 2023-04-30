"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
require("../../utils/http.js");
const _sfc_main = {
  setup() {
    const usersInfo = common_vendor.ref([]);
    const loading = common_vendor.ref(false);
    const getUsersInfo = async () => {
      loading.value = true;
      const data = await api_index.fetchUsersInfo();
      usersInfo.value = data;
      loading.value = false;
    };
    const updateUserInfo = (user) => {
      common_vendor.index.navigateTo({
        url: "/pages/updateUserInfo/updateUserInfo?user=" + JSON.stringify(user)
      });
    };
    const deleteUser = (id) => {
      common_vendor.index.showModal({
        title: "危险操作",
        content: "你确定要注销这位用户的账号信息吗？",
        async success(res) {
          common_vendor.index.showLoading({
            mask: true,
            title: "加载中..."
          });
          if (res.confirm) {
            try {
              const data = await api_index.delUser(id);
              console.log(data);
              common_vendor.index.showToast({
                title: "删除成功"
              });
              getUsersInfo();
              common_vendor.index.hideLoading();
            } catch (e) {
              common_vendor.index.showToast({
                title: "删除失败"
              });
              common_vendor.index.hideLoading();
            }
          }
          if (!res.confirm) {
            common_vendor.index.hideLoading();
          }
        }
      });
    };
    common_vendor.onMounted(() => {
      getUsersInfo();
    });
    common_vendor.onShow(() => {
      getUsersInfo();
    });
    return {
      usersInfo,
      loading,
      updateUserInfo,
      deleteUser
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
      align: "center"
    }),
    d: common_vendor.p({
      width: "204",
      align: "center"
    }),
    e: common_vendor.f($setup.usersInfo, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.nickname),
        b: "030258de-7-" + i0 + "," + ("030258de-6-" + i0),
        c: common_vendor.t(item.username),
        d: "030258de-8-" + i0 + "," + ("030258de-6-" + i0),
        e: common_vendor.t(item.password),
        f: "030258de-9-" + i0 + "," + ("030258de-6-" + i0),
        g: common_vendor.o(($event) => $setup.updateUserInfo(item), item._id),
        h: common_vendor.o(($event) => $setup.deleteUser(item._id), item._id),
        i: "030258de-10-" + i0 + "," + ("030258de-6-" + i0),
        j: item._id,
        k: "030258de-6-" + i0 + ",030258de-0"
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
    i: common_vendor.sr("table", "030258de-0"),
    j: common_vendor.p({
      loading: $setup.loading,
      border: true,
      stripe: true,
      emptyText: "暂无更多数据"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/FrontEnd/BiliBili-Study/Lingo3D/lingo3D-chatroom-console-mp/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
