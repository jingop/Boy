<template>
    <div class="Musician">
        <div class="public-area musicIndex">
            <div class="cbmusician">
                <img src="//cb.cdn.changbaimg.com/assets/images/web/musician/cbmusician.png">
            </div>
            <li class="gobtns">
                <a class="gobtn" style="display: block;" href="https://changba.com/official_login.php?redirect=aHR0cHMlM0ElMkYlMkZjaGFuZ2JhLmNvbSUyRm5vdyUyRm11c2ljaWFuUGFnZSUyRm11c2ljaWFuSW5kZXgucGhw">
                     现在加入
                </a>
            </li>
            <div class="cutline">
                <img src="//cb.cdn.changbaimg.com/assets/images/web/musician/cutline.png?v=24d5a16b78">
                <span>音乐人特权</span>
            </div>
            <div class="privilege">
            <div class="privilege1">
                <img src="//cb.cdn.changbaimg.com/assets/images/web/musician/privilege1.png?v=94462b6445">
                <h2>音乐人认证+专属头像装扮</h2>
                <p>申请通过即可获得 “唱吧音乐人” 永久认证，解锁音乐人专属头像装扮，让您从4亿用户中脱颖而出。</p>
            </div>
            <div class="privilege2">
                <img src="//cb.cdn.changbaimg.com/assets/images/web/musician/privilege2.png?v=125160e858">
                <h2>音乐人专区</h2>
                <p>音乐人优质原创作品和翻唱作品都可进入专区获得全站推荐，给您更多曝光机会，快速积累粉丝。</p>
            </div>
            <div class="privilege3">
                <img src="//cb.cdn.changbaimg.com/assets/images/web/musician/privilege3.png?v=4d530eba01">
                <h2>作品管理</h2>
                <p>更强大更快捷的歌曲上传后台，可上传音频以及视频作品，编辑作品封面、歌词等信息，发布即上线。</p>
            </div>
            <div class="privilege4">
                <img src="//cb.cdn.changbaimg.com/assets/images/web/musician/privilege4.png?v=01eeecb478">
                <h2>线下活动</h2>
                <p>音乐人将有更多机会参与线下 Live 巡演、综艺节目录制，从线上到线下全方位对您进行扶持。</p>
            </div>
        </div>
            
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style>
.Musician{
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    padding-top: 30px;
}
.public-area{
    width: 960px;
    margin: 0 auto;   
    background-color: #fff;
}
.cbmusician{
    width: 370px;
    height: 259px;
    /* background-color: pink; */
	margin: 0 auto;
}
.cbmusician img {
    width: 100%;
    height: 100%;
    padding-top: 30px;
}
.gobtns{
    width: 120px;
    height: 41px;
    line-height: 41px;
    text-align: center;
    list-style: none;
    padding-top: 0%;
    color: #fff;
    background: #ff5046;
    border-radius: 60px;
    margin-left: 44%;
    margin-top: 8%;
    /* margin-bottom: 8%; */

}
.gobtn {
    text-decoration: none;
    color: white;
}
.cutline {
    width: 920px;
    height: 19px;
    margin: 60px auto 30px;
    position: relative;
}
.cutline span {
    display: block;
    width: 100px;
    color: #999;
    font-size: 18px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -40px;
    margin-top: 2px;
}
.privilege {
    width: 100%;
    height: 285px;
    position: relative;
}
.privilege1 {
    width: 25%;
    left: 0;
    float: left;
}
.privilege2 {
    width: 25%;
    text-align: center;
    left: 25%;
    float: left;
}
.privilege3 {
    width: 25%;
    text-align: center;
    left: 50%;
    float: left;
}
.privilege4 {
    width: 25%;
    height: 130px;
    text-align: center;
    left: 75%;
    float: left;
}
.privilege1 img {
    width: 92px;
    height: 100px;
    margin: 15px 70px;
}
.privilege1 h2 {
    font-size: 16px;
    color: #333;
    text-align: center;
}
.privilege1 p {
    width: 150px;
    font-size: 12px;
    color: #999;
    margin: 15px auto;
    text-align: left;
}
.privilege2 img {
    width: 108px;
    height: 65px;
    margin: 32px 0;
}
.privilege2 h2 {
    font-size: 16px;
    color: #333;
}
.privilege2 p {
    width: 150px;
    font-size: 12px;
    color: #999;
    margin: 15px auto;
    text-align: left;
}
.privilege3 img {
    width: 95px;
    height: 92px;
    margin: 19px 0;
}
.privilege3 h2 {
    font-size: 16px;
    color: #333;
}
.privilege3 p {
    width: 150px;
    font-size: 12px;
    color: #999;
    margin:15px auto;
    text-align: left;
}
.privilege4 img {
    width: 84px;
    height: 94px;
    margin: 18px 0;
}
.privilege4 h2 {
    font-size: 16px;
    color: #333;
}
.privilege4 p {
    width: 150px;
    font-size: 12px;
    color: #999;
    margin: 15px auto;
    text-align: left;
}
</style>
