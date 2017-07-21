<template>
	<div>
		<div class="table">
			<div class="table-wrapper">
				<table class="table table-bordered table-striped">
					<thead>
					<tr>
						<th v-for="title in listTitle">{{title}}</th>
					</tr>
					</thead>
					<tbody>
					<tr v-for="item in listContent">
						<td>{{item.id}}</td>
						<td>{{item.title}}</td>
						<td>{{item.desc}}</td>
						<td>{{item.name}}</td>
						<td>{{item.shareNum}}</td>
						<td @click="modalShow(item.id)">
							<v-QrcodeVue :value="'http://www.zhilandaren.com/share/getShare/'+item.id" :size="50"></v-QrcodeVue>
						</td>
						<td>
							<router-link :to="'/article/'+item.id+'/editor'" class="btn btn-primary btn-xs">编辑</router-link>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
		<v-alertModal @modalHidden="modalShow" v-show="modalStatus.show" :url="modalStatus.url"></v-alertModal>
	</div>
</template>

<script type="text/ecmascript-6">
    import widgetHeader from '../widget-header/widget-header.vue';
    import alertModal from '../alertModal/alert-modal.vue';
    import QrcodeVue from 'qrcode.vue';
    /*QrcodeVue文档链接  https://www.npmjs.com/package/qrcode.vue*/
    export default {
        data(){
            return{
                modalStatus:{
                    show:false,
					url:''
				}
			}
		},
        props:{
            listTitle:{
                type:Array
			},
            listContent:{
                type:Array
			}
		},
        components: {
            'v-header': widgetHeader,
            'v-alertModal': alertModal,
            'v-QrcodeVue':QrcodeVue
        },
		methods:{
            modalShow(url){
                this.modalStatus.show = !this.modalStatus.show;
                this.modalStatus.url ='http://www.zhilandaren.com/share/getShare/'+ url;
			}
		}
    }
</script>

<style lang="scss" scoped>
	.table-wrapper {
		.table {
			thead {
				tr {
					background-image: -webkit-gradient(linear, left 0%, left 100%, from(#f5f5f5), to(#e2e2e2));
					background-image: -webkit-linear-gradient(top, #f5f5f5, 0%, #e2e2e2, 100%);
					background-image: -moz-linear-gradient(top, #f5f5f5 0%, #e2e2e2 100%);
					background-image: linear-gradient(to bottom, #f5f5f5 0%, #e2e2e2 100%);
					background-repeat: repeat-x;
					th {
						text-align: center;
						border-bottom-width: 1px;
					}
				}
			}
			tbody{
				tr{
					text-align: center;
					td{
						vertical-align: middle;
						.btn{
							margin-right: 10px;
							&:last-child{
								margin-right: 0;
							}
						}
					}
				}
			}
		}
	}
</style>