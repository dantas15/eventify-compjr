<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeadingTitle from '@/components/HeadingTitle.vue';
import AppFooter from "@/components/AppFooter.vue";

// TODO implement real authentication
const authenticated = false;
</script>

<template>
  <header>
    <img alt="Eventify logo" class="logo" src="@/assets/logo.svg" width="32" height="32" />

    <div class="wrapper">
      <HeadingTitle size="regular">eventify</HeadingTitle>

      <AppNav />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
  line-height: 1.5;
  max-height: 100vh;
}

header img {
  flex-shrink: 1;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
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
}
</style>
