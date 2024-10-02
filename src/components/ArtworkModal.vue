<script setup>
import { AppState } from '@/AppState.js';
import { artworksService } from '@/services/ArtworksService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed } from 'vue';

const artwork = computed(() => AppState.activeArtwork)
const account = computed(() => AppState.account)
const isAdmirer = computed(() => artwork.value.admirers.some(admirer => admirer.id == account.value?.id))


async function toggleAdmiration() {
  try {
    await artworksService.toggleAdmiration(artwork.value.id)
  } catch (error) {
    Pop.error(error)
    logger.error(error)
  }
}
</script>


<template>
  <div class="modal fade" id="artworkModal" tabindex="-1" aria-labelledby="artworkModalLabel" aria-hidden="true">
    <div class=" modal-dialog modal-xl">
      <div v-if="artwork" class="modal-content art-border">
        <div class="modal-body ">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="h-100 d-flex flex-column justify-content-between">
                  <button type="button" class="btn-close d-block mb-3" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                  <p>{{ artwork.description }}</p>
                  <div>
                    <div class="d-flex flex-wrap gap-1">
                      <div v-if="account" @click="toggleAdmiration()" class="admire-button circle text-light"
                        :class="isAdmirer ? 'bg-danger' : 'bg-dark'" role="button"
                        :title="isAdmirer ? 'Revoke Admiration' : 'Become an admirer'">
                        <i class="mdi mdi-hand-clap"></i>
                      </div>
                      <img v-for="admirer in artwork.admirers" :key="admirer.id" :src="admirer.picture"
                        :alt="`${admirer.name}'s profile picture`" :title="admirer.name"
                        class="circle object-fit-cover">
                    </div>
                    <p class="mb-0 mt-1 text-end">{{ artwork.attribution }}</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 p-0">
                <div class="text-center">
                  <a :href="artwork.unsplashLink" target="_blank" title="View this work on Unsplash">
                    <img :src="artwork.regularImg" :alt="artwork.altDescription" class="artwork-img">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.artwork-img {
  height: 88dvh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

a:hover .artwork-img {
  object-fit: contain;
}

.art-border {
  border: 5px solid v-bind('artwork?.color');
}

.admire-button {
  font-size: 2rem;
  text-align: center
}

.circle {
  width: 3rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
</style>