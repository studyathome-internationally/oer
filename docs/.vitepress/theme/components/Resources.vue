<template>
  <ul class="resources">
    <slot></slot>
  </ul>
</template>

<style lang="stylus">
.resources
  padding-left 0 !important
  list-style none !important
  li:nth-child(2n) article h1
    text-align right
</style>
