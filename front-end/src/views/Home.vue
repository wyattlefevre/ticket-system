<template>
  <div>
    <Admin v-if="user && user.role === 'admin'" />
    <MyTickets v-else-if="user" />
    <Login class="mt-8" v-else />
  </div>
</template>

<script>
import axios from "axios";
import Admin from '@/components/Admin.vue';
import Login from '@/components/Login.vue';
import MyTickets from "@/components/MyTickets.vue";
export default {
  name: "home",
  components: {
    MyTickets,
    Admin,
    Login
  },
  async created() {
    try {
      let response = await axios.get("/api/users");
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
};
</script>
