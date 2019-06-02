<template>
  <div class="join-container">
            <h1 class="join-title">唱吧热招职位</h1>
            <p class="join-email">请将简历投递到 wangpeng@changba.com</p>
            <div class="join-class" style="display: block;"  v-for="(item,index) in Sz_ShiChangGongGuanXiaoShouLei" :key="index">
            <div class="sub-join">
                <h3 class="join-job-title">
                    {{item.h1}}
                    <!-- {{}} -->
                    <div class="see-more" @click="SzXsl_click(index)">查看详情
                        <span class="slide-down"
                         :style="{transform:SzXsl_DisplayHiding==index?'rotate(180deg)':'rotate(0deg)',
                         bottom:SzXsl_DisplayHiding==index?'18px':'13px'}"></span>
                    </div>
                </h3>
                <div class="join-content" v-if="SzXsl_DisplayHiding==index" style="display:block">
                    <p class="join-list-title">岗位职责</p>
                    <ul class="join-list">
                        <li v-for="(item,index) in item.arr[0]" :key="index">{{item.title}}</li>
                    </ul>
                    <p class="join-list-title">任职要求</p>
                    <ul class="join-list">
                        <li v-for="(item,index) in item.arr[1]" :key="index">{{item.title}}</li>
                    </ul>
                    <p class="join-list-title" v-if="item.arr.length!=2">加分项</p>
                    <ul class="join-list">
                        <li v-for="(item,index) in item.arr[2]" :key="index">{{item.title}}</li>
	                </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { Sz_ShiChangGongGuanXiaoShouLei } from "../../../api/index";
export default {
    data() {
        return {
            Sz_ShiChangGongGuanXiaoShouLei:[],
            SzXsl_DisplayHiding:4,
            arr:[]
        }
    },
    methods: {
        SzXsl_click: function(idx) {
        
            this.arr.push(idx);   
            var b = this.arr.filter((item)=>{
                return idx == item;
            })
        if(b.length>=2){
            this.SzXsl_DisplayHiding=4;
            this.arr=[];
        }else{
            this.SzXsl_DisplayHiding=idx;
            }
        },
    },
//    created() {
//     Sz_ShiChangGongGuanXiaoShouLei().then(res => {
//       this.Sz_ShiChangGongGuanXiaoShouLei = res.data;
//         // console.log( this.Sz_ShiChangGongGuanXiaoShouLei)
//     });
//   }
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
.slide-down{
    border-top: 6px solid currentcolor;
     border-bottom: 6px solid transparent;
      bottom: 10px;
      
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
