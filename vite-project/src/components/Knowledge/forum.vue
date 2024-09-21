<template>
    <!-- 上面四个引导简介 -->
    <img style='width:100%' src="../../assets/forumtop.png">
     <!-- 博文 -->
      <h1 class="bt">优选博文</h1>
      <div class="bowen">
        

        <div class="bwitem">
            <div class="bwitem-con">
                    <ul>
                        <li><h3>产品技术</h3></li>
                        <li><a href="#">【月刊】华为云开发者联盟7月刊</a>    </li>
                        <li><a href="#">【DTT】KubeEdge架构设计与边缘AI实践探索</a></li>
                        <li><a href="#">【硬核】蝉联双第一!华为领跑中国数据仓库软件市场</a></li>
                        <li><a href="#">【周刊】华为云开发者云主机体验;K8s的“临时容器</a>  </li>
                        <li><a href="#">【硬核】华为云强势领跑中国私有云Web应用防火墙市场</a></li>
                    </ul>
            </div>

            <div class="bwitem-con">
                <ul>
                    <li><h3>开发探索</h3></li>
                    <li><a href="#">【开源】非扁平网络场景下基于Istio治理CCE多集群</a></li>
                    <li><a href="#">【异腾】HCC:异腾高性能集合通信库</a></li>
                    <li><a href="#">【Paas】消息流Serverless之路，看Serverless标准演进</a></li>
                    <li><a href="#">【昇腾】详解CANN小shape算子计算优化技术</a></li>
                    <li><a href="#">【鸿蒙】深入理解仓颉语言的整数类型</a> </li>
                </ul>
            </div>            
        </div>
        
      </div>    
      <a href="#" class='more'>查看全部—></a>
      
      
      <!-- 论坛 -->
        <h1 class="bt">热门论坛</h1>
        <div class="forum-container">
            <div class="layout-container">
            <div class="left-card">
                <a :href="cards[0].cardLink" class="card-link">
                <div class="card-content">
                    <div class="card-title">
                    <a :href="cards[0].titleLink" class="title-link">{{ cards[0].title }} →</a>
                    </div>
                    <ul class="card-body">
                    <li v-for="(item, idx) in cards[0].contents" :key="idx">
                        <a :href="item.link">{{ item.text }}</a>
                    </li>
                    </ul>
                </div>
                </a>
            </div>

            <div class="right-cards">
                <div class="forum-card" v-for="(card, index) in cards.slice(1)" :key="index">
                <a :href="card.cardLink" class="card-link">
                    <div class="card-content">
                    <div class="card-title">
                        <a :href="card.titleLink" class="title-link">{{ card.title }} →</a>
                    </div>
                    <ul class="card-body">
                        <li v-for="(item, idx) in card.contents" :key="idx">
                        <a :href="item.link">{{ item.text }}</a>
                        </li>
                    </ul>
                    </div>
                </a>
                </div>
            </div>
            </div>
        </div>
       <a href="#" class='more'>查看全部—></a>
      
      <!-- 专题 -->
        <h1 class="bt">推荐专题</h1>
        <div class="topics-section">
            
            <div class="topics-grid">
            <div class="topic-item">
                <img src="../../assets/oo.png" alt="云享人物" />
                <div class="topic-content">
                <h3>云享人物</h3>
                <ul>
                    <li>-小开发板承载万千创新可能，小熊派的云上奇遇记</li>
                    <li>-养天已至，见证女性开发者的云上生长力量</li>
                    <li>-导演跨界开发者，云端演绎虚实交织的空间故事</li>
                    <li>-四载磨砺，一群青年“识瘤者”以AI助力医疗创新</li>
                    <li>-学生开发者勇担青年使命，用AI守护少数人的“视界”</li>
                </ul>
                <a href="#">查看更多—></a>
                </div>
            </div>

            <div class="topic-item">
                <img src="../../assets/tw.png" alt="云享热点" />
                <div class="topic-content">
                <h3>云享热点</h3>
                <ul>
                    <li>-代码高手的过节秘籍: CodeArt snap帮你写代码</li>
                    <li>-儿童节, 用ModelArts制作一张AIGC音乐专辑</li>
                    <li>-华为云DTSE专家天团力荐，开发者必读书单重磅来袭</li>
                    <li>-如何基于香橙派Alpro对视频/图像数据进行预处理</li>
                    <li>-大模型时代, 开发者云上成长指南</li>
                </ul>
                <a href="#">查看更多—></a>
                </div>
            </div>

            <div class="topic-item">
                <img src="../../assets/tt.png" alt="云享新鲜" />
                <div class="topic-content">
                <h3>云享新鲜</h3>
                <ul>
                    <li>-社区周刊Vo1.167:华为开发者大会2024社区活动重磅上线</li>
                    <li>-社区周刊Vol.166:华为云连续八年领跑中国桌面云市场</li>
                    <li>-社区周刊Vol.165: 变身小小音乐家，制作一张AI音乐专辑</li>
                    <li>-社区周刊Vol.164: KMesh注入CNCF云原生全景图</li>
                    <li>-极客周刊: HDC 2024崭露云端新手册，专属课程探索大模型</li>
                </ul>
                <a href="#">查看更多—></a>
                </div>
            </div>

            <div class="topic-item">
                <img src="../../assets/ff.png" alt="云享问答" />
                <div class="topic-content">
                <h3>云享问答</h3>
                <ul>
                    <li>-如何筑起数据安全边际?</li>
                    <li>-10个问题，教你如何选择一个事半功倍的代码托管平台</li>
                    <li>-大模型时代，如何快速开发AI应用</li>
                    <li>-十问Huawei Cloud Toolkit:开发插件如何提升开发效能</li>
                    <li>--传统软件如何Saas化改造，10个问答带你握最优解!</li>
                </ul>
                <a href="#">查看更多—></a>
                </div>
            </div>
            </div>
        </div>
        <a href="#" class='more'>查看全部—></a>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: '大家正在讨论',
          titleLink: '#',
          cardLink: '#',
          contents: [
            { text: '【云咖问答】第14期 高效构建新一代工业软件的秘密是…', link: '#' },
            { text: '【低门槛福利】华为云CodeArts&Astro两大平台联合拍…', link: '#' },
            { text: '华为云受邀出席CSDISUMMIT 2024分享构建自动化运.', link: '#' },
            { text: '华为云IOTDA控制台全新升级，邀您有奖体验!云声·建', link: '#' },
            { text: '【活动截止】华为云Astro&CodeArts两大平台联合抽奖.', link: '#' },
            { text: '【开发者空间】提产品优化建议，领多重限量好礼', link: '#' },
            { text: '带你20S 秒创建出行Agent，Al原生应用引擎限时开放公.', link: '#' },
            { text: '【开发者空间】华为云开发者云主机体验过程', link: '#' },
            { text: '【技术互动热力PK赛】第3期 盛夏火力集结，组队PK互..', link: '#' },
            { text: '【云声·建议】提产品优化建议，领华为手表及多重限量.', link: '#' },
          
        ],
        },
        {
          title: 'EI企业智能',
          titleLink: '#',
          cardLink: '#',
          contents: [
            { text: '-【分享交流】开源大模型和闭源大模型，你站哪一边', link: '#' },
            { text: '-python 图博抢答赛', link: '#' },
            { text: '-python 混清矩阵热力图', link: '#' },
          ],
        },
        {
          title: 'CodeArts',
          titleLink: '#',
          cardLink: '#',
          contents: [
            { text: '-【低门槛福利】华为云CodeArts&Astro两大平台联合拍…', link: '#' },
            { text: '-docker国内镜像源配置及走代理设置·转载', link: '#' },
            { text: '-npm配置淘宝镜像的教程详解', link: '#' },
          ],
        },
        {
          title: 'IoT物联网',
          titleLink: '#',
          cardLink: '#',
          contents: [
            { text: '-华为云IOTDA控制台全新升级，邀您有奖体验！云声…', link: '#' },
            { text: '-设备发送字符串到IoT，一直显示不想要的，而且属性也…', link: '#' },
            { text: '-按照API Explore里面的示例代码，require为什么报错…', link: '#' },
          ],
        },
        {
          title: '数据库',
          titleLink: '#',
          cardLink: '#',
          contents: [
            { text: '-TPOPS上传数据库安装包成功 却查不到记录', link: '#' },
            { text: '-OpenGauss 主备数据库同步问题的解决方法', link: '#' },
            { text: '-openGauss存储过程中创建应用', link: '#' },
          ],
        },
      ],
    };
  },
};
</script>




<style>
    .bt{
        font-size: 40px;
        font-weight: 500;
        margin-left: 40px;
        margin-top: 60px;
    }

    .more{
        color:#007bff;
        font-size: larger;
        margin-left:600px;
        margin-bottom: 30px;
        margin-top: 30px;
    }



    .bowen{
        margin-left: 110px;
    }
    
    .bwitem{
        display: flex;

        ul{
            list-style: none;
            h3{
                font-size:23px;
                font-weight: 400;
            }
        }

        ul li{
            padding:12px;
        }

        a{
            color:black;            
        }


    }

        .bwitem-con{
            width:50%;
        }

        .forum-container {
        text-align: center;
        }

        .layout-container {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 20px;
        margin: 20px 0;
        }

        .left-card {
        grid-column: 1 / 2;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 15px;
        background-color: #f9f9f9;
        transition: box-shadow 0.3s ease-in-out;
        }

        .left-card:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .right-cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        }

        .forum-card {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 15px;
        background-color: #f9f9f9;
        transition: box-shadow 0.3s ease-in-out;
        }

        .forum-card:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .card-content {
        text-align: left;
        
        }

        .card-title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 10px;
        }

        .title-link {
        color: black;
        text-decoration: none;
        }

        .title-link:hover {
        color: #007bff;
        }

        .card-body {
        font-size: 15px;
        
        list-style: none;
        padding: 0;
        }

        .card-body li {
        margin: 5px 0;
        }

        .card-body a {
        text-decoration: none;
        color: #333;
        }

        .card-body a:hover {
        text-decoration: underline;
        }

        .card-link {
        text-decoration: none;
        color: inherit;
        display: block;
        }


        /* 专题 */
        .topics-section {
        text-align: center;
        overflow-x: hidden; 


        }

        h2 {
        font-size: 36px;
        font-weight: bold;
        }

        .topics-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-top: 40px;
        padding: 0 20px; 
        }

        .topic-item {
        background-color: #f5f5f5;
        padding: 20px;
        display: flex;
        align-items: flex-start;
        max-width: 100%; 

            img{
                        
                width: 150px;
                height: 200px;
                margin-right: 20px;
                border-radius: 8px;
                max-width: 100%; 
            
            }
        }



        .topic-content {
        text-align: left;
        }

        .topic-content h3 {
        font-size: 18px;
        margin-bottom: 10px;
        }

        ul {
        list-style-type: none;
        padding: 0;
        }

        ul li {
        margin-bottom: 5px;
        font-size: 14px;
        }

        a {
        display: inline-block;
        margin-top: 10px;
        color: #007bff;
        text-decoration: none;
        }

        a:hover {
        text-decoration: underline;
        }


</style>