<template>
    <div class="readDetails">
        <div class="laydate-wrapper">
            <v-laydate></v-laydate>
        </div>
        <div class="container">
            <widgetHeader :widgetHeaderTitle="widgetHeaderTitle"></widgetHeader>
            <div id="main" style="height:400px;"></div>
            <table class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>文章标题</th>
                    <th>渠道来源</th>
                    <th>设备来源</th>
                    <th>阅读时间</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>127524</td>
                    <td>海底捞又为捞粉送惊喜啦！</td>
                    <td>海底捞火锅</td>
                    <td>海底捞</td>
                    <td>2017-05-23 15:24:12</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import laydate from '../laydate/laydate.vue';
    import widgetHeader from '../widget-header/widget-header.vue';
    import echarts from 'echarts';
    export default {
        data(){
            return{
                widgetHeaderTitle: '阅读记录',
                chartsOption:{
                    title : {
                        text: '一年一度果园大放送，采摘季来啦！',
                        subtext: '最近七天阅读数 5 '
                    },
                    legend: {
                        data:['阅读总次数']
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {show: true, type: ['line', 'bar']},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    yAxis : [
                        {
//                        name:'阅读数',
                            type : 'value',
                            nameGap:1600,
                            max:1600
                        }
                    ],
                    series : [
                        {
                            name:'阅读总次数',
                            type:'line',
                            data:[1100, 1001, 1500, 1300, 1200, 1300, 10],
                            markPoint : {
                                data : [
                                    {type : 'max', name: '最大值'},
                                    {type : 'min', name: '最小值'}
                                ]
                            },
                            markLine : {
                                data : [
                                    {type : 'average', name: '平均值'}
                                ]
                            }
                        }
                    ]
                }
            }
        },
        mounted (){
            var myChart = echarts.init(document.getElementById('main'));
            myChart.setOption(this.chartsOption);
        },
        components:{
            laydate,
            widgetHeader,
            'v-laydate': laydate
        }
    }
</script>

<style scoped lang="scss">
    .readDetails{
        .container{
            background-color: #fff;
            padding: 0;
        }
        .table {
            thead {
                tr {
                    background-image: -webkit-gradient(linear, left 0%, left 100%, from(#f5f5f5), to(#e2e2e2));
                    background-image: -webkit-linear-gradient(top, #f5f5f5, 0%, #e2e2e2, 100%);
                    background-image: -moz-linear-gradient(top, #f5f5f5 0%, #e2e2e2 100%);
                    background-image: linear-gradient(to bottom, #f5f5f5 0%, #e2e2e2 100%);
                    background-repeat: repeat-x;
                    th {
                        text-align: center;
                        border-bottom-width: 1px;
                    }
                }
            }
            tbody{
                tr{
                    text-align: center;
                    td{
                        vertical-align: middle;
                        .btn{
                            margin-right: 10px;
                            &:last-child{
                                margin-right: 0;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
