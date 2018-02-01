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
//公共组件
import footer from "./components/app-footer.vue";
import header from "./components/app-header.vue";
import search from "./components/app-search.vue";
// 配置路由
var router = new VueRouter({
	routes:[
		// 默认进入页面的时候跳转到
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: "/login",
            component: login
        },
		//首页
		{
			path: '/index',
			component: index,
			children:[
				{
					path: "home",
                    component: home
				},{
					path: "signin",
                    component: signin
				},{
					path: "mine",
                    component: mine
				},{
					path: "activity",
                    component: activity
				}
			]
		},
		//活动
		
		//报名
		
		//我的
		
		//详情
		{
			path: '/detail',
			component: detail
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