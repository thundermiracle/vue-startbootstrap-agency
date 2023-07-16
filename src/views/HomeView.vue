<script setup lang="ts">
import { ref } from 'vue';
import TopSection from '@/components/organisms/TopSection.vue';
import TopDataJSON from 'contents/en/topData.json';
import ServicesDataJson from 'contents/en/servicesData.json';
import ServicesSection from '@/components/organisms/ServicesSection.vue';

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
</script>

<template>
  <main>
    <TopSection :header="topData.header" :subheader="topData.subheader" :imageSrc="topData.imageSrc"
      :jumpToAnchor="topData.jumpToAnchor" :jumpToAnchorText="topData.jumpToAnchorText" />
    <ServicesSection :title="serviceData.title" :subTitle="serviceData.subTitle" :data="serviceData.data" />
  </main>
</template>
