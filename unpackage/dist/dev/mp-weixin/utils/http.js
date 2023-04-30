"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "http://192.168.18.127:3000";
const token = common_vendor.index.getStorageSync("token");
const HEADER = {
  "content-type": "application/json",
  "authorization": token
};
function http({ url, data, method, header }) {
  let headerObj = HEADER;
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BASE_URL + url,
      data,
      method,
      header: headerObj,
      sslVerify: true,
      success: ({ data: data2 }) => {
        if (data2.status == 200) {
          resolve(data2.data);
        } else {
          common_vendor.index.showToast({
            title: data2.message || "出错了!",
            icon: "error",
            mask: true,
            duration: 2e3
          });
          reject(data2.message);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  }).catch((err) => {
    console.log(err);
  });
}
exports.http = http;
