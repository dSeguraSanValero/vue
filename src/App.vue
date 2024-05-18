<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink to="/" class="nav__link">
        Home <span class="mdi mdi-home"></span>
      </RouterLink>
      <RouterLink to="/public" class="nav__link">
        View all our Companies
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>


