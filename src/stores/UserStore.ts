import { ref } from 'vue';
import { defineStore } from 'pinia';

interface UserData {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  DNI: string;
  MyBookings: any[];
}

export const useUserStore = defineStore('user', () => {
  const userData = ref<UserData | null>(null);

  function setUserData(data: UserData) {
    userData.value = data;
  }

  return { userData, setUserData };
});
