<template>
  <html lang="fr">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" type="image/png" href="./components/assets/logo.png" />

      <title>Aikyan Hosting</title>
    </head>
    <Main />
    <Header />
    <Ajax />
    <Index />
  </html>
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
