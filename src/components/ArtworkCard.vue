<script setup>
import { Artwork } from '@/models/Artwork.js';
import { artworksService } from '@/services/ArtworksService.js';
import { computed } from 'vue';

const props = defineProps({
  artwork: { type: Artwork, required: true }
})

const admirerTitle = computed(() => {
  const admirerCount = props.artwork.admirers.length
  return `This work has been admired by ${admirerCount} ${admirerCount == 1 ? 'person' : 'people'}.`
})

function setActiveArtwork() {
  artworksService.setActiveArtwork(props.artwork)
}
</script>


<template>
  <div @click="setActiveArtwork()" class="position-relative" data-bs-toggle="modal" data-bs-target="#artworkModal">
    <img :src="artwork.smallImg" :alt="artwork.altDescription" :height="artwork.height" :width="artwork.width"
      class="shadow">
    <div class="admirer-icon text-center no-print" :title="admirerTitle">
      <i class="mdi mdi-hand-clap d-block"></i>
      <span>{{ artwork.admirers.length }}</span>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
}

.admirer-icon {
  position: absolute;
  top: 0;
  right: 0;
  margin: .5rem;
  height: 3rem;
  aspect-ratio: 1/1;
  background-color: var(--bs-light);
  border-radius: 50%;
}
</style>