<template>
		<div class="a-WonderChild3">
			<div class="a-songSheet">
					<ul>
						<li v-for="(item,index) in QsongSheet" :key="index+'a'">
							<a href="#">
								<img :src="item.picture" alt="">
								<span>
									<i></i>
									<p>{{item.amount}}</p>
								</span>
							</a>	
							<p><a href="#">{{item.explain}}</a></p>
						</li>
					</ul>
			</div>
			<!-- 分页器 -->
			<!-- <div class="block">
					<el-pagination
					  @size-change="handleSizeChange"
					  @current-change="handleCurrentChange"
					  :current-page.sync="pageNo"
					  :page-sizes="pageSizesList"
					  :page-size="pageSize"
					  layout="total, prev, pager, next, jumper"
					  :total="totalDataNumber">
					</el-pagination>
			</div> -->	
		</div>
</template>
 
<script>
	import {QsongSheet} from '../../api/index'
export default {
  name: 'WonderChild3',
  data () {
	return {
		QsongSheet:[],
		pageNo:1,
		pageSize:10,
		pageSizesList: [10, 15, 20, 30, 50],
		tableData: [],//返回的结果集合
		totalDataNumber: 0,//数据的总数,
	}
  },
  created(){
	  QsongSheet().then(res=>{
		  this.QsongSheet = res.data
	  })
  }
}
</script>

<style>
	.block{
		text-align: center !important;
	}
	.el-pagination.is-background .el-pager li:not(.disabled).active{
		background-color:red !important;
	}
</style>
		
<style lang='scss' scoped>
	.a-WonderChild3{
		    width: 960px;
			height: 845px;
			margin: 20px auto;
			background: #fff;
			padding: 30px 30px 25px;
		.a-songSheet{
			display: flex;
			flex-wrap: wrap;
			width: 930px;
			justify-content: center;
			align-items:  center;
			margin-bottom: 10px;
			ul{
				li{
					float: left;
					display: inline;
					width: 280px;
					overflow: hidden;
					margin: 0 30px 26px 0;
					a{
						display: block;
						width: 280px;
						height: 130px;
						position: relative;
						overflow: hidden;
						img{
						    width: 100%;
							transition: all .5s ease-in-out;
						}
						span{
							display: block;
							width: 100%;
							height: 24px;
							line-height: 24px;
							position: absolute;
							left: 0;
							bottom: 0;
							z-index: 200;
							background: #000;
							opacity: .5;
							i{
								background-image: url(http://cb.cdn.changbaimg.com/images/now/show/recomand-aio.png?v=201509151520);
								background-position: -26px -130px;
								float: left;
								display: inline;
								width: 14px;
								height: 12px;
								margin: 6px 6px 0 10px;
								background-repeat: no-repeat;
							}
							p{
								float: left;
								display: inline;
								color: #fff;
								height: 24px;
								line-height: 24px;
							}
						}
					}
					p{
						a{
							float: left;
							width: 280px;
							height: 20px;
							color: #333;
							font-size: 16px;
							text-align: left;
							margin-top: 9px;
						}
					}
				}
			}
				li a img:hover{
					transform: scale(1.1);
				}
				li p a:hover{
					color: red;
				}
		}
	}
</style>
