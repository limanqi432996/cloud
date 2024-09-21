<template>
    <!-- 头部照片 -->
    <div class="header-pic">
        <img src="https://w.wallhaven.cc/full/lq/wallhaven-lqmp1q.jpg">
    </div>

  <div>
    <!-- 实验方向导航栏 -->
    <div class="direction-nav">
      <span 
        v-for="(item, index) in directions" 
        :key="index"
        :class="{'active': selectedDirection === item}"
        @click="selectDirection(item)"
      >
        {{ item }}
      </span>
    </div>

    <!-- 难易程度导航栏 -->
    <div class="difficulty-nav">
      <span 
        v-for="(level, index) in difficultyLevels" 
        :key="index"
        :class="{'active': selectedDifficulty === level}"
        @click="selectDifficulty(level)"
      >
        {{ level }}
      </span>
    </div>

    <!-- 排序方式 -->
    <!-- <div class="sort-nav">
      <span 
        v-for="(sortOption, index) in sortOptions" 
        :key="index"
        :class="{'active': selectedSort === sortOption}"
        @click="selectSort(sortOption)"
      >
        {{ sortOption }}
      </span>
    </div> -->
    
    <!-- 排序方式 -->
      <div class="sort-nav">
        <span 
          v-for="(sortOption, index) in sortOptions" 
          :key="index"
          :class="{'active': selectedSort === sortOption.option && selectedOrder === sortOption.order}"
          @click="selectSort(sortOption.option, sortOption.order)"
        >
          {{ sortOption.label }}
        </span>
      </div>

    <!-- 卡片展示区域 -->
    <div class="card-container">
      <div class="card" v-for="(card, index) in filteredCards" :key="index">
        <div class="card-header">
          <img :src="card.image" alt="Card image" />
          <span class="recommended">推荐</span>
        </div>
        <div class="card-body">
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
          <p>今日免费名额剩余：{{ card.spots }}人</p>
          <div class="stats">
            <span><i class="icon-difficulty"></i>{{ card.level }}</span>
            <span><i class="icon-time"></i>{{ card.duration }}</span>
            <span><i class="icon-users"></i>{{ card.users }}k</span>
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
      directions: ["全部", "计算","人工智能","容器", "数据库", "大数据", "IoT物联网", "移动应用服务", "开发与运维"],
      difficultyLevels: ["全部", "初级", "中级", "高级"],
      // sortOptions: ["综合排序", "最新", "最热"],
      // selectedDirection: "全部",
      // selectedDifficulty: "全部",
      // selectedSort: "综合排序",
      sortOptions: [
        { label: "综合排序", option: "综合排序", order: "asc" },
        { label: "最新 ↑", option: "最新", order: "asc" },
        { label: "最新 ↓", option: "最新", order: "desc" },
        { label: "最热 ↑", option: "最热", order: "asc" },
        { label: "最热 ↓", option: "最热", order: "desc" }
      ],
      selectedDirection: "全部",
      selectedDifficulty: "全部",
      selectedSort: "综合排序",
      selectedOrder: "asc",  // 默认升序


      cards: {
        全部: [
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "轻松快速上手 Docker", description: "在华为云欧拉操作系统的服务器中手工部署 Docker", spots: 27, level: "初级", duration: "1h", users: 4.8 ,date: "2023-09-01"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "两步切换操作系统Huawei Cloud...", description: "使用HCE兼容性评估与迁移工具完成系统迁移", spots: 23, level: "中级", duration: "0.5h", users: 3.2,date: "2023-08-15" },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "30分钟轻松搭建网站应用", description: "快速入门云计算，利用云联务济建VordPress网站", spots: 20, level: "初级", duration: "2.5h", users: 3.1 ,date: "2023-07-22"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟快速入门EVS", description: "本实验指导用户体验华为云云硬盘的创建，挂载及云硬盘初始化等基本操作，快速掌握华为云云硬盘。", spots: 31, level: "中级", duration: "1.5h", users: 6.6 , date: "2023-09-12"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟入门装载国产操作系统的ECS", description: "本实验指导用户体验华为云弹性云服务器ECS的系列操作，快速学握华为云服务器ECS使用方法", spots: 15, level: "初级", duration: "1h", users: 2.3 , date: "2023-08-02"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟快速体验恒温空调云端控制", description: "通过物联网平台设置设备影子期望值，将预置温度下达给空调，以实现空调自动调节温度", spots: 12, level: "初级", duration: "1h", users: 1.8, date: "2023-07-10"  },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "Pandas中的数据处理对象Series", description: "在实验中了解Pandas中的数据处理对象Series.", spots: 10, level: "初级", duration: "1h", users: 2.2 ,date: "2023-09-08"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "openEuler 文件目录", description: "openEuler查找文件/目录", spots: 8, level: "高级", duration: "0.5h", users: 2.5, date: "2023-09-05"  },
        ],
        人工智能: [
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "基于jieba的中文分词实战", description: "基于前缓词典实现高效的词图扫描，生成句子中汉字所有可能成词情况所构成的有向无环图(DAG)-….", spots: 27, level: "初级", duration: "1h", users: 4.8 ,date: "2023-09-01"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "关键词提取-TF/IDF算法", description: "关键词提取-TF/IDF算法学习和实操完成系统迁移", spots: 23, level: "中级", duration: "0.5h", users: 3.2,date: "2023-08-15" },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "词性标注", description: "基于jieba词性标注的学习和实操", spots: 20, level: "初级", duration: "2.5h", users: 3.1 ,date: "2023-07-22"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "N元语言模型实验", description: "本实验指导用户完成容器资源管理操作，进而掌握容器的高级使用方法。", spots: 31, level: "中级", duration: "1.5h", users: 6.6 , date: "2023-09-12"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "云原生基础设施之容器资源管理", description: "本实验主要介绍基于modelarts的notebook开发环境，来进行LSTM模型的训练->推理的代码实战开..", spots: 15, level: "初级", duration: "1h", users: 2.3 , date: "2023-08-02"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "云原生基础设施之容器网络管理", description: "本实验指导用户完成容器网络管理操作，进而学握容器的高级使用方法。", spots: 12, level: "初级", duration: "1h", users: 1.8, date: "2023-07-10"  },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "云原生基础设施之容器存储管理", description: "本实验指导用户完成容器存储管理操作，进而掌握容器的高级使用方法", spots: 10, level: "初级", duration: "1h", users: 2.2 ,date: "2023-09-08"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "云原生基础设施之容器入门", description: "本实验指导用户完成基本的容器操作，进而掌握容器的使用方法", spots: 8, level: "高级", duration: "0.5h", users: 2.5, date: "2023-09-05"  },
        ],
        计算:[
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "轻松快速上手 Docker", description: "在华为云欧拉操作系统的服务器中手工部署 Docker", spots: 27, level: "初级", duration: "1h", users: 4.8 ,date: "2023-09-01"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "两步切换操作系统Huawei Cloud...", description: "使用HCE兼容性评估与迁移工具完成系统迁移", spots: 23, level: "中级", duration: "0.5h", users: 3.2,date: "2023-08-15" },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "30分钟轻松搭建网站应用", description: "快速入门云计算，利用云联务济建VordPress网站", spots: 20, level: "初级", duration: "2.5h", users: 3.1 ,date: "2023-07-22"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟快速入门EVS", description: "本实验指导用户体验华为云云硬盘的创建，挂载及云硬盘初始化等基本操作，快速掌握华为云云硬盘。", spots: 31, level: "中级", duration: "1.5h", users: 6.6 , date: "2023-09-12"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟入门装载国产操作系统的ECS", description: "本实验指导用户体验华为云弹性云服务器ECS的系列操作，快速学握华为云服务器ECS使用方法", spots: 15, level: "初级", duration: "1h", users: 2.3 , date: "2023-08-02"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟快速体验恒温空调云端控制", description: "通过物联网平台设置设备影子期望值，将预置温度下达给空调，以实现空调自动调节温度", spots: 12, level: "初级", duration: "1h", users: 1.8, date: "2023-07-10"  },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "Pandas中的数据处理对象Series", description: "在实验中了解Pandas中的数据处理对象Series.", spots: 10, level: "初级", duration: "1h", users: 2.2 ,date: "2023-09-08"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "openEuler 文件目录", description: "openEuler查找文件/目录", spots: 8, level: "高级", duration: "0.5h", users: 2.5, date: "2023-09-05"  },
        
        ],
        容器:[
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "轻松玩转Kubernetes", description: "在华为云欧拉操作系统的服务器中手工部署 Docker", spots: 27, level: "初级", duration: "1h", users: 4.8 ,date: "2023-09-01"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "使用 CCI 实现 Nginx 发布及公网访问", description: "Kubernetes作为容器编排工具，简化容器管理，提升工作效率而颇受青睐。很多新手部署Kubernetes...", spots: 23, level: "中级", duration: "0.5h", users: 3.2,date: "2023-08-15" },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "基于容器实现一分钟自动化部署", description: "使用 CCI 实现 Nginx 发布及公网访问", spots: 20, level: "初级", duration: "2.5h", users: 3.1 ,date: "2023-07-22"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "云容器快速搭建网站", description: "N元语言模型实验:研究不同N值的语言预测性能探索最佳模型，提升文本生成准确性。。", spots: 31, level: "中级", duration: "1.5h", users: 6.6 , date: "2023-09-12"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟入门装载国产操作系统的ECS", description: "本实验指导用户体验华为云弹性云服务器ECS的系列操作，快速学握华为云服务器ECS使用方法", spots: 15, level: "初级", duration: "1h", users: 2.3 , date: "2023-08-02"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟快速体验恒温空调云端控制", description: "通过物联网平台设置设备影子期望值，将预置温度下达给空调，以实现空调自动调节温度", spots: 12, level: "初级", duration: "1h", users: 1.8, date: "2023-07-10"  },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "Pandas中的数据处理对象Series", description: "在实验中了解Pandas中的数据处理对象Series.", spots: 10, level: "初级", duration: "1h", users: 2.2 ,date: "2023-09-08"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "openEuler 文件目录", description: "openEuler查找文件/目录", spots: 8, level: "高级", duration: "0.5h", users: 2.5, date: "2023-09-05"  },
        
        ],
        数据库: [
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟快速入门EVS", description: "本实验指导用户体验华为云云硬盘的创建，挂载及云硬盘初始化等基本操作，快速掌握华为云云硬盘。", spots: 31, level: "中级", duration: "1.5h", users: 6.6 , date: "2023-09-12"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟入门装载国产操作系统的ECS", description: "本实验指导用户体验华为云弹性云服务器ECS的系列操作，快速学握华为云服务器ECS使用方法", spots: 15, level: "初级", duration: "1h", users: 2.3 , date: "2023-08-02"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "轻松快速上手 Docker", description: "在华为云欧拉操作系统的服务器中手工部署 Docker", spots: 27, level: "初级", duration: "1h", users: 4.8 ,date: "2023-09-01"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "两步切换操作系统Huawei Cloud...", description: "使用HCE兼容性评估与迁移工具完成系统迁移", spots: 23, level: "中级", duration: "0.5h", users: 3.2,date: "2023-08-15" },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "30分钟轻松搭建网站应用", description: "快速入门云计算，利用云联务济建VordPress网站", spots: 20, level: "初级", duration: "2.5h", users: 3.1 ,date: "2023-07-22"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟快速体验恒温空调云端控制", description: "通过物联网平台设置设备影子期望值，将预置温度下达给空调，以实现空调自动调节温度", spots: 12, level: "初级", duration: "1h", users: 1.8, date: "2023-07-10"  },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "Pandas中的数据处理对象Series", description: "在实验中了解Pandas中的数据处理对象Series.", spots: 10, level: "初级", duration: "1h", users: 2.2 ,date: "2023-09-08"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "openEuler 文件目录", description: "openEuler查找文件/目录", spots: 8, level: "高级", duration: "0.5h", users: 2.5, date: "2023-09-05"  },
                  
        ],
        大数据: [
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "Pandas中的数据处理对象Series", description: "在实验中了解Pandas中的数据处理对象Series.", spots: 10, level: "初级", duration: "1h", users: 2.2 ,date: "2023-09-08"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "openEuler 文件目录", description: "openEuler查找文件/目录", spots: 8, level: "高级", duration: "0.5h", users: 2.5, date: "2023-09-05"  },          
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "轻松快速上手 Docker", description: "在华为云欧拉操作系统的服务器中手工部署 Docker", spots: 27, level: "初级", duration: "1h", users: 4.8 ,date: "2023-09-01"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "两步切换操作系统Huawei Cloud...", description: "使用HCE兼容性评估与迁移工具完成系统迁移", spots: 23, level: "中级", duration: "0.5h", users: 3.2,date: "2023-08-15" },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "30分钟轻松搭建网站应用", description: "快速入门云计算，利用云联务济建VordPress网站", spots: 20, level: "初级", duration: "2.5h", users: 3.1 ,date: "2023-07-22"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟快速入门EVS", description: "本实验指导用户体验华为云云硬盘的创建，挂载及云硬盘初始化等基本操作，快速掌握华为云云硬盘。", spots: 31, level: "中级", duration: "1.5h", users: 6.6 , date: "2023-09-12"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟入门装载国产操作系统的ECS", description: "本实验指导用户体验华为云弹性云服务器ECS的系列操作，快速学握华为云服务器ECS使用方法", spots: 15, level: "初级", duration: "1h", users: 2.3 , date: "2023-08-02"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟快速体验恒温空调云端控制", description: "通过物联网平台设置设备影子期望值，将预置温度下达给空调，以实现空调自动调节温度", spots: 12, level: "初级", duration: "1h", users: 1.8, date: "2023-07-10"  },

        ],
        IoT物联网: [
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟快速体验恒温空调云端控制", description: "通过物联网平台设置设备影子期望值，将预置温度下达给空调，以实现空调自动调节温度", spots: 12, level: "初级", duration: "1h", users: 1.8, date: "2023-07-10"  },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "轻松快速上手 Docker", description: "在华为云欧拉操作系统的服务器中手工部署 Docker", spots: 27, level: "初级", duration: "1h", users: 4.8 ,date: "2023-09-01"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "两步切换操作系统Huawei Cloud...", description: "使用HCE兼容性评估与迁移工具完成系统迁移", spots: 23, level: "中级", duration: "0.5h", users: 3.2,date: "2023-08-15" },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "30分钟轻松搭建网站应用", description: "快速入门云计算，利用云联务济建VordPress网站", spots: 20, level: "初级", duration: "2.5h", users: 3.1 ,date: "2023-07-22"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟快速入门EVS", description: "本实验指导用户体验华为云云硬盘的创建，挂载及云硬盘初始化等基本操作，快速掌握华为云云硬盘。", spots: 31, level: "中级", duration: "1.5h", users: 6.6 , date: "2023-09-12"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟入门装载国产操作系统的ECS", description: "本实验指导用户体验华为云弹性云服务器ECS的系列操作，快速学握华为云服务器ECS使用方法", spots: 15, level: "初级", duration: "1h", users: 2.3 , date: "2023-08-02"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "openEuler 文件目录", description: "openEuler查找文件/目录", spots: 8, level: "高级", duration: "0.5h", users: 2.5, date: "2023-09-05"  },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "Pandas中的数据处理对象Series", description: "在实验中了解Pandas中的数据处理对象Series.", spots: 10, level: "初级", duration: "1h", users: 2.2 ,date: "2023-09-08"},
        
        ],
        移动应用服务: [
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "轻松快速上手 Docker", description: "在华为云欧拉操作系统的服务器中手工部署 Docker", spots: 27, level: "初级", duration: "1h", users: 4.8 ,date: "2023-09-01"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟快速入门EVS", description: "本实验指导用户体验华为云云硬盘的创建，挂载及云硬盘初始化等基本操作，快速掌握华为云云硬盘。", spots: 31, level: "中级", duration: "1.5h", users: 6.6 , date: "2023-09-12"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "两步切换操作系统Huawei Cloud...", description: "使用HCE兼容性评估与迁移工具完成系统迁移", spots: 23, level: "中级", duration: "0.5h", users: 3.2,date: "2023-08-15" },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟入门装载国产操作系统的ECS", description: "本实验指导用户体验华为云弹性云服务器ECS的系列操作，快速学握华为云服务器ECS使用方法", spots: 15, level: "初级", duration: "1h", users: 2.3 , date: "2023-08-02"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟快速体验恒温空调云端控制", description: "通过物联网平台设置设备影子期望值，将预置温度下达给空调，以实现空调自动调节温度", spots: 12, level: "初级", duration: "1h", users: 1.8, date: "2023-07-10"  },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "openEuler 文件目录", description: "openEuler查找文件/目录", spots: 8, level: "高级", duration: "0.5h", users: 2.5, date: "2023-09-05"  },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "Pandas中的数据处理对象Series", description: "在实验中了解Pandas中的数据处理对象Series.", spots: 10, level: "初级", duration: "1h", users: 2.2 ,date: "2023-09-08"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "30分钟轻松搭建网站应用", description: "快速入门云计算，利用云联务济建VordPress网站", spots: 20, level: "初级", duration: "2.5h", users: 3.1 ,date: "2023-07-22"},

        ],
        开发与运维: [
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "30分钟轻松搭建网站应用", description: "快速入门云计算，利用云联务济建VordPress网站", spots: 20, level: "初级", duration: "2.5h", users: 3.1 ,date: "2023-07-22"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟快速入门EVS", description: "本实验指导用户体验华为云云硬盘的创建，挂载及云硬盘初始化等基本操作，快速掌握华为云云硬盘。", spots: 31, level: "中级", duration: "1.5h", users: 6.6 , date: "2023-09-12"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟入门装载国产操作系统的ECS", description: "本实验指导用户体验华为云弹性云服务器ECS的系列操作，快速学握华为云服务器ECS使用方法", spots: 15, level: "初级", duration: "1h", users: 2.3 , date: "2023-08-02"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "10分钟快速体验恒温空调云端控制", description: "通过物联网平台设置设备影子期望值，将预置温度下达给空调，以实现空调自动调节温度", spots: 12, level: "初级", duration: "1h", users: 1.8, date: "2023-07-10"  },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "Pandas中的数据处理对象Series", description: "在实验中了解Pandas中的数据处理对象Series.", spots: 10, level: "初级", duration: "1h", users: 2.2 ,date: "2023-09-08"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "轻松快速上手 Docker", description: "在华为云欧拉操作系统的服务器中手工部署 Docker", spots: 27, level: "初级", duration: "1h", users: 4.8 ,date: "2023-09-01"},
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "两步切换操作系统Huawei Cloud...", description: "使用HCE兼容性评估与迁移工具完成系统迁移", spots: 23, level: "中级", duration: "0.5h", users: 3.2,date: "2023-08-15" },
          { image: "https://github.com/limanqi432996/pic/blob/main/pt/44d2dc7854955b94ad90fb7c26f1499.png?raw=true", title: "openEuler 文件目录", description: "openEuler查找文件/目录", spots: 8, level: "高级", duration: "0.5h", users: 2.5, date: "2023-09-05"  },
        
        ],
      }
    };
  },
 computed: {
    filteredCards() {
      let filtered = this.cards[this.selectedDirection].filter(card => {
        if (this.selectedDifficulty === "全部") {
          return true;
        }
        return card.level === this.selectedDifficulty;
      });

      // 排序逻辑
      if (this.selectedSort === "最新") {
        filtered.sort((a, b) => {
          if (this.selectedOrder === "asc") {
            return new Date(a.date) - new Date(b.date);
          } else {
            return new Date(b.date) - new Date(a.date);
          }
        });
      } else if (this.selectedSort === "最热") {
        filtered.sort((a, b) => {
          if (this.selectedOrder === "asc") {
            return a.users - b.users;
          } else {
            return b.users - a.users;
          }
        });
      }

      return filtered;
    }
  },
  methods: {
    selectDirection(direction) {
      this.selectedDirection = direction;
    },
    selectDifficulty(level) {
      this.selectedDifficulty = level;
    },
    selectSort(sortOption, order) {
      this.selectedSort = sortOption;
      this.selectedOrder = order;
    }
  }
};
</script>

<style scoped>
    /* 头部照片 */
   
    .header-pic{
        img{
            width:100%;
            height: 55vh;
            background-size: cover;
        }
    }

.direction-nav, .difficulty-nav, .sort-nav {
  display: flex;
  
  margin: 10px 10px;
  justify-content:space-between;
}

.direction-nav span, .difficulty-nav span, .sort-nav span {
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 4px;
}

.active {
  background-color: white;
  color: #007BFF;
}

.recommended {
  position: absolute;
  top: 25px;
  right:25px;
  background-color: red;
  color: white;
  padding: 5px;
  font-size: 12px;
  border-radius: 3px;
}

.card-container {
  margin:10px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
}

.card {
  position: relative;
  width: 40%;
  height: 360px; /* 设定固定高度，确保所有卡片一致 */
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-left: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column; /* 使用 flexbox 进行内容布局 */
  justify-content: space-between; /* 保证内容和底部图标布局不受文字内容影响 */
}

.card-header img {
  width: 100%;
  height: 150px; /* 固定图片高度 */
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.card-body {
  flex-grow: 1; /* 内容部分在布局中自动填充，保持上下的间距不受影响 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.card-body h3 {
  margin: 10px 0;
  font-size: 16px;
}

.card-body p {
  margin: 5px 0;
  font-size: 14px;
  line-height: 1.8; /* 设置行高，确保内容舒适阅读 */
}

.stats {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
  padding-top: 10px;
  margin-top: auto; /* 确保图标栏在卡片底部 */
  border-top: 1px solid #eaeaea; /* 分隔内容和图标部分 */
}

/* 图标样式 */
.icon-difficulty::before, 
.icon-time::before, 
.icon-users::before {
  margin-right: 5px;
}

.icon-difficulty::before {
  content: '🛠️';
}

.icon-time::before {
  content: '⏰';
}

.icon-users::before {
  content: '👥';
}

</style>
