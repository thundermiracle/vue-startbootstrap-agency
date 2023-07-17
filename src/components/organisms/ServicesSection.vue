<script setup lang="ts">
import SectionBase from "@/components/molecules/SectionBase.vue";
import ServiceItem from "@/components/molecules/ServiceItem.vue";

defineProps<{
  title: string;
  subTitle: string;
  data: {
    iconClass: string;
    header: string;
    content: string;
  }[];
}>();
</script>

<template>
  <SectionBase id="services" :title="title" :subTitle="subTitle">
    <div className="flex justify-around flex-wrap">
      <ServiceItem v-for="({ iconClass, header, content }) in data" :key="iconClass"
        rootClass="md:basis-1/3 basis-1/1 max-w-440px px-4" :iconClass="iconClass" :header="header" :content="content" />
    </div>
  </SectionBase>
</template>