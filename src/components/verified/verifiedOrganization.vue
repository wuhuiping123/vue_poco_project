<template>
	<main>
		<!--
			学到了一种新的router-link用法，不把内容包在router-link里面，
			而是跟内容同级，在定位router-link覆盖内容区域，由此便可链接
		-->
		<ul class="vu-list">
			<li class="vu-item" v-for="(item,index) in verifiedVo">
				<div class="vu-info">
					<div class="vu-top-info clearfix">
						<router-link to=""></router-link>
						<!--头像-->
						<div class="vu-avatar">
							<img :src="item.avatar"/>
						</div>
						<!--名字-->
						<p class="vu-name">{{item.name}}</p>
						<!--介绍-->
						<span class="vu-desc">{{item.desc}}</span>
						<!--关注-->
						<div class="vu-follow">
							<div>
								<div class="follow-img">
									
								</div>
							</div>
						</div>
					</div>
					
					<div class="vu-bottom-info">
						<p>
							{{item.det}}
						</p>
					</div>
				</div>
				
				<div class="vu-works-list">
					<div class="vu-works-item" v-for="(item,index) in item.worksList">
						<router-link to=""></router-link>
						<img :src="item.works"/>
					</div>
					
				</div>
			</li>
		</ul>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				verifiedVo:[]
			}
		},
		mounted(){
			var _this = this;
			this.$http.get('./data/data.json')
			.then(function(res){
				console.log(res)
				_this.verifiedVo=res.data.verifiedVo;
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
	@import url("../../assets/css/verifiedUser.css");
</style>

