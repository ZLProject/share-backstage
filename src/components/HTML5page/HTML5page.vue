<template>
	<div class="airticle-wrapper">
		<div class="search-wrapper">
			<v-search :selectShow="searchSelectShow" :btnText="searchBtnText"></v-search>
		</div>
		<div class="airticle-content container">
			<v-widgetHeader :widgetHeaderTitle="widgetHeaderTitle"></v-widgetHeader>
			<v-table :listTitle="listTitle" :listContent="listContent"></v-table>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
    import search from '../search/search.vue';
    import table from '../commont/table.vue';
    import widgetHeader from '../widget-header/widget-header.vue';
    export default {
        data(){
            return {
                widgetHeaderTitle: '文章管理',
                searchSelectShow:false,
                searchBtnText:'添加文章',
                listTitle: ['HTML5标题', '分享描述', '客户名称', '浏览数', '分享数', '二维码信息', '操作'],
                listContent: [
                    {
                        title: '铁血军事头条',
                        describe:'在打印机前转发此内容即可打印照片',
                        cunstomerName:'果园',
                        pageView:3,
                        shareNumber:0,
                        QRCode:'./src/components/alertModal/article_78_3_53.png',
                        handle:[{
                            className:'btn-primary',
                            text:'编辑'
                        },{
                            className:'btn-success',
                            text:'阅读明细'
                        },{
                            className:'btn-success',
                            text:'分享明细'
                        },{
                            className:'btn-default',
                            text:'下线'
                        }]
                    }
                ]
            }
        },
        components: {
            'v-search': search,
            'v-widgetHeader': widgetHeader,
            'v-table': table
        }
    }
</script>

<style scoped lang="scss">

</style>
