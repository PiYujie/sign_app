import Vue from "vue";
// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 状态管理
import Vuex from 'vuex'
Vue.use(Vuex)
// 全局样式
import "./template/base.css";
//选项卡组件
import home from "./components/tab/app-home.vue";
import mine from "./components/tab/app-mine.vue";
import signin from "./components/tab/app-signin.vue";
import activity from "./components/tab/app-activity.vue";
//容器组件
import detail from "./components/contain/app-detail.vue";
import index from "./components/contain/app-index.vue";
import login from "./components/contain/app-login.vue";
import setting from "./components/contain/app-setting.vue";
import own from "./components/contain/app-own.vue";
import upmess from "./components/contain/app-up-mess.vue";
import inmess from "./components/contain/app-in-mess.vue";
import register from "./components/contain/app-register.vue";
import safe from "./components/contain/app-safe.vue";
//公共组件
import footer from "./components/app-footer.vue";
import header from "./components/app-header.vue";
import search from "./components/app-search.vue";
// 配置路由
var router = new VueRouter({
	routes:[
		// 默认进入页面的时候跳转到登录页
		{
			path: '/',
			redirect: '/login'
		},
		{
			//登录路由
			path: "/login",
            component: login
        },
		//选项卡
		{
			path: '/index',
			component: index,
			children:[
				{
					//首页
					path: "home",
                    component: home
				},{
					//报名
					path: "signin",
                    component: signin
				},{
					//我的
					path: "mine",
                    component: mine
				},{
					//活动
					path: "activity",
                    component: activity
				},{
					path: '/index',
					redirect: '/index/home'
				}
			]
		},
		//其他页面
		{
			//个人信息
			path: "/own",
            component: own
		},
			//报名查询
		{
			path: "/inmess",
        	component: inmess
		},
			//签到查询
		{
			path: "/upmess",
    		component: upmess
		},
			//安全设置
		//设置
		{
			path: '/setting',
			component: setting
		},
		{
			path: '/safe',
			component: safe
		},
		//详情
		{
			path: '/detail',
			component: detail
		},
		//注册
		{
			path: '/register',
			component: register
		}
	]
})
new Vue({
	el: "#app",
	router,
	template: `
        <div>
            <router-view></router-view> 
        </div>
    `
})