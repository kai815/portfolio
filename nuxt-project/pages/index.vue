<template>
  <div class="container">
    <div id="p5Canvas">
      <HomeCanvas />
      <h1 class="title home-fadein">
        Hideo Kaizuka
      </h1>
      <h2 class="subtitle home-fadein">
        I'm a developer
      </h2>
    </div>
  </div>
</template>

<script>
import HomeCanvas from '~/components/HomeCanvas.vue'

export default {
  components: {
    HomeCanvas
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 350;
  font-size: 12vh;
  color: #000000;
  letter-spacing: 0.5px;
}

/* タブレット or 狭目のブラウザ*/
@media (max-width: 1030px) and (min-width: 768px) {
  .title{font-size: 9vh}
}
/* スマホ時 */
@media (max-width: 767px) {
  .title{font-size: 5vh}
}
.subtitle {
  font-weight: 300;
  font-size: 6vh;
  color: #000000;
  word-spacing: 5px;
  padding-top: 8px;
  padding-bottom: 70px;
}

/* タブレット or 狭目のブラウザorスマホ*/
@media (max-width: 1030px) {
  .subtitle{font-size: 4vh}
}


.links {
  padding-top: 15px;
}

.nav-menu {
  font-size: 25px;
}

@keyframes fadeIn {
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
}

.home-fadein {
  animation-name: fadeIn;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
}
</style>
