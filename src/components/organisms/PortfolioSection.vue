<script setup lang="ts">
import SectionBase from '@/components/molecules/SectionBase.vue';
import PortfolioItem from '@/components/molecules/PortfolioItem.vue';

defineProps<{
  title: string;
  subTitle: string;
  data: {
    imageSrc: string;
    header: string;
    subheader: string;
    content?: string;
    imageSrcDetail?: string;
    imageAltDetail?: string;
    extraInfo?: string[];
  }[]
}>()
</script>

<template>
  <SectionBase id="portfolio" :title="title" :sub-title="subTitle" :bg-gray=true>
    <div class="flex justify-around flex-wrap">
      <PortfolioItem v-for="portfolio in data" :key="portfolio.header" :imageSrc="portfolio.imageSrc"
        :header="portfolio.header" :subheader="portfolio.subheader" :content="portfolio.content"
        :image-src-detail="portfolio.imageSrcDetail" :image-alt-detail="portfolio.imageAltDetail">
        <ul>
          <li v-for="item in portfolio.extraInfo" :key="item">{{ item }}</li>
        </ul>
      </PortfolioItem>
    </div>
  </SectionBase>
</template>