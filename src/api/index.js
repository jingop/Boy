import request from '../components/plugin/axios'

//精彩表演——编辑推荐
export function Melodioussingle(data){ //精彩表演——编辑推荐———动听单曲
    return request({
        // api地址  
        url:'/Melodioussingle',  
        // 请求方法
        method:'get',
        data:data
    })
}
export function WonderfulChorus(data){ //精彩表演——编辑推荐———精彩合唱
    return request({
        // api地址  
        url:'/WonderfulChorus',  
        // 请求方法
        method:'get',
        data:data
    })
}

export function QsongSheet(data){ // 精彩表演————歌单
    return request({
        // api地址  
        url:'/QsongSheet',  //QsongSheet 
        // 请求方法
        method:'get',
        data:data
    })
}
// 精彩表演——明星专区
export function logList(data){ // 精彩表演——明星专区——轮播图
    return request({
        // api地址  
        url:'/logList',  
        // 请求方法
        method:'get',
        data:data
    })
}
export function QTopNews(data){ // 精彩表演——明星专区————Top news
    return request({
        // api地址  
        url:'/QTopNews',  
        // 请求方法
        method:'get',
        data:data
    })
}
export function QStar(data){ // 精彩表演———明星专区————明星
    return request({
        // api地址  
        url:'/QStar',  
        // 请求方法
        method:'get',
        data:data
    })
}
export function QStarWorks(data){ // 精彩表演——明星专区————明星作品
    return request({
        // api地址  
        url:'/QStarWorks',  
        // 请求方法
        method:'get',
        data:data
    })
}
export function QEntryInstitution(data){ // 精彩表演——明星专区——入驻机构
    return request({
        // api地址  
        url:'/QEntryInstitution',  
        // 请求方法
        method:'get',
        data:data
    })
}
export function QCooperativePartner(data){ // 精彩表演——明星专区——合作伙伴
    return request({
        // api地址  
        url:'/QCooperativePartner',  
        // 请求方法
        method:'get',
        data:data
    })
}
// 精彩表演——编辑推荐
export function Bhigh(data){ //精彩表演——编辑推荐———优质MV
    return request({
        // api地址  
        url:'/Bhigh',  
        // 请求方法
        method:'get',
        data:data
    })
}
// 会员中心
export function ZMemberExchange(data){ //会员中心————会员兑换
    return request({
        // api地址  
        url:'/ZMemberExchange',  
        // 请求方法
        method:'get',
        data:data
    })
}
export function ShowPrivileges(data){ //会员中心————会员展示特权
    return request({
        // api地址  
        url:'/ShowPrivileges',  
        // 请求方法
        method:'get',
        data:data
    })
}



export function getLunBoImg(data){
    return request({
        // api地址
        url:'./',
        // 请求方法
        method:'get',
        data:data
    })
}
export function Jsl_Responsibilities1(data){ // 这个跟项目created里面的名字一样 引入也得引这个
    return request({
        // api地址
        url:'/Jsl_Responsibilities1', // egg 里面的 router.js 里面的 get('/这个名字') 一样
        // 请求方法
        method:'get',
        data:data
    })
}
export function Jsl_Responsibilities2(data){
    return request({
        // api地址 
        url:'/Jsl_Responsibilities2',
        // 请求方法
        method:'get',
        data:data
    })
}
export function Jsl_Responsibilities3(data){
    return request({
        // api地址 
        url:'/Jsl_Responsibilities3',
        // 请求方法
        method:'get',
        data:data
    })
}
export function Jsl_Responsibilities4(data){
    return request({
        // api地址 
        url:'/Jsl_Responsibilities4',
        // 请求方法
        method:'get',
        data:data
    })
}
export function Jsl_Responsibilities5(data){
    return request({
        // api地址 
        url:'/Jsl_Responsibilities5',
        // 请求方法
        method:'get',
        data:data
    })
}
export function Jsl_Responsibilities6(data){
    return request({
        // api地址 
        url:'/Jsl_Responsibilities6',
        // 请求方法
        method:'get',
        data:data
    })
}
export function SocialRecruitment_logo(data){
    return request({
        // api地址 
        url:'/SocialRecruitment_logo',
        // 请求方法
        method:'get',
        data:data
    })
}
export function SheZhao_logo(data){
    return request({
        // api地址 
        url:'/SheZhao_logo',
        // 请求方法
        method:'get',
        data:data
    })
}
// Layout_item
export function Layout_item(data){
    return request({
        // api地址 
        url:'/Layout_item',
        // 请求方法
        method:'get',
        data:data
    })
}

//Xz_ShiChangLei
export function Xz_ShiChangLei(data){
    return request({
        // api地址 
        url:'/Xz_ShiChangLei',
        // 请求方法
        method:'get',
        data:data
    })
}

export function Yxl_MarketingCategory1(data){
    return request({
        // api地址 
        url:'/Yxl_MarketingCategory1',
        // 请求方法
        method:'get',
        data:data
    })
} 
export function Yxl_MarketingCategory2(data){
    return request({
        // api地址 
        url:'/Yxl_MarketingCategory2',
        // 请求方法
        method:'get',
        data:data
    })
}
export function Yxl_MarketingCategory3(data){
    return request({
        // api地址 
        url:'/Yxl_MarketingCategory3',
        // 请求方法
        method:'get',
        data:data
    })
}// SzScl_NewMediaOperations2
export function SzScl_NewMediaOperations1(data){
    return request({
        // api地址 
        url:'/SzScl_NewMediaOperations1',
        // 请求方法
        method:'get',
        data:data
    })
}


//
export function SingerInformation(data){
    return request({
        // api地址 
        url:'/SingerInformation',
        // 请求方法
        method:'get',
        data:data
    })
}