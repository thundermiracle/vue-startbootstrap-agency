<script setup lang="ts">
import ImageCard from "@/components/atoms/ImageCard.vue";

defineProps<{
  header: string;
  subheader: string;
  imageSrc: string;
  jumpToAnchor?: string;
  jumpToAnchorText?: string;
}>()

</script>

<template>
  <ImageCard :imageSrc="imageSrc" :header="header" :subheader="subheader">
    <!-- render when extraInfoPart is true -->
    <a v-if="jumpToAnchor && jumpToAnchorText" type="button" class="big-btn decoration-none" :href="`#${jumpToAnchor}`">
      {{ jumpToAnchorText }}
    </a>
  </ImageCard>
</template>