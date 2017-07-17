<template>
    <div>
        <nav class="navbar navbar-inverse" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="">总后台管理</a>
                </div>
                <div class="collapse navbar-collapse navbar-ex1-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="">
                                <i class="glyphicon glyphicon-cog"></i>
                                账号设置
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="glyphicon glyphicon-log-out"></i>
                                退出登录
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="subNavbar-wrapper">
            <div class="container">
                <ul class="mainNav nav navbar">
                    <li v-for="item in navTab">
                        <router-link :to="item.link">
                            <i class="glyphicon " :class="item.class"></i>
                            <span>{{item.title}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>


</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return{
                navTab:[
                    {
                        title:'HTML5页面管理器',
                        class:'glyphicon-picture',
                        link:'/html5'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .navbar{
        border-radius:0;
        margin-bottom: 0;
        .navbar-inverse{
            background-color: #292929;
        }
        .navbar-header{
            .navbar-brand{
                font-weight: 600;
            }
        }
    }
    .subNavbar-wrapper{
        height: 80px;
        border-top: 1px solid #595959;
        border-bottom: 1px solid #000;
        background-image: linear-gradient(to bottom, #414141 0%, #323232 100%);
        overflow: hidden;
        .mainNav{
            margin-bottom: 0;
            li{
                float: left;
                min-width: 90px;
                height: 80px;
                padding: 0;
                margin: 0;
                text-align: center;
                list-style: none;
                border-left: 1px solid #4A4A4A;
                border-right: 1px solid #292929;
                text-align: center;
                a{
                    color: #636363;
                    overflow: hidden;
                    padding: 0 15px;
                    height: 100%;
                    &:hover,&:focus,&:visited{
                        color: #999;
                        background-image: linear-gradient(to bottom, #414141 0%, #323232 100%);
                    }
                    i{
                        width: 24px;
                        height: 24px;
                        font-size: 28px;
                        display:block;
                        margin: 14px auto 9px;
                    }
                }

            }
        }
    }
</style>
