<template>
	<div class="WonderChild1">
		<div class="a-WonderChild1-left">
			<!--优质MV  -->
			<div class="a-highQuality">
				<div class="a-public">
					<a href="#" class="a-public-1">优质MV</a>
					<a href="#" class="a-public-2">
						<span>更多</span>
						<i></i>
					</a>
				</div>
				<div class="a-highQuality-play">
					<ul>
						<li v-for="(item,indexs) in Bhigh" :key="indexs+'a'">
							<a href="#" @mouseenter="enter(indexs)" @mouseleave="leave()">
								<img :src="item.picture" alt="">
								<i></i>
								<span class="A-Masks"  v-show="indexs==current">
									<i></i>
									<em>
										<i></i>
										<b>{{item.amount}}</b>
									</em>
								</span>
							</a>
							<div>
								<a href="">
									<span :title="item.information">{{item.explain}}</span>
									<a class="A-zha">
										<em>{{item.explains}}</em>
										<i></i>
										<i class="AnCrown"></i>
									</a>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<!-- 动听单曲 -->
			<div class="a-highQuality">
				<div class="a-public">
					<a href="#" class="a-public-1">动听单曲</a>
					<a href="#" class="a-public-2">
						<span>更多</span>
						<i></i>
					</a>
				</div>
				<div class="a-highQuality-play">
					<ul>
						<li v-for="(item,indexs) in Melodioussingle" :key="indexs+'b'">
							<a href="#" @mouseenter="enter(indexs)" @mouseleave="leave()">
								<img :src="item.picture" alt="">
								<i></i>
								<span class="A-Masks"  v-show="indexs==current">
									<i></i>
									<em>
										<i></i>
										<b>{{item.amount}}</b>
									</em>
								</span>
							</a>
							<div>
								<a href="">
									<span :title="item.information">{{item.explain}}</span>
									<a class="A-zha">
										<em>{{item.explains}}</em>
										<i></i>
										<i class="AnCrown"></i>
									</a>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<!-- 精彩合唱 -->
			<div class="a-highQuality">
				<div class="a-public">
					<a href="#" class="a-public-1">精彩合唱</a>
					<a href="#" class="a-public-2">
						<span>更多</span>
						<i></i>
					</a>
				</div>
				<div class="a-highQuality-play">
					<ul>
						<li v-for="(item,indexs) in WonderfulChorus" :key="indexs+'b'">
							<a href="#" @mouseenter="enter(indexs)" @mouseleave="leave()">
								<img :src="item.picture" alt="">
								<i></i>
								<span class="A-Masks"  v-show="indexs==current">
									<i></i>
									<em>
										<i></i>
										<b>{{item.amount}}</b>
									</em>
								</span>
							</a>
							<div>
								<a href="">
									<span :title="item.information">{{item.explain}}</span>
									<a class="A-zha">
										<em>{{item.explains}}</em>
										<i></i>
										<i class="AnCrown"></i>
									</a>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div class="a-WonderChild1-right">
			
		</div>
		<div class="a-WonderChild1-bottom">
			
		</div>
		
	</div>
</template>

<script>
	import {Bhigh,Melodioussingle,WonderfulChorus} from '../../api/index'
export default {
  name: 'WonderChild1',
  data() {
  	return {
  		seen:false,
  		current:0,
		index:'',
		Bhigh:[],
		Melodioussingle:[],
		WonderfulChorus:[]
  	}
  },
   methods:{ 
      enter(index){
        this.seen = true;
        this.current = index;
      },
      leave(){
        this.seen = false;
        this.current = null;
      }
  	},
	created(){
		  Bhigh().then(res=>{
			  this.Bhigh = res.data
		  })
		  Melodioussingle().then(res=>{
		  			  this.Melodioussingle = res.data
		  })
		  WonderfulChorus().then(res=>{
		  			  this.WonderfulChorus = res.data
		  })
	}
 }
</script>

<style lang="scss" scoped>
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	body{
		font-family: "microsoft yahei", 黑体, Helvetica, Arial, 宋体, sans-serif;
		    font: 12px/1.5 STHeiti,"Microsoft Yahei",Arial,Simhei,Simsun,helvetica,sans-serif;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	
	.WonderChild1{
		width: 960px;
		height: 1000px;
		margin: 20px auto;
		background: #fff;
		padding: 0px 20px 25px;
	}	
		.a-WonderChild1-left{
			float: left;
			display: inline;
			width: 670px;
			padding-bottom: 30px;
			background: #fff;
			overflow: hidden;
			.a-highQuality{
				width: 670px;
				background: #fff;
				.a-highQuality-play{
					width: 680px;
					// margin-left: 20px;
					padding-top: 20px;
					overflow: hidden;
					ul{
						li{
							float: left;
							display: inline;
							margin-right: 10px;
							a{
								display: inline-block;
								width: 150px;
								height: 112px;
								overflow: hidden;
								position: relative;
								img{
									width: 100%;
								}
								i{
									background-image: url(http://cb.cdn.changbaimg.com/images/now/show/recomand-aio.png?v=201509151520);
									background-position: -20px -32px;
									display: block;
									width: 20px;
									height: 18px;
									position: absolute;
									right: 0;
									top: 0;
									z-index: 100;
									background-repeat: no-repeat;
								}
								.A-Masks{
									z-index: 300;
									transition: all .5s ease 0s;
									width: 100%;
									height: 100%;
									position: absolute;
									left: 0;
									top: 0;
									background-color: rgba(0, 0, 0, 0.5);
									color: #fff;
									i{
										background-image: url(http://cb.cdn.changbaimg.com/images/now/show/recomand-aio.png?v=201509151520);
										background-position: 0px -70px;
										display: block;
										width: 40px;
										height: 40px;
										margin: auto;
										position: absolute;
										left: 0;
										top: 0;
										right: 0;
										bottom: 0;
										background-repeat: no-repeat;
									}
									em{
										font-style: normal;
										width: 100%;
										position: absolute;
										bottom: 5px;
										left: 0;
										i{
											background-image: url(http://cb.cdn.changbaimg.com/images/now/show/recomand-aio.png?v=201509151520);
											background-position: -26px -130px;
											float: left;
											display: inline;
											width: 14px;
											height: 12px;
											margin: 2px 6px 0 7px;
											background-repeat: no-repeat;
										}
										b{
											font-weight: 400;
											margin-left: 27px;
											float: left;
											color: #fff;
											font-size: 12px;
										}
									}
								}
							}
							div{
								width: 150px;
								height: 50px;
								margin-bottom: 5px;
								a{
									width: 150px;
									height: 50px;
									span{
										font-size: 16px;
										color: #333;
										margin-top: 2px;
										height: 24px;
										white-space: nowrap;
										text-overflow: ellipsis;
										overflow: hidden;
									}
									.A-zha{
										margin-top: 2px;
										display: block;
										width: 100%;
										height: auto;
										overflow: hidden;
										em{
											color: #999;
											font-size: 14px;
											line-height: 21px;
											max-width: 109px;
											white-space: nowrap;
											text-overflow: ellipsis;
											overflow: hidden;
											height: 21px;
										}
										i{
											display: inline-block;
											float: left;
											background-image: url(http://cb.cdn.changbaimg.com/images/now/show/recomand-aio.png?v=201509151520);
											background-position: -24px -162px;
											width: 45px;
											height: 12px;
											margin: 7px 0 0 6px;
										}
										.AnCrown{
											display: inline-block;
											background-image: url(http://cb.cdn.changbaimg.com/images/now/show/recomand-aio.png?v=201509151520);
											background-position: -25px -286px;
											width: 24px;
											height: 13px;
											margin: 7px 0 0 4px;
											background-repeat: no-repeat;
										}
									}
								}
								a span:hover{
									color: red;
								}
							}
						}
					}
				}
			}
		}
		
	
		
		/* 公共 */
		.a-public{
			padding: 20px 0;
			border-bottom: solid 1px #eee;
			position: relative;
			width: 630px;
			margin-top: 5px;
			.a-public-1{
				padding-left: 10px;
				border-left: 4px solid #ff734e;
				font-size: 18px;
				vertical-align: middle;
				display: inline-block;
				color: #333;
			}
			.a-public-2{
				position: absolute;
				font-size: 14px;
				right: 0;
				padding-right: 18px;
				span{
					color: #666;
					line-height: 24px;
					vertical-align: middle;
					display: inline-block;
				}
				i{
					display: inline-block;
					width: 12px;
					height: 12px;
					background-image:url(http://cb.cdn.changbaimg.com/images/now/show/recomand-aio.png?v=201509151520);
					background-position: top right;
					position: absolute;
					top: 29%;
					right: 0;
				}
			}
		}
	.a-public-1:hover{
		color: red;
	}
</style>
