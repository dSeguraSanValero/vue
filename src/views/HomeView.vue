<template>
    <div>
      <v-text-field v-model="email" label="Introduce tu email" variant="solo-filled"></v-text-field>
      <v-text-field v-model="password" label="Introduce tu contraseña" type="password" variant="solo-filled"></v-text-field>
      <v-btn variant="tonal" @click="submitCredentials">Iniciar sesión como fisioterapeuta</v-btn>
      <div v-if="logError">¡Error la cuenta no existe!</div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/UserStore';

export default defineComponent({
    name: 'UsuarioComponent',
    setup() {
    const router = useRouter();
    const userStore = useUserStore(); 
    const email = ref<string>('');
    const password = ref<string>('');
    const isLoggedIn = ref(false);
    const logError = ref(false);

    const submitCredentials = async () => {
        try {
        const response = await fetch(`http://localhost/Users/${email.value}`);
        
        if (!response.ok) {
            logError.value = true;
        }
        const responseData = await response.json();
        userStore.setUserData(responseData);

        if (responseData && responseData.password === password.value) {
            isLoggedIn.value = true;
            router.push('/private');
        } else {
            isLoggedIn.value = false;
            logError.value = true;
        }
        } catch (error) {
        console.error(error);
        isLoggedIn.value = false;
        logError.value = true;
        }
    };

    return {
        email,
        password,
        isLoggedIn,
        submitCredentials,
        logError,
    };
    },
});
</script>
