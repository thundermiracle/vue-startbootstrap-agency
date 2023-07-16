<script setup lang="ts">
import { ref } from 'vue';
import TopSection from '@/components/organisms/TopSection.vue';
import TopDataJSON from 'contents/en/topData.json';

const topData = ref<{
  header: string;
  subheader: string;
  imageSrc: string;
  jumpToAnchor?: string;
  jumpToAnchorText?: string;
}>(TopDataJSON);
</script>

<template>
  <main>
    <TopSection :header="topData.header" :subheader="topData.subheader" :imageSrc="topData.imageSrc"
      :jumpToAnchor="topData.jumpToAnchor" :jumpToAnchorText="topData.jumpToAnchorText" />
  </main>
</template>
