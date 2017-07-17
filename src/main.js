import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Html5Page from './components/HTML5page/HTML5page.vue';
import addArticle from './components/addArticle/addArticle.vue';
import editorArticle from './components/editorArticle/editorArticle.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
    {
        path:'/article/:id/editor',
        component:editorArticle
    },
    {
        path:'/article/update',
        component:addArticle
    },
    { path:'/html5',component:Html5Page}
];

const router = new VueRouter({
    history:true,
    routes
});

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router
});
