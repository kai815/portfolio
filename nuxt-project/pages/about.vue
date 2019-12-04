<template>
  <div class="contents">
    <section class="sec-title">
      <h1>
        <span v-for="(t, index) in title" :key="t" :style="{animationDelay: index*150+'ms'}" class="title text-left-in text-shadow" v-text="t" />
      </h1>
      <h2>
        <span v-for="(st, subindex) in subtitle" :key="subindex" :style="{animationDelay: subindex*50+'ms'}" class="subtitle text-left-in" v-text="st" />
      </h2>
    </section>
    <section class="sec-contents">
      <h2 class="contents-title">
        Skills
      </h2>
      <span is="AboutSkills" v-for="skill in skills" :key="skill.id" :skill="skill" />
      <h2 class="contents-title">
        Personality
      </h2>
    </section>
  </div>
</template>
<style scoped>
.contents {
  margin: 0 auto;
  min-height: 100vh;
  display: block;
  justify-content: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #000000;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 60;
  color: #000000;
  word-spacing: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.sec-title {
  background-color:#D3D3D3;
  padding: 50px;
  width: 100%;
}
.sec-contents {
  background-color:white;
  width: 100%;
}
.contents-title {
  text-align: left;
  padding: 10px 0px 10px 50px;
  font-family: 'Rubik Mono One', sans-serif;
}
.text-shadow {
  text-shadow: 5px 5px 1px #999999, -5px -5px 1px #999999;
}

@keyframes text-in {
  0% {
    transform: translate(-150px, 0px);
    opacity: 0;
  }
}

.text-left-in {
  display: inline-block;
  min-width: 0.3em;
  animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}

</style>
<script>
import AboutSkills from '~/components/AboutSkills.vue'
export default {
  components: {
    AboutSkills
  },
  data() {
    return {
      title: 'About',
      subtitle: 'My skills and personality'
    }
  },
  computed: {
    skills() {
      return this.$store.getters['skills/orderdSkills']
    }
  }
}
</script>
