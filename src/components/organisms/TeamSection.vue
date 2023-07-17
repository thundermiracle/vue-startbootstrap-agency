<script setup lang="ts">
import SectionBase from '../molecules/SectionBase.vue';
import TeamItem from '@/components/molecules/TeamItem.vue';

defineProps<{
  title: string;
  subTitle: string;
  footer: string;
  data: {
    imageSrc: string;
    imageAlt?: string;
    header: string;
    subheader: string;
    social?: {
      twitter?: string;
      facebook?: string;
      linkedin?: string;
      github?: string;
      medium?: string;
    };
  }[];
}>()
</script>

<template>
  <SectionBase id="team" :title="title" :subTitle="subTitle" :footer="footer" bgGray>
    <div class="flex justify-around flex-wrap">
      <!-- pass all props in item to TeamItem -->
      <TeamItem v-for="item in data" :key="item.imageSrc" v-bind="item" />
    </div>
  </SectionBase>
</template>