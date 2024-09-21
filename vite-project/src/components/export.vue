<template>
  <div class="expert-consultation">
    <!-- 顶部导航栏 -->
    <div class="navbar">
      <button style="color:black" class="back-button" @click="goBack">
        ←
      </button>
      <span class="title">专家咨询</span>
    </div>

    <!-- 主体布局 -->
    <div class="main-content">
      <!-- 左侧对话部分 -->
      <div class="chat-section">
        <div class="chat-message">
          <div class="avatar">👤</div>
          <div class="message-content">
            <p>亲，很高兴为您服务，请问您咨询什么问题呢？</p>
            <p>如何使用本服务产品？</p>
            <p>相较传统订单，上云有什么优势？</p>
            <p>该方案需要用到哪些产品？</p>
          </div>
        </div>
        <!-- 输入框和发送按钮 -->
        <div class="input-section">
          <input v-model="userInput" type="text" placeholder="请输入你的问题" />
          <button @click="sendMessage">发送</button>
        </div>
      </div>

      <!-- 右侧选项卡部分 -->
      <div class="tabs-section">
        <div class="tabs">
          <div :class="{ active: activeTab === 'product' }" @click="activeTab = 'product'">产品</div>
          <div :class="{ active: activeTab === 'solution' }" @click="activeTab = 'solution'">方案</div>
          <div :class="{ active: activeTab === 'orders' }" @click="activeTab = 'orders'">我的订单</div>
        </div>

        <div class="tab-content">
          <div v-if="activeTab === 'product'">
            <p>这里显示产品信息...</p>
          </div>
          <div v-if="activeTab === 'solution'">
            <p>这里显示方案信息...</p>
          </div>
          <div v-if="activeTab === 'orders'">
            <p>这里显示我的订单信息...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: '',
      activeTab: 'product', // 默认选中 "产品" 选项卡
    };
  },
  methods: {
    goBack() {
      this.$router.push('/home/firstpage');
    },
    sendMessage() {
      if (this.userInput.trim()) {
        // 处理发送逻辑
        alert(`发送的消息: ${this.userInput}`);
        this.userInput = ''; // 清空输入框
      }
    },
  },
};
</script>

<style scoped>
/* 确保整体铺满屏幕 */
.expert-consultation {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 占满整个视口高度 */
  box-sizing: border-box;
}

/* 顶部导航栏 */
.navbar {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.back-button {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.title {
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
}

/* 主体内容 */
.main-content {
  display: flex;
  flex-grow: 1;
  height: 100%;
}

/* 左侧聊天区 */
.chat-section {
  flex: 3; /* 占据更大比例 */
  padding: 20px;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.chat-message {
  display: flex;
  align-items: flex-start;
}

.avatar {
  font-size: 24px;
  margin-right: 10px;
}

.message-content {
  background-color: #e5e5e5;
  border-radius: 10px;
  padding: 10px;
}

.input-section {
  display: flex;
  margin-top: 20px;
}

input {
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
}

/* 右侧选项卡区 */
.tabs-section {
  flex: 1; /* 占据较小比例 */
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.tabs {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
}

.tabs div {
  cursor: pointer;
  padding: 10px 20px;
}

.tabs div.active {
  color: #007bff;
  font-weight: bold;
  border-bottom: 2px solid #007bff;
}

.tab-content {
  padding: 10px;
  flex-grow: 1;
}
</style>

