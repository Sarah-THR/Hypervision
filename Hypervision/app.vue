<script setup lang="ts">
const layout = "default";
useHead({
  title: 'Hypervision',
})
</script>

<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.slide-top-enter-active,
.slide-top-leave-active,
.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: all 0.2s;
}
.slide-top-enter-from {
  opacity: 0;
  transform: translateY(100px, 0);
}
.slide-top-leave-to {
  opacity: 0;
  transform: translateY(-100px, 0);
}
.slide-bottom-enter-from {
  opacity: 0;
  transform: translateY(-100px, 0);
}
.slide-bottom-leave-to {
  opacity: 0;
  transform: translateY(100px, 0);
}
</style>