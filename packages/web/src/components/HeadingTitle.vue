<script setup lang="ts">
type Props = {
  size?: "big" | "regular" | "medium";
};

// this is exported by default
withDefaults(defineProps<Props>(), {
  size: "regular",
});
</script>

<template>
  <div class="headings">
    <h1 v-if="size === 'big'" class="primary"><slot></slot></h1>
    <h2 v-else-if="size === 'medium'"><slot></slot></h2>
    <h3 v-else><slot></slot></h3>
  </div>
</template>

<style scoped>

.centralize h1 {
  width: 100%;
  text-align: center;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h2 {
  //text-decoration: underline;
  border-bottom: 2px solid var(--color-background-mute);
}

h3 {
  font-size: 1.2rem;
}

.headings h1,
.headings h2,
.headings h3 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

/*@media (min-width: 1024px) {
  .headings h1,
  .headings h2,
  .headings h3 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
  }
}*/
</style>
