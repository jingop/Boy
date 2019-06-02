<template>
    <div class="Layout"> 
        <div class="Layouts">
            <div class="home-download-container public-area">
                <img src="https://aliimg.changba.com/promote/b5c15049e343f5f66edd76b28dc3a092.png" class="home-download-ktv" alt="手机里的KTV">
                <a href="#home-download" class="home-download-link">免费下载
                    <div class="mfxz"></div>
                </a>
            </div>
            <div class="home-display-container public-area">
                <img src="//cb.cdn.changbaimg.com/images/officialwebsite/index/top1.png?ver=1.0.2" class="home-display-img home-display-img1" alt="唱吧App">
                <img src="//cb.cdn.changbaimg.com/images/officialwebsite/index/top2.png?ver=1.0.2" class="home-display-img home-display-img2" alt="唱吧App">
                <img src="//cb.cdn.changbaimg.com/images/officialwebsite/index/top3.png?ver=1.0.3" class="home-display-img home-display-img3" alt="唱吧App">
                <img src="//cb.cdn.changbaimg.com/images/officialwebsite/index/top4.png?ver=1.0.2" class="home-display-img home-display-img4" alt="唱吧App">
                <img src="//cb.cdn.changbaimg.com/images/officialwebsite/index/top5.png?ver=1.0.2" class="home-display-img home-display-img5" alt="唱吧App">
            </div>
        </div>
        <div style="width:100%;height:100%;background-color:#f0f0f0">
            <ul class="home-feature-ul">
                <li v-for="(item,index) in Layout_item" :key="index" class="home-feature-li">
                    <img :src="item.img" alt="">
                    <div class="home-feature-description">{{item.title}}</div>
                    <div class="home-feature-li-div"></div>
                </li>   
            </ul>
            <div class="public-area home-version-container" id="home-download" style="margin-top: 100px;">
                <router-link to="" target="_blank" id="ios_link" href="http://changba.com/appstore.php?from=indexpage" title="iPhone版下载">
                    <span class="home-icons home-iphone-icon">iPhone</span>    
                </router-link>
                <router-link to="" target="_self" id="android_link" href="http://changba.com/redirect/latest_app.php" title="Android版下载">
                    <span class="home-icons home-android-icon">Android</span>
                </router-link>
                <router-link to="" target="_blank" href="http://itunes.apple.com/cn/app/id605673296?ls=1&amp;mt=8" title="iPad版下载">
                    <span class="home-icons home-ipad-icon">iPad</span>
                </router-link>
                <router-link to="" target="_blank" href="http://www.windowsphone.com/zh-cn/store/app/%E5%94%B1%E5%90%A7/30406e75-b3dd-4e26-aeca-ecdd7fe3de31" title="WinPhone版下载">
                    <span class="home-icons home-wp-icon">WinPhone 8</span>
                </router-link>
                <router-link to="" href="javascript:;" class="home-icons home-qr-icon">
                    二维码
                </router-link>
            </div>
        </div>
    </div>
   
</template>
<script>
import {Layout_item} from '../../api/index'
export default {
    name:"Layout",
    data() {
        return {
           Layout_item:[]
        }    
    },
    created(){
         Layout_item().then(res=>{
            this.Layout_item=res.data
        })
    }
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
    margin: 0 auto;
}
.Layoutd{
    width: 100%;
    height: 100%;
    background-color: #ff5046;
    overflow: hidden;
}
.public-area {
    width: 960px;
    margin: 0 auto;
    height: 190px;
    /* background-color: #ff5046; */
    /* overflow: hidden; */
    display: block;
}
.home-download-ktv {
    display: block;
    width: 339px;
    margin: 20px auto;
}
.home-download-link {
    display: block;
    margin: 0 auto;
    width: 165px;
    height: 48px;
    line-height: 48px;
    padding-left: 60px;
    color: #fff;
    font-family: 黑体;
    font-size: 20px;
    background: url(//cb.cdn.changbaimg.com/images/officialwebsite/index/download.png?ver=1.0.0) no-repeat top left;
    text-decoration: none;
    position: relative;
	margin-top: 10px;
}
.mfxz{
    width: 162px;
    height: 48px;
    background-color: white;
    border-radius: 250px;
    position: absolute;
    top:0;
    left: 0;
    opacity: 0;
}
.mfxz:hover{
    opacity:0.5
}
.home-display-container {
    position: relative;
    margin-top: 0px;
    height: 413px;
    /* margin-bottom: 41px; */
    -webkit-perspective: 1600;
    perspective: 1600;
    -webkit-perspective-origin: 50% 50%;
    perspective-origin: 50% 50%;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
.home-display-img1 {
    top: 82px;
    left: -15px;
    -moz-animation: img1 .7s ease-out .5s backwards;
    -o-animation: img1 .7s ease-out .5s backwards;
    -webkit-animation: img1 .7s ease-out .5s backwards;
    animation: img1 .7s ease-out .5s backwards;
}
.home-display-img2 {
    left: 155px;
    bottom: 44px;
    -moz-animation: img2 .7s ease-out .2s backwards;
    -o-animation: img2 .7s ease-out .2s backwards;
    -webkit-animation: img2 .7s ease-out .2s backwards;
    animation: img2 .7s ease-out .2s backwards;
}
.home-display-img3 {
    left: 308px;
    top: -15px;
    -moz-animation: img3 .8s linear backwards;
    -o-animation: img3 .8s linear backwards;
    -webkit-animation: img3 .8s linear backwards;
    animation: img3 .8s linear backwards;
}
.home-display-img4 {
    left: 508px;
    top: 4px;
    -moz-animation: img4 .7s ease-out .2s backwards;
    -o-animation: img4 .7s ease-out .2s backwards;
    -webkit-animation: img4 .7s ease-out .2s backwards;
    animation: img4 .7s ease-out .2s backwards;
}
.home-display-img5 {
    left: 653px;
    top: -19px;
    -moz-animation: img5 .7s ease-out .5s backwards;
    -o-animation: img5 .7s ease-out .5s backwards;
    -webkit-animation: img5 .7s ease-out .5s backwards;
    animation: img5 .7s ease-out .5s backwards;
}
.home-display-img {
    position: absolute;
}

/* 图片部分---------------------------------------------------------------------------------------------------------------- */

.home-feature-ul {
    width: 960px;
    height: 465px;
    padding: 58px 0;
    text-align: justify;    
}
.Layouts{
    background-color: #ff5046;
    width: 100%;
    height: 687px;
    overflow: hidden;
}
.home-feature-li{
    display: inline-block;
    width: 232px;
    height: 450px;
    overflow: hidden;
    vertical-align: top;
    font-size: 17px;
    color: #444;
    text-align: center;
    float: left;
    margin-left: 8px;
}
.home-feature-li>img{
    width: 232px;
    height: 412px;
    float: left;
}
.home-feature-li-div>img{
    width: 232px;
    height: 412px;
    opacity: 0;
    position: relative;
    background-color: white;
    top: 0;
    left:0;
}
.home-feature-li>img:hover{
    opacity: 0.5;
}
.home-feature-description {
    width: 232px;
    height: 17px;
    margin-top: 15px;
    line-height: 17px;
    text-align: center;    display: inline-block;
}
#home-download a {
    display: inline-block;
    vertical-align: top;
}
.home-version-container>a{
    width: 184px;
    height: 184px;
}
.public-area .home-version-container{
    width: 960px;
    height: 248px;
}
.home-icons {
    display: inline-block;
    background: url(//cb.cdn.changbaimg.com/images/officialwebsite/index/home_icons.png?ver=1.0.0) no-repeat center center;
    width: 184px;
    height: 184px;
    color: #fff;
    line-height: 184px;
    box-sizing: border-box;
    padding-top: 36px;
    vertical-align: top;
    text-align: center;
    overflow: hidden;
    /* -o-transition: all .4s; */
    /* -moz-transition: all .4s; */
    /* -webkit-transition: all .4s; */
    transition: all .4s;
    background-repeat:no-repeat;
    opacity: 1;
    background-size: cover;
}
.home-icons:hover{
    /* background-size: 600px 600px; */
    background-repeat:no-repeat;
    /* opacity:1; */
    opacity: 0.5;
    box-shadow: 1px solid black;
    width:190px;
    height:190px;
}
.home-iphone-icon {
    background-position: 0 0;
        /* transition: width 0.3s; */
}
.home-android-icon {
    background-position: 25%;
    overflow: hidden;
}
.home-ipad-icon {
    background-position: 50%;
    overflow: hidden;
}
.home-wp-icon {
    background-position: 75%;
     overflow: hidden;
}
.home-qr-icon {
    background-position: 100%;
     overflow: hidden;
}
</style>
