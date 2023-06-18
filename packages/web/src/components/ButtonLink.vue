<script setup lang="ts">
type Props = {
  href: string;
  color: "primary" | "regular"
}
withDefaults(defineProps<Props>(), {
  color: "regular"
});
</script>

<template>
 <a
   class="button"
   :class="{'regular-button': (color === 'regular'), 'primary-button': color === 'primary'}"
 >
  <slot></slot>
 </a>
</template>

<style scoped>
.button {
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: var(--border-radius-small);
  user-select: none;
  cursor:pointer;

  color: var(--color-text);
}

.button:hover {
  background: var(--vt-c-primary-hover);
}

.primary-button {
  background: var(--vt-c-primary);
}

.regular-button {
  background-color: var(--color-background);
}
</style>