<script setup lang="ts">
import SocialIconBase from '@/components/atoms/SocialIconBase.vue'

defineProps<{
  userName: string;
}>()

</script>

<template>
  <SocialIconBase :href="'https://linkedin.com/in/' + userName" iconClass="i-ant-design-linkedin-filled"
    :a11y-name="'linkedin of ' + userName" />
</template>
