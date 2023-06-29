<script setup lang="ts">
import HeadingTitle from "@/components/HeadingTitle.vue";
import EventCard from "@/components/EventCard.vue";
import IconFire from "@/components/icons/IconFire.vue";
import { useEventStore } from "@/stores/events";

const store = useEventStore();
store.fetchEvents();

</script>

<template>
  <main class="customBaseWrapper">
    <HeadingTitle size="big">bem-vindo ao eventify!</HeadingTitle>
    <HeadingTitle>seu app para encontrar e compartilhar eventos</HeadingTitle>

    <hr />

    <div class="content-wrapper">
      <HeadingTitle size="medium">
        os principais atualmente
        <IconFire />
      </HeadingTitle>
      <div class="card-wrapper">
        <EventCard
          v-for="event in store.events"
          :key="event._id"
          :event="event"
        />
      </div>
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
</style>