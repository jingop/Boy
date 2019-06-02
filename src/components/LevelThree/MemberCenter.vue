<template>
	<div id="MemberCenter">
		<!-- 开通会员 -->
		<div class="MemberCenter">
			<img src="http://cb.cdn.changbaimg.com/images/officialwebsite/membercenter/member_text.png?ver=1.0.0" class="MemberCenter-imgs">
			<p>会员兑换中心，谁看过我，专属礼物等会员特权，助你轻松脱颖而出！</p>
			<div class="MemberCenter-noe">
				<img src="http://cb.cdn.changbaimg.com/images/officialwebsite/membercenter/boy.png?ver=1.0.0" alt class="MemberCenter-noe-imgyi">
				<div class="member-open-container">
					<img src="http://cb.cdn.changbaimg.com/images/officialwebsite/membercenter/star.png?ver=1.0.0" class="publicimg member-open-img1">
					<img src="http://cb.cdn.changbaimg.com/images/officialwebsite/membercenter/star.png?ver=1.0.0" class="publicimg member-open-img2">
					<img src="http://cb.cdn.changbaimg.com/images/officialwebsite/membercenter/star.png?ver=1.0.0" class="publicimg member-open-img3">
					<img src="http://cb.cdn.changbaimg.com/images/officialwebsite/membercenter/star.png?ver=1.0.0" class="publicimg member-open-img4">
					
					<button>开通会员</button>
				</div>
				<img src="http://cb.cdn.changbaimg.com/images/officialwebsite/membercenter/girl.png?ver=1.0.0" class="MemberCenter-noe-imger">
			</div>
		</div>
		<!-- 内容 -->
		<div class="S-MemberExchange">
			<!-- 会员兑换 -->
			<div class="MemberExchange">
				<div class="MembershipExchangeCenter" v-for="(item,index) in ZMemberExchange" :key="index+'a'">
					<img :src="item.picture" class="Centerimg">
					<div>
						<a href="#">
							{{item.explain}}
							<img :src="item.pictures">
						</a>
						<p>{{item.explains}}</p>
					</div>
				</div>
			</div>
			<!-- 会员详情 -->
			<div class="MembershipDetails">
				<div v-for="(item,indexs) in ShowPrivileges" :key="indexs+'a'">
					<h3>
						<span>{{item.h}}</span>
					</h3>
						<ul>
							<li v-for="(item,index) in item.c">
								<span :class="'TheFat lala'+(indexs*3+index)" ></span>
								<div>
									{{item.explain}}
									<p>{{item.explains}}</p>
								</div>
							</li>
						</ul>
						<table>
							<thead >
								<tr>
									<th v-for="(item,index) in item.a">{{item.explain}}</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td v-for="(item,index) in item.p">{{item.explain}}</td>
								</tr>
								<tr>
									<td v-for="(item,index) in item.o">{{item.explain}}</td>
								</tr>
								<tr>
									<td v-for="(item,index) in item.i">{{item.explain}}</td>
								</tr>
								<tr>
									<td v-for="(item,index) in item.u">{{item.explain}}</td>
								</tr>
								<tr>
									<td v-for="(item,index) in item.y">{{item.explain}}</td>
								</tr>
								<tr>
									<td v-for="(item,index) in item.t">{{item.explain}}</td>
								</tr>
							</tbody>
						</table>
						<div class="member-right-statement-list">
							<ul>
								<li v-for="(item,index) in item.r">{{item.explain}}</li>
							</ul>
						</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {ZMemberExchange,ShowPrivileges} from '../../api/index'
	export default {
		name: 'MemberCenter',
		data() {
			return {
				ZMemberExchange:[],
				ShowPrivileges:[]
			}
		},
		created(){
			  ZMemberExchange().then(res=>{
				  this.ZMemberExchange = res.data
			  })
			  ShowPrivileges().then(res=>{
			  				  this.ShowPrivileges = res.data
			  })
		}
	}
</script>

<style lang="scss" scoped>
	.S-MemberExchange{
		width: 100%;
		background-color: rgb(240, 240, 240);
		padding-top: 1px;
	}
	#MemberCenter{
		width: 100%;
		background-color:  #ff5046;
		.MemberCenter{ //开通会员
			width: 960px;
			margin: 0 auto;
			.MemberCenter-imgs{
				display: block;
				width: 575px;
				margin: 0 auto 18px auto;
			}
			p{
				margin-bottom: 29px;
				font-size: 20px;
				line-height: 20px;
				color: #fff;
				word-spacing: .1rem;
				letter-spacing: .1rem;
				text-align: center;
			}
			.MemberCenter-noe{
				padding-left: 20px;
				text-align: left;
				.MemberCenter-noe-imgyi{
					display: inline-block;
					width: 206px;
					height: 196px;
					vertical-align: bottom;
					text-align: left;
					margin:0;
				}
				.MemberCenter-noe-imger{
					display: inline-block;
					width: 200px;
					height: 196px;
					vertical-align: bottom;
					text-align: left;
					margin: 0;
				}
				.member-open-container{
					background: url(//cb.cdn.changbaimg.com/images/officialwebsite/membercenter/star_bg.jpg) no-repeat center center;
					display: inline-block;
					position: relative;
					margin: 0 21px;
					width: 450px;
					height: 196px;
					button{
						position: absolute;
						bottom: 30px;
						left: 144px;
						width: 163px;
						height: 48px;
						border: 0;
						font-size: 20px;
						color: #fff;
						cursor: pointer;
						background: url(//cb.cdn.changbaimg.com/images/officialwebsite/membercenter/button_bg.png?ver=1.0.0) no-repeat center center;
					}
					.publicimg{
						position: absolute;
						animation: bling linear 2s infinite;
					}
					@keyframes bling{
						0%{
							opacity: 1;
						}
						50%{
							opacity: 0;
						}
						100%{
							opacity: 1;
						}
					}
					.member-open-img1{
						top: 75px;
						left: 90px;
						width: 26px;
						height: 26px;
					}
					.member-open-img2{
						    top: 0;
							left: 123px;
							width: 21px;
							height: 21px;
							animation-delay: 1s;
					}
					.member-open-img3{
						top: 37px;
						left: 330px;
						width: 25px;
						height: 25px;
						animation-delay: 1s;
					}
					.member-open-img4{
						top: 104px;
						left: 378px;
						width: 19px;
						height: 19px;
					}
				}
			}
		}
		.S-MemberExchange{ //内容
			width: 100%;
			background-color: rgb(240, 240, 240);
			padding-top: 1px;
			display: inline-block;
			.MemberExchange{   //会员兑换
				width: 962px;
				background-color: #fff;
				margin: 30px auto 0;
				padding: 29px 29px 0 29px;
				border: 1px solid #dadada;
				text-align: justify;
				.MembershipExchangeCenter{
					display: inline-block;
					width: 436px;
					.Centerimg{
						width: 100%;
						height: 170px;
					}
					div{
						height: 91px;
						padding-top: 20px;
						line-height: 18px;
						font-size: 18px;
						color: #333;
						text-align: center;
						overflow: hidden;
						a{
							color: #333;
							img{
								margin-left: 1px;
								vertical-align: middle;
								margin-top: -2px;
							}
						}
						p{
							margin-top: 8px;
							font-size: 14px;
							color: #999;
						}
					}
				}
				.MembershipExchangeCenter:nth-child(2){
					margin-left:25px;
				}
				.MembershipExchangeCenter:nth-child(4){
					margin-left:25px;
				}
				.MembershipExchangeCenter a:nth-of-type(1){
					color: #ff734e;
				}
			}
			.MembershipDetails{ //会员详情
				width: 960px;
				margin: 0 auto;
				margin-top: 30px;
				border: 1px solid #dadada;
				background-color: #fff;
				h3{
					margin: 0 19px;
					line-height: 58px;
					border-bottom: 1px solid #dadada;
					font-size: 18px;
					font-weight: normal;
					color: #666;
					span{
						line-height: 18px;
						padding-left: 10px;
						border-left: 4px solid #ff734e;
					}
				}
				ul{
					margin-top: 14px;
					padding: 0 30px;
					li{
						display: inline-block;
						// float: left;
						width: 33.33333333%;
						height: 114px;
						padding-top: 16px;
						background-color: #fff!important;
						.TheFat{
							display: inline-block;
							width: 90px;
							height: 90px;
							margin-right: 15px;
							background: url(//cb.cdn.changbaimg.com/images/officialwebsite/membercenter/icons.png?ver=1.1.1) no-repeat center center;
							 transition: width 1s, height 2s, transform 1s;
						}
						.TheFat:hover{
							    transform: rotate(360deg);
						}
						.lala0 {
							background-position: -364px -91px;
						}
						.lala1 {
							background-position: 0 -182px;
						}
						.lala2 {
							background-position: -273px -273px;
						}
						
						.lala3 {
							background-position: 0 0;
						}
						.lala4 {
							background-position: -182px -91px;
						}
						.lala5 {
							background-position: -91px -91px;
						}
						.lala6{
							background-position: -364px 0;
						}
						.lala7{
							background-position: -273px 0;
						}
						.lala8{
							background-position: 0 -91px;
						}
						.lala9{
							background-position: 0 -273px;
						}
						.lala10{
							background-position: -182px -182px;
						}
						.lala11{
							background-position: -91px 0;
						}
						.lala12{
							background-position: -273px -91px;
						}
						.lala13{
							background-position: -182px -273px;
						}
						.lala14{
							background-position: -273px -182px;
						}
						.lala15{
							background-position: -364px -182px;
						}
						div{
							display: inline-block;
							margin-top: 12px;
							font-size: 18px;
							line-height: 30px;
							color: #333;
							vertical-align: top;
							p{
								width: 155px;
								line-height: 18px;
								font-size: 14px;
								color: #999;
							}
						}
					}
				}
				// 表单
				table{
					width: 922px;
					margin: 0 19px;
					table-layout: fixed;
					margin-top: -1px;
					border-collapse: collapse;
					font-size: 14px;
					text-align: center;
					border-collapse: collapse;
					border-spacing: 0;
					th{
						line-height: 38px;
						border: 1px solid #ccc;
						font-weight: normal;
						color: #333;
						background-color: #f3f3f3;
					}
					th:nth-child(1){
						width: 14.4%;
					}
					tbody{
						td{
							line-height: 40px;
							border: 1px solid #ccc;
							color: #999;
						}
						td:nth-child(1){
							padding-left: 10px;
							text-align: left;
							color: #333;
						}
					}
				}
				//
				.member-right-statement-list{
					ul{
						font-size: 14px;
						line-height: 22px;
						color: #999;
						margin: 16px 10px 17px 19px;
						list-style-type: decimal;
						padding: 0px 0px;
						li{
							display: block;
							width: 100%;
							height: 100%;
							padding-top: 0;
						}
					}
				}
			}
		}
		
	}
</style>
