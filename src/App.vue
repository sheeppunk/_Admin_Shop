
<template>
  <div>
    <FullScreenLoader v-if="authStore.isChecking"/>

    <RouterView v-else ></RouterView>


    <VueQueryDevtools />
  </div>
</template>

<script setup lang="ts">

import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { useAuthStores } from './modules/auth/stores/authStores';
import { AuthStatus } from './modules/auth/interfaces';
import { useRoute, useRouter } from 'vue-router';
import FullScreenLoader from './modules/common/components/FullScreenLoader.vue';

const router = useRouter();
const route = useRoute();

const authStore = useAuthStores();

authStore.$subscribe(
  (_, state) => {

     if (state.authStatus === AuthStatus.Checking){
    authStore.checkAuthStatus();
    return;
  }
  if (route.path.includes('/auth') && state.authStatus === AuthStatus.Authenticated) {
    router.replace({name: 'home'});
    return;
  }

},

  {
     immediate: true,
  },
);

</script>

<style scoped>

</style>
