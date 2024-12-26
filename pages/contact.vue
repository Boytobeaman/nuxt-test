<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">联系我们</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2">姓名</label>
          <input v-model="name" type="text" id="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">电子邮件</label>
          <input v-model="email" type="email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
        <div class="mb-6">
          <label for="message" class="block text-gray-700 font-bold mb-2">消息</label>
          <textarea v-model="message" id="message" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40" required></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            提交
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'noFooter'
})

import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = () => {
  console.log('姓名:', name.value);
  console.log('电子邮件:', email.value);
  console.log('消息:', message.value);
  // 这里可以添加表单提交逻辑，例如发送到服务器
};
</script>
