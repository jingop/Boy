<template>
<div class="join-container">
    <div class="TechnologyCategory">
        <h1 class="join-title">唱吧热招职位</h1>
        <p class="join-email">请将简历投递到 campus@changba.com</p>
        <div class="join-class" style="display: block;">            
            <!-- 客户端开发工程师 -->
            <div class="sub-join">
                <h3 class="join-job-title">客户端开发工程师
                    <div class="see-more" @click="Jsl_click1">查看详情
                        <span class="slide-down"></span>
                    </div>
                </h3>
                <div class="join-content" v-if="Jsl_DisplayHiding1" style="display: block;">
                    <p class="join-list-title">岗位职责</p>
                    <ul class="join-list"> 
                        <li v-for="item1 in Jsl_Responsibilities1[0]" :key="item1.id">{{item1.title}}</li>
                    </ul>
                    <p class="join-list-title">任职要求</p>
                    <ul class="join-list">
                        <li v-for="item1 in Jsl_Responsibilities1[1]" :key="item1.id">{{item1.title}}</li>
                    </ul>
                    <p class="join-list-title">加分项</p>
                    <ul class="join-list">
                        <li v-for="item1 in Jsl_Responsibilities1[2]" :key="item1.id">{{item1.title}}</li>
                    </ul>
                </div>
            </div>

            <!-- 前端开发工程师 -->
            <div class="sub-join">
                <h3 class="join-job-title">前端开发工程师
                    <div class="see-more" @click="Jsl_click2">查看详情
                        <span class="slide-down"></span>
                    </div>
                </h3>
                <div class="join-content"  v-if="Jsl_DisplayHiding2" style="display: block;">
	                <p class="join-list-title">岗位职责</p>
	                <ul class="join-list">
                        <li v-for="(item2,index) in Jsl_Responsibilities2[0]" :key="index">{{item2.title}}</li>
	                  
	                </ul>
	                <p class="join-list-title">任职要求</p>
	                <ul class="join-list">
                        <li v-for="(item2,index) in Jsl_Responsibilities2[1]" :key="index">{{item2.title}}</li>
	                </ul>
	            </div>
            </div>
            <!-- 后台开发工程师 -->
            <div class="sub-join">
                <h3 class="join-job-title">后台开发工程师
                    <div class="see-more" @click="Jsl_click3">查看详情
                        <span class="slide-down"></span>
                    </div>
                </h3>
                 <div class="join-content" v-if="Jsl_DisplayHiding3" style="display: block;">
                    <p class="join-list-title">岗位职责</p>
                    <ul class="join-list" >
                        <li v-for="(item3,index) in Jsl_Responsibilities3[0]" :key="index">{{item3.title}}</li>
                    </ul>
                    <p class="join-list-title">任职要求</p>
                    <ul class="join-list">
                        <li v-for="(item3,index) in Jsl_Responsibilities3[1]" :key="index">{{item3.title}}</li>
                    </ul>
                    <p class="join-list-title">加分项</p>
                    <ul class="join-list">
                        <li v-for="(item3,index) in Jsl_Responsibilities3[2]" :key="index">{{item3.title}}</li>
                    </ul>
                </div>
            </div>
            <!-- 测试开发工程师 -->
            <div class="sub-join">
                <h3 class="join-job-title">测试开发工程师
                    <div class="see-more" @click="Jsl_click4">查看详情
                        <span class="slide-down"></span>
                    </div>
                </h3>
                <div class="join-content" v-if="Jsl_DisplayHiding4" style="display: block;">
                    <p class="join-list-title">岗位职责</p>
                    <ul class="join-list" >
                        <li v-for="(item4,index) in Jsl_Responsibilities4[0]" :key="index">{{item4.title}}</li>
                    </ul>
                    <p class="join-list-title">任职要求</p>
                    <ul class="join-list">
                        <li v-for="(item4,index) in Jsl_Responsibilities4[1]" :key="index">{{item4.title}}</li>
                    </ul>
                </div>
            </div>
            <!-- 音频算法工程师 -->
            <div class="sub-join">
                <h3 class="join-job-title">音频算法工程师
                    <div class="see-more" @click="Jsl_click5">查看详情
                        <span class="slide-down"></span>
                    </div>
                </h3>
                <div class="join-content" v-if="Jsl_DisplayHiding5" style="display: block;">
                    <p class="join-list-title">岗位职责</p>
                    <ul class="join-list" >
                        <li v-for="(item5,index) in Jsl_Responsibilities5[0]" :key="index">{{item5.title}}</li>
                    </ul>
                    <p class="join-list-title">任职要求</p>
                    <ul class="join-list">
                        <li v-for="(item5,index) in Jsl_Responsibilities5[1]" :key="index">{{item5.title}}</li>
                    </ul>
                </div>
            </div>
            <!-- 音视频处理工程师 -->
            <div class="sub-join">
                <h3 class="join-job-title">音视频处理工程师
                    <div class="see-more" @click="Jsl_click6">查看详情
                        <span class="slide-down"></span>
                    </div>
                </h3>
                <div class="join-content" v-if="Jsl_DisplayHiding6" style="display: block;">
                    <p class="join-list-title">岗位职责</p>
                    <ul class="join-list" >
                        <li v-for="(item6,index) in Jsl_Responsibilities6[0]" :key="index">{{item6.title}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>    
</div>
</template>

<script>
import {Jsl_Responsibilities1,Jsl_Responsibilities2,Jsl_Responsibilities3,Jsl_Responsibilities4,Jsl_Responsibilities5,Jsl_Responsibilities6} from '../../../api/index'
export default {
    data() {
        return {
            Jsl_Responsibilities1:[],
            Jsl_Responsibilities2:[],
            Jsl_Responsibilities3:[],
            Jsl_Responsibilities4:[],
            Jsl_Responsibilities5:[],
            Jsl_Responsibilities6:[],
            Jsl_DisplayHiding1:false,
            Jsl_DisplayHiding2:false,
            Jsl_DisplayHiding3:false,
            Jsl_DisplayHiding4:false,
            Jsl_DisplayHiding5:false,
            Jsl_DisplayHiding6:false,
        }
    },
    methods:{
        Jsl_click1:function(){
            this.Jsl_DisplayHiding1 = !this.Jsl_DisplayHiding1;
        },
        Jsl_click2:function(){
            this.Jsl_DisplayHiding2 = !this.Jsl_DisplayHiding2;
        },
        Jsl_click3:function(){
            this.Jsl_DisplayHiding3 = !this.Jsl_DisplayHiding3;
        },
        Jsl_click4:function(){
            this.Jsl_DisplayHiding4 = !this.Jsl_DisplayHiding4;
        },
        Jsl_click5:function(){
            this.Jsl_DisplayHiding5 = !this.Jsl_DisplayHiding5;
        },
        Jsl_click6:function(){
            this.Jsl_DisplayHiding6 = !this.Jsl_DisplayHiding6;
        },
    },
    created() {
        Jsl_Responsibilities1().then(res=>{
            this.Jsl_Responsibilities1=res.data
        }),
        Jsl_Responsibilities2().then(res=>{
            this.Jsl_Responsibilities2=res.data
        }),
        Jsl_Responsibilities3().then(res=>{
            this.Jsl_Responsibilities3=res.data
        }),
        Jsl_Responsibilities4().then(res=>{
            this.Jsl_Responsibilities4=res.data
        }),
        Jsl_Responsibilities5().then(res=>{
            this.Jsl_Responsibilities5=res.data
        }),
        Jsl_Responsibilities6().then(res=>{
            this.Jsl_Responsibilities6=res.data
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
.join-list {
    margin-left: 20px;
    line-height: 24px;
    list-style-type: disc;
}
</style>
