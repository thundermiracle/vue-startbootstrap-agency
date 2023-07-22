<script setup lang="ts">
defineProps<{
  header?: string;
  subheader?: string;
  content?: string;
  show?: boolean;
  imageSrc: string;
  imageAlt?: string;
  toggle?: () => void;
}>()
</script>

<template>
  <div class="modal fade bg-black/[0.5]" :class="show ? 'show block' : 'display-none'" tabindex="-1" aria-modal="true"
    role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 v-if="header" class="modal-title">{{ header }}</h4>
          <button type="button" class="btn-close" aria-label="Close" @click="toggle" />
        </div>
        <div class="modal-body">
          <p v-if="subheader" class="item-intro text-muted">{{ subheader }}</p>
          <img loading="lazy" decoding="async" class="img-fluid" width=500 height=400 :src="imageSrc"
            :alt="imageAlt || header || subheader" />
          <div class="text-left">
            <p v-if="content">{{ content }}</p>
            <slot />
          </div>
        </div>
        <div class="modal-footer justify-center">
          <button type="button" class="btn btn-primary" @click="toggle">Close Project</button>
        </div>
      </div>
    </div>
  </div>
</template>