<script setup lang="ts">
import {PhGoogleLogo, PhLock} from "@phosphor-icons/vue";
import GoogleButton from "@/components/GoogleButton.vue";
</script>

<template>
  <main class="customBaseWrapper main-wrapper">
    <h1>escolha uma opção:</h1>

    <hr />

    <GoogleButton />

  </main>
</template>

<style scoped>

.main-wrapper {
  display: flex;
  justify-content: flex-start;
  text-align: center;
  min-height: 50vh;
}

</style>