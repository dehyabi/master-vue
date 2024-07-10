<template>
  <div id="container">
    <nav>
      <RouterLink :to="{name: 'Home'}">Home</RouterLink> |
      <RouterLink :to="{name: 'About'}">About</RouterLink> |
      <RouterLink to="/user/Dehya Qalbi/role/Admin">User</RouterLink>
    </nav>

    <RouterView></RouterView>
  </div>

</template>

<script>

export default {
  name: 'App',
  props: ["ActiveClass"]
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  color: red
}
</style>
