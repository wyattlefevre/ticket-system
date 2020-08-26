<template>
  <div class="hero">
    <v-snackbar v-model="snackbar" color="error">
      {{ this.error || this.errorLogin }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-row justify="center">
      <v-col lg="6">
        <v-card color="white">
          <v-container>
            <v-form class="mt-5">
              <v-row justify="center">
                <v-col lg="8" class="text-center">
                  <span class="text-lg-h5">Register for an account</span>
                  <hr />
                </v-col>
              </v-row>
              <v-row dense justify="center">
                <v-col lg="4">
                  <v-text-field dense outlined label="first name" v-model="firstName"></v-text-field>
                </v-col>
                <v-col lg="4">
                  <v-text-field dense outlined label="last name" v-model="lastName"></v-text-field>
                </v-col>
              </v-row>
              <v-row dense justify="center">
                <v-col lg="4">
                  <v-text-field dense outlined label="username" v-model="username"></v-text-field>
                </v-col>
                <v-col lg="4">
                  <v-text-field dense outlined label="password" type="password" v-model="password"></v-text-field>
                </v-col>
              </v-row>
              <v-row dense justify="center">
                <v-btn dark color="primary" @click.prevent="register">Register</v-btn>
              </v-row>
            </v-form>
            <v-form class="mt-12 mb-5">
              <v-row justify="center">
                <v-col lg="8" class="text-center">
                  <span class="text-lg-h5">Login</span>
                  <hr />
                </v-col>
              </v-row>
              <v-row dense justify="center">
                <v-col lg="4">
                  <v-text-field dense outlined label="username" v-model="usernameLogin"></v-text-field>
                </v-col>
                <v-col lg="4">
                  <v-text-field dense outlined label="password" type="password" v-model="passwordLogin"></v-text-field>
                </v-col>
              </v-row>
              <v-row dense justify="center">
                <v-btn dark color="primary" @click.prevent="login">Login</v-btn>
              </v-row>
            </v-form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      usernameLogin: '',
      passwordLogin: '',
      error: '',
      errorLogin: '',
      snackbar: false,
    };
  },
  methods: {
    async register() {
      this.error = '';
      this.errorLogin = '';
      if (!this.firstName || !this.lastName || !this.username || !this.password) return;
      try {
        let response = await axios.post('/api/users', {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.error = error.response.data.message;
        this.$root.$data.user = null;
        this.snackbar = true;
      }
    },
    async login() {
      this.error = '';
      this.errorLogin = '';
      if (!this.usernameLogin || !this.passwordLogin) return;
      try {
        let response = await axios.post('/api/users/login', {
          username: this.usernameLogin,
          password: this.passwordLogin,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.errorLogin = 'Error: ' + error.response.data.message;
        this.$root.$data.user = null;
        this.snackbar = true;
      }
    },
  },
};
</script>

<style scoped></style>
