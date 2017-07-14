import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import article from './components/article/airticle.vue';
import Html5Page from './components/HTML5page/HTML5page.vue';
import shareRecord from './components/shareRecord/shareRecord.vue';
import readRecord from './components/readRecord/readRecord.vue';
import channelManagement from './components/channelManagement/channelManagement.vue';
import customerManagement from './components/customerManagement/customerManagement.vue';
import deviceManagement from './components/deviceManagement/deviceManagement.vue';
import addArticle from './components/addArticle/addArticle.vue';
import readDetail from './components/readDetails/readDetails.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
    {
        path:'/article',
        component:article
    },
    {
        path:'/article/:id/editor',
        component:addArticle
    },
    {
        path:'/article/:id/readDetail',
        component:readDetail
    },
    { path:'/html5',component:Html5Page},
    { path:'/shareRecord',component:shareRecord},
    { path:'/readRecord',component:readRecord},
    { path:'/channelManagement',component:channelManagement},
    { path:'/customerManagement',component:customerManagement},
    { path:'/deviceManagement',component:deviceManagement}
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router
});
