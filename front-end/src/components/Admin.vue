<template>
  <div class="main">
    <v-container>
      <v-row justify="end">
        <v-col class="text-end">
          <div class="text-h6 mb-1">
            Logged in as: <strong>{{ user.firstName }} {{ user.lastName }}</strong>
          </div>
          <v-icon>md-home</v-icon>
          <v-btn @click="logout" color="secondary" dark dense>Logout</v-btn>
        </v-col>
      </v-row>
      <h1 class="text-h4">Administration</h1>
      <div v-for="ticket in tickets" v-bind:key="ticket.id">
        <Ticket class="mb-4" :ticket="ticket" />
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import Ticket from '@/components/Ticket.vue';
export default {
  name: 'Admin',
  components: {
    Ticket,
  },
  data() {
    return {
      tickets: [],
    };
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  created() {
    this.getTickets();
  },
  methods: {
    async logout() {
      try {
        await axios.delete('/api/users');
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
    async getTickets() {
      try {
        let response = await axios.get('/api/tickets');
        this.tickets = response.data.tickets;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
