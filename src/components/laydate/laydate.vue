<template>
    <div class="laydate">
        <div class="container">
            <div class="row">
                <div class="col-md-3  col-xs-3 col-sm-3 form-inline">
                    <label for="start">范围选择:</label>
                    <input id="start" class="laydate-icon form-control" placeholder="开始时间" @click="start">
                </div>
                <div class="col-md-2  col-xs-2 col-sm-2">
                    <input id="end" class="laydate-icon form-control" placeholder="结束时间" @click="end">
                </div>
                <div class="col-md-4 col-xs-4 col-sm-4 ">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for...">
                        <span class="input-group-btn">
                        <button class="btn btn-primary" type="submit">搜索</button>
                     </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import  '../../assets/laydate/laydate'
    export default {
        data(){
            return {}
        },
        props: {

        },
        mounted(){
            var start = {
                elem:"#start",
                max: '2099-06-16 23:59:59',
                choose: function(datas){
                    end.min = datas; //开始日选好后，重置结束日的最小日期
                    end.start = datas //将结束日的初始值设定为开始日
                }
            };
            var end = {
                elem:"#end",
                max: '2099-06-16 23:59:59',
                choose: function(datas){
                    start.max = datas; //结束日选好后，重置开始日的最大日期
                }
            };
            laydate.skin('molv');
            laydate(start);
            laydate(end);
        },
        methods:{
            start(){
                laydate(start);
            },
            end(){
                laydate(end);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/bootstrap.min.css";
    .laydate {
        margin: 20px 0;
        .btn-primary {
            background-image: linear-gradient(to bottom, #ff9900 0%, #cc7a00 100%);
            background-repeat: repeat-x;
            border-color: #c27400;
        }
        .btn-default {
            background-image: linear-gradient(to bottom, #ffffff 0%, #e6e6e6 100%);
            background-repeat: repeat-x;
            border-color: #e0e0e0;
        }
    }

</style>
