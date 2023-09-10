<script setup lang="ts">
import SectionBase from '../molecules/SectionBase.vue';

defineProps<{
  title: string;
  subTitle: string;
  telephone: string;
  email: string;
}>()
</script>

<template>
  <SectionBase id="contact" bgGray>
    <div class="flex justify-center">
      <div class="text-center max-w-4xl">
        <h2 class="mt-0">{{ title }}</h2>
        <hr class="my-6 color-gray200" />
        <p class="text-muted mb-7">{{ subTitle }}</p>

        <div class="flex justify-around flex-wrap">
          <div class="md:basis-4/10 basis-1/1 ms-auto f-center flex-col mb-10">
            <div class="i-ant-design-phone-twotone text-14 text-muted mb-4" />
            <a class="text-primary" :href="`tel:${telephone}`">
              {{ telephone }}
            </a>
          </div>
          <div class="md:basis-4/10 basis-1/1 me-auto f-center flex-col mb-10">
            <div class="i-ant-design-mail-twotone text-14 text-muted mb-4" />
            <a class="text-primary" :href="`mailto:${email}`">
              {{ email }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </SectionBase>
</template>