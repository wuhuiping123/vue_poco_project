<template>
	<main>
		<header>
			<mt-header fixed title="图片广场">
				<i class="iconfont" slot="left" @click="showSide()">&#xe61d;</i>
				<router-link to="/sort" slot="right">分类</router-link>
			</mt-header>
			<!--侧滑菜单栏-->
			<v-sidebar :show="show" @hide="get"></v-sidebar>
		</header>
		
		<!--mint ui  Navbar-->
		<div class="page-tabbar">
			<mt-navbar v-model="selected" fixed>
				<mt-tab-item id="1">
					<span>热门</span>
				</mt-tab-item>
				<mt-tab-item id="2">
					<span>专辑</span>
				</mt-tab-item>
			</mt-navbar>
		
			 <!--tab-container--> 
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<ul class="tabContain-list">
						<li class="tabContain-item" v-for="(item,index) in picSquareHot">
							<router-link to="" class="tabContain-rl">
								<!--<img class="zoomImage" style="background-image: url(../../../data/images/picSquare-hot-01.jpg);"/>--> 
								<img class="zoomImage" :style=" { 'background-image': 'url(' + item.src +')' } "/>
							</router-link>
						</li>
					</ul>
					
				</mt-tab-container-item>
				
				<mt-tab-container-item id="2">
					<ul class="album-wrap">
						<li class="album-item" v-for="(item,index) in picSquareAlbum">
							<router-link to="">
								<span class="album-img">
									<img :src="item.src"/>
								</span>
								<span class="album-shadow">
									<dl>
										<dt>{{item.album}}</dt>
										<dd>{{item.from}}</dd>
									</dl>
								</span>
							</router-link>
						</li>
					</ul>
				</mt-tab-container-item>
				
			</mt-tab-container>
		</div>
		
	</main>
	
</template>

<script>
	import sidebar from '../index/sidebar.vue'
	export default{
		data(){
			return{
				show:false,
				selected: '1',
				picSquareHot:[],
				picSquareAlbum:[]
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
			}
		},
		mounted(){
			var _this = this;
			this.$http.get('./data/data.json')
			.then(function(res){
				console.log(res)
				_this.picSquareHot=res.data.picSquareHot;
				_this.picSquareAlbum=res.data.picSquareAlbum;
			})
			.catch(()=>{
				
			})
			.finally((f)=>{
				console.log("数据已上传")
			})
		}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/css/picSquare.css");
</style>