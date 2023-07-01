<script setup lang="ts">
import HeadingTitle from '@/components/HeadingTitle.vue';
import { useUserAuthStore } from '@/stores/userAuth';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import { googleLogout } from "vue3-google-login"

const toast = useToast();
const store = useUserAuthStore();

const loading = ref(false);

if(!store.authenticated) {
  toast.error("Você não está logado! Redirecionando...");
  window.location.href = '/'
}

function handleLogout() {
  toast.info("Você será redirecionado em breve...");

  googleLogout();

  setTimeout(() => {
    store.resetData();
    window.location.href = '/';
  }, 2000);
}
</script>

<template>
 <main class="customBaseWrapper">
  <HeadingTitle size="big">sua conta</HeadingTitle>

  <hr />

  <div class="user-data-wrapper">
    <img :src="store.userImageUrl" :alt="`profile picture from ${store.email}`" />

    <div class="user-data">
      <span>email: </span>
      <p>{{ store.email }}</p>
    </div>

    <button @click="handleLogout" class="logout-button">
      Logout <PhSpinnerGap v-if="loading" weight="bold" class="loading-icon"/>
    <PhGoogleLogo v-else weight="bold"/>
  </button>
  </div>
  
 </main>
</template>
<style scoped>
.user-data-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.user-data-wrapper img {
  width: 100px;
  height: 100px;
  border-radius: var(--border-radius);
}

.user-data {
  margin-top: 28px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
}

.logout-button {
  min-width: 200px;
  font-size: 18px;
  padding: 20px 0;
  background: var(--color-background-mute);
  color: var(--color-text);
  border: 0;
  border-radius: var(--border-radius);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.logout-button:hover {
  background: var(--vt-c-primary-hover);
  cursor: pointer;
}

.logout-button svg {
  margin-left: 8px;
}

.loading-icon {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>