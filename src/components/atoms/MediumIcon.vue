<script setup lang="ts">
import SocialIconBase from '@/components/atoms/SocialIconBase.vue'

defineProps<{
  userName: string;
}>()

</script>

<template>
  <SocialIconBase :href="`https://medium.com/${userName}`" iconClass="i-ant-design-medium-circle-filled"
    :a11y-name="`medium of ${userName}`" />
</template>
