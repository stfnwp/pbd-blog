<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { BlogEntry } from '../store/blog-entries'

export interface Props {
  entry: BlogEntry
}
defineProps<Props>()
</script>

<template>
  <div class="flex flex-col bg-white w-full md:w-[36rem] shrink-0 mb-16 md:ml-16">
    <RouterLink :to="{ name: 'details', params: { id: entry.id } }">
      <img :src="`/images/${entry.image}`" />
      <div class="p-4">
        <div class="flex flex-row mt-4 justify-between text-center text-2xl font-[bebas]">
          <span class="bg-orange-400 w-24">{{ entry.type }}</span>
          <span>{{ entry.date }}</span>
        </div>
        <div class="font-[bebas] mt-4 text-5xl md:text-6xl">{{ entry.title }}</div>
        <div class="font-[roboto] mt-2 text-lg">{{ entry.description }}</div>
      </div>
    </RouterLink>
  </div>
</template>
