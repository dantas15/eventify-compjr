<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeadingTitle from '@/components/HeadingTitle.vue';
import AppFooter from "@/components/AppFooter.vue";
import AppNav from "@/components/AppNav.vue";
</script>

<template>
  <header>
    <img alt="Eventify logo" class="logo" src="@/assets/logo.svg" width="32" height="32" />

    <div>
      <HeadingTitle :alignText="true" size="regular">eventify</HeadingTitle>
      <AppNav />
    </div>
  </header>

  <RouterView />
  <AppFooter />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  max-height: 100vh;
  padding: 2rem 2rem 0;
  margin: 0 auto 64px;
}

header img {
  flex-shrink: 1;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/*@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}*/
</style>
