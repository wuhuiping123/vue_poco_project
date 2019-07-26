<template>
	<main>
		<header>
			<mt-header fixed title="POCO摄影">
				<i class="iconfont" slot="left" @click="back()">&#xe60e;</i>
			</mt-header>
		</header>
		<div class="download_page">
			<div class="dl_content">
				<div class="dl_logo"></div>
				
				<div class="dl_title"></div>
				
				<div class="dl_button"></div>
				
				<div class="dl_p1"></div>
				
				<div class="dl_p2">
					<span class="dl_pic"></span>
					<i class="dl_txt"></i>
				</div>
				
				<div class="dl_p3">
					<span class="dl_pic"></span>
					<i class="dl_txt"></i>
				</div>
				
				<div class="dl_p4">
					<span class="dl_pic"></span>
					<i class="dl_txt"></i>
				</div>
				
				<div class="dl_p5">
					<span class="dl_pic"></span>
					<i class="dl_txt"></i>
				</div>
				
				<div class="dl_footer">
					备案号：粤B2-20030218号-2 ICP证号：粤B2-20030218
					<br />
					Copyright ?2003-2016 POCO CO.,LTD.
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/css/download.css");
</style>