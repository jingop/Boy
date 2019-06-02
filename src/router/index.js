import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/LevelThree/Layout'  //首页
import WonderfulPerformance from '@/components/secondLevel/WonderfulPerformance'  //精彩表演
import WonderChild1 from '@/components/secondLevel/WonderChild1'
import WonderChild2 from '@/components/secondLevel/WonderChild2'
import WonderChild3 from '@/components/secondLevel/WonderChild3'
import WonderChild4 from '@/components/secondLevel/WonderChild4'
import WonderChild5 from '@/components/secondLevel/WonderChild5'
 
 import Playground from '@/components/secondLevel/Playground'
 

import MemberCenter from '@/components/LevelThree/MemberCenter' //会员中心
import GoldRecharge from '@/components/LevelThree/GoldRecharge' //金币充值
import SharingAccompaniment from '@/components/LevelThree/SharingAccompaniment' //分享伴奏
import SharedActionGraph from '@/components/LevelThree/SharedActionGraph'  //分享动图
import Livebroadcast from '@/components/LevelThree/Livebroadcast' //直播
import Musician from '@/components/LevelThree/Musician' //音乐人



import JoinUs from '@/components/LevelThree/JoinUs' //加我我们

import SocialRecruitment from '@/components/Livebroadcasts/SocialRecruitment'
import TechnologyCategory from '@/components/Livebroadcasts/SocialRecruitments/TechnologyCategory'
import ProductClass from '@/components/Livebroadcasts/SocialRecruitments/ProductClass'
import MarketClass from '@/components/Livebroadcasts/SocialRecruitments/MarketClass'
import MarketingOperations from '@/components/Livebroadcasts/SocialRecruitments/MarketingOperations'
import SheZhao from '@/components/Livebroadcasts/SheZhao'
import SzJsl from '@/components/Livebroadcasts/SheZhao/SzJsl'
import SzCpyyl from '@/components/Livebroadcasts/SheZhao/SzCpyyl'
import SzScggxsl from '@/components/Livebroadcasts/SheZhao/SzScggxsl'
import SzZnl from '@/components/Livebroadcasts/SheZhao/SzZnl'
import SzKfl from '@/components/Livebroadcasts/SheZhao/SzKfl'
import SzQtl from '@/components/Livebroadcasts/SheZhao/SzQtl'
Vue.use(Router)

let router= new Router({
  routes: [
    {
      path: '/', 
      name: 'Layout',
      component: Layout
    },
	{
	  path: '/WonderfulPerformance',
	  name: 'WonderfulPerformance',
	  component: WonderfulPerformance,
		children:[
			{
				path:'/WonderfulPerformance',
				name:'abc',
				component:WonderChild4,
				
			},
			{
				path:'/one',
				component:WonderChild1
			},
			{
				path:'/two',
				component:WonderChild2
			},
			{
				path:'/three',
				component:WonderChild3
			},
			{
				path:'/wu',
				component:WonderChild5
			},
			{
				path:'/Playground',
				component:Playground
			}
			
		]
		},
	{
	  path: '/MemberCenter', 
	  name: 'MemberCenter',
	  component: MemberCenter
	},
	{
		path: '/GoldRecharge', 
		name: 'GoldRecharge',
		component: GoldRecharge	
	},
	{
		path: '/SharingAccompaniment', 
		name: 'SharingAccompaniment',
		component: SharingAccompaniment	
	},
	{
		path: '/SharedActionGraph', 
		name: 'SharedActionGraph',
		component: SharedActionGraph	
	},
	{
		path: '/Livebroadcast', 
		name: 'Livebroadcast',
		component: Livebroadcast	
	},
	{
		path: '/Musician', 
		name: 'Musician',
		component: Musician	
	},
	{
		path: '/JoinUs', 
		name: 'JoinUs',
		component: JoinUs	
	},
	{
	  path:'/SocialRecruitment',
	  name:'SocialRecruitment',
	  component:SocialRecruitment,
	  children:[
	      { // 技术类
	        path:'/SocialRecruitment',
	        name:'TechnologyCategory',
	        component:TechnologyCategory
	      },
	      {
	        path:'/ProductClass',
	        name:'ProductClass',
	        component:ProductClass
	      },// MarketClass
	      {  
	        path:'/MarketClass',
	        name:'MarketClass',
	        component:MarketClass
	      },//MarketingOperations
	      {  
	        path:'/MarketingOperations',
	        name:'MarketingOperations',
	        component:MarketingOperations
	      },
	    ]
	},
	{
	  path:'/SheZhao',
	  name:'SheZhao',
	  component:SheZhao,
	  children:[
	      { // 技术类
	        path:'/SheZhao',
	        name:'SzJsl',
	        component:SzJsl
	      },
	      {
	        path:'/SzCpyyl',
	        name:'SzCpyyl',
	        component:SzCpyyl
	      },// MarketClass
	      {  
	        path:'/SzScggxsl',
	        name:'SzScggxsl',
	        component:SzScggxsl
	      },//MarketingOperations
	      {  
	        path:'/SzZnl',
	        name:'SzZnl',
	        component:SzZnl
	      },
	      {  
	        path:'/SzKfl',
	        name:'SzKfl',
	        component:SzKfl
	      },
	      {  
	        path:'/SzQtl',
	        name:'SzQtl',
	        component:SzQtl
	      },
	    ]
	},
  ]
})

// router.push('/WonderfulPerformance')

export default router;









