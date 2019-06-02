<template>
    <div class="ProductClass">
         <div class="join-container">
            <h1 class="join-title">唱吧热招职位</h1>
            <p class="join-email">请将简历投递到 campus@changba.com</p>
        
        <div id="product_position" class="join-class" style="display: block;">
	         <!-- 	    产品经理    -->
	        <div class="sub-join">
	            <h3 class="join-job-title">产品经理
                  <div class="see-more" data-check="0" @click="Cpl_click1">查看详情
                    <span class="slide-down" style="border-top: 6px solid currentcolor; border-bottom: 6px solid transparent; bottom: 13px;"></span>
                  </div>
                </h3>
	            <div class="join-content" style="display: block;" v-if="Cpl_DisplayHiding1">
	                <p class="join-list-title">岗位职责</p>
	                <ul class="join-list">
                        <li v-for="(item1,index) in Cpl_Responsibilities1" :key="index">{{item1.title}}</li>
	                </ul>
	                <p class="join-list-title">任职要求</p>
	                <ul class="join-list">
                        <li v-for="(item1,index) in Cpl_JobRequirements1" :key="index">{{item1.title}}</li>
	                </ul>
	            </div>
	        </div>	        	                
	     </div>
        </div>
    </div>
</template>

<script>
import {getLunBoImg} from '../../../api/index'
export default {
    data(){
        return {
            Cpl_Responsibilities1:[],
            Cpl_JobRequirements1:[
                {title:'本科以上学历，计算机或心理学等相关专业'},
                {title:'有优秀的沟通能力、跨部门协调能力,有较强的组织能力和抗压能力'},
                {title:'有较强的数据分析能力，善于分析数据发现问题，解析问题，并能制定落地解决方案在，数据反馈上取得可量化成效，有实习经验者优先'},
            ], 
            Cpl_DisplayHiding1:false
        }
        
    },
    methods:{
        Cpl_click1:function(){
            console.log(1)
            this.Cpl_DisplayHiding1 = !this.Cpl_DisplayHiding1;
        },
        
    },
    created() {
        getLunBoImg().then(res=>{
            this.Cpl_Responsibilities1=res.data
            console.log(res.data)
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
