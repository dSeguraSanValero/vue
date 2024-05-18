<template>
<HomeTitle></HomeTitle>
<signInTable></signInTable>
    
    
</template>
  
<script lang="ts">

import HomeTitle from '@/components/HomeTitle.vue'; 
import signInTable from '@/components/signInTable.vue';
export default {
  name: 'HomeView',
  components: {
    signInTable,
    HomeTitle
  }
};

</script>

<style lang="scss">
    @import '../assets/main.scss'
</style>
