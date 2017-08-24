<template>
  <div class="login-page">
    <input type="text" name="" placeholder="Bruger:" id="user">
    <input type="text" name="" placeholder="Nøgle:" id="key">
    <input type="button" value="" @click="login">
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({ path: "home" });
    }
  }
}
</script>

<style>

</style>
