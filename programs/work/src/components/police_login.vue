<template>
	<div class="contain">
		<div class="message">
			<div class="top">
				<span>交警执法</span>
				<span @click="back">退出登录</span>
			</div>
			<div class="title">
				<span>姓名：{{user}}</span>
				<span>隶属部门：{{section}}</span>
				<span>工号：{{num}}</span>
			</div>
		</div>
		<div class="banner">
			<el-carousel type="card" height="10rem" arrow="never" indicator-position="none" :autoplay="false">
				<el-carousel-item>
					<div class="choice">
						<h1>现场执法</h1>
						<div class="formList">
							<div class="list_search">
								<img src="../../static/img/search.png" alt="">
								<input type="text" placeholder="请输入车牌号" v-model="card">
							</div>
							<div class="list_item" @click="goSearch">搜索</div>
							<div class="list_item" @click="goList">加入黑名单</div>
						</div>
					</div>
				</el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>

<script>
	import {
		Icon,
		Toast,
		Dialog
	} from 'vant'
	import {
		Carousel,
		CarouselItem
	} from 'element-ui'

	export default {
		data() {
			return {
				all: {},
				card: '',
				user: '',
				section: '',
				num: ''
			}
		},
		components: {
			Carousel,
			CarouselItem,
			Toast,
			Icon
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				let param = JSON.parse(localStorage.getItem('member'))
				console.log(param)
				this.user = param.name
				this.section = param.office.name
				this.num = param.workerNumber
			},
			goList() {
				this.$router.push('/list')
			},
			goSearch() {
				let self = this
				if (this.card == '') {
					Toast('车牌号不能为空')
					return
				}

				var express = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
				if (!express.test(this.card)) {
					Toast('请输入合法的车牌号')
					return
				}

				this.$router.push({
					name: 'search_detail',
					params: {
						platesNumber: self.card
					}
				})
			},
			back() {
				let self = this
				Dialog.confirm({
					title: '退出',
					message: '确认退出登陆吗'
				}).then(() => {
					localStorage.clear()
					self.$router.push('/police')
				}).catch(() => {
					
				});
			}
		}
	}
</script>

<style scoped="scoped">
	.contain {
		width: 100%;
		height: 100%;
		background: #f2f2f2;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
	}

	.message {
		width: 100%;
		height: 7.3rem;
		background: #18ACF6;
	}

	.top {
		width: 100%;
		height: 40px;
		display: flex;
		text-align: center;
		font-size: 16px;
		color: #fff;
		align-items: center;
		justify-content: space-between;
		position: relative;
		padding: 32px 0.4rem 0;
		box-sizing: border-box;
	}

	[data-dpr="2"] .top {
		font-size: 36px;
	}

	[data-dpr="3"] .top {
		font-size: 54px;
	}

	.title {
		width: 7.2rem;
		margin: 1rem auto 0;
		display: flex;
		flex-direction: column;
		font-size: 15px;
		color: #fff;
	}

	.title>span {
		margin-bottom: 0.4rem;
	}

	.banner {
		width: 100%;
		position: absolute;
		height: 60%;
		top: 6rem;
		left: 0;
	}

	.el-carousel__item {
		width: 7.2rem;
		left: -1.1rem;
		border-radius: 16px;
		overflow: hidden;
	}

	.el-carousel__item {
		background-color: #f6f6f6;
	}

	.is-active {
		background: #fff !important;
	}

	.choice {
		width: 100%;
		height: 100%;
	}

	.choice h1 {
		width: 100%;
		height: 1.6rem;
		line-height: 1.6rem;
		text-align: center;
		font-size: 20px;
		color: #333;
		border-bottom: 2px solid #eee;
	}

	.formList {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.list_search {
		width: 80%;
		height: 1.2rem;
		border-radius: 20px;
		border: 1px solid #eee;
		display: flex;
		align-items: center;
		margin-top: 1.2rem;
		margin-bottom: 0.4rem;
		padding: 0 0.4rem;
		box-sizing: border-box;
	}

	.list_search img {
		width: 20px;
		height: 20px;
	}

	.list_search input {
		border: none;
		margin-left: 0.4rem;
		font-size: 15px;
		color: #999;
		width: 70%;
	}

	.list_item {
		width: 80%;
		height: 1.2rem;
		line-height: 1.2rem;
		border-radius: 20px;
		text-align: center;
		background: #17ACE6;
		font-size: 15px;
		color: #fff;
		margin-bottom: 0.4rem;
	}
</style>
