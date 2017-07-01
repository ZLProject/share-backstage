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
						<td>{{item.title}}</td>
						<td>{{item.describe}}</td>
						<td>{{item.cunstomerName}}</td>
						<td>{{item.pageView}}</td>
						<td>{{item.shareNumber}}</td>
						<td @click="modalShow">
							<img :src="item.QRCode" alt="" width="50" height="50">
						</td>
						<td>
							<a href="" v-for="btn in item.handle" class="btn btn-xs" :class="btn.className">
								{{btn.text}}
							</a>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
		<v-alertModal @modalHidden="modalShow" v-show="modalStatus"></v-alertModal>
	</div>
</template>

<script type="text/ecmascript-6">
    import widgetHeader from '../widget-header/widget-header.vue';
    import alertModal from '../alertModal/alert-modal.vue';
    export default {
        data(){
            return{
                modalStatus:false
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
            'v-alertModal': alertModal
        },
		methods:{
            modalShow(){
                this.modalStatus = !this.modalStatus
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