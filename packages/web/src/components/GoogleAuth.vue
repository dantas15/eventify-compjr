<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useUserAuthStore } from "@/stores/userAuth";
import type { CallbackTypes } from "vue3-google-login";
import {  decodeCredential  } from "vue3-google-login";

const store = useUserAuthStore();
const toast = useToast();

const loading = ref(false);

type DecodedExpectedType = {
  email: string;
  sub: string;
  picture: string;
};

const callback: CallbackTypes.CredentialCallback = async (response) => {
  // FIXME maybe improve this type?
  const decoded = decodeCredential(response.credential) as DecodedExpectedType;
  store.setUserData({
    email: decoded.email,
    googleId: decoded.sub,
    userImageUrl: decoded.picture,
  });
  if (decoded) {
    loading.value = true;
    toast.info("Realizando login com Google...");
    try {     

      const loginResponse = await store.handleGoogleLogin(response.credential);

      store.setToken(loginResponse.data.token)
      
      toast.success("Você foi autenticado com sucesso!");
    } catch (err) {
      console.log(err);
      toast.error("Não foi possível autenticar com o Google")
    } finally {
      loading.value = false;
    }    
  }
}
</script>

<template>
  <GoogleLogin :callback="callback" />
</template>