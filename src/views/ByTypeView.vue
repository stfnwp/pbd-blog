<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'
import { entries, allBeerTypes } from '../store/blog-entries'
import BlogCard from '../components/BlogCard.vue'
import { ref, watchEffect } from 'vue'

const route = useRoute()
const entriesRef = ref(entries)

watchEffect(() => {
  const type = route.params.type
  entriesRef.value = entries.filter((e) => e.type.toLowerCase() === type)
})
</script>

<template>
  <main>
    <nav class="flex flex-row font-[bebas] text-2xl justify-evenly mb-4">
      <div v-for="beerType in allBeerTypes" :key="beerType">
        <RouterLink
          active-class="underline underline-offset-2"
          :to="{ name: 'types', params: { type: beerType.toLowerCase() } }"
          >{{ beerType }}</RouterLink
        >
      </div>
    </nav>
    <div class="flex flex-wrap">
      <template v-for="entry in entriesRef" :key="entry.id">
        <BlogCard class="w-[36rem] shrink-0 mb-16 ml-16" :entry="entry" />
      </template>
    </div>
  </main>
</template>
