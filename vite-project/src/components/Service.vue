<template> 
  <!-- 头部照片 -->
  <div class="header-pic">
    <img src="https://github.com/limanqi432996/pic/raw/main/pt/o.png" />
  </div>

  <!-- 服务分类按钮 -->
  <div class="service-choose">
    <ul class="service-means">
      <li class="service-mean" @click="selectCategory('服务器迁移')"></li>
      <li class="service-mean" @click="selectCategory('数据存储与管理')"></li>
      <li class="service-mean" @click="selectCategory('网络安全与防护')"></li>
      <li class="service-mean" @click="selectCategory('应用现代化')"></li>
      <li class="service-mean" @click="selectCategory('云原生开发')"></li>
      <li class="service-mean" @click="selectCategory('混合云和多云管理')"></li>
    </ul>
  </div>

  <!-- 产品卡片网格 -->
  <ProductGrid :category="selectedCategory" />

  <!-- 流程图 -->
  <div class="process">
    <div class="pc-img">
      <img src="../assets/design.png" />
    </div>
  </div>


</template>

<script>
import ProductGrid from '../components/ProductGrid.vue';

export default {
  components: {
    ProductGrid,
  },
  data() {
    return {
      selectedCategory: '服务器迁移', // 默认选中第一个类别
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>
<style scoped>
    /* 头部照片 */
    .header-pic{
        img{
            width:100%;
            height: 50vh;
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


    /* 流程图 */
    .process{
        margin:60px 70px;
        padding: 10px;
    }

    .pc-img{
        width:1000px;
        height:500px;
        border: solid 1px gray;
        margin-left: 10px;
        align-content: center;
        justify-content: center;        
    }

    .pc-img img{
        width:700px;
        height:450px;
        margin-left: 120px;
    }

</style>