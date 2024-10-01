<script setup>
import { computed } from 'vue';
import PageNavigation from './PageNavigation.vue';
import { AppState } from '@/AppState.js';
import Login from './Login.vue';
import { AuthService } from '@/services/AuthService.js';
const account = computed(() => AppState.account)

async function login() {
  AuthService.loginWithPopup()
}
async function logout() {
  AuthService.logout()
}
</script>


<template>
  <div class="d-flex flex-column justify-content-between border-end border-1 border-dark pe-3 sticky-top side-bar">
    <div v-if="account" class="text-center mt-2">
      <img :src="account.picture" :alt="'A picture of ' + account.name">
      <p>{{ account.name }}</p>
      <button @click="logout()" class="btn btn-outline-dark rounded-pill w-100">logout</button>
    </div>
    <div v-else class="text-center">
      <button @click="login()" class="btn btn-outline-dark rounded-pill w-100">login</button>
    </div>
    <PageNavigation />
  </div>
</template>


<style lang="scss" scoped>
.side-bar {
  min-height: 90dvh;
}

img {
  width: 80%;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
</style>