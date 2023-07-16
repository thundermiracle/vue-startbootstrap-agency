<script setup lang="ts">
defineProps<{
  iconClass: string;
}>();
</script>

<template>
  <div class="rd-50% bg-primary inline-block h-32 w-32 inline-flex justify-center items-center">
    <div :class="'text-16 inline-block color-white ' + iconClass" />
  </div>
</template>
