<template>
	<main>
		<mt-header fixed title="分类">
			<i class="iconfont" slot="left" @click="back">&#xe60e;</i>
		</mt-header>
		
		<ul class="sort-wrap">
			<li v-for="(item,index) in sort">
				<router-link to="/">
					<span class="sortImg">
						<img :src="item.src"/>
					</span>
					<span class="sortShadow"></span>
					<dl>
						<dt>{{item.name}}</dt>
						<dd>{{item.nameEng}}</dd>
					</dl>
				</router-link>
			</li>
		</ul>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				sort:[]
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		mounted(){
			var _this = this;
			this.$http.get('./data/data.json')
			.then(function(res){
				console.log(res)
				_this.sort=res.data.sort;
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
	@import url("../../assets/css/sort.css");
</style>