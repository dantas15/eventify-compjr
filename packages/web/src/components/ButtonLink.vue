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

.primary-button {
  background: var(--vt-c-primary);
}
.primary-button:hover {
  background: var(--vt-c-primary-hover);
}

.regular-button {
  background-color: var(--color-background);
}
.regular-button:hover {
  background: var(--color-background-mute)
}
</style>