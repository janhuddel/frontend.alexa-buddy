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
export default {
  name: "home",
  data() {
    return {
      loading: false,
      email: null,
      authorized: false
    };
  },
  methods: {},
  mounted() {
    this.loading = true;
    fetch(`http://localhost:8080/user`, {
      credentials: "include" // fetch won't send cookies unless you set credentials
    })
      .then(response => response.json())
      .then(data => {
        if (data.authState === "Authorized") {
          this.authorized = true;
          this.email = data.profile.email;
        }
        this.loading = false;
      });
  }
};
</script>
