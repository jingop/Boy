<template>
<div class="Livebroadcast">
    <div class="public-area1" style="padding-top:30px;">    
        <div class="zhibo">
            <a href="https://mars.changba.com/" target="_blank" class="marslive" style="position: relative;">
                <img src="//cb.cdn.changbaimg.com/assets/images/web/zhibo/marslive.png" style="">
                <div class="but">火星直播</div>
            </a>
        </div>
    </div>
       
</div>    
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

<style>
.Livebroadcast{
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
}
.main {
    width: 684px;
    height: 322px;
    padding: 50px 134px 60px 140px;
    margin: 30px auto 39px;
    background-color: #fff;
    border: 1px solid #dadada;
}
.public-area1 {
    width: 960px;
    margin: 0 auto;
    background-color: #f0f0f0;
}
.zhibo {
    width: 100%;
    height: 402px;
    background: #fff;
    margin: 0 0 20px;
    border: 1px solid #dadada;
    padding-top: 120px;
    text-align: center;
}
.marslive {
    display: block;
    float: none;
    /* width: 49%; */
        width: 100px;
    height: 100px;
    /* background: red; */
	margin: 0 auto;
}
.marslive img {
    width: 190px;
    height: 155px;
}
.but{
    position: absolute;
    bottom: -58px;
    /* text-decoration: none; */
    /* margin: -37px; */
    left: 100px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 163px;
    height: 44px;
    line-height: 44px;
    border: 2px solid #ff5046;
    border-radius: 25px;
    text-align: center;
    color: #ff5046;
    font-size: 19px;
    background-color: #ffffff;
}
</style>
