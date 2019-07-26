<template>
	<main>
		
		<ul class="skill-list">
			<li class="skill-item" v-for="(item,index) in limitAll">
				<router-link to="">
					<h3>{{item.des}}</h3>
					<span class="sdate">{{item.date}}</span>
					<span class="simg">
						<img :src="item.src" />
					</span>
				</router-link>
			</li>
			
		</ul>
		
	</main>
</template>

<script>
	export default{
		data(){
			return{
				limitAll:[]
			}
		},
		mounted(){
			var _this = this;
			this.$http.get('./data/data.json')
			.then(function(res){
				console.log(res)
				_this.limitAll=res.data.limitAll;
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
	@import url("../../assets/css/limitContentAll.css");
</style>