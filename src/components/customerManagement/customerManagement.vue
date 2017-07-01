<template>
    <div class="customer">
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
                <tr v-for="item in customerData">
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
            return{
                widgetHeaderTitle:'客户管理',
                customerData:[
                    {account:'果园',name:'果园',contacts:'乔继龙',tel:'13521399050',time:'2017-05-24 10:29:05'},
                    {account:'第五大道',name:'dwdd',contacts:'qiaojilong',tel:'13521399050',time:'2017-04-26 14:41:20'},
                    {account:'dwdd',name:'dwdd',contacts:'qiaojilong',tel:'13521399050',time:'2017-03-27 11:01:58'},
                    {account:'lehuameilan01',name:'乐华梅兰',contacts:'莎莎',tel:'18910910545',time:'2017-03-01 12:36:07'}
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
    .customer{
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
