<script setup lang="ts">
import { useRoute } from 'vue-router'
import { entries } from '../store/blog-entries'

const route = useRoute()
const id = route.params.id

const entry = entries.find((e) => e.id === id)
</script>

<template>
  <div class="flex flex-row justify-center">
    <div class="flex flex-col bg-white w-3/4">
      <img :src="`/images/${entry.image}`" />
      <div class="p-4">
        <div class="flex flex-row mt-4 justify-between text-center text-2xl font-[bebas]">
          <span class="bg-orange-400 w-24">{{ entry.type }}</span>
          <span>{{ entry.date }}</span>
        </div>
        <div class="font-[bebas] mt-4 text-6xl">{{ entry.title }}</div>
        <div class="font-[roboto] mt-2 text-lg">{{ entry.description }}</div>
        <div class="font-[roboto] mt-2 text-lg">{{ entry.content }}</div>
      </div>
    </div>
  </div>
</template>
