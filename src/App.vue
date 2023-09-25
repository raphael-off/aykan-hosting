<template>
  <img src="./components/asstes/logo.png" />
  <Header />
  <Ajax />
  <Index />
</template>

<script>
import Main from './components/HelloWorld.vue';
import Header from './components/js/finisher-header.es5.min.js';
import Index from './components/js/index.js';
import Ajax from 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js';
export default {
  name: 'App',
  components: {
    Main,
    Header,
    Ajax,
    Index,
  },
};
</script>

<style></style>
