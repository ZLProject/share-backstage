<template>
    <div class="shareRecord">
        <v-search></v-search>
        <div class="container">
            <v-widgetHeader></v-widgetHeader>
            <table class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>文章标题</th>
                    <th>分享时间</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>30602</td>
                    <td>穿的再少 也比不过这些清凉尤物...</td>
                    <td>2017-06-20 21:11:09</td>
                </tr>
                <tr>
                    <td>30602</td>
                    <td>穿的再少 也比不过这些清凉尤物...</td>
                    <td>2017-06-20 21:11:09</td>
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
        components:{
            'v-search':search,
            'v-widgetHeader':widgetHeader
        }
    }
</script>

<style scoped lang="scss">
    .shareRecord{
        table{
            background-color: #fff;
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
        }
    }
</style>
