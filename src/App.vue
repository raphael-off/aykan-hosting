<template>
  <Header />
  <Main />
  <Font />

  <Ajax />
  <Index />
</template>

<script>
import Main from './components/HelloWorld.vue';
import Header from './components/js/finisher-header.es5.min.js';
import Index from './components/js/index.js';
import Ajax from 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js';
import Font from 'https://kit.fontawesome.com/684a7276bc.js';
export default {
  name: 'App',
  components: {
    Main,
    Header,
    Ajax,
    Index,
    Font,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
</style>
