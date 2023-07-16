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
    <button v-if="jumpToAnchor && jumpToAnchorText" type="button" class="big-btn">
      {{ jumpToAnchorText }}
    </button>
  </ImageCard>
</template>