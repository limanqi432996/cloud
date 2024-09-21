<template>
  <div>
    <div class="button-group">
      <button 
        v-for="(category, index) in categories" 
        :key="index" 
        :class="{'active-button': activeCategory === index}"
        @click="activeCategory = index">
        {{ category }}
      </button>
    </div>

    <div class="card-grid">
      <CardItem 
        v-for="(card, index) in cardData[activeCategory]" 
        :key="index" 
        :card="card" 
        @view-details="navigateToExport"/>
    </div>
  </div>
</template>

<script>
import CardItem from './CardItem.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'ProductGrid',
  components: {
    CardItem
  },
  data() {
    return {
      categories: ['服务器迁移', '数据存储与管理', '网络安全与防护', '应用现代化', '云原生开发', '混合云和多云管理'],
      activeCategory: 0,
      cardData: [
        [
          { name: '弹性云服务器ECS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/b.png' },
          { name: '镜像服务IMS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/f.png' },
          { name: '数据快递服务DES', image: 'https://github.com/limanqi432996/pic/raw/main/pt/a.png' },
          { name: '存储容灾服务SDRS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/h.png' },
          { name: '云备份服务CBR', image: 'https://github.com/limanqi432996/pic/raw/main/pt/e.png' },
          { name: '容器镜像服务SWR', image: 'https://github.com/limanqi432996/pic/raw/main/pt/c.png' },
          { name: '主机迁移服务SMS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/g.png' },
          { name: '云数据迁移CDM', image: 'https://github.com/limanqi432996/pic/raw/main/pt/d.png' }
        ],
                [
          { name: '主机迁移服务SMS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/g.png' },
          { name: '弹性云服务器ECS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/b.png' },
          { name: '镜像服务IMS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/f.png' },
          { name: '数据快递服务DES', image: 'https://github.com/limanqi432996/pic/raw/main/pt/a.png' },
          { name: '存储容灾服务SDRS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/h.png' },
          { name: '云备份服务CBR', image: 'https://github.com/limanqi432996/pic/raw/main/pt/e.png' },
          { name: '容器镜像服务SWR', image: 'https://github.com/limanqi432996/pic/raw/main/pt/c.png' },
          
          { name: '云数据迁移CDM', image: 'https://github.com/limanqi432996/pic/raw/main/pt/d.png' }
        ],
                [
          { name: '镜像服务IMS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/f.png' },
          { name: '弹性云服务器ECS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/b.png' },
          { name: '数据快递服务DES', image: 'https://github.com/limanqi432996/pic/raw/main/pt/a.png' },
          { name: '存储容灾服务SDRS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/h.png' },
          { name: '云备份服务CBR', image: 'https://github.com/limanqi432996/pic/raw/main/pt/e.png' },
          { name: '容器镜像服务SWR', image: 'https://github.com/limanqi432996/pic/raw/main/pt/c.png' },
          { name: '主机迁移服务SMS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/g.png' },
          { name: '云数据迁移CDM', image: 'https://github.com/limanqi432996/pic/raw/main/pt/d.png' }
        ],
                [
          { name: '存储容灾服务SDRS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/h.png' },
          { name: '弹性云服务器ECS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/b.png' },
          { name: '镜像服务IMS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/f.png' },
          { name: '数据快递服务DES', image: 'https://github.com/limanqi432996/pic/raw/main/pt/a.png' },
          { name: '云备份服务CBR', image: 'https://github.com/limanqi432996/pic/raw/main/pt/e.png' },
          { name: '容器镜像服务SWR', image: 'https://github.com/limanqi432996/pic/raw/main/pt/c.png' },
          { name: '主机迁移服务SMS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/g.png' },
          { name: '云数据迁移CDM', image: 'https://github.com/limanqi432996/pic/raw/main/pt/d.png' }
        ],
                [
          { name: '容器镜像服务SWR', image: 'https://github.com/limanqi432996/pic/raw/main/pt/c.png' },
          { name: '主机迁移服务SMS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/g.png' },        
          { name: '弹性云服务器ECS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/b.png' },
          { name: '镜像服务IMS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/f.png' },
          { name: '数据快递服务DES', image: 'https://github.com/limanqi432996/pic/raw/main/pt/a.png' },
          { name: '存储容灾服务SDRS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/h.png' },
          { name: '云备份服务CBR', image: 'https://github.com/limanqi432996/pic/raw/main/pt/e.png' },
          { name: '云数据迁移CDM', image: 'https://github.com/limanqi432996/pic/raw/main/pt/d.png' }
        ],
                [
          { name: '数据快递服务DES', image: 'https://github.com/limanqi432996/pic/raw/main/pt/a.png' },
          { name: '存储容灾服务SDRS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/h.png' },
          { name: '弹性云服务器ECS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/b.png' },
          { name: '镜像服务IMS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/f.png' },
          
          { name: '云备份服务CBR', image: 'https://github.com/limanqi432996/pic/raw/main/pt/e.png' },
          { name: '容器镜像服务SWR', image: 'https://github.com/limanqi432996/pic/raw/main/pt/c.png' },
          { name: '主机迁移服务SMS', image: 'https://github.com/limanqi432996/pic/raw/main/pt/g.png' },
          { name: '云数据迁移CDM', image: 'https://github.com/limanqi432996/pic/raw/main/pt/d.png' }
        ],
                

      ]
    };
  },
  methods: {
    navigateToExport() {
      const router = useRouter();
      this.$router.push('/export');
    }
  }
};
</script>

<style scoped>
.button-group {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  margin-right: 10px;
  border: 1px solid #007bff;
  background-color: #fff;
  color: #007bff;
  cursor: pointer;
}

button.active-button {
  background-color: #007bff;
  color: #fff;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>
