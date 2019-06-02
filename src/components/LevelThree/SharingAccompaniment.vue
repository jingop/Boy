<template>
	<div id="SharingAccompaniment">
		<div class="GoldRecharge-Land">
			<div class="GoldRecharge-Land-one">
				<img src="http://cb.cdn.changbaimg.com/images/officialwebsite/login_title_img.png">
				<img src="http://cb.cdn.changbaimg.com/images/officialwebsite/login_title_cont.png">
			</div>
			<div class="shareTips">登陆后分享伴奏有机会获得惊喜大奖哦~</div>
			<div class="InputBox">
				<div class="Cell-phoneNumber">
					<p class="InputNumber"> 输入手机号</p>
					<input type="text" name="phone" v-model="phone" />
				</div>
				<div class="ShortMessage">
					<p>短信验证码</p>
					<input type="text" class="inputs1" />
					<input type="button"  value="获取验证码" :disabled="disabled" @click="sendcode" class="inputs2" />
				</div>
			</div>
			<!-- 请按住滑块，拖动到最右边 -->
			<div class="Slide">
				请按住滑块，拖动到最右边
			</div>
			<!-- 登录按钮 -->
			<div class="LoginButton">
				<button>登录</button>
			</div>
			<!-- 切换 -->
			<a href="#" class="SwitchAccount">
				<div>切换到账号密码登录</div>
			</a>
			
		</div>
		<div class="q-w-cont">可以用以下账号登录(请确保你已在唱吧APP里登录注册过)</div>
		<div class="OtherLogins">
			<a href="#">
				<img src="http://cb.cdn.changbaimg.com/images/officialwebsite/qq_login.png">
				<p>腾讯QQ</p>
			</a>
			<a href="#">
				<img src="http://cb.cdn.changbaimg.com/images/officialwebsite/weibo_login.png">
				<p>新浪微博</p>
			</a>
			<a href="#">
				<img src="//cb.cdn.changbaimg.com/images/officialwebsite/weixin_login.png">
				<p>微信</p>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SharingAccompaniment',
		data:function() {
			return {
	            phone:'',
	            disabled:false
			}
		},
		methods: {
			sendcode() {
				let reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
				if(this.phone == '') {
					alert("请输入手机号");
				}else if(!reg.test(this.phone)){
					   alert("手机格式不正确");
				}else{
					  alert("正在发送,注意查收");
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
		#SharingAccompaniment{
		.GoldRecharge-Land{
			width: 370px;
			height: auto;
			margin: 30px auto auto;
			border: 1px solid #DADADA;
			background-color: #fff;
			.GoldRecharge-Land-one{
				width: 100%;
				height: 50px;
				line-height: 50px;
				border-bottom: 1px solid #DADADA;
				img{
					vertical-align: middle;
				}
				img:first-child{
					margin-left: 130px;
				}
			}
			.shareTips{
				font-size: 14px;
				color: #a9a9a9;
				margin-left: 102px;
				padding: 20px 0;
			}
			.InputBox{
				display: block;
				.Cell-phoneNumber{
					margin-bottom: 21px;
					overflow: hidden;
					.InputNumber{
						display: inline-block;
						font-size: 14px;
						color: #333;
						padding-right: 10px;
						width: 90px;
						text-align: right;
						line-height: 34px;
						float: left;
					}
					input{
						width: 224px;
						height: 34px;
						padding-left: 10px;
						border: 1px solid #dbdbdb;
						box-sizing: border-box;
						
					}
				}
				.ShortMessage{
					margin-bottom:21px;
					overflow: hidden;
					p{
						display: inline-block;
						font-size: 14px;
						color: #333;
						padding-right: 10px;
						width: 90px;
						text-align: right;
						float: left;
						line-height: 34px;
					}
					.inputs1{
						width: 120px;
						height: 34px;
						padding-left: 10px;
						border: 1px solid #dbdbdb;
						box-sizing: border-box;
						    float: left;
					}
					.inputs2{
						width: 104px;
						height: 34px;
						font-size: 14px;
						border: 1px solid #dbdbdb;
						box-sizing: border-box;
						background-color: #fff;
						color: #dbdbdb;
						border-left: none;
						outline: none;
						float: left;
					}
				}
			}
			// 请按住滑块，拖动到最右边
			.Slide{
				width: 224px;
				height: 32px;
				// background: red;
				margin-bottom: 21px;
				margin-left: 90px;
				border: 1px solid #dbdbdb;
				font-size: 14px;
				color: #dbdbdb;
				text-align: center;
				line-height: 30px;
				
			}
			// 登录
			.LoginButton{
				margin-bottom: 21px;
				overflow: hidden;
				button{
					width: 224px;
					background-color: #FF734E;
					margin-left: 102px;
					border: none;
					height: 35px;
					color: #FFF;
					border-radius: 5px;
					cursor: pointer;
				}
			}
			// 切换账号
			.SwitchAccount{
				div{
					display: block;
					width: 370px;
					font-size: 14px;
					color: #ACACAC;
					text-align: center;
					line-height: 50px;
					border-top: 1px solid #DADADA;
				}
			}
		}
		.q-w-cont{
			font-size: 14px;
			color: #ACACAC;
			text-align: center;
			margin: 20px auto;
		}
		// 其他登录
		.OtherLogins{
			width: 390px;
			margin: auto auto 50px;
			font-size: 14px;
			a{
				display: inline-block;
				text-align: center;
				width: 127px;
				p{
					color: #ACACAC;
				}
			}
		}
	}
</style>
