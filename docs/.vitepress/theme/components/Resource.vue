<template>
  <li>
    <a :href="url">
      <article class="resource">
        <h1>{{ title }}</h1>
        <img :src="src" :alt="alt" />
      </article>
    </a>
  </li>
</template>

<script setup>
const props = defineProps({
  title: String,
  url: String,
  src: String,
  alt: String,
});
</script>

<style lang="stylus">
.resource
  h1
    font-size 1.4rem
  img
    min-width 100%
    max-height 30vh
    object-fit cover
</style>
