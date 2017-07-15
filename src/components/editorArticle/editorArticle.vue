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
								<UEditor @ready="editorReady" :ueditorConfig="ueditorConfig" :ueditorDisable="ueditorDisable"></UEditor>
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
                    initialContent:"欢迎使用ueditor!",
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
        methods: {
            editorReady (instance) {
                instance.addListener('contentChange', () => {
                    this.content = instance.getContent();
                });
            },
            submitData(){

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
			padding-bottom: 30px;
			border: 1px solid #d3d3d3;
			.tips:after {
				content: '*';
				color: red;
				font-size: 18px;
				margin-left: 5px;
			}
			.widget-header {
				margin-bottom: 30px;
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