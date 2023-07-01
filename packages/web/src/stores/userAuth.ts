import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/config/api'
import { useToast } from 'vue-toastification'

const toast = useToast()

const LOCAL_STORAGE_KEYS = {
  USER_IMG: 'userImg',
  TOKEN: 'token',
  GOOGLE_ID: 'googleId',
  EMAIL: 'userEmail'
} as const
type LocalStorageKeys = keyof typeof LOCAL_STORAGE_KEYS
function getFromLocalStorage(key: LocalStorageKeys) {
  const fetchedToken = localStorage.getItem(LOCAL_STORAGE_KEYS[key])
  return fetchedToken ? (fetchedToken !== '' ? fetchedToken : undefined) : undefined
}
function setLocalStorage(key: LocalStorageKeys, value?: string) {
  localStorage.setItem(LOCAL_STORAGE_KEYS[key], value ? value : '')
}

type UserStoreData = {
  googleId: string
  email: string
  userImageUrl: string
}

export const useUserAuthStore = defineStore('userAuth', () => {
  const authenticated = ref(!!getFromLocalStorage('TOKEN'))
  const googleId = ref(getFromLocalStorage('GOOGLE_ID'))
  const email = ref(getFromLocalStorage('EMAIL'))
  const userImageUrl = ref(getFromLocalStorage('USER_IMG'))
  const token = ref(getFromLocalStorage('TOKEN'))

  function setToken(newToken?: string) {
    authenticated.value = !!newToken
    token.value = newToken ? newToken : undefined
    setLocalStorage('TOKEN', newToken)
  }

  function setUserData(newUserData: UserStoreData) {
    googleId.value = newUserData.googleId
    email.value = newUserData.email
    userImageUrl.value = newUserData.userImageUrl

    setLocalStorage('GOOGLE_ID', newUserData.googleId)
    setLocalStorage('EMAIL', newUserData.email)
    setLocalStorage('USER_IMG', newUserData.userImageUrl)
  }

  function resetData() {
    googleId.value = ''
    email.value = ''
    userImageUrl.value = ''
    authenticated.value = false

    setToken()
    setLocalStorage('GOOGLE_ID')
    setLocalStorage('EMAIL')
    setLocalStorage('USER_IMG')
    setLocalStorage('TOKEN')
  }

  async function handleGoogleLogin(sub: string) {
    return await api.auth.googleAuthSubCallback(sub)
  }

  return {
    authenticated,
    googleId,
    email,
    userImageUrl,
    token,
    handleGoogleLogin,
    setUserData,
    setToken,
    resetData
  }
})
