<script setup lang="ts">
import SectionBase from '@/components/molecules/SectionBase.vue';
import TimelineItem from '@/components/molecules/TimelineItem.vue';

defineProps<{
  title: string;
  subTitle: string;
  data: {
    imageContent?: string;
    imageSrc?: string;
    imageAlt?: string;
    header?: string;
    subheader?: string;
    content?: string;
  }[]
}>()
</script>

<template>
  <SectionBase id="about" :title="title" :subTitle="subTitle">
    <ul
      class="p-0 relative list-none before:content-empty before:left-40px md:before:left-50% before:absolute before:top-0 before:bottom-0 before:w-2px before:bg-gray-200">
      <TimelineItem v-for="(item, ind) in data" :key="item.header" :imageContent="item.imageContent"
        :imageSrc="item.imageSrc" :imageAlt="item.imageAlt" :header="item.header" :subheader="item.subheader"
        :content="item.content" :direction="ind % 2 === 0 ? 'right' : 'left'" />
    </ul>
  </SectionBase>
</template>
  