<template>
    <!-- 头部照片 -->
    <div class="header-pic">
        <img src="https://w.wallhaven.cc/full/0j/wallhaven-0jwmq4.jpg">
    </div>

    <div>
        <div class="nav-buttons">
            <img src="../assets/knowledge.png">
            <router-link to="/home/knowledge/course">在线培训课程</router-link>
            <router-link to="/home/knowledge/communicate">技术研讨会</router-link>
            <router-link to="/home/knowledge/consult">专家咨询服务</router-link>
            <router-link to="/home/knowledge/base">知识库</router-link>
            <router-link to="/home/knowledge/forum">社区论坛</router-link>
            
        </div>

        <router-view></router-view>        
    </div>

    



</template>

<script>
export default {
  name: 'Knowledge',
};
</script>

<style scoped>
    /* 头部照片 */
    .header-pic{
        img{
            width:100%;
            height: 40vh;
            background-size: cover;
        }
    }

   
    ul{
        list-style: none;
    }

    ul li {
        font-size: 14px;
        margin-left: 20px;
    }


    .nav-buttons {
        display: flex;
        justify-content: space-around;
        background: linear-gradient(to right, rgb(101, 141, 220), purple); /* 蓝紫色渐变 */
        padding: 0px;
        }

        .nav-buttons img{
            
            width: 300px;
            opacity: 1.9; /* 控制透明度，使其更自然 */

        }
        .nav-buttons a {
        color: white;
        text-decoration: none;
        font-size: 22px;
        line-height: 68px;
        }

        .nav-buttons a.router-link-active {
        font-weight: bold;
        color: black;
        }

</style>