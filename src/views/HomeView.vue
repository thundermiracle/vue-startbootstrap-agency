<script setup lang="ts">
import { ref } from 'vue';
import TopSection from '@/components/organisms/TopSection.vue';
import ServicesSection from '@/components/organisms/ServicesSection.vue';
import PortfolioSection from '@/components/organisms/PortfolioSection.vue';
import TopDataJSON from 'contents/en/topData.json';
import ServicesDataJson from 'contents/en/servicesData.json';
import PortfolioDataJson from 'contents/en/portfolioData.json';

const topData = ref<{
  header: string;
  subheader: string;
  imageSrc: string;
  jumpToAnchor?: string;
  jumpToAnchorText?: string;
}>(TopDataJSON);

const serviceData = ref<{
  title: string;
  subTitle: string;
  data: {
    iconClass: string;
    header: string;
    content: string;
  }[];
}>(ServicesDataJson);

const portfolioData = ref<{
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
  }[];
}>(PortfolioDataJson);
</script>

<template>
  <main>
    <TopSection :header="topData.header" :subheader="topData.subheader" :imageSrc="topData.imageSrc"
      :jumpToAnchor="topData.jumpToAnchor" :jumpToAnchorText="topData.jumpToAnchorText" />
    <ServicesSection :title="serviceData.title" :subTitle="serviceData.subTitle" :data="serviceData.data" />
    <PortfolioSection :title="portfolioData.title" :subTitle="portfolioData.subTitle" :data="portfolioData.data" />
  </main>
</template>
