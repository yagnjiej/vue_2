import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'

import InfoList from '../components/common/students/InfoList.vue'
import InfoLists from '../components/common/students/InfoLists.vue'
import StudentList from '../components/common/students/StudentList.vue'
import WorkList from '../components/common/students/WorkList.vue'
import WorkMent from '../components/common/students/WorkMent.vue'

import DataView from '../components/common/dataAnalysis/DataView.vue'
import MapViem from '../components/common/dataAnalysis/MapViem.vue'
import ScoreMap from '../components/common/dataAnalysis/ScoreMap.vue'
import TraveIMap from '../components/common/dataAnalysis/TraveIMap.vue'

import User from '../components/common/User/User.vue'




Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name:'首页',
            redirect: '/login',
            hidden: true,
            component: Login,
        },
        {
            path: '/login',
            name: 'Login',
            hidden: true,
            component: Login
        },
        {
            path: '*',
            hidden: true,
            name: 'NotFound',
            component: NotFound,
        },
        {
            path: '/home',
            name: '学生管理',
            iconClass: 'fa fa-users ',
            redirect: '/home/student',
            component: Home,
            children: [
                {
                    path: '/home/info',
                    name: '信息列表',
                    iconClass: 'fa fa-list-alt',
                    component: InfoList,
                },
                {
                    path: '/home/infos',
                    name: '信息管理',
                    iconClass: 'fa fa-list-alt',
                    component: InfoLists,
                },
                {
                    path: '/home/student',
                    name: '学生列表',
                    iconClass: 'fa fa-list',
                    component: StudentList,
                },
                {
                    path: '/home/work',
                    name: '作业列表',
                    iconClass: 'fa fa-list-ul',
                    component: WorkList,
                },
                {
                    path: '/home/workment',
                    name: '作业管理',
                    iconClass: 'fa fa-th-list',
                    component: WorkMent,
                },
            ]
        },
        {
            path: '/home/dataview',
            name: '数据分析',
            iconClass: 'fa fa-line-chart',
            component: Home,
            children: [
                {
                    path: '/home/dataview',
                    name: '数据概览',
                    iconClass: 'fa fa-line-chart',
                    component: DataView,
                },
                {
                    path: '/home/mapview',
                    name: '地图概览',
                    iconClass: 'fa fa-line-chart',
                    component: MapViem,
                },

                {
                    path: '/home/teavel',
                    name: '旅游地图',
                    iconClass: 'fa fa-line-chart',
                    component: TraveIMap,
                }, 
                {
                    path: '/home/score',
                    name: '分数地图',
                    iconClass: 'fa fa-line-chart',
                    component: ScoreMap,
                },
            ]
        },

        {
            path: '/users',
            name: '用户中心',
            iconClass: 'fa fa-user',
            component: Home,
            children: [
                {
                    path: '/home/user',
                    name: '权限管理',
                    iconClass: 'fa fa-user',
                    component: User,
                },
            ]
        },
    ],
    mode: 'history'
})