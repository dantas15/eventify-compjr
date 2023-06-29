<script setup lang="ts">
import GoogleButton from "@/components/GoogleButton.vue";
import { ref } from "vue";
import { POSITION, useToast } from "vue-toastification";
import { useUserAuthStore } from "@/stores/userAuth";

const store = useUserAuthStore();

const toast = useToast();

const loading = ref(false);
async function handleLogin() {
  loading.value = true;
  toast.info("Realizando login com Google...");
  try {
    const responsse = await store.handleGoogleLogin();
    toast.success("Você foi autenticado com sucesso!");
    toast.info("Redirecionando...", { position: POSITION.BOTTOM_CENTER});
  } catch (err) {
    console.log(err);
    toast.error("Não foi possível autenticar com o Google")
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <main class="customBaseWrapper main-wrapper">
    <h1>escolha uma opção:</h1>

    <hr />

    <GoogleButton :loading="loading" :handle-on-click="handleLogin" />
  </main>
</template>

<style scoped>
.main-wrapper {
  display: flex;
  justify-content: flex-start;
  text-align: center;
  min-height: 50vh;
}
</style>