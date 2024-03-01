<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/hello">Hello</RouterLink>
          <RouterLink to="/prop">Prop</RouterLink>
          <RouterLink to="/method">Method</RouterLink>
          <RouterLink to="/life-cycle">Life Cycle</RouterLink>
          <RouterLink to="/todov1">Todo V1</RouterLink>
          <RouterLink to="/pinia">Pinia</RouterLink>
        </nav>
      </div>
    </header>

    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
}
nav {
  width: 100%;
  font-size: 12px;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: block;
  margin: 1 1rem;
  font-style: 18px;
}

nav a:first-of-type {
  border: 0;
}

.wrapper {
  border-right: 1px solid #ccc;
  padding: 0 10px;
  width: 100px;
}

.content {
  margin: 30px;
}
</style>
