import { ref } from 'vue'
import { defineStore } from 'pinia'

type StringAuthType = string | undefined;

const LS_TOKEN_PATH = 'token' as const;

export function getTokenFromLocalStorage() {
  const fetchedToken = localStorage.getItem(LS_TOKEN_PATH);
  return fetchedToken ? fetchedToken : undefined;
}


export const useUserAuthStore = defineStore('userAuth', () => {
  const authenticated = ref(false);
  const userId = ref<StringAuthType>(undefined);
  const email = ref<StringAuthType>(undefined);
  const token  = ref<StringAuthType>(undefined);



  return {
    authenticated,
    userId,
    email,
    token,
  };
});