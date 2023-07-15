<script setup lang="ts"></script>
<template>
  <header>
    <ul class="navigation">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/register">Register</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link to="/user">User</router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 0;
  list-style: none;
  gap: 2em;
  font-size: 2em;
}
</style>
