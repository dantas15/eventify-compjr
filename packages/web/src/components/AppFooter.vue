<script setup lang="ts">
import AppNav from "@/components/AppNav.vue";
import { PhGithubLogo, PhLinkedinLogo } from "@phosphor-icons/vue";
import { ref } from "vue";

type WeightTypes = "bold" | "fill" | "thin" | "light" | "regular" | "duotone";

const ghLogoWeight = ref<WeightTypes>("fill");
const linkedinWeight = ref<WeightTypes>("fill");
</script>

<template>
  <footer class="footer-wrapper">
    <img alt="Eventify logo" class="logo" src="@/assets/logo.svg" width="32" height="32" />
    <div class="footer-nav">
      <AppNav colors="dim" />
    </div>
    <div class="credits">
      desenvolvido com 💜 e ☕
      <div class="socials">
        <a
          href="https://github.com/satnadg/eventify-compjr"
          target="_blank"
          @mouseover="ghLogoWeight = 'duotone'"
          @mouseleave="ghLogoWeight = 'fill'"
        >
          <PhGithubLogo
            :weight="ghLogoWeight"
            :size="24"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/gustavo-dantas-galote-3394661b7/"
          target="_blank"
          @mouseover="linkedinWeight = 'duotone'"
          @mouseleave="linkedinWeight = 'fill'"
        >
          <PhLinkedinLogo
            :weight="linkedinWeight"
            :size="24"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>

.footer-wrapper {
  height: fit-content;
  padding-top: 32px;
  background: var(--color-background-mute);
  display: flex;
  flex-direction: column;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.footer-nav {
  /* top and bottom | left and right*/
  padding: 0 24px;
}

.credits {
  width: 100%;
  margin-top: 32px;
  /* top and bottom | left and right */
  padding: 16px 0;
  text-align: center;
  color: var(--color-text-dim);
  background: var(--color-background-soft);
  display: flex;
  gap: 16px;
  flex-direction: column;
}

.socials svg {
  opacity: .6;
}
</style>