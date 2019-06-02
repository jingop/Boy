<template>
  <div class="hello" id="hello">
    <div class="PengShuai_ShouYe">
      <div class="public-nav">
        <a href="">
          <img src="../assets/logo (1).png" class="public-logo" alt="唱吧Logo">
        </a> 
        <div class="logo-right">
            <li v-for="(item,index) in header" :key="index" class="public-nav-link">
                <router-link :to="item.url">{{item.title}}
            </router-link></li>
        </div>
      </div>
    </div>
	<router-view/>
	<!-- 底部 -->
	<div class="footer">
	    <div class="public-footer">
	        <router-link to="" target="_blank" href="http://changba.com/now/changba_unicom.php" class="public-footer-link">沃唱吧</router-link>|
	        <router-link to="" target="_blank" href="http://changba.com/en/index.html" class="public-footer-link">English</router-link>|
	        <router-link to="" target="_blank" href="https://changba.com/account/official_check.php" class="public-footer-link">重新设置密码</router-link>|
	        <router-link to="" target="_blank" href="http://changba.com/now/help/helpcenter.php?typeid=1" class="public-footer-link">帮助中心</router-link>|
	        <router-link to="" target="_blank" href="http://changba.com/now/contact.php" class="public-footer-link">联系我们</router-link>|
	        <router-link to="" target="_blank" href="http://changba.com/now/joinus.php?ver=1.0.1" class="public-footer-link">加入唱吧</router-link>|
	        <router-link to=""  target="_blank" href="http://about.58.com/fqz/index.html?utm_source=market&amp;spm=b-31580022738699-pe-f-829.hao360_101" class="public-footer-link" rel="external nofollow noopener">防诈骗专栏</router-link>|
	        <router-link to=""  href="http://xwm.qs12315.com" target="_blank" class="public-footer-link" rel="external nofollow noopener">商品防伪查询</router-link>
	        <br>北京酷智科技有限公司 ©2018 changba.com | 
	        <router-link to="" a target="_blank" href="//cdn-comp.changbaimg.com/images/officialwebsite/icp.png?ver=1.0.1" class="public-footer-link" rel="external nofollow">京ICP证110298</router-link>
	         | 举报电话(24小时)：010-85095089
	        <router-link to="" target="_blank" href="http://jb.ccm.gov.cn/" class="public-footer-link" rel="external nofollow noopener"> | 向12318举报</router-link>
	        <br>
	        <router-link to=""  target="_blank" href="//cdn-comp.changbaimg.com/images/officialwebsite/icp2019.pdf" class="public-footer-link" rel="external nofollow">京网文[2018]5625-430号</router-link>|
	        <router-link to=""  class="public-footer-link" href="http://cb.cdn.changbaimg.com/images/officialwebsite/yyxycxkz.jpg?ver=1.0.0"> 营业性演出许可证</router-link>|
	        <router-link to=""  class="public-footer-link" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502025063" rel="external nofollow noopener"><img style="vertical-align: top;" src="//cb.cdn.changbaimg.com/images/officialwebsite/ghs.png">京公网安备11010502025063号</router-link>
	        <router-link to=""  style="display: none;" target="_blank" class="public-footer-link" href="http://top100.cn/agreement.html" rel="noopener">视听许可证0110538</router-link>|
	        <router-link to="" id="___szfw_logo___" class="public-footer-link" href="https://credit.szfw.org/CX20170719035153320357.html" target="_blank" rel="noopener"><img src="//cb.cdn.changbaimg.com/images/officialwebsite/sf.png" border="0" style="height: 18px;vertical-align: top;"></router-link>
	
	    </div>
	</div>
  </div>
   
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
     return {
         header:[
             {title:'首页',url:'/'},
             {title:'精彩表演',url:'/WonderfulPerformance'},
             {title:'会员中心',url:'./MemberCenter'},
             {title:'金币充值',url:'./GoldRecharge'},
             {title:'分享伴奏',url:'./SharingAccompaniment'},
             {title:'分享动图',url:'./SharedActionGraph'},
             {title:'直播',url:'./Livebroadcast'},
             {title:'音乐人',url:'./Musician'},
             {title:'加入我们',url:'./JoinUs'}
		]
     }
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  margin: 0 auto;
}
#header{
  width: 100%;
  height: 100%;
}
.PengShuai_ShouYe{
  /* width: 1355px;
  height: 678px; */
  background-color: #ff5046;
}
.public-nav {
  width: 960px;
  height: 80px;
  line-height: 80px;
  font-size: 0;
  color: #fff;
}
.public-logo{
  vertical-align: middle;
  cursor: pointer;
}
.public-nav-link{
  display: inline-block;
  margin-left: 45px;
  padding: 0 7px;
  vertical-align: top;
  float: left;
  margin-left: 20px;
}
.public-nav-link>a{
  font-size: 16px;
  color: #fff;
  text-decoration: none;
}
.logo-right{
  width: 827px;
  height: 80px;
  float:right;
}
.public-nav-link>a:hover{
    color:#cecccc;
		
}
// .public-nav-link :hover{
// 	border-top: 2px solid #8b8a8a;
// }
.public-nav-current {
    border-top: 3px solid #fff;
    line-height: 74px;
}

.public-footer {
    width: 100%;
    padding: 29px 0 24px 0;
    line-height: 18px;
    font-size: 14px;
    color: #b2b2b2;
    background-color: #f0f0f0;
    text-align: center;
}
.public-footer-link {
    color: #8b8a8a;
    text-decoration: none;
}
</style>
