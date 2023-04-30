"use strict";
const utils_http = require("../utils/http.js");
const fetchUsersInfo = () => {
  return utils_http.http({
    url: "/user/getUsersInfo",
    method: "get"
  });
};
const updateUserInfo = (params) => {
  return utils_http.http({
    url: "/user/updateUserInfo",
    method: "post",
    data: {
      ...params
    }
  });
};
const delUser = (id) => {
  return utils_http.http({
    url: "/user/delUser",
    method: "get",
    data: {
      id
    }
  });
};
const adminLogin = (params) => {
  return utils_http.http({
    url: "/user/adminLogin",
    method: "post",
    data: {
      ...params
    }
  });
};
const getAnnouncements = () => {
  return utils_http.http({
    url: "/announcement/getAnnouncements",
    method: "get"
  });
};
const addNewAnnouncement = (params) => {
  return utils_http.http({
    url: "/announcement/addNewAnnouncement",
    method: "post",
    data: {
      ...params
    }
  });
};
const delAnnouncement = (id) => {
  return utils_http.http({
    url: "/announcement/delAnnouncement",
    method: "get",
    data: {
      id
    }
  });
};
const queryAllMaps = () => {
  return utils_http.http({
    url: "/map/queryAllMaps",
    method: "get"
  });
};
const switchMapById = (id) => {
  return utils_http.http({
    url: "/map/switchMapById",
    method: "get",
    data: {
      id
    }
  });
};
exports.addNewAnnouncement = addNewAnnouncement;
exports.adminLogin = adminLogin;
exports.delAnnouncement = delAnnouncement;
exports.delUser = delUser;
exports.fetchUsersInfo = fetchUsersInfo;
exports.getAnnouncements = getAnnouncements;
exports.queryAllMaps = queryAllMaps;
exports.switchMapById = switchMapById;
exports.updateUserInfo = updateUserInfo;
