<script setup>
import { AppState } from '@/AppState.js';
import { artworksService } from '@/services/ArtworksService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed } from 'vue';

const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)

async function changePage(pageNumber) {
  try {
    await artworksService.changePage(pageNumber)
  }
  catch (error) {
    Pop.error(error);
    logger.error(error)
  }
}
</script>


<template>
  <div>
    <div class="text-center">
      <i class="mdi mdi-book-open-blank-variant-outline display-1 display-block"></i>
      <p>{{ currentPage }} of {{ totalPages }}</p>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage == totalPages"
        class="btn btn-outline-dark d-block mb-3 w-100 rounded-pill">
        next
      </button>
      <button @click="changePage(currentPage - 1)" :disabled="currentPage < 2"
        class="btn btn-outline-dark d-block w-100 rounded-pill">
        previous
      </button>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>