<template>
    <div class="home-container">
         <!-- 头部区域 -->
        <div class = "header-container">
            <!-- 导航栏 -->
            <div class = "shortcut">
                <!-- 左边内容 -->
                <div class = "fl">
                    云翼领航
                </div>

                <!-- 右边内容 -->
                <div class = "fr">
                    <ul class = "mean">
                        <li class="mean-item">
                            <router-link to="/home/firstpage">首页</router-link>
                            <!-- 首页 -->
                        </li>
                        <li class="mean-item">
                            <router-link to="/home/design">上云方案设计</router-link>
                            <!-- 上云方案设计 -->
                        </li>
                        
                        <li class="mean-item">
                            <router-link to="/home/service">上云服务提供</router-link>
                            <!-- 上云服务提供 -->
                        </li>

                        <li class="mean-item">
                            <router-link to="/home/knowledge">知识赋能中心</router-link>
                            <!-- 知识赋能中心 -->
                        </li>

                        <li class="mean-item">
                            <router-link to="/home/users">用户中心</router-link>
                            <!-- 用户中心 -->
                        </li>

                        <li class="mean-item">
                            <router-link to="/home/experiment">创新实验室</router-link>
                            <!-- 创新实验室 -->
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <!-- 主体区域 -->
        <div class = "body-container">
            <!-- 主体内容显示区域 -->
            <div class = "body-main">
                <!-- 显示视图 页面的不同也在这里 -->
                <router-view></router-view> 
            </div>

                        <!-- 底部区域 -->
            <div class = "bottom-container">
                <div class = "bottom-item">
                    <div class = "bottom-item-content">
                        <ul>
                            <li class="title">云翼导航</li>
                            <li>地址：深圳市龙岗区龙翔大道2188号</li>
                            <!-- <li>电话：010-00000000</li>
                            <li>邮箱：support@modao.cc</li> -->
                                <!-- 放三个图标 -->
                            <li>
                                <div class="social-icons">
                                    <v- name="weibo" style="margin-right: 15px;font-size: 300%"></v->
                                    <v- name="weixin" style="margin-right: 15px;font-size: 300%"></v->
                                    <v- name="tuite" style="margin-right: 15px;font-size: 300%"></v->
                                </div>
                            </li>                          
                            
                            <li class="bottom-href">
                                                            友情链接：
                            <a href="#">百度</a> | <a href="#">新浪</a> | <a href="#">网易</a>

                            </li>
                        </ul>
                    </div>    

                    <div class = "bottom-item-content">
                        <ul>
                            <li class="title">企业介绍</li>
                            <li>品牌介绍</li>
                            <li>团队介绍</li>
                            <li>关于我们</li>
                        </ul>
                    </div>

                    <div class = "bottom-item-content">
                        <ul>
                            <li class="title">服务范围</li>
                            <li>产品介绍</li>
                            <li>新闻动态</li>
                            <li>服务品牌</li>
                        </ul>
                    </div>
                </div>
            </div>   
        </div>        



    
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()


</script>


<style scoped>


/*头部的样式 */

    .header-container{
        background-color: rgba(219, 243, 251, 0.526);
        display: block;
        ul{
        list-style: none;
        }

        ul li {
            font-size: 14px;
            margin-left: 20px;
            display: inline;
            cursor: pointer;
        }

    }

    .shortcut{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        .fl{
            float: left;
            color: rgb(4, 114, 240);
            font-size:25px;
            margin-left: 100px;
        }

        .fr .mean{
            display: flex;
            margin-right: 28px;  
            color:black;
        }

        .mean-item a{
            text-decoration: none; 
            color:black;
            &:hover{
                color:rgb(39, 126, 203);
            }
        }        
        
        .mean-item a.router-link-active{
            color:rgb(39, 126, 203);
        } 
    }

      /* 底部的样式 */
        ul{
            list-style: none;
        }

        ul li {
            font-size: 14px;
            margin-left: 20px;
        }

    .bottom-container{
        background-color: rgba(9, 7, 7, 0.846);

    }
    .bottom-item{
        color:white;
        padding:20px;
        display:flex;
        justify-content: space-between;
    
    }

    .bottom-item-content{
        margin-left: 60px;
        width:30%;
        margin-bottom: 10px;


        li{
            padding:8px;
        } 

        .social-icons{
            padding-right: 3px;
        }


        .title{
            font-size: 18px;
            color:grey;
        }

        .social-icons{
            display: flex;
            margin-top: 20px;
        }

        .social-icons img{
            margin-right:10px;
        }

        .bottom-href{
            margin-top: 20px;
            font-size: 14px;
        }

        a{
            text-decoration: none;
            color:white;
        }

    }    
    


</style>
