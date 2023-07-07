<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="font-[bebas] flex flex-row justify-evenly my-8 text-4xl mx-16">
      <RouterLink active-class="underline underline-offset-4 decoration-4" to="/"
        >Neueste</RouterLink
      >
      <RouterLink
        :class="[{ 'underline underline-offset-4 decoration-4': $route.name === 'types' }]"
        to="/types/lager"
        >Nach Typ</RouterLink
      >
      <RouterLink active-class="underline underline-offset-4 decoration-4" to="/about"
        >Alle Biere</RouterLink
      >
      <RouterLink active-class="underline underline-offset-4 decoration-4" to="/about"
        >Über mich</RouterLink
      >
    </nav>
  </header>

  <RouterView />
</template>
