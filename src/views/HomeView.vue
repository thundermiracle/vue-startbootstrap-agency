<script setup lang="ts">
import { ref } from 'vue';
import TopSection from '@/components/organisms/TopSection.vue';
import ServicesSection from '@/components/organisms/ServicesSection.vue';
import PortfolioSection from '@/components/organisms/PortfolioSection.vue';
import TimelineSection from '@/components/organisms/TimelineSection.vue';
import TeamSection from '@/components/organisms/TeamSection.vue';

import TopDataJSON from 'contents/en/topData.json';
import ServicesDataJson from 'contents/en/servicesData.json';
import PortfolioDataJson from 'contents/en/portfolioData.json';
import TimelineDataJson from 'contents/en/timelineData.json';
import TeamDataJson from 'contents/en/teamData.json';

import type { ComponentProps } from '@/utils/typings';

const topData = ref<ComponentProps<typeof TopSection>>(TopDataJSON);
const serviceData = ref<ComponentProps<typeof ServicesSection>>(ServicesDataJson);
const portfolioData = ref<ComponentProps<typeof PortfolioSection>>(PortfolioDataJson);
const timelineData = ref<ComponentProps<typeof TimelineSection>>(TimelineDataJson);
const teamData = ref<ComponentProps<typeof TeamSection>>(TeamDataJson);
</script>

<template>
  <main>
    <TopSection :header="topData.header" :subheader="topData.subheader" :imageSrc="topData.imageSrc"
      :jumpToAnchor="topData.jumpToAnchor" :jumpToAnchorText="topData.jumpToAnchorText" />
    <ServicesSection :title="serviceData.title" :subTitle="serviceData.subTitle" :data="serviceData.data" />
    <PortfolioSection :title="portfolioData.title" :subTitle="portfolioData.subTitle" :data="portfolioData.data" />
    <TimelineSection :title="timelineData.title" :subTitle="timelineData.subTitle" :data="timelineData.data" />
    <TeamSection :title="teamData.title" :subTitle="teamData.subTitle" :footer="teamData.footer" :data="teamData.data" />
  </main>
</template>
