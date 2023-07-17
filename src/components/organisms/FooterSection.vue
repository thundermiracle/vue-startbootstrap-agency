<script setup lang="ts">
import TwitterIcon from '@/components/atoms/TwitterIcon.vue';
import FacebookIcon from '@/components/atoms/FacebookIcon.vue';
import LinkedinIcon from '@/components/atoms/LinkedinIcon.vue';
import GithubIcon from '@/components/atoms/GithubIcon.vue';
import MediumIcon from '@/components/atoms/MediumIcon.vue';

defineProps<{
  copyright: string;
  privacyHref: string;
  privacyText: string;
  termsHref: string;
  termsText: string;
  social?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    github?: string;
    medium?: string;
  };
}>();
</script>

<template>
  <footer class="py-2">
    <div class="container mx-auto">
      <div class="flex items-center flex-wrap text-center">
        <div class="md:basis-1/3 basis-1/1 md:text-right">{{ copyright }}</div>
        <div class="my-2 md:basis-1/3 basis-1/1 text-center">
          <TwitterIcon v-if="social?.twitter" :userName="social?.twitter" />
          <FacebookIcon v-if="social?.facebook" :userName="social?.facebook" />
          <LinkedinIcon v-if="social?.linkedin" :userName="social?.linkedin" />
          <GithubIcon v-if="social?.github" :userName="social?.github" />
          <MediumIcon v-if="social?.medium" :userName="social?.medium" />
        </div>
        <div class="md:basis-1/3 basis-1/1 md:text-left">
          <a class="mr-3 text-primary" :href="privacyHref">
            {{ privacyText }}
          </a>
          <a class="text-primary" :href="termsHref">
            {{ termsText }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>