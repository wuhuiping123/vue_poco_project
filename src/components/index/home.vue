<template>
	<main>
		<header>
			
			<mt-header fixed title="POCO摄影">
				<!--点击图标 显示侧滑菜单-->
				<i class="iconfont" slot="left" @click="showSide()">&#xe61d;</i>
			</mt-header>
			
			<!--
				父组件的值传给子组件：
				第一步：占位符 :子组件中的数组="父组件中的数据"
				第二步：在子组件中定义props属性接收传递过来的数据
						props:['接收过来的数据']
			-->
			<v-sidebar :show="show" @hide="get"></v-sidebar>
		</header>
		
		<section class="part_swipe">
			<mt-swipe :auto="4000">
			  <mt-swipe-item>
			  	<router-link to="/verified"></router-link>
			  	<img src="../../assets/img/index-swipe-01.jpg" />
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<router-link to="/works"></router-link>
			  	<img src="../../assets/img/index-swipe-02.jpg" />
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<router-link to=""></router-link>
			  	<img src="../../assets/img/index-swipe-03.jpg" />
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<router-link to=""></router-link>
			  	<img src="../../assets/img/index-swipe-04.jpg" />
			  </mt-swipe-item>
			</mt-swipe>		
		</section>
		
		<section class="part_list">
			<ul class="list clearfix">
				<li>
					<router-link to="/works">
						<div class="work list-icon"></div>
						<div class="list-txt">作品</div>
					</router-link>
				</li>
				<li>
					<router-link to="/picSquare">
						<div class="picture list-icon"></div>
						<div class="list-txt">图片</div>
					</router-link>
				</li>
				<li>
					<router-link to="/skill">
						<div class="skill list-icon"></div>
						<div class="list-txt">技巧</div>
					</router-link>
				</li>
			</ul>
			
		</section>
		
		<section class="part_hotRecommend">
			<p class="title">热门推荐</p>
			<ul class="list">
				<li v-for="(item,index) in hotRecommend">
					<router-link to="/skillDetail">
						<img :src="item.src" />
						<p>{{item.des}}</p>
					</router-link>
				</li>
			</ul>
					
		</section>
		
		<section class="part_hotPhotographer">
			<p class="title">热门摄影师</p>
			<ul class="item-wrap">
				<li class="item" v-for="(item,index) in hotPhotographer">
					<div class="base-personcard">
						<div class="base-personhead">
							<router-link to="/" class="base-personimg">
								<img :src="item.avatar"/>
							</router-link>
							<router-link to="/">
								<div class="p1">
									<span class="cc_user_name cc_icon_1">
										{{item.name}}
									</span>
									<span class="cc_verified">
										<i class="icon_best_pocoer icon_user_favourite"></i>
									</span>
								</div>
								<i class="p2">{{item.sign}} </i>
							</router-link>
						</div>
					</div>
					<ul class="list">
						<li v-for="item in item.photos">
							<router-link to="/">
								<img :src="item.photo"/>
							</router-link>
						</li>
					</ul>
				</li>
			</ul>
		</section>
		
		<section class="part_medalWorks">
			<p class="title">勋章作品</p>
			<ul class="list">
				<li v-for="(item,index) in medalWorks">
					<div class="img-item">
						<div class="img">
							<router-link to="/">
								<img :src="item.works"/>
							</router-link>
						</div>
					</div>
				</li>
				
			</ul>
		</section>
		
		<section class="part_appDown">
			<router-link to="/download">
				<p class="down_app">
					打开"POCO摄影"APP，查看更多作品
				</p>
			</router-link>
		</section>
		
		<section class="part_appLogo">
			<p>- 领先的时尚摄影平台 -</p>
			<img src="../../assets/img/index-appLogo.png"/>
		</section>

		
	</main>
</template>

<script>
	//引入侧滑菜单
	import sidebar from './sidebar.vue'
	export default{
		data(){
			return{
				show:false,
				hotRecommend:[],
				hotPhotographer:[],
				medalWorks:[]
				
			}
		},
		mounted(){
			var _this = this;
			this.$http.get('./data/data.json')
			.then(function(res){
				console.log(res)
				_this.hotRecommend=res.data.hotRecommend;
				_this.hotPhotographer=res.data.hotPhotographer;
				_this.medalWorks=res.data.medalWorks;
			})
			.catch(()=>{
				
			})
			.finally((f)=>{
				console.log("数据已上传")
			})
		},
		components:{
			//注册组件
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
			}
		}
	}
	
</script>

<style scoped="scoped">
	@import url("../../assets/css/home.css");
</style>