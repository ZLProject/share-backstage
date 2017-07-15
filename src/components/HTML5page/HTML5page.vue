<template>
	<div class="airticle-wrapper">
		<div class="search-wrapper">
			<v-search :selectShow="searchSelectShow" :btnText="searchBtnText"></v-search>
		</div>
		<div class="airticle-content container">
			<v-widgetHeader :widgetHeaderTitle="widgetHeaderTitle"></v-widgetHeader>
			<v-table :listTitle="listTitle" :listContent="listContent"></v-table>
			<v-page :pageInfo="pageInfo" @change="pagechange"></v-page>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">

    import search from '../search/search.vue';
    import table from '../commont/table.vue';
    import widgetHeader from '../widget-header/widget-header.vue';
    import page from '../page/page.vue';

    export default {
        data(){
            return {
                pageInfo:{
                    total:11,  // 记录总条数   默认空，如果小于pageNum则组件不显示   类型Number
                    current:1,  // 当前页数，   默认为1                             类型Number
                    pagenum:10, // 每页显示条数,默认10                              类型Number
                    pagegroup:5,    // 分页条数     默认为5，需传入奇数                 类型Number
                    skin:'#16a086'  // 选中页码的颜色主题 默认为'#16a086'               类型String
                },
                widgetHeaderTitle: '文章管理',
                searchSelectShow: false,
                searchBtnText: '添加文章',
                listTitle: ['ID','HTML5标题', '分享描述', '客户名称', '分享数', '二维码信息', '操作'],
                listContent: []
            }
        },
        created() {
            this.getPageData()
		},
		mounted(){

		},
        methods: {
            pagechange:function(current){     // 页码改变传入新的页码，此处做回调
				this.pageInfo.current = current;
				this.getPageData();
                console.log(current);
            },
			getPageData:function () {
                this.$http.get('http://www.zhilandaren.com/share/getList',{
                    params:{
                        pn:(this.pageInfo.current - 1)*10,
                        rn: this.pageInfo.pagenum
                    }
                }).then(response => {
                    response = response.body;
                    this.listContent = response.list;
                    this.pageInfo.total = response.num
                })
            }
		},
        components: {
            'v-search': search,
            'v-widgetHeader': widgetHeader,
            'v-table': table,
            'v-page': page
        }
    }
</script>

<style scoped lang="scss">

</style>
