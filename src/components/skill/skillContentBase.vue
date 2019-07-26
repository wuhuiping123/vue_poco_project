<template>
	<main>
		
		<ul class="skill-list">
			<li class="skill-item" v-for="(item,index) in skillBase">
				<router-link to="/skillDetail">
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
				skillBase:[]
			}
		},
		mounted(){
			var _this = this;
			this.$http.get('./data/data.json')
			.then(function(res){
				console.log(res)
				_this.skillBase=res.data.skillBase;
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
	@import url("../../assets/css/skillContentAll.css");
</style>