<template>
	<main>
		<!--侧滑菜单组件-->
		<!--
			子组件发送数据给父组件
			第一步：子组件定义方法：this.$emit('事件名'，所要发送的数据)
			第二步：在占位符中：@事件名="父组件方法名"方法名不加()
			第三步：父组件中定义方法接收数据
		-->
		<transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
			<div class="sidebar" v-show="show">
				<div class="sidebarHeader">
					<router-link to="/login">
						<i class="icon-user"></i>
						<span>登录/注册</span>
					</router-link>
				</div>
					
				<ul class="sidebarContent">
					<li>
						<router-link to="/">
							<i class="icon-index"></i>
							<span>首页</span>
						</router-link>
					</li>
					<li>
						<router-link to="/works">
							<i class="icon-works"></i>
							<span>作品</span>
						</router-link>
					</li>
					<li>
						<router-link to="/picSquare">
							<i class="icon-picture"></i>
							<span>图片广场</span>
						</router-link>
					</li>
					<li>
						<router-link to="/skill">
							<i class="icon-skill"></i>
							<span>摄影技巧</span>
						</router-link>
					</li>
					<li>
						<router-link to="/talk">
							<i class="icon-talk"></i>
							<span>对话</span>
						</router-link>
					</li>
					<li>
						<router-link to="/limit">
							<i class="icon-limit"></i>
							<span>极限摄影</span>
						</router-link>
					</li>
					<li>
						<router-link to="/verified">
							<i class="icon-iden"></i>
							<span>POCO认证</span>
						</router-link>
					</li>
				</ul>
				
				<div class="sidebarFooter">
					<router-link to="/download">
						<i></i>
					</router-link>
				</div>
				
				
			</div>
		</transition>
		
		<transition name="fade">
			<div class="mask" @click.stop.prevent="hide()" v-show="show"></div>
		</transition>
		
	</main>
	
	
</template>

<script>
	export default{
		//接收父组件传值
		props:{
			show:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				//初始化数据
				data:[]
			}
		},
		watch:{},
		methods:{
			//隐藏侧边栏，向上派发事件（向父组件传值）
			hide(){
				
				this.$emit('hide',false)
			}
		}
	}

</script>

<style scoped="scoped">
	@import url("../../assets/css/sidebar.css");
</style>
	