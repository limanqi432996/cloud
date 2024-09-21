<template>
    <!-- 图片放置 中间可以跳转到design页面 -->
  <div class="background-container">
    <div class="overlay">
      <div class="content">
        <h1 style="font-weight: 400 ;font-size: 40px;">云翼领航，一键解决上云难题</h1>
        <p style="font-weight: 400 ;font-size: 20px;">云端启航，未来已来！数字驱动，变革未来！</p>
        <button @click="navigateToDesign" class="tod">一键定制上云方案</button>
      </div>
    </div>
  </div>


    <!-- 竖列图片 -->
  <div class="main-container">
    <!-- 背景图片 -->
    <div class="background-overlay"></div>
    
    <div class="container">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="['content-block', { reverse: (index + 1) % 2 === 0 }]"
      >
        <!-- 文本部分 -->
        <div class="text-section">
          <h3>
            {{ item.title }}
            <span class="usage">（{{ item.usage }}人使用中）</span><span class="icon">👥</span>
          </h3>
          <p>{{ item.description }}</p>
          <div class="button-section">
            <button @click="navigateToService" class="learn-more">了解更多</button>
            <button @click="navigateToexport" class="consult-expert">专家咨询</button>
            <!-- 按下“专家咨询”可以跳转到export的页面组件 -->
          </div>
        </div>
        <!-- 图片部分 -->
        <div class="image-section">
          <img :src="item.image" alt="content image" />
        </div>
      </div>
    </div>
  </div>



    <!-- 企业风采 -->
     <div class="picture">
        <div class="text-pict">
            <div class="pi-tt">
                <p class="t1">云知识培训 云使用触手可及</p>
                <p>企业培训风采</p>        
            </div>

            <div class="pi-show">
                <div class="row" v-for="(row, rowIndex) in rows" :key="rowIndex">
                    <img v-for="(image, imageIndex) in row" :key="imageIndex" :src="image.src" :alt="`Image ${rowIndex * 4 + imageIndex + 1}`">
                </div>    
            </div>
        </div>

     </div>


    <!-- 上云快讯 -->
    <div class="news">
        <p style="font-size:20px;text-align: center;margin: 12px;">最新上云快讯</p>
        <div class="img-text">
            <div class="bac-img">
                <img src="https://github.com/limanqi432996/pic/blob/main/pt/r.jpg?raw=true" class="bc-img">
            </div>
            <div class="te">
                <p class="te1">最新云计算技术研究和行业洞察</p>
                <p>2023年7月正式发布了两份针对云工作负载安全市场份额研究报告，</p>
                <p>即：《中国公有云云工作负载安全市场份额，2022：伴云而生，随云而动》</p>
                <p>和《中国私有云云工作负载安全市场份额，2022：合规为根基，技术为骨干》</p>
                <button @click="navigateToKnow">了解更多信息</button>
            </div>
            
        </div>
    </div>

    <div class="end">
        <div class="end-content">
            <p class = "tt1">安全稳定的帮助上云服务</p>
            <p>专业团队 优质服务 值得您信赖</p>
            <button @click="navigateToDesign">了解更多</button>            
        </div>
    </div>

</template>




<script>
// 每四张图片排列
export default{


    data(){
        return {
            images:[
                    {src:'https://github.com/limanqi432996/pic/raw/main/pt/a.png'},
                    {src:'https://github.com/limanqi432996/pic/raw/main/pt/b.png'},
                    {src:'https://github.com/limanqi432996/pic/raw/main/pt/c.png'},
                    {src:'https://github.com/limanqi432996/pic/raw/main/pt/d.png'},
                    {src:'https://github.com/limanqi432996/pic/raw/main/pt/e.png'},
                    {src:'https://github.com/limanqi432996/pic/raw/main/pt/f.png'},
                    {src:'https://github.com/limanqi432996/pic/raw/main/pt/g.png'},
                    {src:'https://github.com/limanqi432996/pic/raw/main/pt/h.png'},
            ],

      items: [
        {
          title: "网络高可用",
          description: "用户可以通过弹性负载均衡ELB将访问流量自动分发到后端多台云服务器，消除单点故障导致业务中断的风险，实现更高水平的应用容错。",
          usage: 98, // 使用人数
          image: "https://github.com/limanqi432996/pic/raw/main/pt/m.png",
        },
        {
          title: "业务迁移",
          description: "提供IDC上云、CDH上云、云上资源迁移等多种大数据迁移解决方案，指导客户完成业务零改造、不中断、便捷高效的大数据迁移。",
          usage: 874,
          image: "https://github.com/limanqi432996/pic/raw/main/pt/k.png",
        },
        {
          title: "数据库上云",
          description: "将本地自建数据库迁移上云，降低硬件成本和DBA运维成本，享受云上数据库高扩展、高可靠、低成本优势。",
          usage: 1234,
          image: "https://github.com/limanqi432996/pic/raw/main/pt/l.png",
        },
        {
          title: "数据灾备",
          description: "为企业提供容灾系统的交付管理和交付实施，辅导并支持相关方完成集成验证、实施以及验收工作，保证系统落地。",
          usage: 2023,
          image: "https://github.com/limanqi432996/pic/raw/main/pt/j.png",
        },
      ],       
            
            
        };
    },
    computed:{
        rows(){
            const rows = [];
            for (let i = 0; i < this.images.length; i+=4)
            {
                rows.push(this.images.slice(i,i+4))
            }
            return rows;
        },


    },
    methods: {
        //跳到export页面 
        navigateToexport(){
          this.$router.push('/export');
        },
        
        navigateToDesign() {
        this.$router.push('/home/design');
        },

        navigateToKnow(){
          this.$router.push('/home/knowledge');
        },

        navigateToService(){
          this.$router.push('/home/service');
        }

    }    
}

</script>





<style scoped>
 
    
    /* 头部照片 */
    .background-container {
        position: relative;
        width: 100%;
        height: 450px;
        background-image: url('https://github.com/limanqi432996/pic/raw/main/pt/i.png');
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 60%; /* 遮光罩占左边 60% */
        height: 100%;
        background-color: rgba(87, 125, 200, 0.596); /* 浅蓝色透明遮罩 */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content {
        text-align: center;
        color: white;
    }

    .tod{
        font-size: larger;
        background-color: white;
        color:#0472f0c8;
    }

    button {
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
    
    }


    /* 竖列图片 */
    /* 背景图片覆盖整个布局 */
    .main-container {
      position: relative;
      width: 100%;
      height: 100%;
      background-color: #ffffffcf;
      overflow: hidden;

      display: flex;
      justify-content: center;
    }

    .background-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('https://github.com/limanqi432996/pic/raw/main/pt/n.png');
      background-size: cover;
      background-position: center;
      z-index: -1;
    }

    /* 外部容器 */
    .container {
      width: 100%;
      max-width: 1200px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 50px;
    }

    /* 每一个内容块 */
    .content-block {
      display: flex;
      border: 0px  #e9f1f9;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0);
      justify-content: space-between;
      padding: 10px; /* 使图片和文字距离更近 */
      align-items: center;
    }

    /* 反向排列 */
    .reverse {
      flex-direction: row-reverse;
    }

    /* 图片部分 */
    .image-section {
      flex: 4;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 10px 10px 0px rgb(149, 204, 236); /* 添加淡蓝色阴影 */
    }

    .image-section img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      
    }

    /* 文本部分 */
    .text-section {
      flex: 6;
      padding: 10px 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* 标题和描述文本 */
    .text-section h3 {
      font-size: 23px;
      font-weight:350;
      color: #333;
      margin-bottom: 10px;
    }

    .usage {
      font-size: 14px;
      color: #666;
      margin-left: 5px;
    }

    .text-section p {
      font-size: 16px;
      color: #666;
      margin-bottom: 20px;
    }

    /* 按钮部分 */
    .button-section {
      display: flex;
      align-items: center;
    }

    .learn-more {
      background-color: #1e90ff;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .learn-more:hover {
      background-color: #1c86ee;
    }

    /* 专家咨询按钮 */
    .consult-expert {
      background-color: #32cd32;
      color: white;
      padding: 8px 16px;
      margin-left: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .consult-expert:hover {
      background-color: #2eb82e;
    }

    /* 图标样式 */
    .icon {
      font-size: 20px;
      margin-left: 1px;
    }

    @media (max-width: 768px) {
      /* 小屏幕下调整为垂直布局 */
      .content-block {
        flex-direction: column;
      }

      .reverse {
        flex-direction: column;
      }

      .image-section,
      .text-section {
        flex: none;
        width: 100%;
      }
    }

    /* 培训风采 */
    .picture{
        background-color: rgba(193, 224, 231, 0.306);
        padding:15px;

        .pi-tt{
            text-align: center;
            p{
                font-size: 15px;
            }
            .t1{
                font-size:23px;
            }

        }
        .pi-show{
            width:90%;
            margin:auto;
            padding:25px;
        }
        
        .row{
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }

        .row img{
            width:15%;
            height: auto;
            padding:10px;
            &:hover{
                transform: scale(1.05);}
        }

    }


    /* 上云快讯 */
    .news{
        .img-text{
            position:relative;
            width:100%;
            height: 60vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            /* 让图片居中 */
        }
  
        .bc-img{
                position: absolute;
                top:0;
                left:0;
                width:100%;
                height: 100%;
                background-size: cover;
                /* background-position: bottom; */
                z-index: -1;
                /* 次序 */
            
        } 

        .te{
            position: absolute;
            top:20%;
            left:15%;
            transform: translate(-20%,-20%);
            color:black;
            text-shadow: 2px 2px 4px rgba(0,0,0,7);
            .te1{
                font-size: 28px;
            }
        }

        button{
            border: solid 1px;
            border-radius: 3px;
            color:rgb(78, 154, 240);
            background-color: white;
            padding: 5px 30px;
            font-size:12px;
            
            &:hover{
                transform: scale(1.05);
            }
        }
    }


    /* 优质服务 */
    .end{
        background-color: rgba(52, 49, 49, 0.928);
        margin-top: 20px;

    }

    .end-content{
        color:white;
        text-align: center;
        padding:20px;
        padding-bottom: 50px;
        font-size:14px;
        .tt1{
            font-size: 22px;
        }        


    }

    button{
    border: none;
    border-radius: 5px;
    color:white;
    background-color:rgb(78, 154, 240);
;
    padding: 8px 30px;
    font-size:12px;
    
    &:hover{
        transform: scale(1.05);
    }
}

</style>