<script setup lang="ts">
import TopSection from '@/components/organisms/TopSection.vue';
import ServicesSection from '@/components/organisms/ServicesSection.vue';
import PortfolioSection from '@/components/organisms/PortfolioSection.vue';
import TimelineSection from '@/components/organisms/TimelineSection.vue';
import TeamSection from '@/components/organisms/TeamSection.vue';
import ClientsSection from '@/components/organisms/ClientsSection.vue';
import ContactSection from '@/components/organisms/ContactSection.vue';
import FooterSection from '@/components/organisms/FooterSection.vue';

import TopDataJSON from 'contents/en/topData.json';
import ServicesDataJson from 'contents/en/servicesData.json';
import PortfolioDataJson from 'contents/en/portfolioData.json';
import TimelineDataJson from 'contents/en/timelineData.json';
import TeamDataJson from 'contents/en/teamData.json';
import ClientsDataJson from 'contents/en/clientsData.json';
import ContactDataJson from 'contents/en/contactData.json';
import FooterDataJson from 'contents/en/footerData.json';
</script>

<template>
  <main>
    <TopSection :="TopDataJSON" />
    <ServicesSection :="ServicesDataJson" />
    <PortfolioSection :="PortfolioDataJson" />
    <TimelineSection :="TimelineDataJson" />
    <TeamSection :="TeamDataJson" />
    <ClientsSection :="ClientsDataJson" />
    <ContactSection :="ContactDataJson" />
    <FooterSection :="FooterDataJson" />
  </main>
</template>
