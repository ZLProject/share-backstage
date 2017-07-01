<template>
    <div class="widget-header">
        <i class="glyphicon glyphicon-list"></i>
        <h3>{{widgetHeaderTitle}}</h3>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
            widgetHeaderTitle:{
                type:String
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/bootstrap.min.css";
    .widget-header{
        height: 40px;
        line-height: 40px;
        background: #E9E9E9;
        background: -moz-linear-gradient(top, #fafafa 0%, #e9e9e9 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #fafafa), color-stop(100%, #e9e9e9));
        background: -webkit-linear-gradient(top, #fafafa 0%, #e9e9e9 100%);
        background: -o-linear-gradient(top, #fafafa 0%, #e9e9e9 100%);
        background: -ms-linear-gradient(top, #fafafa 0%, #e9e9e9 100%);
        background: linear-gradient(top, #fafafa 0%, #e9e9e9 100%);
        border: 1px solid #D5D5D5;
        border-radius: 4px;
        i{
            margin-top: -3px;
            margin-left: 13px;
            font-size: 16px;
            color: #555;
            vertical-align: middle;
        }
        h3{
            display: inline-block;
            margin-left: 8px;
            font-size: 15px;
            font-weight: 400;
            color: #555;
            margin-top: 0;
            margin-bottom: 0;
        }
    }
</style>
