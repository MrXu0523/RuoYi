<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="xuSir"></div>
  <!-- <router-view /> -->
  <router-view v-slot="{ Component }">
    <keep-alive :include="['keep-alive']">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<style lang="scss"></style>