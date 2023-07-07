<script setup lang="ts">
import { entries } from '../store/blog-entries'
import BlogCard from '../components/BlogCard.vue'
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'

const route = useRoute()

const beerEntries = ref(entries)

watchEffect(() => {
  beerEntries.value = route.meta.scope === 'all' ? entries : entries.slice(0, 3)
})
</script>

<template>
  <main>
    <div class="flex flex-wrap">
      <template v-for="entry in beerEntries" :key="entry.id">
        <BlogCard class="" :entry="entry" />
      </template>
    </div>
  </main>
</template>
