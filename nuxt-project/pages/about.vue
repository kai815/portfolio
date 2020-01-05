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
    <section class="sec-contents">
      <h2 class="contents-title slide-in-left">
        Personality
      </h2>
      <div class="personality-contents slide-in-to-top">
        <img src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-60bc9.appspot.com/o/about%2Fhideo.jpg?alt=media&token=a78d4f93-d9f8-4053-abce-08b0d852b2d4">
        <p>{{ personality }}</p>
      </div>
      <h2 class="contents-title slide-in-left">
        Skills
      </h2>
      <div class="skill-contents">
        <div
          is="AboutSkills"
          v-for="skill in orderdSkills"
          :key="skill.id"
          :skill="skill"
          @showDiscription="showSkillDiscription($event)"
          @hideDiscription="hideSkillDiscription()"
        />
      </div>
      <div v-if="statusSkillDiscription" class="personality-contents" >
        <span>
          <vue-typer :text="skillDisciption" :type-delay='65'></vue-typer>
        </span>
      </div>
      <h2 class="contents-title slide-in-left">
        Contact
      </h2>
      <div class="contact-contents slide-in-to-top">
        <Contact />
      </div>
    </section>
  </div>
</template>
<style scoped>

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

.skill-contents {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 5px 50px;
  margin-bottom: 20px;
}

.personality-contents {
  width: 100%;
  padding: 5px 50px;
  text-align: left;
  margin-bottom: 20px;
}

.personality-contents > img {
  width: 50%;
  height: auto;
}
/* スマホ時 */
@media (max-width: 767px) {
  .personality-contents > img {
    width: 100%;
    height: auto;
  }
}

.slide-in-to-top {
  animation: slide-in-to-top 3s ease 1s backwards;
}

.title-under-line {
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 1px 0 rgba(255,255,255,1);
}

.contact-contents {
  width: 100%;
  padding: 5px 50px;
  text-align: left;
  margin-bottom: 20px;
}
</style>
<script>
import { mapGetters } from 'vuex'
import AboutSkills from '~/components/AboutSkills.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    AboutSkills,
    Contact
  },
  data() {
    return {
      title: 'About',
      subtitle: 'My skills and personality',
      statusSkillDiscription: false,
      skillDisciption: '',
      personality: '営業職・Webライターを経て2018年2月よりWebエンジニアとして働き始める。1社目で働いた会社ではサーバサイドからフロントエンドまで幅広く開発に携わる。現在は特にサービスやWebサイトの見た目をいじるのが好きで、フロントエンド開発、さらにはUI/UXデザインに興味がある。'
    }
  },
  created() {
    this.$store.dispatch('skills/init')
  },
  computed: {
    ...mapGetters('skills', ['orderdSkills'])
  },
  methods: {
    showSkillDiscription(discription) {
      this.statusSkillDiscription = true
      this.skillDisciption = discription
    },
    hideSkillDiscription() {
      this.statusSkillDiscription = false
    }
  }
}
</script>
