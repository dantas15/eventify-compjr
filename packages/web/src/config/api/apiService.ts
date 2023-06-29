import axios from 'axios';
import { useUserAuthStore } from '@/stores/userAuth'
import { watch, onUnmounted} from 'vue';

const apiService = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
});

export { apiService as api };