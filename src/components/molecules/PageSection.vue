<script setup lang="ts">
defineProps<{
  id: string;
  className?: string;
  title?: string;
  titleSeparator?: boolean;
  subTitle?: string;
  footer?: string;
  bgGray?: boolean;
}>();
</script>

<template>
  <section :id="id" :class="'py-150px md:py-100px text-center md:px-0 px-12px' + className + bgGray ? 'bg-gray100' : ''">
    <div class="container mx-auto">
      <h2 v-if="title" class="case-upper text-40px mt-0 mb-15px text-center">{{ title }}</h2>
      <hr v-if="titleSeparator" class="my-4" />
      <h3 v-if="subTitle" class="text-muted text-16px font-400 mb-75px mt-0 italic font-serif text-center">
        {{ subTitle }}
      </h3>
      <div class="container mx-auto">
        <slot />
      </div>
      <div v-if="footer" class="mx-auto md:max-w-66% w-90%">
        <p class="text-muted mb-0">{{ footer }}</p>
      </div>
    </div>
  </section>
</template>