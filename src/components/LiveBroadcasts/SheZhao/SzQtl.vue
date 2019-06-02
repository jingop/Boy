<template>
    <div>
        <div class="join-container">
            <h1 class="join-title">唱吧热招职位</h1>
            <p class="join-email">请将简历投递到 wangpeng@changba.com</p>
            <div class="join-class" style="display: block;" >
                <div class="sub-join">
                    <h3 class="join-job-title">高级/资深UI
                        <div class="see-more" @click="SzQtl_click1">查看详情
                            <span class="slide-down" style="border-top: 6px solid currentcolor; border-bottom: 6px solid transparent; bottom: 13px;"></span>
                        </div>
                    </h3>
                    <div class="join-content" v-if="SzQtl_DisplayHiding1" style="display:block">
                        <p class="join-list-title">岗位职责</p>
                        <ul class="join-list">
                            <li v-for="(item1,index) in SzQtl_NewMediaOperations1[0]" :key="index">{{item1.title}}</li>
                        </ul>
                        <p class="join-list-title">任职要求</p>
                        <ul class="join-list">
                            <li v-for="(item1,index) in SzQtl_NewMediaOperations1[1]" :key="index">{{item1.title}}</li>
                        </ul>
                    </div>
                </div>
            </div>

             <div class="join-class" style="display: block;" >
                <div class="sub-join">
                    <h3 class="join-job-title">高级/资深视觉
                        <div class="see-more" @click="SzQtl_click2">查看详情
                            <span class="slide-down" style="border-top: 6px solid currentcolor; border-bottom: 6px solid transparent; bottom: 13px;"></span>
                        </div>
                    </h3>
                    <div class="join-content" v-if="SzQtl_DisplayHiding2" style="display:block">
                        <p class="join-list-title">岗位职责</p>
                        <ul class="join-list">
                            <li v-for="(item2,index) in SzQtl_NewMediaOperations2[0]" :key="index">{{item2.title}}</li>
                        </ul>
                        <p class="join-list-title">任职要求</p>
                        <ul class="join-list">
                            <li v-for="(item2,index) in SzQtl_NewMediaOperations2[1]" :key="index">{{item2.title}}</li>
                        </ul>
                    </div>
                </div>
            </div>

             <div class="join-class" style="display: block;" >
                <div class="sub-join">
                    <h3 class="join-job-title">内审经理
                        <div class="see-more" @click="SzQtl_click3">查看详情
                            <span class="slide-down" style="border-top: 6px solid currentcolor; border-bottom: 6px solid transparent; bottom: 13px;"></span>
                        </div>
                    </h3>
                    <div class="join-content" v-if="SzQtl_DisplayHiding3" style="display:block">
                        <p class="join-list-title">岗位职责</p>
                        <ul class="join-list">
                            <li v-for="(item3,index) in SzQtl_NewMediaOperations3[0]" :key="index">{{item3.title}}</li>
                        </ul>
                        <p class="join-list-title">任职要求</p>
                        <ul class="join-list">
                            <li v-for="(item3,index) in SzQtl_NewMediaOperations3[1]" :key="index">{{item3.title}}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
// import {SzQtl_NewMediaOperations1,SzQtl_NewMediaOperations2,SzQtl_NewMediaOperations3} from '../../../api/index'
export default {
    data() {
        return {
            SzQtl_NewMediaOperations1:[],
            SzQtl_NewMediaOperations2:[],
            SzQtl_NewMediaOperations3:[],
            SzQtl_DisplayHiding1:false,
            SzQtl_DisplayHiding2:false,
            SzQtl_DisplayHiding3:false,
        }
    },
    methods: {
        SzQtl_click1:function(){
            this.SzQtl_DisplayHiding1 = !this.SzQtl_DisplayHiding1;
            
        },
        SzQtl_click2:function(){

            this.SzQtl_DisplayHiding2 = !this.SzQtl_DisplayHiding2;
        },
        SzQtl_click3:function(){
            this.SzQtl_DisplayHiding3 = !this.SzQtl_DisplayHiding3;
        }
        
    },
    // created(){
    //     SzQtl_NewMediaOperations1().then(res=>{
    //         this.SzQtl_NewMediaOperations1=res.data
    //     })
    //     SzQtl_NewMediaOperations2().then(res=>{
    //         this.SzQtl_NewMediaOperations2=res.data
    //     })
    //     SzQtl_NewMediaOperations3().then(res=>{
    //         this.SzQtl_NewMediaOperations3=res.data
    //     })
    // }
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
.join-list {
    margin-left: 20px;
    line-height: 24px;
    list-style-type: disc;
}
</style>
