<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1 id="nav-title">
      <RouterLink to="/">Pet Limitless</RouterLink>
    </h1>
    <nav>
      <ul>
        <li><RouterLink to="/houses">租屋</RouterLink></li>
        <li><RouterLink to="/tenants">找房客</RouterLink></li>
        <li><RouterLink to="/partners">找室友</RouterLink></li>
        <li><RouterLink to="/posting">我要刊登</RouterLink></li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li><RouterLink to="/login">登入</RouterLink></li>
        <li><RouterLink to="/registration">註冊</RouterLink></li>
      </ul>
    </nav>
  </header>

  <RouterView></RouterView>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.5rem;
  box-shadow: 0 1px 8px #ddd;
  background-color: #ffffff;
}

header li {
  list-style: none;
  display: inline-block;
  padding: 0;
  margin: 0;
  /* margin: 10px; */
  /* padding: 0 20px; */
}

header ul {
  padding: 0;
  margin: 0;
}

header li {
  list-style: none;
  display: flex;
  display: inline-block;
  /* padding: 0; */
  /* margin: 0; */
  padding: 0 20px;
}

header a {
  text-decoration: none;
  color: #555;
  /* color: white; */
  transition: all 0.3s ease 0s;
}

header a:hover {
  color: #b2dfdb;
}

#nav-title {
  display: flex;
  padding: 0;
  margin: 0;
}

#nav-title a {
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
}

@media (min-width: 1024px) {
  nav {
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }
}
</style>
