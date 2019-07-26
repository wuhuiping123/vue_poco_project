import VueRouter from 'vue-router'


import home from '../components/index/home.vue'
import download from '../components/index/download.vue'
//import testAxios from '../components/index/testAxios.vue'
import login from '../components/login/login.vue'


import works from '../components/works/works.vue'
import sort from '../components/works/sort.vue'

import picSquare from '../components/picSquare/picSquare.vue'

import skill from '../components/skill/skill.vue'
import skillContentAll from '../components/skill/skillContentAll.vue'
import skillContentBase from '../components/skill/skillContentBase.vue'
import skillDetail from '../components/skill/skillDetail.vue'

import talk from '../components/talk/talk.vue'
import talkContentAll from '../components/talk/talkContentAll.vue'
import talkContentImpression from '../components/talk/talkContentImpression.vue'

import limit from '../components/limit/limit.vue'
import limitContentAll from '../components/limit/limitContentAll.vue'
import limitContentNew from '../components/limit/limitContentNew.vue'

import verified from '../components/verified/verified.vue'
import verifiedUser from '../components/verified/verifiedUser.vue'
import verifiedOrganization from '../components/verified/verifiedOrganization.vue'
import verifiedBrand from '../components/verified/verifiedBrand.vue'

export default new VueRouter({
	routes:[
		//重定向
		{
			path:'/',
//			redirect:'/testAxios'
			redirect:'/home'
		},
		{
			path:'/home',
			component:home
		},
		{
			path:'/login',
			component:login
		},
		{
			path:'/works',
			component:works
		},
		{
			path:'/sort',
			component:sort
		},
		{
			path:'/picSquare',
			component:picSquare
		},
		{
			path:'/skill',
			component:skill,
			//二级路由
			children:[
				{
					path:'/',
					component:skillContentAll
				},
				{
					path:'/skillContentAll',
					component:skillContentAll
				},
				{
					path:'/skillContentBase',
					component:skillContentBase
				}
				
			]
		},
		{
			path:'/skillDetail',
			component:skillDetail
		},
		{
			path:'/talk',
			component:talk,
			children:[
				{
					path:'/',
					component:talkContentAll
				},
				{
					path:'/talkContentAll',
					component:talkContentAll
				},
				{
					path:'/talkContentImpression',
					component:talkContentImpression
				}
			]
		},
		{
			path:'/limit',
			component:limit,
			children:[
				{
					path:'/',
					component:limitContentAll
				},
				{
					path:'/limitContentAll',
					component:limitContentAll
				},
				{
					path:'/limitContentNew',
					component:limitContentNew
				}
			]
		},
		{
			path:'/verified',
			component:verified,
			children:[
				{
					path:'/verifiedUser',
					component:verifiedUser
				},
				{
					path:'/verifiedOrganization',
					component:verifiedOrganization
				},
				{
					path:'/verifiedBrand',
					component:verifiedBrand
				},
				{
					path:'/',
					component:verifiedUser
				}
			]
		},
		{
			path:'/download',
			component:download
		}
//		{
//			path:'*',
//			redirect:'/home'
//		}
	]
})
