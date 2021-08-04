<template>
  <div v-if="!loading" class="home">
    <div v-if="authorized">
      <p>Angemeldet als: {{ email }}</p>
      <a href="http://localhost:8080/logout">Logout</a>
    </div>
    <div v-else>
      <a href="http://localhost:8080/login">
        <img
          border="0"
          alt="Login with Amazon"
          src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_drkgry_312x64.png"
          width="312"
          height="64"
        />
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      loading: false,
      email: null,
      authorized: false,
    };
  },
  methods: {},
  mounted() {
    this.loading = true;

    axios
      .get("http://localhost:8080/user", { withCredentials: true })
      .then((res) => {
        console.log(res);
        this.email = res.data.profile.email;
        this.loading = false;
        this.authorized = true;
      })
      .catch(() => {
        this.authorized = false;
        this.loading = false;
      });
  },
};
</script>
