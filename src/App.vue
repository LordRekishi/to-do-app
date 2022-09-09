<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Options API</RouterLink>
      <RouterLink to="/composition">Composition API</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  text-align: center;
  gap: 10px;
  padding: 10px;
}
</style>
