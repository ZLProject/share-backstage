<template>
    <div class="customer">
        <v-channel :channelData="customerData"></v-channel>
    </div>
</template>

<script type="text/ecmascript-6">
    import channel from '../channelManagement/channelManagement.vue';
    export default {
        data(){
            return{
                customerData:[
                    {account:'果园',name:'果园',contacts:'乔继龙',tel:'13521399050',time:'2017-05-24 10:29:05'},
                    {account:'第五大道',name:'dwdd',contacts:'qiaojilong',tel:'13521399050',time:'2017-04-26 14:41:20'},
                    {account:'dwdd',name:'dwdd',contacts:'qiaojilong',tel:'13521399050',time:'2017-03-27 11:01:58'},
                    {account:'lehuameilan01',name:'乐华梅兰',contacts:'莎莎',tel:'18910910545',time:'2017-03-01 12:36:07'}
                ]
            }
        },
        components:{
            'v-channel':channel
        }
    }
</script>

<style scoped lang="scss">

</style>
