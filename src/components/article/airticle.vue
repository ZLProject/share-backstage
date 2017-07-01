<template>
    <div class="airticle-wrapper">
        <div class="search-wrapper">
            <v-search></v-search>
        </div>
        <div class="airticle-content container">
            <v-widgetHeader :widgetHeaderTitle="widgetHeaderTitle"></v-widgetHeader>
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>文章标题</th>
                        <th>微信标题</th>
                        <th>客户名称</th>
                        <th>浏览数</th>
                        <th>分享数</th>
                        <th>二维码信息</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>一年一度果园大放送，采摘季来啦！</td>
                    <td>在打印机前转发到朋友圈即可打印照片</td>
                    <td>果园</td>
                    <td>2274</td>
                    <td>508</td>
                    <td class="padding">
                        <table class="table table-striped table-border">
                            <tbody>
                            <tr>
                                <td>海底捞火锅</td>
                                <td>海底捞</td>
                                <td>
                                    <img width="50" height="50" src="src/components/article/article_78_3_53.png" alt="">
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <a href="" class="btn btn-xs btn-primary">编辑</a>
                        <a href="" class="btn btn-xs btn-success">阅读明细</a>
                        <a href="" class="btn btn-xs btn-success">分享明细</a>
                        <a href="" class="btn btn-xs btn-default">下线</a>
                    </td>
                </tr>
                <tr>
                    <td>一年一度果园大放送，采摘季来啦采摘季来啦采摘季来啦！</td>
                    <td>在打印机前转发到朋友圈即可打印照片</td>
                    <td>果园</td>
                    <td>2274</td>
                    <td>508</td>
                    <td class="padding">
                        <table class="table table-striped table-border">
                            <tbody>
                            <tr>
                                <td>海底捞火锅</td>
                                <td>海底捞</td>
                                <td @click="modalCtrl">
                                    <img width="50" height="50" src="src/components/article/article_78_3_53.png" alt="">
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <a href="" class="btn btn-xs btn-primary">编辑</a>
                        <a href="" class="btn btn-xs btn-success">阅读明细</a>
                        <a href="" class="btn btn-xs btn-success">分享明细</a>
                        <a href="" class="btn btn-xs btn-default">下线</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <v-alert modalTitle="海底捞火锅"  @modalHidden="modalCtrl" v-show="modalStatus"></v-alert>
    </div>

</template>

<script type="text/ecmascript-6">
    import search from '../search/search.vue';
    import widgetHeader from '../widget-header/widget-header.vue';
    import alertModal from '../alertModal/alert-modal.vue';
    export default {
        data(){
            return{
                modalStatus:false,
                widgetHeaderTitle:'文章管理'
            }
        },
        components:{
            'v-search':search,
            'v-widgetHeader':widgetHeader,
            'v-alert':alertModal
        },
        methods:{
            modalCtrl(){
                return this.modalStatus = !this.modalStatus
            }
        }
    }
</script>

<style scoped lang="scss">
    .airticle-wrapper{
        .airticle-content{
            .table-bordered{
                background-color: #fff;
                td{
                    vertical-align: middle;
                }
                thead{
                    tr{
                        background-image: -webkit-gradient(linear, left 0%, left 100%, from(#f5f5f5), to(#e2e2e2));
                        background-image: -webkit-linear-gradient(top, #f5f5f5, 0%, #e2e2e2, 100%);
                        background-image: -moz-linear-gradient(top, #f5f5f5 0%, #e2e2e2 100%);
                        background-image: linear-gradient(to bottom, #f5f5f5 0%, #e2e2e2 100%);
                        background-repeat: repeat-x;
                        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5', endColorstr='#ffe2e2e2', GradientType=0);
                    }
                }
                tbody{
                    tr{
                        .padding{
                            padding: 0;
                        }
                    }
                    .table-border{
                        margin-bottom: 0;
                       td{
                           border-right:1px solid #ddd;
                           &:last-child{
                               border-right: none;
                           }
                       }
                    }
                }
            }
        }
    }
</style>
