<template>
    <div class="channel">
        <v-search></v-search>
        <div class="channel-wrapper container">
            <v-widgetHeader :widgetHeaderTitle="widgetHeaderTitle"></v-widgetHeader>
            <table class="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>登录账号</th>
                    <th>渠道名称</th>
                    <th>联系人</th>
                    <th>联系电话</th>
                    <th>创建时间</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in channelData">
                    <td>{{item.account}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.contacts}}</td>
                    <td>{{item.tel}}</td>
                    <td>{{item.time}}</td>
                    <td>
                        <a href="" class="btn btn-primary">编辑</a>
                        <a href="" class="btn btn-danger">删除</a>
                        <a href="" class="btn btn-info">恢复密码</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import search from '../search/search.vue';
    import widgetHeader from '../widget-header/widget-header.vue';
    export default {
        data(){
            return {
                widgetHeaderTitle: '渠道管理',
                channelData:[
                    {account:'DYXY',name:'电影学院',contacts:'张欢',tel:'13691570105',time:'2017-05-24 10:29:05'},
                    {account:'DXYD',name:'大兴移动',contacts:'张欢',tel:'13691570105',time:'2017-04-26 14:41:20'},
                    {account:'DXCYY',name:'创意园',contacts:'张欢',tel:'13013013013',time:'2017-03-27 11:01:58'},
                    {account:'XB123',name:'西贝莜面村',contacts:'张欢',tel:'13013013013',time:'2017-03-01 12:36:07'}
                ]
            }
        },
        components:{
            'v-search':search,
            'v-widgetHeader':widgetHeader
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/sass/mixin";
    .channel{
        table{
            background-color: #fff;
            thead{
                tr{
                    @include bg-col-tr;
                }
            }
            tbody{
                tr{
                    td{
                        vertical-align: middle;
                    }
                }
            }
        }
    }
</style>
