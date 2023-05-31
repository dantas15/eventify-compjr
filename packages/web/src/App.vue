<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeadingTitle from '@/components/HeadingTitle.vue'
import { PhGoogleLogo } from '@phosphor-icons/vue';

// TODO implement real authentication
const authenticated = false;
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="32" height="32" />

    <div class="wrapper">
      <HeadingTitle size="big">eventify</HeadingTitle>

      <nav>
        <div>
          <RouterLink to="/">página inicial</RouterLink>
        </div>
        <div>
          <RouterLink v-if="!authenticated" to="/login">entre com sua conta google <PhGoogleLogo weight="bold" color="white" line/></RouterLink>
          <RouterLink v-else to="/me">minha conta</RouterLink>
        </div>
      </nav>
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

nav {
  width: 100%;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

nav div {
  text-align: center;
}

nav div a.router-link-exact-active {
  color: var(--color-text);
  text-decoration: underline;
  text-decoration-color: var(--color-background-mute);
}

nav div a.router-link-exact-active:hover {
  background-color: transparent;
}

nav div a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}

nav div a:first-of-type {
  border: 0;
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
