import axios from 'axios';
import { useUserAuthStore } from '@/stores/userAuth'
import { watch, onUnmounted} from 'vue';

const apiService = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const userAuthStore = useUserAuthStore();

const unregisterWatcher = watch(
  () => userAuthStore.token,
  (newToken) => {
    if (newToken) {
      apiService.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
    } else {
      delete apiService.defaults.headers.common['Authorization'];
    }
  }
);

onUnmounted(unregisterWatcher);

export { apiService as api };