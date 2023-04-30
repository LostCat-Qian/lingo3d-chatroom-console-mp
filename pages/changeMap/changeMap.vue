<template>
	<view>
		<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
			<uni-tr>
				<uni-th width="150" align="center">地图名称</uni-th>
				<uni-th width="150" align="center">地图路径</uni-th>
				<uni-th width="90" align="center">操作</uni-th>
			</uni-tr>
			<uni-tr v-for="item in mapsInfo" :key="item._id">
				<uni-td align="center">{{ item.name }}</uni-td>
				<uni-td align="center">{{ item.src }}</uni-td>
				<uni-td align="center">
					<button v-if="item.isCurrentMap" class="uni-button" size="mini" type="primary" :disabled="true">已激活</button>
					<button v-else class="uni-button" size="mini" type="primary" @click="switchMap(item)">激活</button>
				</uni-td>
			</uni-tr>
		</uni-table>
	</view>
</template>

<script>
	import { onMounted, ref } from "vue"
	import { queryAllMaps, switchMapById } from '@/api/index.js'
	import { onShow } from '@dcloudio/uni-app'

	export default {
		setup() {
			const mapsInfo = ref([])
			const loading = ref(false)

			const switchMap = async (item) => {
				await switchMapById(item._id)
				getAllMapsInfo()
				uni.showModal({
					showCancel: false,
					title: '提示',
					content: `地图-${item.name}-已激活，提醒用户重新登录！`
				})
			}

			const getAllMapsInfo = async () => {
				uni.showLoading({
					mask: true
				})
				loading.value = true
				const data = await queryAllMaps()
				mapsInfo.value = data
				uni.hideLoading()
				loading.value = false
			}

			onMounted(() => {
				getAllMapsInfo()
			})

			onShow(() => {
				getAllMapsInfo()
			})

			return {
				switchMap,
				mapsInfo,
				loading
			}
		}
	}
</script>

<style lang="scss">

</style>