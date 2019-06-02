<template>
    <div>
         <div class="join-container">
            <h1 class="join-title">唱吧热招职位</h1>
            <p class="join-email">请将简历投递到 campus@changba.com</p>
             <div class="join-class" style="display: block;">
                <div class="sub-join">
                    <h3 class="join-job-title">电商运营
                        <div class="see-more" @click="Yxl_click1">查看详情
                            <span class="slide-down"></span>
                        </div>
                    </h3>
                    <div class="join-content" v-if="Yxl_DisplayHiding1" style="display: block;">
                        <p class="join-list-title">岗位职责</p>
                        <ul class="join-list">
                            <li v-for="(item1,index) in Yxl_MarketingCategory1[0]" :key="index">{{item1.title}}</li>
                        </ul>
                        <p class="join-list-title"> 任职要求</p>
                        <ul class="join-list">
                            <li v-for="(item1,index) in Yxl_MarketingCategory1[1]" :key="index">{{item1.title}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="join-class" style="display: block;">
                <div class="sub-join">
                    <h3 class="join-job-title">活动运营
                        <div class="see-more" @click="Yxl_click2">查看详情
                            <span class="slide-down"></span>
                        </div>
                    </h3>
                    <div class="join-content" v-if="Yxl_DisplayHiding2" style="display: block;">
                        <p class="join-list-title">岗位职责</p>
                        <ul class="join-list">
                            <li v-for="(item2,index) in Yxl_MarketingCategory2[0]" :key="index">{{item2.title}}</li>
                        </ul>
                        <p class="join-list-title"> 任职要求</p>
                        <ul class="join-list">
                            <li v-for="(item2,index) in Yxl_MarketingCategory2[1]" :key="index">{{item2.title}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="join-class" style="display: block;">
                <div class="sub-join">
                    <h3 class="join-job-title">渠道销售
                        <div class="see-more" @click="Yxl_click3">查看详情
                            <span class="slide-down"></span>
                        </div>
                    </h3>
                    <div class="join-content" v-if="Yxl_DisplayHiding3" style="display: block;">
                        <p class="join-list-title">岗位职责</p>
                        <ul class="join-list">
                            <li v-for="(item3,index) in Yxl_MarketingCategory3[0]" :key="index">{{item3.title}}</li>
                        </ul>
                        <p class="join-list-title"> 任职要求</p>
                        <ul class="join-list">
                            <li v-for="(item3,index) in Yxl_MarketingCategory3[1]" :key="index">{{item3.title}}</li>
                        </ul>
                    </div>
                </div>
            </div>
         </div>   
    </div>
</template>

<script>
import {Yxl_MarketingCategory1,Yxl_MarketingCategory2,Yxl_MarketingCategory3} from '../../../api/index'
export default {
    data() {
        return {
            Yxl_MarketingCategory1:[],
            Yxl_MarketingCategory2:[],
            Yxl_MarketingCategory3:[],
            Yxl_DisplayHiding1:false,
            Yxl_DisplayHiding2:false,
            Yxl_DisplayHiding3:false,
        }
    },
     methods:{
        Yxl_click1:function(){
            this.Yxl_DisplayHiding1 = !this.Yxl_DisplayHiding1;
        },
        Yxl_click2:function(){
            this.Yxl_DisplayHiding2 = !this.Yxl_DisplayHiding2;
        },
        Yxl_click3:function(){
            this.Yxl_DisplayHiding3 = !this.Yxl_DisplayHiding3;
        }
    },
    created() {
        Yxl_MarketingCategory1().then(res=>{
            this.Yxl_MarketingCategory1=res.data
        }),
        Yxl_MarketingCategory2().then(res=>{
            this.Yxl_MarketingCategory2=res.data
        }),
        Yxl_MarketingCategory3().then(res=>{
            this.Yxl_MarketingCategory3=res.data
        })
    },
}
</script>

<style>
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
.join-job-title {
    margin: 20px 0 0 0;
    line-height: 44px;
    font-size: 16px;
    font-weight: normal;
    background-color: #efefef;
    border-bottom: none;
    position: relative;
    border-radius: 10px;
    color: #000;
    padding-left: 10px;
}
.see-more {
    position: absolute;
    right: 40px;
    font-size: 14px;
    bottom: 0;
    color: #000;
    text-decoration: underline;
    cursor: pointer;
}
.slide-down {
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-top: 6px solid currentColor;
    position: absolute;
    right: -15px;
    bottom: 13px;
}
.join-content {
    width: 96%;
    margin: auto;
    display: none;
    -webkit-transition: all 1s linear;
    -moz-transition: all 1s linear;
    -ms-transition: all 1s linear;
    -o-transition: all 1s linear;
    transition: all 1s linear;
}
.join-list-title {
    margin-top: 25px;
    line-height: 22px;
    font-size: 14px;
    color: #ea6131;
}
</style>
