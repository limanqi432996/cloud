<template>
  <div class="card">
    <img :src="card.image" alt="Product Image" class="card-image" />
    <h3 class="card-title">{{ card.name }}</h3>
    <button @click="viewDetails">产品详情</button>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    viewDetails() {
      this.$emit('view-details');
    }
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card-image {
  max-width: 100px;
  margin-bottom: 10px;
}

.card-title {
  font-size: 16px;
  margin-bottom: 10px;
}

button {
  padding: 5px 10px;
  border: 1px solid #007bff;
  background-color: white;
  color: #007bff;
  cursor: pointer;
}

button:hover {
  background-color: #007bff;
  color: white;
}
</style>
