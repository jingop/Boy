<template>
	
		<div class="a-WonderfulPerformance">		
			<!-- 轮播图 -->
			<div class="a-WheelPlanting">
				<div class="block">
					<el-carousel height="400px">
						<el-carousel-item v-for="(item,index) in logList" :key="index">
							<img :src="item.today" style="width: 100%; height: 400px;">
						</el-carousel-item>
					</el-carousel>
				</div>
			</div>
			<!-- Top news -->
			<div class="a-TopNews">
				<div class="a-public">
					<h3>Top news</h3>
					<a href="">
						<span>更多</span>
						<i></i>
					</a>
				</div>
				<div class="a-news">
					<ul>
						<li v-for="(item,index) in QTopNews" :key="index+'a'">
							<a href="">
								<div>
									<img :src="item.picture">
								</div>
								<span>{{item.explain}}</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<!-- 明星 -->
			<div class="a-Star">
				<div class="a-public">
					<h3>明星</h3>
					<a href="">
						<span>更多</span>
						<i></i>
					</a>
				</div>
				<ul>
					<li v-for="(item,index) in QStar" :key="index+'b'">
						<a href="">
							<img :src="item.picture" :title="item.information">
							<span>{{item.explain}}</span>
						</a>
					</li>
				</ul>
			</div>
			<!-- 明星作品 -->
			<div class="a-StarWorks">
				<div class="a-public">
					<h3>明星作品</h3>
					<a href="">
						<span>更多</span>
						<i></i>
					</a>
				</div>
				<ul>
					<li v-for="(item,index) in QStarWorks" :key="index+'c'">
						<div  @mouseenter="enter(index)" @mouseleave="leave()">
							<img :src="item.picture" alt="">
								<router-link :to='{path:"Playground",query:{index:index}}' v-show="seen&&index==current">
									<i></i>
									<p>{{item.amount}}</p>
									<span></span>
								</router-link>
						</div>
						<p>{{item.explain}}</p>
						<span>{{item.explains}}</span>
					</li>
				</ul>
			</div>
			<!--入驻机构  -->
			<div class="a-EntryInstitution">
				<div class="a-public">
					<h3>入驻机构</h3>
					<a href="">
						<span>更多</span>
						<i></i>
					</a>
				</div>
				<ul>
					<li v-for="(item,index) in QEntryInstitution" :key="index+'d'">
						<a href="#">
							<img :src="item.picture">
						</a>
						<p>{{item.explain}}</p>
					</li>
				</ul>
			</div>
			<!-- 合作伙伴 -->
			<div class="a-CooperativePartner">
				<div class="a-public">
					<h3>合作伙伴</h3>
				</div>
				<ul>
					<li v-for="(item,index) in QCooperativePartner" :key="index+'e'">
						<a href="#">
							<img :src="item.picture" :title="item.information">
						</a>
					</li>
				</ul>
			</div>
		</div>
	
</template>

<script>
	import {logList,QTopNews,QStar,QStarWorks,QEntryInstitution,QCooperativePartner} from '../../api'
export default {
  name: 'WonderChild4',
  data () {
	return {
		seen:false,
		current:0,
		logList:[], //轮播图
		QTopNews: [], //Top news
		QStar: [], //明星
		QStarWorks:[], //明星作品
		QEntryInstitution: [], // 入驻机构
		QCooperativePartner: [], //合作伙伴
	}
  },
  methods:{ //明星作品  显示隐藏
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
	  logList().then(res=>{ // 轮播图
		  this.logList = res.data
	  }),
	  QTopNews().then(res=>{ //Top news
	  		  this.QTopNews = res.data
	  }),
	  QStar().then(res=>{ //明星
	  		  this.QStar = res.data
	  })
	  QStarWorks().then(res=>{ //明星作品
		  this.QStarWorks = res.data
		  localStorage.setItem("QStarWorks",JSON.stringify(res.data))

	  })
	  QEntryInstitution().then(res=>{ //入驻机构
	  		  this.QEntryInstitution = res.data
	  })
	  QCooperativePartner().then(res=>{ //合作伙伴
	  		  this.QCooperativePartner = res.data
	  })
	  
	  
	  }
}
</script>

<style lang='scss' scoped>
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	.a-WonderfulPerformance{
		width: 960px;
		margin: 20px auto;
		background: #fff;
		padding: 20px 20px 25px;
		font-family: 'microsoft yahei',黑体,Helvetica,Arial,"\5b8b\4f53",sans-serif;
	}

		
			/* Top news */
			.a-TopNews{
				.a-news{
						font-size: 0;
					li{
						width: 294px;
						display: inline-block;
						margin: 20px 19px 20px 0;
						vertical-align: top;
						a{
							div{
								width: 294px;
								height: 118px;
								overflow: hidden;
								img{
									width: 100%;
									vertical-align: middle;
									transition: transform .4s linear;
									margin-bottom: 16px;
								}
							}
							span{
								color: #333;
								line-height: 24px;
								font-size: 16px;
							}
							
						}
					}
					 li:nth-of-type(3n) {
						margin-right: 0;
					}
					li a img:hover{
						transform: scale(1.1);
					}
					li a span:hover{
						color: red;
					}
				}
			}
			/* 明星 */
			.a-Star{
				ul{
					li{
						display: inline-block;
						padding: 20px 0;
						width: 152px;
						text-align: center;
						vertical-align: top;
						a{
							display: block;
							width: 126px;
							margin: 0 auto;
							img{
								height: 126px;
								width: 126px;
								border-radius: 100%;
								margin-bottom: 10px;
								transition: transform .4s linear;
							}
							span{
								text-align: center;
								font-size: 14px;
								color: #ea6131;
							}
						}
					}
					li a img:hover{
						transform: scale(1.1);
					}
				}
			}
			/* 明星作品 */
			.a-StarWorks{
				ul{	
					font-size: 0;
					padding-top: 20px;
					li{
						width: 220px;
						display: inline-block;
						margin-right: 13px;
						margin-bottom: 28px;
						vertical-align: top;
						div{
							width: 220px;
							height: 164px;
							overflow: hidden;
							position: relative;
							img{
								width: 100%;
								height: 100%;
								object-fit: cover;
							}
							a{
								position: absolute;
								width: 100%;
								height: 100%;
								background-color: rgba(0,0,0,.5);
								color: #fff;
								top: 0;
								left: 0;
								i{
									position: absolute;
									background-image: url(http://cb.cdn.changbaimg.com/images/now/show/recomand-aio.png?v=201509151520);
									top: 50%;
									background-position: 0 -70px;
									width: 40px;
									height: 40px;
									left: 50%;
									transform: translate(-50%,-50%);
								}
								p{
									position: absolute;
									bottom: 10px;
									left: 14px;
									padding-left: 20px;
									font-size: 12px;
									line-height: 16px;
								}
								span{
									position: absolute;
									background-image: url(http://cb.cdn.changbaimg.com/images/now/show/recomand-aio.png?v=201509151520);
									top: 89%;
									background-position: -26px -130px;
									width: 14px;
									height: 12px;
									left: 15px;
									transform: translateY(-50%);

								}
							}
						}
						p{
							font-size: 16px;
						}
						span{
							color: #ea6131;
							font-size: 14px;
							line-height: 24px;
						}
						
					}
					
					li:nth-of-type(4n) {
						margin-right: 0;
					}
				}
			}
			/* 入驻机构 */
			.a-EntryInstitution{
				ul{
					font-size: 0;
					li{
						display: inline-block;
						padding: 20px 0;
						width: 152px;
						text-align: center;
						vertical-align: top;
						img{
							height: 126px;
							width: 126px;
							border-radius: 100%;
							margin-bottom: 10px;
							transition: transform .4s linear;
						}
						p{
							text-align: center;
							font-size: 14px;
							color: #666;
						}
					}
					li a img:hover{
						transform: scale(1.1);
					}
				}
			}
			/* 合作伙伴 */
			.a-CooperativePartner{
				ul{
					font-size: 0;
					li{
						display: inline-block;
						width: 80px;
						height: 80px;
						background-color: #6495ed;
						margin-right: 30px;
						img{
							width: 100%;
							height: 100%;
						}
					}
				}
			}
			/* 公共 */
			.a-public{
				padding: 20px 0;
				border-bottom: solid 1px #eee;
				position: relative;
				h3{
					padding-left: 10px;
					border-left: 4px solid #ff734e;
					font-size: 18px;
					vertical-align: middle;
					display: inline-block;
					color: #333;
				}
				a{
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
</style>
 