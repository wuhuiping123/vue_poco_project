<template>
	<main>
		<ul>
			<li v-for="(item,index) in list">
				<img :src="item.src"/>
				<p>{{item.title}}</p>
				<p>{{item.des}}</p>
			</li>
			<li>123456789</li>
		</ul>
		<button>按钮</button>
	
	</main>
</template>

<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			
//			const jsonp = require('jsonp');
//
//			jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-20.html', null, (err, data) => {
//			  if (err) {
//			    console.error(err.message);
//			  } else {
//			    console.log(data);
//			  }
//			});
			
			var _this = this;
			this.$http.get('../../../data/data.json')
			.then(function(res){
				console.log(_this)
				_this.list=res.data.list
			})
			.catch(()=>{
				
			})
			.finally((f)=>{
				console.log("请求结束了")
			})
		}
	}
	
</script>

<style scoped>
	ul{
		background-color: yellow;
		padding: 30px 30px;
		border: 1px solid red;
		
	}
</style>