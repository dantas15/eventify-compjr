<script setup lang="ts">
type Props = {
  size: "big" | "regular";
};

// this is exported by default
withDefaults(defineProps<Props>(), {
  size: "regular",
});
</script>

<template>
  <div class="headings">
    <h1 v-if="size === 'big'" class="primary"><slot></slot></h1>
    <h3 v-else-if="size === 'regular'" ><slot></slot></h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.headings h1,
.headings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .headings h1,
  .headings h3 {
    text-align: left;
  }
}
</style>
