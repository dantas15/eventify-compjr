import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { CreatedEvent } from '@eventify/schemas';
import { api } from '@/config/api';
import { useToast } from "vue-toastification";

const toast = useToast();

export const useEventStore = defineStore('events', () => {
  const events = ref<CreatedEvent[]>([]);

  async function fetchEvents() {
    try {
      const { data: fetchedEvents } = await api.events.getAllEvents();
      events.value = fetchedEvents;
    } catch (err) {
      console.log(err);
      toast.error("Não foi possível recuperar os eventos :(");
    }
  }

  return {
    events,
    fetchEvents,
  }
})