<template>
    <div class="SocialRecruitment">
        <div class="public-areas">
            <router-link :to="item.url" v-for="(item,index) in SocialRecruitment_logo" :key="index" class="join-type inline-block">{{item.title}}</router-link>
        </div>
       
        <div>
        <router-view/>       
        </div>
    </div>
</template>

<script>
import {SocialRecruitment_logo} from '../../api/index'
export default {
    data() {
        return {
        SocialRecruitment_logo:[],
        }
    },
    created(){
         SocialRecruitment_logo().then(res=>{
            this.SocialRecruitment_logo=res.data
        })
    }
}
</script>

<style>
body {
    background-color: #f0f0f0;
    font-family: 'microsoft yahei',黑体,Helvetica,Arial,"\5b8b\4f53",sans-serif;
    margin: 0;
    padding: 0;
}
.public-areas {
    width: 960px;
    margin: 0 auto;
}
.inline-block {
    display: inline-block;
    *display: inline;
    *zoom: 1;
}
.inline-block:nth-child(1){
    margin-left: 217px;
}
.join-type {
    margin-top: 20px;
    margin-right: 69px;
    font-size: 18px;
    line-height: 34px;
    font-weight: normal;
    color: #333;
    cursor: pointer;
    text-decoration: none;
}
.join-type:hover{
    /* color: #eeeeee; */
    opacity: 0.5;
}
.join-container {
    width: 918px;
    padding: 20px 20px 0 20px;
    margin: 20px auto 0 auto;
    border: 1px solid #dadada;
    background-color: #fff;
    font-size: 14px;
    color: #666666;
}
.join-title {
    line-height: 44px;
    font-size: 24px;
    color: #666;
    font-weight: normal;
    text-align: center;
}
.join-email {
    font-size: 14px;
    color: #999;
    text-align: center;
    line-height: 18px;
}
</style>
