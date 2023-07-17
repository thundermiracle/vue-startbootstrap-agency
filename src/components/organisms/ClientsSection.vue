<script setup lang="ts">
import ClientItem from '@/components/molecules/ClientItem.vue';
import SectionBase from '@/components/molecules/SectionBase.vue';
import type { ComponentProps } from '@/utils/typings';

defineProps<{
  data: ComponentProps<typeof ClientItem>[];
}>();
</script>

<template>
  <SectionBase id="clients">
    <div class="flex flex-row flex-wrap">
      <div v-for="item in data" class="my-3 md:basis-1/4 basis-1/2" :key="item.src">
        <ClientItem v-bind="item" />
      </div>
    </div>
  </SectionBase>
</template>