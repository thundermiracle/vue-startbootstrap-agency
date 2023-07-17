<script setup lang="ts">
defineProps<{
  imageSrc: string;
  imageAlt?: string;
  header: string;
  subheader: string;
  content?: string;
  imageSrcDetail?: string;
  imageAltDetail?: string;
}>()
</script>

<template>
  <div class="m-0 md:basis-1/3 basis-1/1 max-w-400px max-h-410px bg-white mb-30px">
    <div aria-hidden="true" class="relative cursor-pointer block">
      <img loading="lazy" decoding="async" class="img-fluid" width=400 height=300 :src="imageSrc"
        :alt="imageAlt || header" />
      <div class="absolute top-0 hw-100% opacity-0 transition ease duration-500 bg-primary hover:opacity-90 f-center">
        <div class="i-fa-plus text-white hw-35px" />
      </div>
    </div>
    <div class="max-w-400px my-0 mx-auto p-25px text-center b-white">
      <h4 class="m-0 transform-none">{{ header }}</h4>
      <p v-if="subheader" class="m-0 text-16px text-muted font-serif">{{ subheader }}</p>
    </div>
  </div>
</template>