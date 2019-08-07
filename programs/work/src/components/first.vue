<template>
	<div class="contain">
		<div class="message">
			<div class="top">
				<div class="warn">
					<van-icon name="bell" size="26px" @click="goMessage" />
					<div class="icon" v-if="news"></div>
				</div>
				<span>通行证管理系统</span>
			</div>
			<div class="title">
				<p>真正实现“数据多跑路，百姓少跑路”的智能化进程</p>
				<div class="tit_img" @click="goCenter">
					<img :src="image !== '' ? image : '../../static/img/touxiang.jpg'" alt="">
				</div>
			</div>
		</div>
		<div class="banner">
			<carousel-3d width="280" height="360" :clickable="false" @after-slide-change="change">
				<slide :index="0" :class="{active:active == 0}">
					<div class="choice">
						<h1>通行证直通车</h1>
						<div class="content">
							<h3>通行证办理更便捷</h3>
							<p>真正实现“数据多跑路，百姓少跑路”的智能化进程</p>
							<button type="button" @click.stop="goType">去申请</button>
						</div>
					</div>
				</slide>
				<slide :index="1" :class="{active:active == 1}">
					<div class="choice">
						<h1>通行证管理</h1>
						<div class="content">
							<h3>实时查看通行证办理进度</h3>
							<p>轻松拿证，跑遍天下</p>
							<button type="button" @click.stop="goLook">去查看</button>
						</div>
					</div>
				</slide>
			</carousel-3d>
		</div>
	</div>
</template>

<script>
	import {Icon} from 'vant'
	import {Carousel,CarouselItem} from 'element-ui'
	import {
		Carousel3d,
		Slide
	} from 'vue-carousel-3d'

	export default {
		data() {
			return {
				image: '',
				id: '',
				news: false,
				active: 0
			}
		},
		components: {
			Carousel3d,
			Slide
		},
		mounted() {
			let param = JSON.parse(localStorage.getItem('member'))
			this.image = param.headImage
			this.news = param.haveNewInfo
		},
		methods: {
			goMessage() {
				this.$router.push('/message')
			},
			goType() {
				// this.$router.push('/type')
				this.$router.push('/read')
			},
			goLook() {
				this.$router.push('/management')
			},
			goCenter() {
				this.$router.push('/center')
			},
			change(item) {
				this.active = item
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
		height: 72px;
		display: flex;
		text-align: center;
		font-size: 18px;
		color: #fff;
		align-items: center;
		justify-content: center;
		position: relative;
		padding-top: 24px;
		box-sizing: border-box;
	}

	[data-dpr="2"] .top {
		font-size: 36px;
	}

	[data-dpr="3"] .top {
		font-size: 54px;
	}

	.warn {
		position: absolute;
		left: 0.3rem;
		top: 33px;
	}

	.icon {
		width: 6px;
		height: 6px;
		background: red;
		border-radius: 50%;
		position: absolute;
		top: 4px;
		right: 2px;
	}

	.title {
		width: 86%;
		margin: 1rem auto 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 15px;
		color: #fff;
		line-height: 26px;
	}

	.title>p {
		width: 75%;
	}

	.tit_img {
		width: 2.13rem;
		height: 2.13rem;
		border-radius: 50%;
		border: 3px solid #fff;
		overflow: hidden;
	}

	.tit_img img {
		width: 2.13rem;
		height: 2.13rem;
	}
	
	.banner {
		width: 100%;
		position: absolute;
		height: 60%;
		top: 5.5rem;
		left: 0;
	}
	
	.carousel-3d-slide {
		background-color: #f6f6f6;
		border-radius: 16px;
		overflow: hidden;
		border: none;
	}
	
	.active {
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
	
	.content {
		width: 100%;
		padding: 0.8rem 0.5rem;
		box-sizing: border-box;
	}
	
	.content h3 {
		font-size: 16px;
		color: #333;
	}
	
	.content p {
		font-size: 14px;
		color: #999;
		margin-top: 0.5rem;
		line-height: 22px;
	}
	
	.content button {
		width: 100%;
		height: 1.2rem;
		border-radius: 30px;
		background: #18ACF6;
		font-size: 16px;
		color: #fff;
		margin-top: 1.2rem;
	}
	
</style>
