<script setup>
import { Artwork } from '@/models/Artwork.js';
import { computed } from 'vue';

const props = defineProps({
  artwork: { type: Artwork, required: true }
})

const admirerTitle = computed(() => {
  const admirerCount = props.artwork.admirers.length
  return `This work has been admired by ${admirerCount} ${admirerCount == 1 ? 'person' : 'people'}.`
}) 
</script>


<template>
  <div class="position-relative">
    <img :src="artwork.smallImg" :alt="artwork.altDescription" class="shadow">
    <div class="admirer-icon text-center" :title="admirerTitle">
      <i class="mdi mdi-hand-clap d-block"></i>
      <span>{{ artwork.admirers.length }}</span>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  width: 100%;
}

.admirer-icon {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  height: 50px;
  aspect-ratio: 1/1;
  background-color: var(--bs-light);
  border-radius: 50%;
}
</style>