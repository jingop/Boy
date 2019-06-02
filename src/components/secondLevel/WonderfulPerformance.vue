<template>
	<div id="WonderfulPerformance">
		<div class="a-Navigation">
			<div>
				<ul>
					<li>
						<router-link to="/one" exact>编辑推荐</router-link>
					</li>
					<li>
						<router-link to="/two" exact>全国榜</router-link>
					</li>
					<li>
						<router-link to="/three" exact>歌单</router-link>
					</li>
					<li>
						<router-link to="/WonderfulPerformance" exact>明显专区</router-link>
					</li>
					<li>
						<router-link to="/wu" exact>附件作品</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div>
			 <router-view/>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	body{
		
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	// .a-WonderfulPerformance{
	// 	width: 960px;
	// 	margin: 20px auto;
	// 	background: #fff;
	// 	padding: 20px 20px 25px
	// }
	.a-Navigation a.router-link-active{
		   color: red !important;
		}
	
	#WonderfulPerformance{
		width: 100%;
		background: #f0f0f0!important;
		font-family: 'microsoft yahei',黑体,Helvetica,Arial,"\5b8b\4f53",sans-serif;
		//导航栏
		.a-Navigation{
			width: 100%;
			height: 60px;
			background: #ffffff;
			div{
				width: 960px;
				margin: 0 auto;
				ul{
					width: 734px;
					float: right;
					li{
						display: inline-block;
						height: 60px;
						float: left;
						cursor: pointer;
						margin-left: 25px;
						a{
							color: #333;
							font-size: 16px;
							line-height: 60px;
							padding: 0 18px;
						}
					}
				}
			}
			
		}
	}
</style>