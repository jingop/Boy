<template>
	<div class="a-WholeCountry">
		<div class="a-WholeCountry1">
			<span class="NewlyAdded1"></span>
			<span class="NewlyAdded2">新增排行</span>
			<span class="NewlyAdded3"></span>
		</div>
		<div class="liu-Ranking">
			<div class="cc" v-for="item in SingerInformation" :key="item" :class="[ {'gray': item.styles=='gray'}, {'blue': item.styles=='blue'}, {'green': item.styles=='green'}]">
				<a href="#" class="bbt">
					<i class="number">{{item.id}}</i>
					<span class="colors"></span>
					<img :src="item.picture">
				</a>
				<div class="A-Masks">
					<a href="#">
						{{item.explain}}
						<p>{{item.singer}}</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {SingerInformation} from '../../api/index'
export default {
  name: '',
  data() {
     return {
        SingerInformation:[]
     }
	 
 },
 created(){
 	  SingerInformation().then(res=>{
 		  this.SingerInformation = res.data
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
	.a-WholeCountry{
		z-index: 100;
		width: 960px;
		height: 1200px;
		margin: 20px auto;
		background-color: #fff;
		.a-WholeCountry1{
			width: 960px;
			padding: 20px 20px 0;
			float: left;
			.NewlyAdded1 {
				float: left;
				width: 404px;
				height: 1px;
				border-bottom: 1px solid #eee;
				overflow: hidden;
				margin-top: 14px;
			}
			.NewlyAdded2 {
				float: left;
				color: #aaa;
				font-size: 18px;
				width: 112px;
				text-align: center;
			}
			.NewlyAdded3{
				float: left;
				width: 404px;
				height: 1px;
				border-bottom: 1px solid #eee;
				margin-top: 14px;
				overflow: hidden;
			}
			
		}
		 .liu-Ranking{
			 display: inline;
			 width: 940px;
			 margin-left: 20px;
			 padding-top: 20px;
			 overflow: hidden;
			 float: left;
			 .cc{
				 float: left;
				 display: inline;
				 width: 215px;
				 // height: 302px;
				 // background: red;
				 margin: 0 20px 0 0;
				 .bbt{
					// width: 296px;
					// height: 222px;
					overflow: hidden;
					position: relative;
					float: left;
					.number{
						display: block;
						width: 48px;
						height: 48px;
						line-height: 48px;
						position: absolute;
						font-size: 12px;
						color: #fff;
						text-align: center;
						left: -10px;
						top: -10px;
						z-index: 200;
					}
					.colors{
						position: absolute;
						left: 0;
						top: 0;
						z-index: 100;
						width: 0;
						height: 0;
						border-top: 48px solid #333;
						border-right: 48px solid transparent;
					}
					
					
				 }
				 .A-Masks{
					float: left;
					width: 100%;
					overflow: hidden;
					height: auto;
					margin-bottom: 27px;
					a{
						height: 45px;
						margin-top: 6px;
						i{
							// background-image: url(http://cb.cdn.changbaimg.com/images/now/show/recomand-aio.png?v=201509151520);
							background-position: -26px -195px;
							width: 14px;
							height: 12px;
							margin: 27px 0 0 4px;
							background-repeat: no-repeat;
							float: left;
							display: inline;
						}
					}
				 }
			 }
		 }	 
	}
	.tt>.bbt:nth-child(1)  .number{
	
	}
	.tt>.bbt:nth-child(1) span{
		
	}
	// .cc>.bbt:nth-child(1) span{
	// 	border-top: 70px solid #ff5046; //红色
	// }
	// .cc>.bbt:nth-child(3) span{
	// 	border-top: 70px solid #2aacf7; //蓝色
	// }
			.gray{
				width: 296px !important;
				margin: 0 16px 0 0 !important;
				.bbt{
					width: 296px !important;
					height: 222px !important;
					.number{
						width: 70px !important;
						height: 70px !important;
						line-height: 70px !important;
						font-size: 24px !important;
						font-family: Arial,'Microsoft Yahei' !important;
						left: -13px !important;
						    color: #fff !important;
						text-align: center !important;
						top: -10px !important;
						z-index: 200 !important;
					}
					.colors{
						border-top: 70px solid #ff5046 !important;
						border-right: 70px solid transparent !important;
					}
					img{
						width: 100%;
					}
				}
				.A-Masks{
					width: 100% !important;
					margin-bottom: 27px !important;
					float: left !important;
					a{
						font-size: 16px !important;
						color: #333 !important;
						margin-top: 6px !important;
						height: 24px !important;
					}
					P{
						color: #999;
						font-size: 14px !important;
						line-height: 21px !important;
						margin-top: 5px !important;
					}
				}
				
            }
            .blue{
              width: 296px !important;
              margin: 0 16px 0 0 !important;
              .bbt{
              	width: 296px !important;
              	height: 222px !important;
              	.number{
              		width: 70px !important;
              		height: 70px !important;
              		line-height: 70px !important;
              		font-size: 24px !important;
              		font-family: Arial,'Microsoft Yahei' !important;
              		left: -13px !important;
					color: #fff !important;
              		text-align: center !important;
              		top: -10px !important;
              		z-index: 200 !important;
              	}
              	.colors{
              		border-top: 70px solid #ffae00 !important;
              		border-right: 70px solid transparent !important;
              	}
              	img{
              		width: 100%;
              	}
              }
              .A-Masks{
              	width: 100% !important;
              	margin-bottom: 27px !important;
              	float: left !important;
              	a{
              		font-size: 16px !important;
              		color: #333 !important;
              		margin-top: 6px !important;
              		height: 24px !important;
              	}
              	P{
              		color: #999;
              		font-size: 14px !important;
              		line-height: 21px !important;
              		margin-top: 5px !important;
              	}
              }
            }
            .green{
                  width: 296px !important;
                margin: 0 16px 0 0 !important;
                .bbt{
                	width: 296px !important;
                	height: 222px !important;
                	.number{
                		width: 70px !important;
                		height: 70px !important;
                		line-height: 70px !important;
                		font-size: 24px !important;
                		font-family: Arial,'Microsoft Yahei' !important;
                		left: -13px !important;
                					color: #fff !important;
                		text-align: center !important;
                		top: -10px !important;
                		z-index: 200 !important;
                	}
                	.colors{
                		border-top: 70px solid #2aacf7 !important;
                		border-right: 70px solid transparent !important;
                	}
                	img{
                		width: 100%;
                	}
                }
                .A-Masks{
                	width: 100% !important;
                	margin-bottom: 27px !important;
                	float: left !important;
                	a{
                		font-size: 16px !important;
                		color: #333 !important;
                		margin-top: 6px !important;
                		height: 24px !important;
                	}
                	P{
                		color: #999;
                		font-size: 14px !important;
                		line-height: 21px !important;
                		margin-top: 5px !important;
                	}
                }
            }
	
</style>
