<script setup lang="ts">
defineProps<{
  direction?: 'left' | 'right';
  imageContent?: string;
  imageSrc?: string;
  imageAlt?: string;
  header?: string;
  subheader?: string;
  content?: string;
}>()
</script>

<template>
  <li
    class="relative md:mb-100px md:min-h-170px mb-50px min-h-50px before:content-empty before:display-table after:content-empty after:display-table after:clear-both">
    <div class="absolute md:left-50% md:ml--92px">
      <div class="md:hw-184px hw-80px rounded-img-border bg-primary flex items-center justify-center">
        <h4 v-if="imageContent" class="text-white whitespace-break-spaces md:text-24px text-10px mb-0">
          {{ imageContent }}
        </h4>
        <div v-else class="hw-100% relative">
          <img loading="lazy" decoding="async" class="rounded-full" fill :src="imageSrc"
            :alt="imageAlt || header || subheader || ''" />
        </div>
      </div>
    </div>
    <div
      :class="'relative md:w-41% md:pl-20px md:pb-20px pl-100px pr-20px float-right text-left ' + (direction === 'right' ? '' : 'md:float-left md:text-right')">
      <div class="mt-0">
        <h4 v-if="header">{{ header }}</h4>
        <h4 v-if="subheader">{{ subheader }}</h4>
      </div>
      <div v-if="content">
        <p class="mb-0 text-muted">{{ content }}</p>
      </div>
    </div>
  </li>
</template>