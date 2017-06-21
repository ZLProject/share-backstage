<template>
    <div class="">
        <v-shareRecord :data="readData"></v-shareRecord>
    </div>
</template>

<script type="text/ecmascript-6">
    import shareRecord from '../shareRecord/shareRecord.vue';
    export default {
        data(){
            return{
                readData:[
                    {id:123,title:'穿的再少',time:'2017-06-20 21:11:19'},
                    {id:1234,title:'穿的再少',time:'2017-06-20 21:11:19'}
                ]
            }
        },
        components:{
            'v-shareRecord':shareRecord
        }
    }
</script>

<style scoped lang="scss">

</style>
