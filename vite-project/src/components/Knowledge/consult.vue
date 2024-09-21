<template>
  <div class="container">
    <div class="category-section">
      <h3>问题分类</h3>
      <div v-for="(category, index) in categories" :key="index">
        <div class="category-title" @click="toggleCategory(index)">
          <span>{{ category.title }}</span>
          <span class="arrow">{{ activeCategory === index ? '▲' : '▼' }}</span>
        </div>
        <div v-if="activeCategory === index" class="sub-items">
          <div
            v-for="(item, idx) in category.items"
            :key="idx"
            class="sub-item"
            @mouseover="hoverIndex = idx"
            @mouseleave="hoverIndex = null"
            :class="{ 'hovered-item': hoverIndex === idx }"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>

    <div class="type-section">
      <h3>问题类型</h3>
      <div v-for="(type, index) in types" :key="index">
        <div class="type-title" @click="toggleType(index)">
          <span>{{ type.title }}</span>
          <span class="arrow">{{ activeType === index ? '▲' : '▼' }}</span>
        </div>
        <div v-if="activeType === index" class="sub-items">
          <div
            v-for="(item, idx) in ['查看帮助文档', '在线咨询专家']"
            :key="idx"
            class="sub-item"
            @mouseover="hoverTypeIndex = idx"
            @mouseleave="hoverTypeIndex = null"
            :class="{ 'hovered-item': hoverTypeIndex === idx }"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';

// Data for categories and types
const categories = ref([
  { title: '计算', items: ['弹性云服务器 ECS', '裸金属服务器 BMS', '镜像服务 IMS','专属主机DEH','专属云DEC'] },
  { title: '容器', items: ['云容器实例CCl', '容器镜像服务SWR'] },
  { title: '存储', items: ['数据工坊DWR','云硬盘EVS', '存储容灾服务SDRS','云备份CBR'] },
  { title: '数据库', items: ['云数据库GuassDB', '云数据库RDS','云数据库服务DDS'] },
  { title: '人工智能', items: ['华为HiLens', '视频编辑'] },
  { title: '域名与网络', items: ['商标注册', '云解析服务'] },
]);

const types = ref([
  { title: 'ECS远程登录诊断工具（推荐）', items: [] },
  { title: '搭建网站无法访问怎么办？', items: [] },
  { title: 'Ping不通怎么办？', items: [] },
  { title: '无法登录到Windows服务器怎么办？', items: [] },
  { title: '怎么配置安全组放通端口？', items: [] },
  { title: '忘记云服务器密码怎么办？', items: [] },

]);

const activeCategory = ref(null);
const activeType = ref(null);
const hoverIndex = ref(null);
const hoverTypeIndex = ref(null);


const toggleCategory = (index) => {
  activeCategory.value = activeCategory.value === index ? null : index;
};

const toggleType = (index) => {
  activeType.value = activeType.value === index ? null : index;
};
</script>


<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 80vh;
}

.category-section, .type-section {
  width: 45%;
}

h3 {
  text-align: center;
  background: linear-gradient(90deg, #ff7b00, #ffcc00);
  padding: 10px;
  border-radius: 8px;
  color: white;
}

.category-title, .type-title {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f5f5f5;
  cursor: pointer;
  font-size: 18px;
  border: 0px none #ddd;
}

.sub-items {
  padding-left: 10px;
}

.sub-item {
  padding: 10px;
  background-color: white;
  border: 1px none #ddd;
  cursor: pointer;
}

.arrow {
  font-size: 16px;
}

.hovered-item {
  background-color: #dda0dd; 
  font-weight: bold;
}
</style>
