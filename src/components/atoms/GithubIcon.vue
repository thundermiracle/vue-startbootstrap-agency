<script setup lang="ts">
import SocialIconBase from '@/components/atoms/SocialIconBase.vue'

defineProps<{
  userName: string;
}>()

</script>

<template>
  <SocialIconBase :href="`https://github.com/${userName}`" iconClass="i-ant-design-github-filled"
    :a11y-name="`github of ${userName}`" />
</template>