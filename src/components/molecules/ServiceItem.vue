<script setup lang="ts">
import ServiceIcon from "@/components/atoms/ServiceIcon.vue";

defineProps<{
  rootClass?: string;
  iconClass: string;
  header: string;
  content: string;
}>();
</script>

<template>
  <div :class="'flex flex-col text-center items-center ' + rootClass">
    <ServiceIcon :iconClass="iconClass" />
    <h3 class="my-15px case-normal">{{ header }}</h3>
    <p class="text-muted">{{ content }}</p>
  </div>
</template>
