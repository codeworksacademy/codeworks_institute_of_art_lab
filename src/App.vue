<script setup>
import Navbar from './components/Navbar.vue';
import { AppState } from './AppState.js';
import Sidebar from './components/Sidebar.vue';

</script>

<template>
  <header class="no-print">
    <Navbar />
  </header>
  <main class="container-fluid">
    <div class="row">
      <div class="col-2 d-none d-md-block">
        <Sidebar />
      </div>
      <div class="col-md-10 px-3">
        <router-view />
      </div>
    </div>
  </main>

</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

:root {
  --main-height: calc(100vh - 32px - 64px);
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
