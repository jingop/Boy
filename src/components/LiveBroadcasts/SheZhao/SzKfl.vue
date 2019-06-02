<template>
    <div class="join-container">
            <h1 class="join-title">唱吧热招职位</h1>
            <p class="join-email">请将简历投递到 wangpeng@changba.com</p>
                <div class="mt10 ">
                    <span class="address">北京区域</span> 工作地点：朝阳区常营
                </div>
                <div class="join-class" style="display: block;" >
            <div class="sub-join">
                <h3 class="join-job-title">客服专员
                    <div class="see-more" @click="SzKfl_click1">查看详情
                        <span class="slide-down" style="border-top: 6px solid currentcolor; border-bottom: 6px solid transparent; bottom: 13px;"></span>
                    </div>
                </h3>
                <div class="join-content" v-if="SzKfl_DisplayHiding1" style="display:block">
                    <p class="join-list-title">岗位职责</p>
                    <ul class="join-list">
                        <li v-for="(item1,index) in SzKfl_NewMediaOperations1[0]" :key="index">{{item1.title}}</li>
                    </ul>
                    <p class="join-list-title">任职要求</p>
                    <ul class="join-list">
                        <li v-for="(item1,index) in SzKfl_NewMediaOperations1[1]" :key="index">{{item1.title}}</li>
                    </ul>
                </div>
            </div>
            <div class="sub-join">
                <h3 class="join-job-title">审核专员
                    <div class="see-more" @click="SzKfl_click2">查看详情
                        <span class="slide-down" style="border-top: 6px solid currentcolor; border-bottom: 6px solid transparent; bottom: 13px;"></span>
                    </div>
                </h3>
                <div class="join-content" v-if="SzKfl_DisplayHiding2" style="display:block">
                    <p class="join-list-title">岗位职责</p>
                    <ul class="join-list">
                        <li v-for="(item2,index) in SzKfl_NewMediaOperations2[0]" :key="index">{{item2.title}}</li>
                    </ul>
                    <p class="join-list-title">任职要求</p>
                    <ul class="join-list">
                        <li v-for="(item2,index) in SzKfl_NewMediaOperations2[1]" :key="index">{{item2.title}}</li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
// import {SzKfl_NewMediaOperations1,SzKfl_NewMediaOperations2} from '../../../api/index'
export default {
    data() {
        return {
            SzKfl_NewMediaOperations1:[],
            SzKfl_NewMediaOperations2:[],
            SzKfl_DisplayHiding1:false,
            SzKfl_DisplayHiding2:false

        }
    },
    methods: {
        SzKfl_click1:function(){
            this.SzKfl_DisplayHiding1 = !this.SzKfl_DisplayHiding1;
        },
        SzKfl_click2:function(){
            this.SzKfl_DisplayHiding2 = !this.SzKfl_DisplayHiding2;
        }
    },
    // created() {
    //     SzKfl_NewMediaOperations1().then(res=>{
    //         this.SzKfl_NewMediaOperations1=res.data
    //     })
    //     SzKfl_NewMediaOperations2().then(res=>{
    //         this.SzKfl_NewMediaOperations2=res.data
    //         console.log(res.data)
    //     })
    // },
}
</script>

<style>
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
.mt10 {
    margin-top: 22px;
}
.address {
    font-size: 16px;
    font-weight: bold;
    padding-right: 20px;
}
</style>
