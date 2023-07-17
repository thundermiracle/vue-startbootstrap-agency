<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
  href?: string;
}>()
</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">
    <div class="h-75px w-300px relative">
      <img loading="lazy" decoding="async" class="container mx-auto block mx-auto" fill :src="src" :alt="alt" />
    </div>
  </a>
</template>