<template>
  <div class="course-container">
    <!-- 第一节课程 -->
    <video controls>
      <source src="../../assets/v1.mp4" type="video/mp4">
    </video>      
    <div class="info-section">
      <h2>企业应用与云架构</h2>

      <!-- 课程内容 -->
      <p class="section-title">课程内容</p>
      <p class="content">{{ course1Content }}</p>

      <!-- 课程目标 -->
      <p class="section-title">课程目标</p>
      <p class="object">{{ course1Objective }}</p>

      <div class="stats">
        <div class="stat">
          <div class="circle">{{ course1StudentCount }}</div>
          <p>正在学习此课程</p>
        </div>
        <div class="stat">
          <div class="circle">{{ course1Rating }}</div>
          <p>课程评价</p>
        </div>
        <div class="stat">
          <div class="circle">{{ course1SatisfactionRate }}%</div>
          <p>课程满意度</p>
        </div>
      </div>

      <div class="buttons">
        <button class='red' @click="getCourseDetail">获取详细案例</button>
        <button @click="startFreeTrial">免费试用</button>
      </div>
    </div>
  </div>

  <div class="course-container">
    <!-- 第二节课程 -->
    <video controls>
      <source src="../../assets/v2.mp4" type="video/mp4">
    </video>      
    <div class="info-section">
      <h2>计算服务规划</h2>

      <!-- 课程内容 -->
      <p class="section-title">课程内容</p>
      <p class="content">{{ course2Content }}</p>

      <!-- 课程目标 -->
      <p class="section-title">课程目标</p>
      <p class="object">{{ course2Objective }}</p>

      <div class="stats">
        <div class="stat">
          <div class="circle">{{ course2StudentCount }}</div>
          <p>正在学习此课程</p>
        </div>
        <div class="stat">
          <div class="circle">{{ course2Rating }}</div>
          <p>课程评价</p>
        </div>
        <div class="stat">
          <div class="circle">{{ course2SatisfactionRate }}%</div>
          <p>课程满意度</p>
        </div>
      </div>

      <div class="buttons">
        <button class='red' @click="getCourseDetail">获取详细案例</button>
        <button @click="startFreeTrial">免费试用</button>
      </div>
    </div>
  </div>

  <div class="course-container">
    <!-- 第三节课程 -->
    <video controls>
      <source src="../../assets/v3.mp4" type="video/mp4">
    </video>      
    <div class="info-section">
      <h2>网络服务规划</h2>

      <!-- 课程内容 -->
      <p class="section-title">课程内容</p>
      <p class="content">{{ course3Content }}</p>

      <!-- 课程目标 -->
      <p class="section-title">课程目标</p>
      <p class="object">{{ course3Objective }}</p>

      <div class="stats">
        <div class="stat">
          <div class="circle">{{ course3StudentCount }}</div>
          <p>正在学习此课程</p>
        </div>
        <div class="stat">
          <div class="circle">{{ course3Rating }}</div>
          <p>课程评价</p>
        </div>
        <div class="stat">
          <div class="circle">{{ course3SatisfactionRate }}%</div>
          <p>课程满意度</p>
        </div>
      </div>

      <div class="buttons">
        <button class='red' @click="getCourseDetail">获取详细案例</button>
        <button @click="startFreeTrial">免费试用</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 每节课程的详细信息
const course1Content = ref('包括企业上云背景、企业应用架构设计原则、云上架设设计案例。');
const course1Objective = ref('学完本课程，您将能够：\n了解架构发展趋势，理解企业为什么要上云。\n了解架构设计的基本原则，清楚各项原则在云上架构的体现。');
const course1StudentCount = ref(622);
const course1Rating = ref('五星');
const course1SatisfactionRate = ref(99);

const course2Content = ref('包括计算服务概览、计算服务规划、镜像服务规划、弹性伸缩服务规划。');
const course2Objective = ref('学完本课程，您将能够：\n掌握华为云上常见的计算服务，\n熟悉计算服务的选型和应用场景，并能够结合其他服务使用。');
const course2StudentCount = ref(528);
const course2Rating = ref('五星');
const course2SatisfactionRate = ref(99);

const course3Content = ref('网络服务概览及云上网络规划原则、云上网络接入规划。');
const course3Objective = ref('学完本课程，您将能够：\n掌握华为云上常见的网络服务，结合业务场景，设计规划安全可靠的网络架构，并最大程度节约成本。\n掌握网络服务的原理及使用场景，并能够结合其他服务使用。');
const course3StudentCount = ref(477);
const course3Rating = ref('五星');
const course3SatisfactionRate = ref(99);

// 获取详细案例按钮事件处理函数
function getCourseDetail() {
  alert('已点击获取详细案例');
}

// 立即试听按钮事件处理函数
function startFreeTrial() {
  alert('已点击立即试听');
}
</script>

<style scoped>
.course-container {
  display: flex;
  margin: 30px 33px;
}

video {
  width: 50%;
}

.info-section {
  width: 50%;
  margin-left: 20px;
}

.section-title {
  font-weight: bold;
  margin-top: 10px;
  margin-left: 15px;
}

.content, .object {
  white-space: pre-line; /* 确保换行符生效 */
  margin-top: 5px;
  margin-bottom: 15px;
  margin-left: 45px;
  font-size:16px;
  font-weight: 350;
}

.stats {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.stat {
  text-align: center;
  p{
    font-size: 14px;
  }
}

.circle {
  width: 80px;
  height: 80px;
  border:1.5px solid rgb(255, 221, 99);
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  color: #d52d2d;
  margin-bottom: 5px;
  margin-left: 5px;
}

.buttons {
  margin-top: 20px;
}

.red {
  background-color: rgb(203, 32, 32);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  margin-left: 50px;
  margin-right: 40px;
}

button {
  background-color: white;
  color: rgb(203, 32, 32);
  border: 1px solid rgb(203, 32, 32);
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
}
</style>
