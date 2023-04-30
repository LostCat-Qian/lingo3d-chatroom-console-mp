// const BASE_URL = 'http://127.0.0.1:3000'; // 测试地址
const BASE_URL = 'http://192.168.18.127:3000' // 冉千局域网地址

const token = uni.getStorageSync('token')

const HEADER = {
	'content-type': "application/json",
	'authorization': token
};


export default function http({ url, data, method, header }) {
	let headerObj = HEADER;
	// 在登录页面保存token，在这里添加token到请求头中。 
	/* const token = uni.getStorageSync('userToken');
	if (token) {
	    headerObj = {
	        'Authorization': token,
	        ...HEADER
	    }
	} */
	return new Promise((resolve, reject) => {
		//uni.app 发起网络请求
		uni.request({
			url: BASE_URL + url,
			data,
			method,
			header: headerObj,
			sslVerify: true,
			success: ({ data }) => {
				if (data.status == 200) {
					//请求成功
					resolve(data.data)
				} else {
					//请求失败 提示用户
					uni.showToast({
						title: data.message || '出错了!',
						icon: "error",
						mask: true,
						duration: 2000
					});
					//进行失败回调
					reject(data.message);
				}
			},
			fail: (err) => {
				//请求错误 直接进行错误回调
				reject(err);
			}
		})
	}).catch(err => {
		console.log(err)
	})
}