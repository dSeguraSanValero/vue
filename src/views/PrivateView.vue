<template>


  <v-table theme="dark">
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Email
        </th>
        <th class="text-left">
          Phone
        </th>
        <th class="text-left">
          Identity number
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-if="userData">
        <td>{{ userData.name }}</td>
        <td>{{ userData.email }}</td>
        <td>{{ userData.phone }}</td>
        <td>{{ userData.dni }}</td>
      </tr>
    </tbody>
  </v-table>

   
    <div class="signInbtn">
        <v-btn variant="outlined" @click="verReservas()">My Bookings</v-btn>
    </div>

    <v-row>
        <v-col cols="12" md="6" v-for="booking in bookings" :key="booking.bookingId">
            <v-card>
            <v-card-text>
                <p>Origen: {{ booking.origin }}</p>
                <p>Destino: {{ booking.destination }}</p>
            </v-card-text>
            </v-card>
        </v-col>
    </v-row>

</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import { useUserStore } from '@/stores/UserStore';
    import { useRouter } from 'vue-router';

    export default defineComponent({
        name: 'ZonaPrivadaUser',
        setup() {
            const userStore = useUserStore();
            const bookings = ref([] as any[]);
            const router = useRouter();

            return {
                userData: userStore.userData,
                router,
                origin: "",
                destination: "",
                bookings
            };
        },

        methods: {
            verReservas() {
                const userStore = useUserStore();
                const userId = userStore.userData?.id;

                fetch(`http://localhost/Users/MyBookings?UserId=${userId}`)
                .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
                })
                .then(data => {
                this.bookings = data;
                })
                .catch(error => {
                console.error('Hubo un problema con la operación de fetch:', error);
                });
            }
        }
    });
</script>