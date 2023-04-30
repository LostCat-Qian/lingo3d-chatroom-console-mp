import http from '@/utils/http.js'

// 获取所有用户信息
const fetchUsersInfo = () => {
	return http({
		url: '/user/getUsersInfo',
		method: 'get'
	})
}

// 更新用户信息
const updateUserInfo = (params) => {
	return http({
		url: '/user/updateUserInfo',
		method: 'post',
		data: {
			...params
		}
	})
}

// 注销用户
const delUser = (id) => {
	return http({
		url: '/user/delUser',
		method: 'get',
		data: {
			id: id
		}
	})
}

// 后台管理员登录接口
const adminLogin = (params) => {
	return http({
		url: '/user/adminLogin',
		method: 'post',
		data: {
			...params
		}
	})
}

// 获取所有公告消息
const getAnnouncements = () => {
	return http({
		url: '/announcement/getAnnouncements',
		method: 'get'
	})
}

// 推送公告消息
const addNewAnnouncement = (params) => {
	return http({
		url: '/announcement/addNewAnnouncement',
		method: 'post',
		data: {
			...params
		}
	})
}

// 删除公告
const delAnnouncement = (id) => {
	return http({
		url: '/announcement/delAnnouncement',
		method: 'get',
		data: {
			id: id
		}
	})
}

// 获取所有地图信息
const queryAllMaps = () => {
	return http({
		url: '/map/queryAllMaps',
		method: 'get'
	})
}

// 根据id切换地图
const switchMapById = (id) => {
	return http({
		url: '/map/switchMapById',
		method: 'get',
		data: {
			id
		}
	})
}

export {
	fetchUsersInfo,
	updateUserInfo,
	delUser,
	getAnnouncements,
	addNewAnnouncement,
	delAnnouncement,
	queryAllMaps,
	switchMapById,
	adminLogin
}