<template>
  <div id="app">
		<HE />
    <!-- <router-view/> -->
  </div>
</template>

<script>
import HE from './components/HelloWorld.vue'
export default {
  name: 'App',
	components:{
	  HE
	}
}
</script>

<style>
#app {
  background-color: rgb(240, 240, 240);
  font-family: "microsoft yahei", 黑体, Helvetica, Arial, 宋体, sans-serif;
  margin: 0px;
  padding: 0px;
}
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
	body{
		background-color: #f0f0f0!important;
	}
	i{
		font-style: normal;
		font-weight: 400;
	}
	img{
		    border: none;
	}
</style>
