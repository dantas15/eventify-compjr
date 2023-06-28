<script setup lang="ts">
import HeadingTitle from "@/components/HeadingTitle.vue";
import EventCard from "@/components/EventCard.vue";
import IconFire from "@/components/icons/IconFire.vue";
import { CreatedEvent } from "@eventify/schemas";

const events: CreatedEvent[] = [
  {
    _id: "1",
    title: "testando",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero elit, porta et malesuada at, eleifend sit amet enim. Vestibulum at quam neque. In hac habitasse platea dictumst. Donec sit amet placerat risus, quis aliquam libero. Cras egestas ligula quam, in vehicula dui convallis eu. Sed eget imperdiet est, non tincidunt eros. Suspendisse eleifend nisl id elementum pharetra. Praesent elementum diam sed sem imperdiet cursus ut et sapien. ",
    image: "https://images.unsplash.com/photo-1686574086026-9f02b82f4765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    userId: "usuario 1",
    date: "2023-07-01T12:30:00.000Z",
  },
  {
    _id: "2",
    title: "testando 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero elit, porta et malesuada at, eleifend sit amet enim. Vestibulum at quam neque. In hac habitasse platea dictumst. Donec sit amet placerat risus, quis aliquam libero. Cras egestas ligula quam, in vehicula dui convallis eu. Sed eget imperdiet est, non tincidunt eros. Suspendisse eleifend nisl id elementum pharetra. Praesent elementum diam sed sem imperdiet cursus ut et sapien",
    image: "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    userId: 'asdifasdlkfjasdfasdfasdfasdfsdfed',
    date: "2023-07-01T12:30:00.000Z",
  },
  {
    _id: "3",
    title: "testando 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero elit, porta et malesuada at, eleifend sit amet enim. Vestibulum at quam neque. In hac habitasse platea dictumst. Donec sit amet placerat risus, quis aliquam libero. Cras egestas ligula quam, in vehicula dui convallis eu. Sed eget imperdiet est, non tincidunt eros. Suspendisse eleifend nisl id elementum pharetra. Praesent elementum diam sed sem imperdiet cursus ut et sapien. ",
    image: "https://images.unsplash.com/photo-1686465034633-f8131cfc092b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=706&q=80",
    date: "2023-07-01T12:30:00.000Z",
  },
  {
    _id: "4",
    title: "testando 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero elit, porta et malesuada at, eleifend sit amet enim. Vestibulum at quam neque. In hac habitasse platea dictumst. Donec sit amet placerat risus, quis aliquam libero. Cras egestas ligula quam, in vehicula dui convallis eu. Sed eget imperdiet est, non tincidunt eros. Suspendisse eleifend nisl id elementum pharetra. Praesent elementum diam sed sem imperdiet cursus ut et sapien. ",
    userId: '1231232',
    date: "2023-07-01T12:30:00.000Z",
  }
];

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
          v-for="event in events"
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
  justify-content: flex-start;
  margin-top: 24px;
  gap: 16px;
}
</style>