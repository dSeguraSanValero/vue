import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAllCompanies = defineStore('AllCompanies', {
  state: () => ({
    allCompanies: [] as any[],
  }),
  actions: {
    setAllCompanies(companies: any[]) {
      this.allCompanies = companies;
    },
  },
});