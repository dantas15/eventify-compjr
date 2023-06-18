<script setup lang="ts">
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { PhCalendarPlus } from '@phosphor-icons/vue'
import { CreatedEvent } from '@eventify/schemas';
import ButtonLink from "@/components/ButtonLink.vue";

type Props = {
  event: Pick<CreatedEvent, "_id" | "title" | "description" | "date" | "location" | "image" | "userId">;
}
defineProps<Props>()

</script>

<template>
  <article class="card">
    <img v-if="event.image" :src="event.image" :alt="`Evento: ${event.title}`" class="card-image"/>
    <div class="card-content" :class="{ 'center-card-if-not-image': !event.image }">
      <h2 class="card-title">
        {{ event.title }}
      </h2>
      <p class="card-description">{{ event.description }}</p>
      <div class="card-description-date">
        <p>
          <PhCalendarPlus :size="24" :weight="'fill'" />
          {{ formatDistanceToNow(new Date(event.date), { addSuffix: true, locale: ptBR }) }}
        </p>
      </div>
    </div>
    <div class="card-footer">
      <p class="card-footer-user">
        criado por:
        <span class="card-footer-username">{{ event.userId }}</span>
      </p>
      <ButtonLink href="#">quero participar!</ButtonLink>
    </div>
  </article>
</template>

<style scoped>
.card {
  width: 400px;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.card:hover {
  border: 1px solid var(--color-border-hover);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 12px 20px;
  user-select: none;
}

.card-title {
  color: var(--color-text-inverted)
}

.card-description {
  color: var(--color-text);
}

.card-description-date {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}
.card-description-date p {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: var(--border-radius);
  background: var(--color-border-hover);
}

.card-footer {
  background: var(--color-border);
  padding: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-footer-user {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 50%;
}
.card-footer-username {
  font-weight: 600;
}

.center-card-if-not-image {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

</style>