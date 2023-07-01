<script setup lang="ts">
import {PhSpinnerGap} from "@phosphor-icons/vue";
import HeadingTitle from "@/components/HeadingTitle.vue";
import EventCard from "@/components/EventCard.vue";
import IconFire from "@/components/icons/IconFire.vue";
import { useEventStore } from "@/stores/events";
import { ref } from "vue";
import { useToast } from "vue-toastification";

const store = useEventStore();
const toast = useToast();

const loading = ref(true);

(async () => {
  try {
    await store.fetchEvents()}
  catch (err) {
    console.log("error fetching events");
    toast.error("Não foi possível carregar os eventos. Tente novamente mais tarde.")
  }
  loading.value = false;
})();

</script>

<template>
  <main class="customBaseWrapper">
    <HeadingTitle size="big">bem-vindo ao eventify!</HeadingTitle>
    <HeadingTitle>seu app para encontrar e compartilhar eventos</HeadingTitle>

    <hr />

    <div class="content-wrapper" v-if="!loading">
      <HeadingTitle size="medium">
        os principais atualmente
        <IconFire />
      </HeadingTitle>
      <div class="card-wrapper" >
        <EventCard          
          v-for="event in store.events"
          :key="event._id"
          :event="event"
        />
      </div>
      
    </div>
    <div v-else class="loading-icon-wrapper">
        <PhSpinnerGap :size="72" class="loading-icon" />
      </div>
  </main>
</template>

<style scoped>

.content-wrapper {
  text-align: center;
  height: 100%;
}

.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 24px;
  gap: 16px;
}

.loading-icon-wrapper {
  min-width: 200px;
  min-height: 200px;
  padding: 20px 0;
  color: var(--color-text);
  border: 0;
  border-radius: var(--border-radius);

  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}

.loading-icon {
  margin-top: 22px;
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