<template>
  <div class="flex justify-center py-10 bg-gray-100 space-x-3">
    <button
      :disabled="isFirstPage"
      @click="$router.push({ query: { page: page - 1 } })"
      class="flex items-center space-x-1.5 px-4 bg-blue-500 disabled:bg-gray-300 rounded-lg hover:bg-blue-600 transition-all"
    >
      <ArrowLeft></ArrowLeft>
      <span class="text-white">Anterior</span>
    </button>
    <button
      :disabled="hasMoreData"
      @click="$router.push({ query: { page: page + 1 } })"
      class="flex items-center space-x-1.5 px-4 bg-blue-500 disabled:bg-gray-300 rounded-lg hover:bg-blue-600 transition-all"
    >
      <span class="text-white">Siguiente</span>
      <ArrowRigh></ArrowRigh>
    </button>
  </div>
</template>

<script setup lang="ts">
import ArrowLeft from '@/icons/ArrowLeft.vue';
import ArrowRigh from '@/icons/ArrowRigh.vue';

//sigue el video 32 :)

interface props {
  page: number;
  isFirstPage: boolean;
  hasMoreData: boolean;
}
defineProps<props>();
</script>

<style scoped></style>
