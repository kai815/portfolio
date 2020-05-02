<template>
  <div class="contents">
    <Header />
    <section class="sec-title title-slide-in-top title-under-line">
      <h1 class="title">
        <span v-for="(t, index) in title" :key="t" :style="{animationDelay: index*150+'ms'}" class="title-text text-left-in" v-text="t" />
      </h1>
      <h2 class="subtitle">
        <span v-for="(st, subindex) in subtitle" :key="subindex" :style="{animationDelay: subindex*50+'ms'}" class="subtitle-text text-left-in" v-text="st" />
      </h2>
    </section>
    <section v-if="work" class="sec-contents">
      <h2 class="contents-title slide-in-left">
        {{ work.title }}
      </h2>
      <div class="works-contents slide-in-to-top">
        <img :src="work.imageUrl">
        <p>{{ work.discription }}</p>
        <a target="_blank" class="link-site-button" :href="work.linkUrl">See The Site</a>
        <nuxt-link to="/works" class="link-site-button">
          Back Works
        </nuxt-link>
      </div>
    </section>
  </div>
</template>
<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

@keyframes text-in {
  0% {
    transform: translate(-150px, 0px);
    opacity: 0;
  }
}

@keyframes slide-in-to-top {
  0% {
    transform: translate(0px, -50px);
    opacity: 0;
  }
}

@keyframes slide-in-to-left {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;/* 不透明 */
    transform: translateX(0);
  }
}
.contents {
  margin: 0 auto;
  min-height: 100vh;
  display: block;
  justify-content: center;
  text-align: center;
}
.title {
  display: block;
  width: 100%;
}

.title-text {
  font-weight: 500;
  font-size: 12.5vh;
  color: #000000;
  letter-spacing: 1px;
}
/* タブレット or 狭目のブラウザ*/
@media (max-width: 1030px) and (min-width: 768px) {
  .title-text{font-size: 10vh}
}
/* スマホ時 */
@media (max-width: 767px) {
  .title-text{font-size: 8vh}
}

.subtitle {
  display: block;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
}

.subtitle-text {
  font-weight: 400;
  font-size: 4vh;
  color: #000000;
}
/* タブレット or 狭目のブラウザ*/
@media (max-width: 1030px) and (min-width: 768px) {
  .subtitle-text{font-size: 3.5vh}
}
/* スマホ時 */
@media (max-width: 767px) {
  .subtitle-text{font-size: 2.2vh}
}

.sec-title {
  padding: 100px 30px;
  width: 100%;
}
.sec-contents {
  width: 100%;
}
.contents-title {
  text-align: left;
  padding: 10px 50px 5px 50px;
  font-size: 6vh;
}

/* タブレット or 狭目のブラウザ*/
@media (max-width: 1030px) and (min-width: 768px) {
  .contents-title{font-size: 5vh}
}
/* スマホ時 */
@media (max-width: 767px) {
  .contents-title{font-size: 3.5vh}
}
.text-shadow {
  text-shadow: 5px 5px 1px #999999, -5px -5px 1px #999999;
}

.text-left-in {
  display: inline-block;
  min-width: 0.3em;
  animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}

.title-slide-in-top {
  animation: slide-in-to-top 0.8s ease 0s backwards;
}

.slide-in-left {
  animation: slide-in-to-left 1s ease 1s backwards;
}

.slide-in-left-after {
  animation: slide-in-to-left 1s ease 2s backwards;
}

.slide-in-to-top {
  animation: slide-in-to-top 3s ease 1s backwards;
}

.title-under-line {
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 1px 0 rgba(255,255,255,1);
}

.works-contents {
  width: 100%;
  padding: 5px 50px;
  margin-bottom: 20px;
  text-align: left;
}
.works-contents > img{
  width: 100%;
  max-width: 100%;
  height: auto;
  border: 1px solid rgba(0,0,0,0.1);
}
.works-contents > p{
  width: 100%;
  margin: 20px 0px;
}
.link-site-button {
  display: inline-block;
  border: #000000 solid 2px;
  text-align: left;
  height: 100%;
  width: 50%;
  margin-top: 10px;
  padding: 10px;
  font-weight: 600;
}
.link-site-button:hover {
  background-color: #000000;
  color:#FFFFFF;
}
</style>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      title: 'Work',
      subtitle: 'My private work detail'
    }
  },
  created() {
    this.$store.dispatch('works/serchWorkNumber', this.$route.params.number)
  },
  computed: {
    work() {
      /* eslint-disable no-console */
      // console.log('work')
      // console.log(this.orderdWorks)
      return this.orderdWorks.find(w => w.number === this.$route.params.number)
    },
    ...mapGetters('works', ['orderdWorks'])
  }
}
</script>
