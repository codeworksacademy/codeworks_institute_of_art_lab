<script setup>
import { artworksService } from '@/services/ArtworksService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { onMounted } from 'vue';

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
  <h1>Codeworks Institute of Art</h1>
</template>

<style scoped lang="scss"></style>
