<template>
    <div class="readRecord">
        <v-search></v-search>
        <div class="container">
            <v-widgetHeader :widgetHeaderTitle="widgetHeaderTitle"></v-widgetHeader>
            <table class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>文章标题</th>
                    <th>分享时间</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in readData">
                    <td>{{item.id}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.time}}</td>
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
                readData:[
                    {id:123,title:'穿的再少',time:'2017-06-20 21:11:19'},
                    {id:1234,title:'穿的再少',time:'2017-06-20 21:11:19'}
                ],
                widgetHeaderTitle: '阅读记录'
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
    .readRecord{
        table{
            background-color: #fff;
            thead{
                tr{
                    @include bg-col-tr;
                }
            }
        }
    }
</style>
