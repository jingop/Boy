<template>
	<div id="Playground">
		<div class="Playground-yi">
			<div class="Playground-er">
				<img :src="QStarWorks[index].picture">
				<div class="A-zha">
					<p class="Playground-san">{{QStarWorks[index].explain}}</p>
					<p class="Playground-si">{{QStarWorks[index].explains}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
		import {QStarWorks} from '../../api/index'
	export default {
	  name: 'pp',
	  data () {
          return{
			  index:0,
			  QStarWorks:JSON.parse(localStorage.getItem("QStarWorks"))
		  }
	  },
	  mounted(){
        this.index=this.$route.query.index
		console.log(this.index)
	  }
	}
</script>  

<style lang='scss' scoped>
	.Playground-yi{
		width: 980px;
		background-color: #fff;
		margin: 20px auto;
		padding: 40px 120px 40px;
		.Playground-er{
			width: 500px;
			/* background-color: red; */
			img{
				display:inline-block;
			}
			.A-zha{
				width: 150px;
				height: 100px;
				/* background-color: aqua; */
				float: right;
				margin-right: 120px;
				margin-top: 30px;
				.Playground-san{
					margin-bottom: 20px;
				} 
			}
		}
	}
</style>
