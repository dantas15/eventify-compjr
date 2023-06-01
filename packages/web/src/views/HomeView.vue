<script setup lang="ts">
import HeadingTitle from "@/components/HeadingTitle.vue";
const cards = []
</script>

<template>
  <main>
    <HeadingTitle size="big">bem-vindo ao eventify!</HeadingTitle>
    <HeadingTitle>seu app para encontrar e compartilhar eventos</HeadingTitle>

    <hr />

    <div class="content-wrapper">
      <HeadingTitle size="medium">principais eventos</HeadingTitle>

    </div>

  </main>
</template>

<style scoped>

.content-wrapper {
  display: flex;
  justify-content: center;
}
</style>