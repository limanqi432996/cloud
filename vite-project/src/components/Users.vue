<template>
    <!-- 头部照片 -->
    <div class="header-pic">
        <img src="https://github.com/limanqi432996/pic/raw/main/pt/n.png">
    </div>

    <div class="container">
        <!-- 基本信息部分 -->
        <div class="basic-info">
        <div class="row">
            <!-- 左侧头像和编辑按钮 -->
            <div class="avatar-section">
            <div class="avatar-circle">
                <span class="avatar-number">1</span>
                <button class="edit-avatar-btn" @click="editAvatar">✎</button>
            </div>
            </div>
            <!-- 右侧账号信息 -->
            <div class="info-section">
            <div class="info-row">
                <span class="label light-text">账号昵称</span>
                <span>100037558041 <button @click="editNickname" class="blue-text">✎</button></span>
            </div>
            <div class="info-row">
                <span class="label light-text">认证状态</span>
                <span>未认证 <button @click="submitVerification" class="blue-text">提交认证</button></span>
            </div>
            <div class="info-row">
                <span class="label light-text">账号ID</span>
                <span>100037558041</span>
            </div>
            <div class="info-row">
                <span class="label light-text">所属行业</span>
                <span>未填写 <button @click="editIndustry" class="blue-text">✎</button></span>
            </div>
            <div class="info-row">
                <span class="label light-text">APPID</span>
                <span>1327571476</span>
            </div>
            <div class="info-row">
                <span class="label light-text">注册时间</span>
                <span>2024-06-27 16:07:19</span>
            </div>
            </div>
        </div>
        </div>

        <!-- 登录方式部分 -->
        <div class="login-methods">
        <h3>登录方式</h3>
        <p>账号支持多种登录方式，便捷管理云账号</p>

        <ul>
            <li>
            <span>微信(注册方式):</span> 
            <span>支持微信扫码授权登录</span>
            <span class="status">言成</span>
            <button @click="modifyWechat" class="blue-text">修改</button>
            </li>
            <li>
            <span>QQ:</span> 
            <span>支持QQ授权登录</span>
            <span class="status">未关联</span>
            <button @click="bindQQ" class="blue-text">绑定</button>
            </li>
            <li>
            <span>企业微信:</span> 
            <span>支持企业微信扫码授权登录</span>
            <span class="status">未关联</span>
            <button @click="bindQYWeChat" class="blue-text">绑定</button>
            </li>
            <li>
            <span>邮箱:</span> 
            <span>支持账号密码登录</span>
            <span class="status">未关联</span>
            <button @click="bindEmail" class="blue-text">绑定</button>
            </li>
            <li>
            <span>微信公众号:</span> 
            <span>支持小程序、公众号授权登录</span>
            <span class="status">未关联</span>
            <button @click="bindWeChatPublic" class="blue-text">绑定</button>
            </li>
        </ul>
        </div>
    </div>




    
    <div class="search">
        <h2 style="font-weight:400;">查询云服务使用情况</h2>

        <div class="searchlist">
              <ul >
                  <li><img style="width:220px" src=".././assets/baidu.png"></li>
                  <li><img style="width:200px" src=".././assets/aliyun.png"></li>
                  <li><img style="width:200px" src="https://res-static.hc-cdn.cn/aem/content/dam/cloudbu-site/archive/china/zh-cn/about/events/citysummit2021/home12231645/assets/image/logo.png"></li>
                  <li><img style="width:160px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlIQDl5NIIinyHc_1I1TpBpUy48b7HYKbiQg&s"></li>
              </ul>        
        </div>
    </div>

    <div class="pay">
        <button style="cursor:pointer">支付</button><br/>
        <span>支持以下支付方式:</span>
        
        <div class="paylist">
            <ul >
                <li><img style="width:115px" src="https://github.com/limanqi432996/pic/blob/main/pt/unnamed.png?raw=true"></li>
                <li><img style="width:100px" src="https://github.com/limanqi432996/pic/raw/main/pt/1625794837683767.png?raw=true"></li>
                <li><img style="width:50px" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/UnionPay_logo.svg"></li>
                <li><img style="width:30px" src="https://img.88icon.com/upload/jpg/20210522/7bc674dc4f355187e2d868c2ed46a7fc_111074_800_800.jpg!bg"></li>
                <li><img style="width:60px" src="https://img.88icon.com/download/jpg/20201113/473cec5f85de843b861bacf6fd28e89f_512_273.jpg!bg"></li>
            </ul>        
        </div>
    </div>




    
</template>

<script>
export default {
  methods: {
    submitVerification() {
      alert('提交认证被点击');
    },
    editNickname() {
      alert('编辑昵称被点击');
    },
    editIndustry() {
      alert('编辑所属行业被点击');
    },
    modifyWechat() {
      alert('修改微信被点击');
    },
    bindQQ() {
      alert('绑定QQ被点击');
    },
    bindQYWeChat() {
      alert('绑定企业微信被点击');
    },
    bindEmail() {
      alert('绑定邮箱被点击');
    },
    bindWeChatPublic() {
      alert('绑定微信公众号被点击');
    },
    editAvatar() {
      alert('修改头像被点击');
    }
  }
}
</script>

<style scoped>
        ul{
            list-style: none;
        }
    /* 头部照片 */
    .header-pic{
        img{
            width:100%;
            height: 50vh;
            background-size: cover;
        }
    }

.container {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
}

.basic-info {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
  margin-bottom: 20px;
  position: relative;
}

.row {
  display: flex;
  align-items: flex-start;
  position: relative;
}

.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  position: relative;
}

.avatar-circle {
  width: 60px;
  height: 60px;
  background-color: #007bff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
  position: relative;
}

.avatar-number {
  font-size: 24px;
}

.edit-avatar-btn {
  position: absolute;
  right: -10px;
  bottom: -10px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

.info-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  flex-grow: 1;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.label {
  font-weight: normal;
}

.light-text {
  color: #888;  /* 浅色字体 */
}

.blue-text {
  color: #1e90ff;
  background: none;
  border: none;
  cursor: pointer;
}

.blue-text:hover {
  text-decoration: underline;
}

.login-methods {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
}

.login-methods h3 {
  margin-bottom: 10px;
}

.login-methods ul {
  list-style: none;
  padding: 0;
}

.login-methods li {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr auto;
  margin-bottom: 10px;
}

.status {
  color: #888;
  font-style: italic;
}

.login-methods li span {
  margin-right: 5px;
  color: #333;
}

.login-methods li span.status {
  color: #888;
}

.login-methods li span:first-child {
  font-weight: bold;
}


/* 查询 */
.search{
  border-radius: 10px;
  height: 30vh;
  text-align: center;
}
.searchlist{
        margin-left: 120px;
        li{ 
        float:left;
        padding:20px;   

        }
        img{
          height: auto;
         }  
}

/* 支付 */
    .pay{
        height: 25vh;
        align-items: center;
        align-content: center;
        text-align: center;
    button{
        width:100px;
        height: 40px;
        background-color: #007bff;
        color:black;
        border-radius: 8px;
        border:#f5f5f5;
        font-size: 18px;
    }
    span{
        font-size: 10px;
        color:gray;
    }
    }
    .paylist {
        margin-left: 300px;
        li{ 
        float:left;
        padding:20px;    
        }


        }
</style>
