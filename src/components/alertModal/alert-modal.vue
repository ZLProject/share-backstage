<template>
	<div class="alertModal-wrapper">
		<div class="inner-box">
			<div class="alertModal-title">
				{{modalTitle}}
				<i @click="hidden" class="glyphicon glyphicon-remove remove"></i>
			</div>
			<div class="alertModal-content">
				<img :src="modalImgSrc" width="330" height="330" alt="">
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
            modalTitle:{
                type:String,
				default:'海底捞火锅'
			},
			modalImgSrc:{
                type:String,
				default:'src/components/alertModal/article_78_3_53.png'
			}
		},
        methods:{
            hidden(){
                this.$emit('modalHidden')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.alertModal-wrapper{
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 10;
		background-color: rgba(0,0,0,0.3);
		display: flex;
		justify-content: center;
		align-items: center;
		.inner-box{
			min-width: 260px;
			background-color: #fff;
			.alertModal-title{
				height: 42px;
				line-height: 42px;
				padding:0 20px;
				background-color: #f8f8f8;
				color: #333;
				border-bottom:1px solid #eee;
				font-size: 14px;
				.remove{
					float: right;
					font-size: 12px;
					margin-top: 13px;
					cursor: pointer;
				}
			}
			.alertModal-content{
				padding: 20px;
			}
		}
	}
</style>