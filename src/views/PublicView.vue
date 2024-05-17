<template>
    <v-row>
      <v-col v-for="company in companies" :key="company.companyId" cols="12" md="4">
        <v-card>
          <v-card-item>
            <v-card-title>{{ company.name }}</v-card-title>
            <v-card-subtitle>Número de colegiado: {{ company.foundationDate }}</v-card-subtitle>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useAllCompanies } from '@/stores/AllCompanies'

export default defineComponent({
  name: 'PublicView',
  setup() {
    const allCompaniesStored = useAllCompanies();
    const companies = ref([] as any[]);

    onMounted(() => {
      fetch('http://localhost/Companies')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          companies.value = data;
          allCompaniesStored.setAllCompanies(data);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    });

    return {
      companies,
    };
  },
});
</script>