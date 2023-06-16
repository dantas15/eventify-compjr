<script setup lang="ts">
import { PhFire } from '@phosphor-icons/vue';
</script>

<template>
  <PhFire :style="{fill: 'url(#gradient)'}">
    <linearGradient id="gradient" gradientTransform="rotate(45)">
      <stop offset="0%" stop-color="rgba(161,1,0,1)"/>
      <stop offset="30%" stop-color="rgba(218,31,5,1)"/>
      <stop offset="47%" stop-color="rgba(243,60,4,1)"/>
      <stop offset="71%" stop-color="rgba(254,101,13,1)"/>
      <stop offset="92%" stop-color="rgba(255,193,31,1)"/>
      <stop offset="100%" stop-color="rgba(255,247,93,1)"/>
    </linearGradient>
  </PhFire>
</template>

<style scoped>

</style>