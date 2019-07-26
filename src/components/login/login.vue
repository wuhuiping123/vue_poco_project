<template>
	<main>
		
		<transition enter-active-class="animated fadeInLeft">
			<div v-show="showLogin">
				<header>
					<mt-header title="登录"  @click="toLogin()">
						<i class="iconfont" slot="left" @click="back">&#xe60e;</i>
						<span slot="right" @click="toRegister()">注册</span>
					</mt-header>
				</header>
				
				<!--<header>
					<i class="iconfont" @click="back">&#xe60e;</i>
					<span class="login" @click="toLogin()">{{msg1}}</span>
					<span class="register" @click="toRegister()">{{msg2}}</span>
				</header>-->
				
				<div class="loginBody">
					<div class="loginInfo">
						<input type="text" placeholder="Email/POCO号/手机" id="loginUser" />
						<input type="password" placeholder="密码 " id="loginPass" />
					</div>
					<button class="loginBtn" @click="isNullTips()">登录</button>
					
					<div class="otherLogin">
						——<span>或用第三方账号登录</span>——
						<ul>
							<li>
								<i class="iconfont">&#xf003c;</i>
							</li>
							<li>
								<i class="iconfont">&#xe635;</i>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</transition>
		
		<transition enter-active-class="animated fadeInRight">
			<div v-show="showRegister">
				<header>
					<mt-header title="注册"  @click="toRegister()">
						<i class="iconfont" slot="left" @click="back">&#xe60e;</i>
						<span slot="right" @click="toLogin()">登录</span>
					</mt-header>
				</header>
				<!--<header>
					<i class="iconfont" @click="back">&#xe60e;</i>
					<span class="login" @click="toRegister()">{{msg1}}</span>
					<span class="register" @click="toLogin()">{{msg2}}</span>
				</header>-->
				<div class="registerBody">
					<div class="registerInfo">
						<p>
							<span>+86</span>
							<input type="text" placeholder="手机号" id="registerUser" />
						</p>
						<p>
							<input type="text" placeholder="短信验证码 " id="registerCode" />
							<span>获取验证码</span>
						</p>
						
						<input type="password" placeholder="请输入密码(6-32位非空字符) " id="registerPass" />
					</div>
					<button  class="registerBtn" @click="isNull()">注册</button>
					<p class="agm">
						点击上面的 “注册” 按钮，即代表你已同意
						<span>《POCO摄影用户许可协议》</span>
					</p>
				</div>
				
			</div v-show="showRegister">
		</transition>
		
		<!--<transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">-->
			<div class="msgBoxUser">
				请填写正确的Email/POCO号/手机
			</div>	
		<!--</transition>-->
			<div class="msgBoxPass">
				请填写密码
			</div>
			
			<div class="msgbox">
				{{value}}
			</div>
	</main>
</template>

<script>
	
	export default{
		data(){
			return{
//				msg1:'登录',
//				msg2:'注册',
				showLogin:true,
				showRegister:false,
//				showNull:false
				value:'信息不能为空！'
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			toLogin(){
//				this.msg1='登录',
//				this.msg2='注册',
				this.showLogin=true,
				this.showRegister=false
			},
			toRegister(){
//				this.msg1='注册',
//				this.msg2='登录',
				this.showLogin=false,
				this.showRegister=true
			},
			isNullTips(){
				if ($('#loginUser').val()=='') {
					
//					$('.msgBox').show().delay(2000).hide(300)
					
					
//					$('.msgBox').css('display','block')
//					setTimeout(function(){
//						$('.msgBox').css('display','none')
//					},2000)
					
					
//					$('.msgBox').css({'opacity':'1'})
//					setTimeout(function(){
//						$('.msgBox').css({'opacity':'0'})
//						console.log(132456789)
//					},2000)
					
					
					$('.msgBoxUser').animate({opacity:'1'},500,function(){
						$('.msgBoxUser').animate({opacity:'0'},2000)
					})
					
				} else if ($('#loginPass').val()==''){
					$('.msgBoxPass').animate({opacity:'1'},500,function(){
						$('.msgBoxPass').animate({opacity:'0'},2000)
					})
				} else if ($('#loginPass').val()==''&&$('#loginUser').val()==''){
					$('.msgBoxUser').animate({opacity:'1'},500,function(){
						$('.msgBoxUser').animate({opacity:'0'},2000)
					})
				} else {
					$('.msgBoxUser').css({opacity:'0'})
					$('.msgBoxPass').css({opacity:'0'})
				}
			
			},
			
			isNull(){
				if($('#registerUser').val()==''||$('#registerCode').val()==''||$('#registerPass').val()==''){
					this.value=='信息不能为空！'
					$('.msgbox').animate({opacity:'1'},500,function(){
						$('.msgbox').animate({opacity:'0'},2000)
					})
				}
					
				
//				if ($('#registerUser').val()=='') {
//					this.value=='请正确输入手机号'
//					$('.msgbox').animate({opacity:'1'},500,function(){
//						$('.msgbox').animate({opacity:'0'},2000)
//					})
//				} else if($('#registerPass').val()==''){
//					this.value=='请正确输入密码'
//					$('.msgbox').animate({opacity:'1'},500,function(){
//						$('.msgbox').animate({opacity:'0'},2000)
//					})
//				} else if($('#registerCode').val()==''){
//					this.value=='请输入验证码'
//					$('.msgbox').animate({opacity:'1'},500,function(){
//						$('.msgbox').animate({opacity:'0'},2000)
//					})
//				} else if($('#registerCode').val()==''&&$('#registerPass').val()==''){
//					this.value=='请正确输入手机号'
//					$('.msgbox').animate({opacity:'1'},500,function(){
//						$('.msgbox').animate({opacity:'0'},2000)
//					})
//				} else if($('#registerCode').val()==''&&$('#registerUser').val()==''){
//					this.value=='请正确输入密码'
//					$('.msgbox').animate({opacity:'1'},500,function(){
//						$('.msgbox').animate({opacity:'0'},2000)
//					})
//				} else if($('#registerPass').val()==''&&$('#registerUser').val()==''){
//					this.value=='请正确输入验证码'
//					$('.msgbox').animate({opacity:'1'},500,function(){
//						$('.msgbox').animate({opacity:'0'},2000)
//					})
//				} else if($('#registerPass').val()==''&&$('#registerUser').val()==''&&$('#registerCode').val()==''){
//					this.value=='请正确输入手机号'
//					$('.msgbox').animate({opacity:'1'},500,function(){
//						$('.msgbox').animate({opacity:'0'},2000)
//					})
//				} else{
//					$('.msgbox').css({opacity:'0'})
//					$('.msgbox').css({opacity:'0'})
//				}
			}
		}
	}
</script>

<style scoped="scoped" src="../../assets/css/login.css"></style>
<!--<style scoped="scoped">
	@import url("../../assets/css/login.css");
</style>-->
