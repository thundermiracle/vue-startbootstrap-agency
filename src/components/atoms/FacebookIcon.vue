<script setup lang="ts">
import SocialIconBase from '@/components/atoms/SocialIconBase.vue'

defineProps<{
  userName: string;
}>()

</script>

<template>
  <SocialIconBase :href="'https://facebook.com/' + userName" iconClass="i-entypo-social-facebook-with-circle"
    :a11y-name="'facebook of ' + userName" />
</template>
