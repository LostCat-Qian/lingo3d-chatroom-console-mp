<template>
	<view class="container">
		<view class="title">更新用户信息</view>
		<view class="inner">
			<view>
				<text>创建时间</text>
				<text>{{ user.createDate.toString().slice(0, 19).split('T')[0] }} {{ user.createDate.toString().slice(0, 19).split('T')[1] }}</text>
			</view>
			<view>
				<text>昵称</text>
				<input type="text" v-model="user.nickname" />
			</view>
			<view>
				<text>账号</text>
				<text>{{ user.username }}</text>
			</view>
			<view>
				<text>密码</text>
				<input type="text" v-model="user.password" />
			</view>
			<view>
				<button @click="updateInfo">更新</button>
			</view>
		</view>
	</view>
</template>

<script>
	import { onLoad } from '@dcloudio/uni-app'
	import { reactive } from 'vue'
	import { updateUserInfo } from '@/api/index.js'

	export default {
		setup() {
			const user = reactive({
				_id: '',
				createDate: '',
				nickname: '',
				username: '',
				password: ''
			})

			const updateInfo = async () => {
				uni.showLoading({
					mask: true,
					title: '加载中...'
				})

				try {
					const data = await updateUserInfo(user)
					console.log(data)
					uni.showToast({
						title: '用户信息更新成功！'
					})
					uni.hideLoading()
					uni.navigateBack({
						delta: 1
					})
				} catch (e) {
					uni.hideLoading()
					uni.showModal({
						showCancel: false,
						title: '提示',
						content: '用户信息更新失败！'
					})
				}
			}

			onLoad(options => {
				const info = JSON.parse(options.user)
				user._id = info._id
				user.createDate = info.createDate
				user.nickname = info.nickname
				user.username = info.username
				user.password = info.password
			})

			return {
				user,
				updateInfo
			}
		}
	}
</script>

<style lang="scss">
	input {
		border: 1px solid #1296db;
		padding: 12rpx 20rpx;
		border-radius: 10px;
	}

	.container {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;

		.title {
			margin: 100rpx 0;
		}

		.inner {
			width: 80%;
			height: 50%;
			font-size: 34rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			view {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			button {
				width: 100%;
				background-color: #1296db;
				color: #fff;
			}
		}
	}
</style>
