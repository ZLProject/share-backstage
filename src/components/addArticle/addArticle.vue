<template>
	<div class="addArticle">
		<div class="container">
			<div class="row">
				<v-widget :widgetHeaderTitle="widgetTitle"></v-widget>
				<div class="content">
					<form class="form-horizontal">
						<div class="form-group">
							<label for="channelId" class="col-md-2 control-label">选择客户</label>
							<div class="col-md-4">
								<select name="channelId" id="channelId" class="form-control">
									<option value="请选择">请选择</option>
								</select>
							</div>
						</div>
						<div class="form-group">
							<label for="deviceId" class="col-md-2 control-label">选择渠道/设备</label>
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
								<select name="deviceId" id="deviceId" class="form-control">
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
							<label for="articleTitle" class="col-md-2 control-label">文章标题</label>
							<div class="col-md-4">
								<input type="text" id="articleTitle" class="form-control" placeholder="请输入文章标题">
							</div>
						</div>
						<div class="form-group">
							<label for="wxTitle" class="col-md-2 control-label">微信标题</label>
							<div class="col-md-4">
								<input type="text" id="wxTitle" class="form-control" placeholder="请输入微信标题">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-2 control-label">内容</label>
							<div class="col-md-4">
								<script id="container" name="content" type="text/plain">
									这里写你的初始化内容
								</script>
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
								<input type="text" id="videoCode" class="form-control" placeholder="请输入微信标题">
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
    import widget from '../widget-header/widget-header.vue';
    export default {
        data(){
            return {
                widgetTitle: '发布文章',
            }
        },
        components:{
            'v-widget':widget
		}
	}
</script>

<style lang="scss" scoped>

</style>