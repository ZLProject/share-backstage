<template>
	<div class="addArticle">
		<div class="container">
			<div class="row">
				<v-widget :widgetHeaderTitle="widgetTitle"></v-widget>
				<div class="content">
					<form class="form-horizontal">
						<div class="form-group">
							<label for="channelId" class="col-md-2 control-label tips">选择客户</label>
							<div class="col-md-4">
								<select name="channelId" id="channelId" class="form-control">
									<option value="请选择">请选择</option>
								</select>
							</div>
						</div>
						<div class="form-group">
							<label for="deviceId" class="col-md-2 control-label tips">选择渠道/设备</label>
							<div class="col-md-4">
								<select name="deviceId" id="deviceId" class="form-control">
									<option value="请选择">请选择</option>
									<option value="请选择">1</option>
									<option value="请选择">2</option>
									<option value="请选择">3</option>
									<option value="请选择">4</option>
									<option value="请选择">5</option>
								</select>
							</div>
							<div class="col-md-4">
								<select name="device"  class="form-control">
									<option value="请选择">请选择</option>
									<option value="请选择">1</option>
									<option value="请选择">2</option>
									<option value="请选择">3</option>
									<option value="请选择">4</option>
									<option value="请选择">5</option>
								</select>
							</div>
						</div>
						<div class="form-group">
							<label for="articleTitle" class="col-md-2 control-label tips">文章标题</label>
							<div class="col-md-4">
								<input type="text" id="articleTitle" class="form-control" placeholder="请输入文章标题">
							</div>
						</div>
						<div class="form-group">
							<label for="wxTitle" class="col-md-2 control-label tips">微信标题</label>
							<div class="col-md-4">
								<input type="text" id="wxTitle" class="form-control" placeholder="请输入微信标题">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-2 control-label tips">内容</label>
							<div class="col-md-10">
								<UEditor @ready="editorReady"></UEditor>
							</div>
						</div>
						<div class="form-group">
							<label for="videoLink" class="col-md-2 control-label">视频地址</label>
							<div class="col-md-4">
								<input type="text" id="videoLink" class="form-control" placeholder="请输入视频地址">
							</div>
						</div>
						<div class="form-group">
							<label for="videoCode" class="col-md-2 control-label">视频代码</label>
							<div class="col-md-4">
								<textarea id="videoCode"></textarea>
							</div>
						</div>
						<div class="col-md-2 col-md-offset-2 padding-ctrl">
							<input type="submit" class="btn btn-primary" value="保存">
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
				content:''
            }
        },
        components:{
            'v-widget':widget,
            UEditor
		},
        methods: {
            editorReady (instance) {
                instance.setContent('');
                instance.addListener('contentChange', () => {
                    this.content = instance.getContent();
                });
            },
        }
	}
</script>

<style lang="scss" scoped>
	.addArticle{
		.container{
			background-color: #fff;
			margin-top: 30px;
			margin-bottom: 50px;
			padding-bottom: 30px;
			border:1px solid #d3d3d3;
			.tips:after{
				content: '*';
				color: red;
				font-size: 18px;
				margin-left: 5px;
			}
			.widget-header{
				margin-bottom: 30px;
			}
		}
		#videoCode{
			min-width: 380px;
			min-height: 160px;
		}
		.padding-ctrl{
			padding-left: 5px;
		}
	}
</style>