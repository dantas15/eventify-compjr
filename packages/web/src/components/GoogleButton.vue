<script setup lang="ts">
import { PhSpinnerGap, PhGoogleLogo } from "@phosphor-icons/vue";
import {ref} from "vue";

const loading = ref(false);
function googleLogin() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  },2000)
}
</script>

<template>
  <button @click="googleLogin" class="google-button">
    entre com o google
    <PhGoogleLogo v-if="!loading" weight="bold"/>
    <PhSpinnerGap v-else weight="bold" class="loading-icon"/>
  </button>
</template>

<style scoped>

.google-button {
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

.google-button:hover {
  background: var(--vt-c-primary-hover);
  cursor: pointer;
}

.google-button svg {
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