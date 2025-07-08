<template>
  <!-- component -->
  <!-- Create By Joker Banny -->

  <!-- Header Navbar -->
  <topMenu />
  <!-- Title -->
  <RouterView />
  <!-- Footer -->
  <CustomFooter />
</template>

<script setup lang="ts">
import CustomFooter from '../components/customFooter.vue'
import topMenu from '../components/topMenu.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped></style>
