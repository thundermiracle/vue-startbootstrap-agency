<script setup lang="ts">
import TwitterIcon from '@/components/atoms/TwitterIcon.vue';
import FacebookIcon from '@/components/atoms/FacebookIcon.vue';
import LinkedinIcon from '@/components/atoms/LinkedinIcon.vue';
import GithubIcon from '@/components/atoms/GithubIcon.vue';
import MediumIcon from '@/components/atoms/MediumIcon.vue';

defineProps<{
  imageSrc: string;
  imageAlt?: string;
  header: string;
  subheader: string;
  social?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    github?: string;
    medium?: string;
  };
}>()
</script>

<template>
  <div class="flex flex-col text-center items-center max-w-440px px-4 mb-50px">
    <div class="hw-239px rounded-img-border">
      <div class="hw-225px relative">
        <img loading="lazy" decoding="async" fill class="rounded-full" :src="imageSrc" :alt="imageAlt || header" />
      </div>
    </div>
    <h4 class="mt-25px mb-0 transform-none">{{ header }}</h4>
    <p class="mt-0 text-muted">{{ subheader }}</p>
    <div class="flex gap-2">
      <TwitterIcon v-if="social?.twitter" :userName="social?.twitter" />
      <FacebookIcon v-if="social?.facebook" :userName="social?.facebook" />
      <LinkedinIcon v-if="social?.linkedin" :userName="social?.linkedin" />
      <GithubIcon v-if="social?.github" :userName="social?.github" />
      <MediumIcon v-if="social?.medium" :userName="social?.medium" />
    </div>
  </div>
</template>