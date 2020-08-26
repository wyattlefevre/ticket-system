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
      <v-row>
        <v-col>
          <v-card>
            <v-toolbar flat dark color="secondary">
              <v-toolbar-title>
                <span class="text-h5">My Tickets</span>
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn color="accent" @click="setCreating"><v-icon color="black">mdi-plus-thick</v-icon></v-btn>
            </v-toolbar>
            <v-form v-if="creating" @submit.prevent="addTicket">
              <v-container>
                <v-row>
                  <v-col>
                    <h1 class="text-h6">Describe your problem</h1>
                    <v-textarea auto-grow outlined rows="2" v-model="problem"></v-textarea>
                    <v-btn class="mr-2" color="primary" type="submit">Submit</v-btn>
                    <v-btn @click="cancelCreating">Cancel</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
            <v-row class="ml-4 mr-4" v-for="ticket in tickets" v-bind:key="ticket.id">
              <v-col>
                <v-card outlined>
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
                      No response yet.
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import moment from 'moment';
import axios from 'axios';
export default {
  name: 'MyTickets',
  data() {
    return {
      creating: false,
      problem: '',
      tickets: [],
    };
  },
  created() {
    this.getTickets();
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  methods: {
    time(d) {
      return moment(d).format('D MMMM YYYY, h:mm:ss a');
    },
    setCreating() {
      this.creating = true;
    },
    cancelCreating() {
      this.creating = false;
    },
    async addTicket() {
      try {
        await axios.post('/api/tickets', {
          problem: this.problem,
        });
        this.problem = '';
        this.creating = false;
        this.getTickets();
        return true;
      } catch (error) {
      }
    },
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
      }
    },
  },
};
</script>
<style scoped>
/* textarea {
  width: 100%;
  max-width: 500px;
}

h3 {
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

.ticket {
} */
</style>
