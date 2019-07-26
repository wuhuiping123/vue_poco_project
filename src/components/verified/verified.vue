<template>
	<main>
		<header>
			<mt-header fixed title="认证中心">
				<i class="iconfont" slot="left" @click="showSide()">&#xe61d;</i>
			</mt-header>
			<!--侧滑菜单栏-->
			<v-sidebar :show="show" @hide="get"></v-sidebar>
		</header>
		
		<div class="verified-banner">
			<img src="../../assets/img/verified-banner.jpg" />
		</div>
		
		<ul class="verified-nav-list">
			<li class="verified-nav-item">
				<div class="nav-item-info">
					<div class="item-profile">
						<i class=""></i>
					</div>
					
					<div class="item-info">
						<p>摄影红人认证</p>
						<span>各类实力派个人摄影师认证</span>
					</div>
				</div>
				
				<div class="nav-item-link">
					<router-link to="/login">去认证</router-link>
				</div>
			</li>
			
			<li class="verified-nav-item">
				<div class="nav-item-info">
					<div class="item-profile">
						<i></i>
					</div>
					
					<div class="item-info">
						<p>摄影红人认证</p>
						<span>各类实力派个人摄影师认证</span>
					</div>
				</div>
				
				<div class="nav-item-link">
					<router-link to="/login">去认证</router-link>
				</div>
			</li>
			
			<li class="verified-nav-item">
				<div class="nav-item-info">
					<div class="item-profile">
						<i></i>
					</div>
					
					<div class="item-info">
						<p>摄影红人认证</p>
						<span>各类实力派个人摄影师认证</span>
					</div>
				</div>
				
				<div class="nav-item-link">
					<router-link to="/login">去认证</router-link>
				</div>
			</li>
			
			
			
		</ul>
	
		<div class="verified-benifit">
			<div class="benifit-container">
				<div class="benifit-title">认证优势</div>
				
				<div class="benifit-list">
					<div class="benifit-item">
						<div class="benifit-img"></div>
						<p class="benifit-mean">认证标识</p>
					</div>
					<div class="benifit-item">
						<div class="benifit-img"></div>
						<p class="benifit-mean">认证标识</p>
					</div>
					<div class="benifit-item">
						<div class="benifit-img"></div>
						<p class="benifit-mean">认证标识</p>
					</div>
					<div class="benifit-item">
						<div class="benifit-img"></div>
						<p class="benifit-mean">认证标识</p>
					</div>
				</div>
			</div>
		</div>
		
		<div class="verified-recommend">
			<div class="verified-recommend-container">
				<div class="vr-narbar">
					<div class="vr-list">
						<router-link to="/verifiedUser" :class="{cur:act=='1'}">
							<span @click="active(1)">认证红人</span>
						</router-link>
						<router-link to="/verifiedOrganization" :class="{cur:act=='2'}">
							<span @click="active(2)">认证机构</span>
						</router-link>
						<router-link to="/verifiedBrand" :class="{cur:act=='3'}">
							<span @click="active(3)">认证品牌</span>
						</router-link>
					</div>
					
					<div class="vr-wrap">
						<router-view></router-view>
					</div>
				</div>
			</div>
		</div>
		
	</main>
</template>

<script>
	import sidebar from '../index/sidebar.vue'
	
	export default{
		data(){
			return{
				show:false,
				act:'1'
			}
		},
		components:{
			'v-sidebar':sidebar
		},
		methods:{
			//显示侧滑菜单
			showSide(){
				this.show=!this.show
			},
			//接收Sidebar组件的返回值，隐藏侧边菜单
			get(hide){
				this.show=hide
			},
			
			active(a){
				this.act=a;
				
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/css/verified.css");
</style>