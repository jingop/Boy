<template>
    <div class="JoinUs">
        <div class="main clearfix">
            <div class="left-item">
                <img src="//cb.cdn.changbaimg.com/images/officialwebsite/joinus/sociatylogo.jpg" alt="sociaty-pic" class="sociaty-pic">
                <p class="sociaty-describle">我的专业鞋,时尚时尚时尚</p>
                 <router-link to="SheZhao" class="university-link" style="text-decoration: none;" >社招</router-link>
                
            </div>
            <div class="right-item">
                <img src="//cb.cdn.changbaimg.com/images/officialwebsite/joinus/universitylogo.jpg" alt="" class="university-pic">
                <p class="university-describle">感谢老师们的培养,我要去闯荡</p>
                 <router-link to="SocialRecruitment" class="university-link" style="text-decoration: none;" >校招</router-link>
                <!-- <a class="university-link" href="http://changba.com/now/university.php" style="text-decoration: none;">校招</a> -->
                 <!-- <span @click="See(item.qj_url)" class="university-link">校招</span> -->
            </div>
        </div>
        <router-view/>
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
.main {
    width: 960px;
    height: 438px;
    padding: 50px 134px 60px 140px;
    margin: 30px auto 39px;
    background-color: #fff;
    border: 1px solid #dadada;
}
.clearfix:before, .clearfix:after {
    content: "";
    display: table;
}
.left-item{
    width: 239px;
    height: 322px;
    float: left;
}
.sociaty-pic {
    margin: 0 auto;
    display: block;
}
.sociaty-describle {
    width: 100%;
    font-size: 19px;
    color: #cfcdcc;
    font-weight: 100;
    text-align: center;
}
.sociaty-link {
    display: block;
    width: 163px;
    height: 44px;
    line-height: 44px;
    border: 2px solid #ff5046;
    border-radius: 25px;
    text-align: center;
    margin: 31px auto 0;
    color: #ff5046;
    font-size: 19px;
}
.right-item {
    width: 303px;
    height: 322px;
    float: right;
}
.university-pic {
    display: block;
    margin:0px;
}
img {
    border: 0 none;
}
img, input, label, button {
    vertical-align: middle;
}
.university-describle, .sociaty-describle {
    width: 100%;
    font-size: 19px;
    color: #cfcdcc;
    font-weight: 100;
    text-align: center;
}
.university-link, .sociaty-link {
    display: block;
    width: 163px;
    height: 44px;
    line-height: 44px;
    border: 2px solid #ff5046;
    border-radius: 25px;
    text-align: center;
    margin: 31px auto 0;
    color: #ff5046;
    font-size: 19px;
}

</style>
