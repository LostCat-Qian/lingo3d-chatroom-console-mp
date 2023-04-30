<template>
	<view>
		<template>
			<view>
				<view class="uni-container">
					<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
						<uni-tr>
							<uni-th width="100" align="center">发布日期</uni-th>
							<uni-th width="120" align="center">公告标题</uni-th>
							<uni-th width="150" align="center">公告内容</uni-th>
							<uni-th width="100" align="center">设置</uni-th>
						</uni-tr>
						<uni-tr v-for="item in announcements" :key="item._id">
							<uni-td align="center">{{ item.date.toString().slice(0, 10) }}</uni-td>
							<uni-td align="center">{{ item.title }}</uni-td>
							<uni-td align="center">
								<view class="name">{{ item.content }}</view>
							</uni-td>
							<uni-td>
								<view class="uni-group">
									<button class="uni-button" size="mini" type="warn" @click="deleteAnnouncement(item._id)">删除</button>
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
	import { onMounted, ref } from 'vue'
	import { getAnnouncements, delAnnouncement } from '@/api/index.js'
	import { onShow } from '@dcloudio/uni-app'

	export default {
		setup() {
			const loading = ref(false)
			const announcements = ref([])

			const fetchAnnouncements = async () => {
				const data = await getAnnouncements()
				announcements.value = data
			}

			const deleteAnnouncement = async id => {
				try {
					await delAnnouncement(id)
					uni.showModal({
						showCancel: false,
						title: '提示',
						content: `删除成功！`
					})
				} catch (e) {
					uni.showModal({
						showCancel: false,
						title: '提示',
						content: `删除失败！`
					})
				}
			}

			onMounted(() => {
				fetchAnnouncements()
			})
			
			onShow(() => {
				fetchAnnouncements()
			})

			return {
				loading,
				announcements,
				deleteAnnouncement
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
