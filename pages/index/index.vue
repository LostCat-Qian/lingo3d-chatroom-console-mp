<template>
	<view class="container">
		<template>
			<view>
				<view class="uni-container">
					<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
						<uni-tr>
							<uni-th width="150" align="center">昵称</uni-th>
							<uni-th width="150" align="center">账号</uni-th>
							<uni-th align="center">密码</uni-th>
							<uni-th width="204" align="center">设置</uni-th>
						</uni-tr>
						<uni-tr v-for="item in usersInfo" :key="item._id">
							<uni-td align="center">{{ item.nickname }}</uni-td>
							<uni-td align="center">
								<view class="name">{{ item.username }}</view>
							</uni-td>
							<uni-td align="center">{{ item.password }}</uni-td>
							<uni-td>
								<view class="uni-group">
									<button class="uni-button" size="mini" type="primary" @click="updateUserInfo(item)">修改</button>
									<button class="uni-button" size="mini" type="warn" @click="deleteUser(item._id)">删除</button>
								</view>
							</uni-td>
						</uni-tr>
					</uni-table>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	import { fetchUsersInfo, delUser } from '@/api/index.js'
	import { getCurrentInstance, onMounted, ref } from 'vue'
	import { onShow } from '@dcloudio/uni-app'

	export default {
		setup() {
			const usersInfo = ref([])
			const loading = ref(false)

			const getUsersInfo = async () => {
				loading.value = true
				const data = await fetchUsersInfo()
				usersInfo.value = data
				loading.value = false
			}

			const updateUserInfo = user => {
				uni.navigateTo({
					url: '/pages/updateUserInfo/updateUserInfo?user=' + JSON.stringify(user)
				})
			}

			const deleteUser = id => {
				uni.showModal({
					title: '危险操作',
					content: '你确定要注销这位用户的账号信息吗？',
					async success(res) {
						uni.showLoading({
							mask: true,
							title: '加载中...'
						})
						if (res.confirm) {
							try {
								const data = await delUser(id)
								console.log(data);
								uni.showToast({
									title: '删除成功'
								})
								getUsersInfo()
								uni.hideLoading()
							} catch (e) {
								uni.showToast({
									title: '删除失败'
								})
								uni.hideLoading()
							}
						}
						if (!res.confirm) {
							uni.hideLoading()
						}
					}
				})
			}

			onMounted(() => {
				getUsersInfo()
			})

			onShow(() => {
				getUsersInfo()
			})

			return {
				usersInfo,
				loading,
				updateUserInfo,
				deleteUser
			}
		}
	}
</script>

<style lang="scss">
	.uni-group {
		display: flex;
		align-items: center;
	}
</style>
