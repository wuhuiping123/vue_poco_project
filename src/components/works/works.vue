<template>
	<main>
		<header>
			<mt-header fixed title="作品">
				<i class="iconfont" slot="left" @click="showSide()">&#xe61d;</i>
				<router-link to="/sort" slot="right">分类</router-link>
			</mt-header>
			<!--侧滑菜单栏-->
			<v-sidebar :show="show" @hide="get"></v-sidebar>
			
		</header>
		
		<!--mint ui  Tabbar-->
		<!--<transition enter-active-class="animated fadeIn">-->
		<div class="page-tabbar">
			<mt-tabbar v-model="selected" fixed>
				<mt-tab-item id="recommend">
					<span>推荐</span>
				</mt-tab-item>
				<mt-tab-item id="popularity">
					<span>人气</span>
				</mt-tab-item>
				<mt-tab-item id="newest">
					<span>最新</span>
				</mt-tab-item>
			</mt-tabbar>
			
			<transition enter-active-class="animated fadeIn">
			<mt-tab-container class="page-tabbar-container" v-model="selected">
				<!--<transition enter-active-class="animated fadeIn">-->
				<mt-tab-container-item id="recommend">
					<ul class="tabContain-list">
						<li v-for="(item,index) in recommend">
							<router-link to="">
								<img :src="item.works" class="userimg"/>
								<span>
									<i>
										<img :src="item.avatar" />
									</i>
									{{item.name}}
								</span>
							</router-link>
						</li>
					</ul>
					
				</mt-tab-container-item>
				<!--</transition>-->
				
				<!--<transition enter-active-class="animated fadeIn">-->
				<mt-tab-container-item id="popularity">
					<ul class="tabContain-list">
						<li v-for="(item,index) in popularity">
							<router-link to="">
								<img :src="item.works" class="userimg"/>
								<span>
									<i>
										<img :src="item.avatar" />
									</i>
									{{item.name}}
								</span>
							</router-link>
						</li>
					</ul>
				</mt-tab-container-item>
				<!--</transition>-->
				
				<!--<transition enter-active-class="animated fadeIn">-->
				<mt-tab-container-item id="newest">
					<ul class="tabContain-list">
						<li v-for="(item,index) in newest">
							<router-link to="">
								<img :src="item.works" class="userimg"/>
								<span>
									<i>
										<img :src="item.avatar" />
									</i>
									{{item.name}}
								</span>
							</router-link>
						</li>
					</ul>
				</mt-tab-container-item>
				<!--</transition>-->
				
			</mt-tab-container>
			</transition>
		</div>
		<!--</transition>-->
		
	</main>
</template>

<script>
	import sidebar from '../index/sidebar.vue'
	
	export default{
		data(){
			return{
				show:false,
				selected: 'recommend',
				recommend:[],
				popularity:[],
				newest:[]
				
			}
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
		},
		mounted(){
			var _this = this;
			this.$http.get('./data/data.json')
			.then(function(res){
				console.log(res)
				_this.recommend=res.data.recommend;
				_this.popularity=res.data.popularity;
				_this.newest=res.data.newest;
			})
			.catch(()=>{
				
			})
			.finally((f)=>{
				console.log("数据已上传")
			})
		}
	};
	
//	$(function(){
//		$('.mint-header-button').click(function(){
//			$('.sidebar').css('margin-top','-40px')
//		})
//	})



//	var w = $('.tabContain-list li').width();
//	console.log(w)
//	console.log(123456)
//	
//	$('.userimg').each(function(i){
//		var img = $(this);
//		var imgWidth;
//		var imgHeight;
//		
//		$("<img/>").attr("src",$(img).attr("src")).load(function(){
//			imgWidth = this.width;
//			imgHeight = this.height;
//			
//			if (imgWidth>=w) {
//				$(img).css('width','auto').css('height','100%')
//			} else{
//				$(img).css('backgroundColor','green')
//			}
//		})
//		
//	})
	
</script>

<style scoped>
	@import url("../../assets/css/works.css");
	.animated{
		animation-duration: 5s;
	}
</style>