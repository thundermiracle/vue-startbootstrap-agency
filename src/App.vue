<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import MetaJSON from 'contents/meta.json'

const MetaJson = ref<{
  title: string
  description: string
  keywords: string[]
}>(MetaJSON)
</script>

<template>
  <!-- meta -->
  <teleport to="head">
    <title>{{ MetaJson.title }}</title>
    <meta name="viewport"
      content="minimum-scale=1, initial-scale=1, maximum-scale=5, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
    <meta name="keywords" :content="MetaJson.keywords.join(', ')" />
    <meta name="description" :content="MetaJson.description" />
    <meta name="og:title" :content="MetaJson.title" />
    <meta name="og:description" :content="MetaJson.description" />
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="ThunderMiracle" />
    <meta name="twitter:title" :content="MetaJson.title" />
    <meta name="twitter:description" :content="MetaJson.description" />
  </teleport>
  <RouterView />
</template>

<style scoped></style>
