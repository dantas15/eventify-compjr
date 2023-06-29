import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/config/api';

type StringAuthType = string | undefined;

const LS_TOKEN_PATH = 'token' as const;

function getTokenFromLocalStorage() {
  const fetchedToken = localStorage.getItem(LS_TOKEN_PATH);
  return fetchedToken ? fetchedToken : undefined;
}

export const useUserAuthStore = defineStore('userAuth', () => {
  const authenticated = ref(false);
  const userId = ref<StringAuthType>(undefined);
  const email = ref<StringAuthType>(undefined);
  const token  = ref<StringAuthType>(getTokenFromLocalStorage());

  function setToken(newToken: string) {
    token.value = newToken;
    localStorage.setItem('token', newToken);
  }

  async function handleGoogleLogin() {
    return api.auth.googleAuth();
  }

  return {
    authenticated,
    userId,
    email,
    token,
    handleGoogleLogin,
  };
});