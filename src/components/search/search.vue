<template>
	<div class="search">
		<div class="container">
			<div class="row">
				<div class="col-md-2 col-md-offset-2 col-xs-2 col-sm-2">
					<select name="" id="" class="form-control" v-show="selectShow">
						<option v-for="item in options" :value="item.value">{{item.text}}</option>
					</select>
				</div>
				<div class="col-md-4 col-xs-4 col-sm-4 ">
					<div class="input-group">
						<input type="text" class="form-control" placeholder="Search for...">
						<span class="input-group-btn">
                        <button class="btn btn-primary" type="submit">搜索</button>
                     </span>
					</div>
				</div>
				<div class="col-md-4 col-xs-4 col-sm-4">
					<router-link to="/article/update"  class="btn btn-default">{{btnText}}</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            selectShow: {
                type: Boolean,
                default: true
            },
            btnText: {
                type: String
            }
        },
        data(){
            return {
                options: [
                    {
                        value: '',
                        text: '选择客户'
                    },
                    {
                        value: 8,
                        text: '直播'
                    },
                    {
                        value: 9,
                        text: '叮多啦'
                    },
                    {
                        value: 10,
                        text: '车车'
                    },
                    {
                        value: 11,
                        text: '小米'
                    },
                    {
                        value: 12,
                        text: '页码科技'
                    },
                    {
                        value: 14,
                        text: '京城君威'
                    },
                    {
                        value: 15,
                        text: '电销团队'
                    },
                    {
                        value: 17,
                        text: '河南格力'
                    },
                    {
                        value: 18,
                        text: '公司招聘'
                    },
                    {
                        value: 19,
                        text: '保利电影众筹'
                    },
                    {
                        value: 20,
                        text: '奥迪'
                    },
                    {
                        value: 21,
                        text: '长沙王府井'
                    },
                    {
                        value: '',
                        text: '选择客户'
                    },
                    {
                        value: 23,
                        text: '凯胜世纪汽车'
                    },
                    {
                        value: 24,
                        text: '付英欣'
                    },
                    {
                        value: 26,
                        text: '云堆'
                    },
                    {
                        value: 27,
                        text: '那猫'
                    },
                    {
                        value: 35,
                        text: '电商'
                    },
                    {
                        value: 36,
                        text: '华尔街'
                    },
                    {
                        value: 38,
                        text: '乐华梅兰'
                    },
                    {
                        value: 39,
                        text: '艾可儿少儿美术'
                    },
                    {
                        value: 40,
                        text: '劲松活动'
                    },
                    {
                        value: 41,
                        text: '海底捞抽奖'
                    },
                    {
                        value: 42,
                        text: '西贝促销'
                    },
                    {
                        value: 43,
                        text: '西贝'
                    },
                    {
                        value: 44,
                        text: '海底捞捞粉俱乐部'
                    },
                    {
                        value: 45,
                        text: '大屯活动'
                    },
                    {
                        value: 47,
                        text: '艾可儿1'
                    },
                    {
                        value: 48,
                        text: '万柳活动'
                    },
                    {
                        value: 49,
                        text: ''
                    },
                    {
                        value: 50,
                        text: '熊小猫英语'
                    },
                    {
                        value: 51,
                        text: '卓思教育'
                    },
                    {
                        value: 52,
                        text: ''
                    },
                    {
                        value: 53,
                        text: 'beibei'
                    },
                    {
                        value: 55,
                        text: 'lejianshen'
                    },
                    {
                        value: 57,
                        text: 'dwdd'
                    },
                    {
                        value: 58,
                        text: 'dwdd'
                    },
                    {
                        value: 59,
                        text: '果园'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
	.search {
		margin: 20px 0;
		.btn-primary {
			background-image: linear-gradient(to bottom, #ff9900 0%, #cc7a00 100%);
			background-repeat: repeat-x;
			border-color: #c27400;
		}
		.btn-default {
			background-image: linear-gradient(to bottom, #ffffff 0%, #e6e6e6 100%);
			background-repeat: repeat-x;
			border-color: #e0e0e0;
		}
	}

</style>
