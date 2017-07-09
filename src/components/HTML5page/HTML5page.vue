<template>
	<div class="airticle-wrapper">
		<div class="search-wrapper">
			<v-search :selectShow="searchSelectShow" :btnText="searchBtnText"></v-search>
		</div>
		<div class="airticle-content container">
			<v-widgetHeader :widgetHeaderTitle="widgetHeaderTitle"></v-widgetHeader>
			<v-table :listTitle="listTitle" :listContent="listContent"></v-table>
			<v-page></v-page>
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
                widgetHeaderTitle: '文章管理',
                searchSelectShow: false,
                searchBtnText: '添加文章',
                listTitle: ['HTML5标题', '分享描述', '客户名称', '浏览数', '分享数', '二维码信息', '操作'],

                listContent: [
                    {
                        id: "8",
                        time: "1499568991",
                        type: "0",
                        name: "测试",
                        content: "",
                        shareNum: "0",
                        title: "标题",
                        desc: "描述",
                        handle: [{
                            className: 'btn-primary',
                            text: '编辑',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '阅读明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '分享明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-default',
                            text: '下线',
                            link: '/article/editor'
                        }]
                    },
                    {
                        title: '铁血军事头条',
                        describe: '在打印机前转发此内容即可打印照片',
                        cunstomerName: '果园',
                        pageView: 3,
                        shareNumber: 0,
                        QRCode: './src/components/alertModal/article_78_3_53.png',
                        handle: [{
                            className: 'btn-primary',
                            text: '编辑',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '阅读明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '分享明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-default',
                            text: '下线',
                            link: '/article/editor'
                        }]
                    },
                    {
                        title: '铁血军事头条',
                        describe: '在打印机前转发此内容即可打印照片',
                        cunstomerName: '果园',
                        pageView: 3,
                        shareNumber: 0,
                        QRCode: './src/components/alertModal/article_78_3_53.png',
                        handle: [{
                            className: 'btn-primary',
                            text: '编辑',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '阅读明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '分享明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-default',
                            text: '下线',
                            link: '/article/editor'
                        }]
                    },
                    {
                        title: '铁血军事头条',
                        describe: '在打印机前转发此内容即可打印照片',
                        cunstomerName: '果园',
                        pageView: 3,
                        shareNumber: 0,
                        QRCode: './src/components/alertModal/article_78_3_53.png',
                        handle: [{
                            className: 'btn-primary',
                            text: '编辑',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '阅读明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '分享明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-default',
                            text: '下线',
                            link: '/article/editor'
                        }]
                    },
                    {
                        title: '铁血军事头条',
                        describe: '在打印机前转发此内容即可打印照片',
                        cunstomerName: '果园',
                        pageView: 3,
                        shareNumber: 0,
                        QRCode: './src/components/alertModal/article_78_3_53.png',
                        handle: [{
                            className: 'btn-primary',
                            text: '编辑',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '阅读明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '分享明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-default',
                            text: '下线',
                            link: '/article/editor'
                        }]
                    },
                    {
                        title: '铁血军事头条',
                        describe: '在打印机前转发此内容即可打印照片',
                        cunstomerName: '果园',
                        pageView: 3,
                        shareNumber: 0,
                        QRCode: './src/components/alertModal/article_78_3_53.png',
                        handle: [{
                            className: 'btn-primary',
                            text: '编辑',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '阅读明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '分享明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-default',
                            text: '下线',
                            link: '/article/editor'
                        }]
                    },
                    {
                        title: '铁血军事头条',
                        describe: '在打印机前转发此内容即可打印照片',
                        cunstomerName: '果园',
                        pageView: 3,
                        shareNumber: 0,
                        QRCode: './src/components/alertModal/article_78_3_53.png',
                        handle: [{
                            className: 'btn-primary',
                            text: '编辑',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '阅读明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '分享明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-default',
                            text: '下线',
                            link: '/article/editor'
                        }]
                    },
                    {
                        title: '铁血军事头条',
                        describe: '在打印机前转发此内容即可打印照片',
                        cunstomerName: '果园',
                        pageView: 3,
                        shareNumber: 0,
                        QRCode: './src/components/alertModal/article_78_3_53.png',
                        handle: [{
                            className: 'btn-primary',
                            text: '编辑',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '阅读明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '分享明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-default',
                            text: '下线',
                            link: '/article/editor'
                        }]
                    },
                    {
                        title: '铁血军事头条',
                        describe: '在打印机前转发此内容即可打印照片',
                        cunstomerName: '果园',
                        pageView: 3,
                        shareNumber: 0,
                        QRCode: './src/components/alertModal/article_78_3_53.png',
                        handle: [{
                            className: 'btn-primary',
                            text: '编辑',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '阅读明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '分享明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-default',
                            text: '下线',
                            link: '/article/editor'
                        }]
                    },
                    {
                        title: '铁血军事头条',
                        describe: '在打印机前转发此内容即可打印照片',
                        cunstomerName: '果园',
                        pageView: 3,
                        shareNumber: 0,
                        QRCode: './src/components/alertModal/article_78_3_53.png',
                        handle: [{
                            className: 'btn-primary',
                            text: '编辑',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '阅读明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '分享明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-default',
                            text: '下线',
                            link: '/article/editor'
                        }]
                    },
                    {
                        title: '铁血军事头条',
                        describe: '在打印机前转发此内容即可打印照片',
                        cunstomerName: '果园',
                        pageView: 3,
                        shareNumber: 0,
                        QRCode: './src/components/alertModal/article_78_3_53.png',
                        handle: [{
                            className: 'btn-primary',
                            text: '编辑',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '阅读明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-success',
                            text: '分享明细',
                            link: '/article/editor'
                        }, {
                            className: 'btn-default',
                            text: '下线',
                            link: '/article/editor'
                        }]
                    }
                ]
            }
        },
        created() {
            this.$http.get('http://www.zhilandaren.com/share/getList?pn=0&rn=10').then(response => {
                console.log(response.body)
			})
		},
        methods: {},
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
