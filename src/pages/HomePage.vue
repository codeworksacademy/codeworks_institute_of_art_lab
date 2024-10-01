<script setup>
import { AppState } from '@/AppState.js';
import ArtworkCard from '@/components/ArtworkCard.vue';
import { artworksService } from '@/services/ArtworksService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const artworks = computed(() => AppState.artworks)

onMounted(() => {
  getArtworks()
})

async function getArtworks() {
  try {
    await artworksService.getArtworks()
  } catch (error) {
    Pop.error(error)
    logger.error(error)
  }
}
</script>

<template>
  <div class="art-view">
    <h1>Codeworks Institute of Art <i v-if="artworks.length == 0" class="mdi mdi-loading mdi-spin"></i></h1>
    <section class="artwork py-3">
      <ArtworkCard v-for="art in artworks" :key="art.id" :artwork="art" />
    </section>
  </div>
</template>

<style scoped lang="scss">
.artwork {
  columns: 300px;
}

.artwork>* {
  break-inside: avoid;
  margin-bottom: 1rem;
}
</style>
