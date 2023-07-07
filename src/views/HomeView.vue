<script setup lang="ts">
import { entries } from '../store/blog-entries'
import BlogCard from '../components/BlogCard.vue'
</script>

<template>
  <main>
    <div class="flex flex-wrap">
      <template v-for="entry in entries.slice(0, 3)" :key="entry.id">
        <BlogCard class="w-[36rem] shrink-0 mb-16 ml-16" :entry="entry" />
      </template>
    </div>
  </main>
</template>
