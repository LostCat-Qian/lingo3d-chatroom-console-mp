<template>
	<view class="container">
		<view class="title">推送最新公告</view>

		<view class="tip">请输入公告标题：</view>
		<input id="title-input" type="text" v-model.trim="title" />

		<view class="tip">请输入推送公告内容：</view>
		<textarea id="content-input" v-model.trim="content" name="" cols="30" rows="10"></textarea>
		<button @click="pushAnnouncement">推送</button>
	</view>
</template>

<script>
	import { ref } from 'vue'
	import { addNewAnnouncement } from '@/api/index.js'

	export default {
		setup() {
			const title = ref('')
			const content = ref('')

			const pushAnnouncement = async () => {
				uni.showLoading({
					mask: true,
					title: '正在加载中...'
				})

				if (title.value === '' || content.value === '') {
					uni.hideLoading()
					return uni.showModal({
						showCancel: false,
						title: '提示',
						content: '推送内容不能为空！'
					})
				}

				let data
				try {
					data = await addNewAnnouncement({
						date: new Date().getTime(),
						title: title.value,
						content: content.value
					})
					uni.showModal({
						showCancel: false,
						title: '提示',
						content: `消息推送成功！`
					})
				} catch (e) {
					uni.showModal({
						showCancel: false,
						title: '提示',
						content: `推送失败！${e.message}`
					})
				}
				
				title.value = ''
				content.value = ''
				
				uni.hideLoading()
			}

			return {
				title,
				content,
				pushAnnouncement
			}
		}
	}
</script>

<style lang="scss">
	.container {
		width: 100vw;
		min-height: 80vh;
		padding: 0 10%;
		box-sizing: border-box;

		.title {
			padding: 50rpx;
			font-size: 38rpx;
			color: #1296db;
			text-align: center;
		}

		#title-input {
			width: 95%;
			border: 1px solid #1296db;
			padding: 10rpx 20rpx;
			border-radius: 10px;
		}

		.tip {
			margin-top: 40rpx;
			margin-bottom: 10rpx;
		}

		#content-input {
			width: 95%;
			border: 1px solid #1296db;
			padding: 20rpx;
			border-radius: 10px;
		}

		button {
			margin-top: 90rpx;
			background-color: #1296db;
			color: #fff;
		}
	}
</style>
