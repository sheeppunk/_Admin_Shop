<template>
  <div>
    <router-view></router-view>
    <VueQueryDevtools />
  </div>
</template>

<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
</script>

<style scoped></style>
