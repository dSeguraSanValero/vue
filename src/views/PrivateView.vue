<template>
  <p v-if="userData">¡Bienvenido {{ userData.name }}!</p>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import { useUserStore } from '@/stores/UserStore';
    import { useRouter } from 'vue-router';

    export default defineComponent({
        name: 'ZonaPrivadaUser',
        setup() {
            const userStore = useUserStore();
            const router = useRouter();

            return {
                userData: userStore.userData
            };
        }
    });
</script>