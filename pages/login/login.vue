<template>
	<view class="container">
		<view class="bg"></view>

		<view class="title">登录</view>

		<view class="inner">
			<view class="login-container">
				<view class="input-group">
					<view class="label">账号</view>
					<input class="uni-input" type="text" v-model="account.username" placeholder="请输入账号" />
					<view class="divice"></view>
					<view class="label">密码</view>
					<input class="uni-input" type="password" v-model="account.password" placeholder="请输入密码" />
				</view>
				<button @click="login">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	import { reactive } from 'vue'
	import { adminLogin } from '@/api/index.js'

	export default {
		setup() {
			const account = reactive({
				username: '',
				password: ''
			})

			const login = async () => {
				if (account.username === '' || account.password === '') {
					uni.showToast({
						title: '数据不能为空！',
						icon: 'error'
					})
					return
				}

				try {
					const data = await adminLogin(account)
					console.log(data)
					uni.setStorageSync('token', data.token)

					uni.switchTab({
						url: '/pages/index/index'
					})
				} catch (e) {
					uni.showToast({
						showCancel: false,
						icon: 'error',
						title: `登录失败！\n${e}`
					})
					console.log(e)
				}
			}

			return {
				account,
				login
			}
		}
	}
</script>

<style lang="scss">
	input {
		border: 1rpx solid #000;
		padding: 18rpx 22rpx;
		border-radius: 20rpx;
	}

	.container {
		width: 100%;

		.bg {
			width: 100%;
			height: 50vh;
			position: fixed;
			top: 0;
			z-index: -999;
			border-radius: 0 0 80rpx 80rpx;
			background-color: #1296db;
		}

		.title {
			margin-top: 28%;
			text-align: center;
			font-size: 50rpx;
			color: #fff;
		}

		.inner {
			width: 100%;
			height: 50vh;
			display: flex;
			justify-content: center;
			align-items: center;

			.login-container {
				width: 650rpx;
				height: 550rpx;
				border-radius: 50rpx;
				background-color: #fff;
				opacity: 0.9;
				box-shadow: 1rpx 4rpx 10rpx 5rpx #efefef;
				box-sizing: border-box;
				padding: 60rpx;

				.input-group {
					.label {
						margin: 16rpx 0;
					}

					.divice {
						margin: 30rpx 0;
					}
				}

				button {
					margin-top: 30rpx;
					background-color: #1296db;
					color: #fff;
				}
			}
		}
	}
</style>