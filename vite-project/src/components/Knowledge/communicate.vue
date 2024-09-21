<template>
  <div class="container">
    <div class="event-cards">
      <!-- 卡片1 -->
      <div class="event-card">
        <img src="../../assets/mone.png" alt="Event 1" class="event-image" />
        <div class="event-content">
          <h2>HCDG城市行贵阳站——华为云技术精雕应用创新论坛</h2>
          <div class="event-info">
            <i class="fas fa-calendar-alt"></i>
            <span>2024/08/08 14:00-17:45</span>
            <i class="fas fa-map-marker-alt"></i>
            <span>贵阳市</span>
          </div>
        </div>
      </div>
      <!-- 卡片2 -->
      <div class="event-card">
        <img src="../../assets/mtwo.png" alt="Event 2" class="event-image" />
        <div class="event-content">
          <h2>软件筑基 打造高效创新动力引擎分论坛</h2>
          <div class="event-info">
            <i class="fas fa-calendar-alt"></i>
            <span>2024/06/26 14:00-17:00</span>
            <i class="fas fa-map-marker-alt"></i>
            <span>北京市</span>
          </div>
        </div>
      </div>
      <!-- 卡片3 -->
      <div class="event-card">
        <img src="../../assets/mthird.png" alt="Event 3" class="event-image" />
        <div class="event-content">
          <h2>智能优化揭秘 GaussDB数据库查询重写的自动挖掘与生成</h2>
          <div class="event-info">
            <i class="fas fa-calendar-alt"></i>
            <span>2024/06/26 16:30-18:00</span>
            <i class="fas fa-map-marker-alt"></i>
            <span>线上</span>
          </div>
        </div>
      </div>
      <!-- 卡片4 -->
      <div class="event-card">
        <img src="../../assets/mfour.png" alt="Event 4" class="event-image" />
        <div class="event-content">
          <h2>"互联网+"大赛最受欢迎网络人气团队·作品投票活动</h2>
          <div class="event-info">
            <i class="fas fa-calendar-alt"></i>
            <span>2021/09/28--2021/10/31</span>
            <i class="fas fa-map-marker-alt"></i>
            <span>线上</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
  padding: 15px;
}

.event-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.event-card {
  width: calc(50% - 30px);
  margin: 15px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.event-image {
  width: 100%;
  height: 290px; /* 设置固定高度 */
  /* object-fit: cover; 覆盖模式，保持宽高比 */
  display: block;
}

.event-content {
  padding: 15px;
}

.event-content h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.event-info {
  display: flex;
  align-items: center;
}

.event-info i {
  margin-right: 5px;
  color: #888;
}

.event-info span {
  font-size: 12px;
  color: #666;
  margin-right: 15px;
}
</style>

