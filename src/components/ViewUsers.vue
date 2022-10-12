<template>
  <div>
    <ul v-for="user in users" :key="user.id">
      <li>{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
};
</script>
