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
    <div className="flex justify-center">
      <div className="text-center max-w-4xl">
        <h2 className="mt-0">{{ title }}</h2>
        <hr className="my-6 color-gray200" />
        <p className="text-muted mb-7">{{ subTitle }}</p>

        <div className="flex justify-around flex-wrap">
          <div className="md:basis-4/10 basis-1/1 ms-auto f-center flex-col mb-10">
            <div className="i-ant-design-phone-twotone text-14 text-muted mb-4" />
            <a className="text-primary" :href="`tel:${telephone}`">
              {{ telephone }}
            </a>
          </div>
          <div className="md:basis-4/10 basis-1/1 me-auto f-center flex-col mb-10">
            <div className="i-ant-design-mail-twotone text-14 text-muted mb-4" />
            <a className="text-primary" :href="`mailto:${email}`">
              {{ email }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </SectionBase>
</template>