<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <RouterLink to="/">home</RouterLink>
  <RouterLink to="/public">público</RouterLink>
  <RouterLink to="/private">private</RouterLink>


  <RouterView />
</template>

