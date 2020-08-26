<template>
  <div class="ticket">
    <v-card>
      <v-toolbar height="35px" flat color="accent">
        <v-toolbar-title>
          <span class="font-weight-bold">{{ ticket.status }}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title>
          <span>Problem reported: {{ time(ticket.created) }}</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-row class="ml-4 mr-4">
        <v-col>
          {{ ticket.problem }}
        </v-col>
      </v-row>
      <v-row v-if="ticket.response" class="ml-4 mr-4 font-italic">
        <v-col>
          {{ ticket.response }}
        </v-col>
      </v-row>
      <v-row v-else class="ml-4 mr-4 font-italic">
        <v-col>
          <v-textarea auto-grow outlined rows="2" v-model="response"></v-textarea>
          <v-btn @click="respond" color="primary">Close Ticket</v-btn>
        </v-col>
      </v-row>
      <v-alert class="ml-4 mr-4" dark color="error" v-if="error">{{error}}</v-alert>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
export default {
  name: 'Ticket',
  props: {
    ticket: Object,
  },
  data() {
    return {
      response: '',
      error: '',
    };
  },
  methods: {
    time(d) {
      return moment(d).format('D MMMM YYYY, h:mm:ss a');
    },
    async respond() {
      try {
        let response = await axios.put('/api/tickets/' + this.ticket._id, {
          status: 'closed',
          response: this.response,
        });
        this.ticket = response.data.ticket;
      } catch (error) {
        this.error = error.response.message;
      }
    },
  },
};
</script>

<style scoped>
/* h3 {
  font-size: 12px;
  font-weight: normal;
  background-color: #ccc;
  padding: 10px 20px;
}

label {
  background-color: #000;
  color: white;
  padding: 5px;
  border-radius: 30px;
  font-size: 12px;
  margin-right: 10px;
}

input {
  margin-right: 10px;
} */
</style>
