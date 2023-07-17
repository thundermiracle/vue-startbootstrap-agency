<script setup lang="ts">
import SocialIconBase from '@/components/atoms/SocialIconBase.vue'

defineProps<{
  userName: string;
}>()

</script>

<template>
  <SocialIconBase :href="`https://twitter.com/${userName}`" iconClass="i-ant-design-twitter-circle-filled"
    :a11y-name="`twitter of ${userName}`" />
</template>
