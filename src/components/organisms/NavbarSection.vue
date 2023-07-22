<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import NavItem from '../molecules/NavItem.vue';

defineProps<{
  brand: string;
  menuText?: string;
  menus: {
    anchor: string;
    text?: string;
  }[];
}>()

const navbarCss = 'navbar navbar-expand-lg fixed-top bg-#212529';
const navbarCssMd = 'md:bg-transparent md:transition-padding md:duration-300 md:b-none md:py-8px';
const brandCss = 'navbar-brand cursor-pointer color-primary font-script hover:color-#d2ab1d focus:color-#d2ab1d';
const brandCssMd = 'md:text-30px md:transition-all md:duration-300';
const togglerCss =
  'navbar-toggler text-12px right-0 p-13px uppercase color-white b-0 bg-primary font-heading flex gap-3px';

const brandShrink = 'uno-layer-e1:md:text-20px uno-layer-e1:md:py-12px';
const navbarShrink = 'uno-layer-e1:md:py-0 uno-layer-e1:md:bg-#212529 uno-layer-e1:md:px-2';

const shrink = ref(false);
const expanded = ref(false);

// onMount change shrink to true when scroll goes over 100px
const scrollListener = () => {
  if (window.scrollY > 100) {
    shrink.value = true;
  } else {
    shrink.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', scrollListener);
});
onUnmounted(() => {
  window.removeEventListener('scroll', scrollListener);
});

const closeMenu = () => {
  expanded.value = false;
};
</script>

<template>
  <nav :class="`${navbarCss} ${navbarCssMd} ${shrink ? navbarShrink : ''}`">
    <div class="container-fluid md:px-56px">
      <a :class="`${brandCss} ${brandCssMd} ${shrink ? brandShrink : ''}`" :href="`#`">
        {{ brand }}
      </a>
      <button :class="togglerCss" aria-label="Toggle navigation" type="button" @click="expanded = !expanded">
        {{ menuText }}
        <div className="i-fa-bars" />
      </button>
      <div class="collapse navbar-collapse animate-fade-in" :class="`${expanded ? 'show' : ''}`">
        <ul class="navbar-nav uppercase ms-auto">
          <NavItem v-for="menu in menus" :key="menu.anchor" :to="menu.anchor" @click="closeMenu">
            {{ menu.text || menu.anchor }}
          </NavItem>
        </ul>
      </div>
    </div>
  </nav>
</template>