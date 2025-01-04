<template>
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    <div>
      <div class="text-xl font-medium text-black">{{ name }}</div>
      <p class="text-gray-500">{{ location }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const name = ref('');
const location = ref('');
const blog = ref('');

const fetchProductDetails = async () => {
  try {
    const response = await axios.get('https://api.github.com/users/octocat'); // 替换为实际API地址
    name.value = response.data.name ;
    location.value = response.data.location;
    blog.value = response.data.blog;
  } catch (error) {
    console.error('Error fetching user details:', error);
  }
};

onMounted(() => {
  fetchProductDetails();
});
</script>
