<template>
    <!-- 头部照片 -->
    <div class="header-pic">
        <img src="http://pic.616pic.com/bg_w1180/00/03/49/415hBNYae5.jpg!/fh/300">
    </div>


    <!-- 问卷 -->
    <div class="designer">
        <div class="top-row">
        <div class="card">
            <v- name="dianhuaji" alt="Online Consultation" class="icon"></v->
            <h3 class="dt">线上咨询</h3>
            <p class="description">通过线上的客服咨询初步了解客户的企业公司背景及上云需求</p>
        </div>
        <div class="card">
            <v- name="fangdajing" alt="Offline Appointment" class="icon"></v->
            <h3 class="dt">线下预约</h3>
            <p class="description">线下预约客户当面交流，定制上云方案，以及后期维护等工作的设计</p>
        </div>
        </div>
        <div class="bottom-row">
        <div class="card">
            <v- name="wj-fa" alt="Cloud Case" class="icon"></v->
            <h3 class="dt">上云案例</h3>
            <p class="description">由以往的各领域的上云的案例供客户参考</p>
        </div>
        </div>
    </div>     


    <!-- 服务优势  -->
    <div class="advantage">
        <div class="tt">服务优势</div>
        <div class="advantagies">
            <div class="item" v-for="(item,index) in items" :key="index">
                    <div class="circle">
                        <v- name="wujiaoxing" class="fas fa-star"></v->
                    </div>
                    <div class="label">{{ item }}</div>                
            </div>
        </div>
    </div>


    <!-- 适用行业 -->
    <div class="apply">
        <div class="tt">适用行业</div>
        <!-- 五张一行 -->
        <div class="apply-show">
            <div class="row" v-for="(row, rowIndex) in rows" :key="rowIndex">
                <div class="image-with-text" v-for="(image, imageIndex) in row" :key="imageIndex">
                    <img :src="image.src" :alt="`Image ${rowIndex * 5 + imageIndex + 1}`">
                    <p>{{ image.text }}</p>
                </div>
            </div>
        </div>
    </div>




</template>

<script>
export default{
        data() {
        return {
            images: [
                { src: 'https://w.wallhaven.cc/full/r7/wallhaven-r7mq1m.png', text: '互联网' },
                { src: 'https://w.wallhaven.cc/full/3k/wallhaven-3kx8r6.jpg', text: '金融' },
                { src: 'https://w.wallhaven.cc/full/9d/wallhaven-9d69kw.jpg', text: '制造' },
                { src: 'https://w.wallhaven.cc/full/13/wallhaven-13lkwg.jpg', text: '电信' },
                { src: 'https://w.wallhaven.cc/full/yj/wallhaven-yjvo8l.jpg', text: '医疗' },
                { src: 'https://w.wallhaven.cc/full/x1/wallhaven-x1836l.jpg', text: '政府' },
                { src: 'https://w.wallhaven.cc/full/57/wallhaven-578ov3.jpg', text: '汽车' },
                { src: 'https://w.wallhaven.cc/full/vm/wallhaven-vmg9r5.jpg', text: '交通' },
                { src: 'https://w.wallhaven.cc/full/p2/wallhaven-p22e6j.jpg', text: '教育' },
                { src: 'https://w.wallhaven.cc/full/49/wallhaven-492z6w.jpg', text: '房地产与建筑' },
            ],

            items:[
                '可靠性','安全性','易用性','可扩展性','灵活性',
                '快速部署','持续创新','全球可达性','成本效益','透明化定价'
            ],
        };
    },
    computed: {
        rows() {
            const rows = [];
            for (let i = 0; i < this.images.length; i += 5) {
                rows.push(this.images.slice(i, i + 5));
            }
            return rows;
        }
    }
}
</script>





<style scoped>
    html, body {
        margin: 0;
        padding: 0;
        overflow-x: hidden; /* 隐藏水平滚动条 */
        width: 100%; /* 确保页面宽度不超出视口 */
    }

    ul{
        list-style: none;
    }

    ul li {
        font-size: 14px;
        margin-left: 20px;
    }

    .tt{
        text-align: center;
        font-size:25px;
    }

    /* 头部照片 */
    .header-pic{
        img{
            width:100%;
            height: 50vh;
            background-size: cover;
        }
    }

    /* 设计栏 */
    .designer {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
        width: 100%;
        padding: 15px;
        box-sizing: border-box; /* 确保 padding 不影响元素的宽度 */
    }

    .top-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        max-width: 1000px;
        margin-top:20px;
        margin-bottom: 20px;
        box-sizing: border-box; /* 确保 padding 不影响元素的宽度 */
    }

    .card {
        height:26vh;   
        flex: 1;
        border: 1px solid rgb(155, 147, 147);
        border-radius: 20px;
        padding:20px;
        text-align: center;
        margin: 0 5px;
        box-sizing: border-box;
        align-items: center; /* 垂直居中对齐 */
        justify-content: center; /* 水平居中对齐（如果需要） */
    }

    .bottom-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        max-width: 600px;
        box-sizing: border-box; /* 确保 padding 不影响元素的宽度 */
    }

    .icon {
        color:#15a0f1;
        font-size:35px;
        width: 40px;
        margin-bottom: 5px;
        
    }    

    .dt{
        font-weight:400;
        font-size: 17px;
        color:#008deb;
    }

    .description{
        font-size: 12px;
        color:gray;
        flex-grow:1;
        line-height: 1.6;
        word-break: break-word;
    }

    /* 服务优势 */
    .advantage{
        background-color: rgba(128, 128, 128, 0.173);
        height: 45vh;
        margin-top: 20px;
        padding: 40px;

    }
    .advantagies{
        display: flex;
        flex-wrap: wrap;  
        justify-content: space-between;
        margin-top: 60px;
    }
    .item{
        width:18%;
        margin-bottom: 20px;
        text-align: center;
        &:hover{
            transform: scale(1.05);
        }
    }

    .circle{
        width:50px;
        height: 50px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 10px auto;
    }

    .circle .fas{
        font-size: 20px;
        color:#389bd4;
    }
    .label{
        font-size: 14px;
        margin-bottom: 20px;
    }

    /* 适用行业 */
    .apply{
        margin-top: 60px;
        height: 90vh;
        .apply-show{
            width:90%;
            margin:auto;
            padding:60px;
        }
        
        .row{
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
        }

        .image-with-text{
            text-align: center;
            &:hover{
                color:lightblue;
                transform: scale(1.05);}
        }
        .image-with-text img{
            border-radius: 50%;
            width:120px;
            height: 120px;
            padding:20px;
            transition: transform 0.3s ease;
        }

    }





 

</style>