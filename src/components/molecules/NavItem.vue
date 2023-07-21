<script setup lang="ts">
defineProps<{
  to: string;
}>()
</script>

<template>
  <li class="nav-item contents before:content-none">
    <a class="nav-link text-90% font-400 py-6px color-white cursor-pointer font-heading decoration-none tracking-wider hover:color-primary focus:color-primary md:py-18px md:!px-16px"
      :href="`#${to}`">
      <slot />
    </a>
  </li>
</template>
