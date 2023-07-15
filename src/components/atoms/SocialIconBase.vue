<script setup lang="ts">
defineProps<{
  href: string
  iconClass: string
  a11yName: string
}>()
</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" class="hover:cursor-pointer color-inherit"
    :aria-label="a11yName">
    <div aria-hidden="true" class="sns-icon" :class="iconClass" />
  </a>
</template>