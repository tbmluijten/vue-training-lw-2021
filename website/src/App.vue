<template>
  <div id="app">
    <Navigation />
    <div class="backdrop"></div>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue' 
export default {
  name: 'Default',
  components: {
      Navigation
  },
}
</script>

<style lang="scss">
@import '/assets/scss/reset.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

*{
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;    
  box-sizing: border-box;
}

body{
  font-family: 'Roboto', sans-serif;
  background-color: #e7e7e7;
 
}
.container{
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 0px 16px;
}

.backdrop{
  z-index: -1;
  background-image: url('/assets/images/geel.jpg');
  background-color: grey;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 240px;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
