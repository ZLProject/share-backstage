<template>
	<div class="addArticle">
		<div class="container">
			<div class="row">
				<v-widget :widgetHeaderTitle="widgetTitle"></v-widget>
				<div class="content">
					<form class="form-horizontal">
						<div class="form-group">
							<label for="customerName" class="col-md-2 control-label tips">选择客户</label>
							<div class="col-md-4">
								<input type="text" id="customerName"  class="form-control" v-model="customerName" placeholder="客户名称">
							</div>
						</div>
						<div class="form-group">
							<label for="articleTitle" class="col-md-2 control-label tips">HTML5标题</label>
							<div class="col-md-4">
								<input type="text" id="articleTitle" class="form-control" placeholder="请输入HTML5标题" v-model="html5Title">
							</div>
						</div>
						<div class="form-group">
							<label for="wxTitle" class="col-md-2 control-label tips">分享描述</label>
							<div class="col-md-4">
								<input type="text" id="wxTitle" class="form-control" placeholder="请输入分享描述" v-model="shareDesc">
							</div>
						</div>
						<div class="form-group">
							<label for="html5Link" class="col-md-2 control-label">HTML5链接</label>
							<div class="col-md-4">
								<input type="text" :disabled="html5LinkDisable" id="html5Link" class="form-control" placeholder="请输入HTML5链接" v-model="html5link">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-2 control-label">内容</label>
							<div class="col-md-10">
								<UEditor @ready="editorReady" :ueditorConfig="ueditorConfig" :ueditorDisable="ueditorDisable"
								:ueditorContent="content"></UEditor>
							</div>
						</div>
						<div class="col-md-2 col-md-offset-2 padding-ctrl">
							<input type="button" class="btn btn-primary" value="保存" @click="submitData">
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
    import widget from '../widget-header/widget-header.vue';
    import UEditor from '../ueditor/ueditor.vue';
    export default {
        data(){
            return {
                widgetTitle: '发布文章',
                customerName:'',//客户名称
                html5Title:'',//html5的标题
                shareDesc:'',//分享描述
                html5link:'',/*html5的链接*/
                content: '',//富文本的内容
                ueditorConfig:{
//                    initialContent:Vue.content,
                    autoClearinitialContent:true,
                    initialFrameHeight:320,
                }
            }
        },
        computed: {
            articleType(){
                if (this.html5LinkDisable) {
                    return 1;
                }
                if(this.ueditorDisable){
                    return 0;
                }
            },
            html5LinkDisable(){/*控制html5链接是否可编辑*/
                return this.content === '' ? false : true
            },
            ueditorDisable(){/*控制ueditor是否可编辑*/
                return this.html5link === '' ? false : true
            }
        },
        components: {
            'v-widget': widget,
            UEditor
        },
        mounted(){
//			this.init()
		},
        methods: {
            editorReady (instance) {
                instance.addListener('contentChange', () => {
                    this.content = instance.getContent();
                });
                //编辑器加载完成后再加载数据
                this.initData()
            },
            initData(){
                    let id = this.$route.params.id;
					function isURL(str) {
						return !!str.match(/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g);
					}
                    this.$http.get('http://www.zhilandaren.com/share/getShareInfo/'+ id).then(function (data) {
                        data = data.body;
                        this.customerName = data.name;
                        this.html5Title = data.title;
                        this.shareDesc = data.desc;
                        if(isURL(data.content)){
                            this.html5link = data.content;
						}else {
                            this.content = data.content;
						}
                    })
			},
            submitData(){
                let id = this.$route.params.id;
                this.$http.get('http://www.zhilandaren.com/share/doModify',{
                    params:{
                        id:id,
                        type:0,
                        name:this.customerName,
                        title:this.html5Title,
                        desc:this.shareDesc,
                        content:this.content || this.html5link
                    }
                }).then(function (data) {
                    console.log(data);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
	.addArticle {
		.container {
			background-color: #fff;
			margin-top: 30px;
			margin-bottom: 50px;

			.content{
				overflow: hidden;
				border: 1px solid #d3d3d3;
				padding-top: 30px;
				padding-bottom: 30px;
			}
			.tips:after {
				content: '*';
				color: red;
				font-size: 18px;
				margin-left: 5px;
			}
		}
		#videoCode {
			min-width: 380px;
			min-height: 160px;
		}
		.padding-ctrl {
			padding-left: 5px;
		}
	}
</style>