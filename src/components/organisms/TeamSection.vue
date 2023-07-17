<script setup lang="ts">
import SectionBase from '../molecules/SectionBase.vue';
import TeamItem from '@/components/molecules/TeamItem.vue';
import type { ComponentProps } from '@/utils/typings';

defineProps<{
  title: string;
  subTitle: string;
  footer: string;
  data: ComponentProps<typeof TeamItem>[];
}>()
</script>

<template>
  <SectionBase id="team" :title="title" :subTitle="subTitle" :footer="footer" bgGray>
    <div class="flex justify-around flex-wrap">
      <!-- pass all props in item to TeamItem -->
      <TeamItem v-for="item in data" :key="item.imageSrc" :="item" />
    </div>
  </SectionBase>
</template>