<template>

    <h1><span class="mdi mdi-airplane"></span> Welcome to Flying Free <span class="mdi mdi-airplane"></span></h1>
    <p class="sign-in">Sign In</p>
    <div>
      <v-text-field v-model="email" label="Submit your email" variant="solo-filled"></v-text-field>
      <v-text-field v-model="password" label="Submit your password" type="password" variant="solo-filled"></v-text-field>
      <v-btn variant="tonal" @click="submitCredentials">Sign In</v-btn>
      <div v-if="logError">Error! The account does not exist!</div>
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

<style lang="scss">
    @import '../assets/main.scss'
</style>
