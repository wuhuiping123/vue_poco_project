<template>
	<main>
		<header>
			<mt-header fixed title="极限摄影">
				<i class="iconfont" slot="left" @click="showSide()">&#xe61d;</i>
			</mt-header>
			<!--侧滑菜单栏-->
			<v-sidebar :show="show" @hide="get"></v-sidebar>
		</header>
		
		<div class="searchPart">
			<div class="search-box">
				<input type="text" placeholder="请输入搜索"/>
				<button>
					<i></i>
				</button>
			</div>
		</div>
		
		<div class="narbarPart">
			<!--可触摸滑动具有回弹效果的导航菜单组件-->
			<ly-tab v-model="selectedId" :items="items" :options="options" @change="handleChange"></ly-tab>
		</div>
		
		<!--二级路由组件-->
		<router-view></router-view>
		
	</main>
</template>

<script>
	import sidebar from '../index/sidebar.vue'
	
	export default{
		data(){
			return{
				show:false,
				selectedId:0,
				items:[
					{label:'全部'},
					{label:'新手入门'},
					{label:'使用技巧'},
					{label:'环球视觉'},
					{label:'摄影大赛'}
				],
				options:{
					activeColor:'#2c72ac'
				},
				//二级路由路径
				subRouterUrl:[
					'/limitContentAll',
					'/limitContentNew',
					'/limitContentAll',
					'/limitContentNew',
					'/limitContentAll'
				]
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
			
			
			handleChange(item,index){
//				console.log(item,index)	//index为一个下标，通过定义的数组取出对应下标
//				console.log(this.$router)
				
				//跳转到指定的路径this.$router.replace()
//				this.$router.replace('/skillContentAll')

				this.$router.replace(this.subRouterUrl[index])
				console.log(this.route)
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/css/limit.css");
</style>