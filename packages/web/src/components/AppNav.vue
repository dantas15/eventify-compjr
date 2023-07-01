<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useUserAuthStore } from '@/stores/userAuth';
import GoogleAuth from '@/components/GoogleAuth.vue';

type Props = {
  colors?: 'primary' | 'dim'
}

const store = useUserAuthStore();

// this is exported by default
withDefaults(defineProps<Props>(), {
  colors: 'primary'
})

</script>

<template>
  <nav>
    <div>
      <RouterLink :class="{'color-dim': colors === 'dim'}" to="/">página inicial</RouterLink>
    </div>
    <div>
      <div v-if="!store.authenticated">
        <GoogleAuth />
      </div>
      <div v-else class="authenticated-info">
        <img :src="store.userImageUrl" :alt="`profile picture from ${store.email}`" />
        <RouterLink to="/me">minha conta</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
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

nav div a {
  color: var(--color-text);
}

nav div a:hover {
  color: var(--vt-c-primary);
}

nav div a.router-link-exact-active {
  text-decoration: underline;
}

.color-dim {
  color: var(--color-text-dim);
}
.color-dim:hover {
  color: var(--color-text);
}

nav div a.router-link-exact-active:hover {
  color: var(--color-text);
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
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.authenticated-info {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.authenticated-info img {
  width: 32px;
  height: 32px;
  border-radius: var(--border-radius);
}
</style>