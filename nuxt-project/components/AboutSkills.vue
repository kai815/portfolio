<template>
  <div class="display-inline">
    <span class="skill-discription slide-in-to-top" @mouseover="changeShowDiscription" @mouseout="changeShowDiscription">
      {{ skill.name }}/
    </span>
    <div v-if="showDiscription" class="skill-discription-box skill-discription-box-text" >
      <span>
        <vue-typer :text="skill.discription" :type-delay='65'></vue-typer>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    skill: Object
  },
  data() {
    return {
      showDiscription: false
    }
  },
  methods: {
    changeShowDiscription() {
      this.showDiscription = !this.showDiscription
    }
  }
}
</script>
<style scoped>
@keyframes slide-in-to-top {
  0% {
    transform: translate(0px, -50px);
    opacity: 0;
  }
}

.display-inline {
  display:inline;
}
.skill-discription {
  font-size: 3ex;
  color: #0e0d0d;
  word-spacing: 2px;
}
.skill-discription:hover{
  text-shadow: 5px 5px 2px #999999;
  font-size: 4ex;
}
.skill-discription-box {
  display: block;
  padding: 2px;
  width: 90%;
  border: solid black 1px;
  left: 0;
  right: 0;
  margin: 10px auto;
  position: absolute;
  bottom: 0;
}
.skill-discription-box-text {
  font-size: 2ex;
  font-weight: bald;
  color: #635c5c;
  word-spacing: 2px;
  text-align: left;
  font-family: hk, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Meiryo, メイリオ, sans-serif;
}
.slide-in-to-top {
  animation: slide-in-to-top 3s ease 2s backwards;
}
</style>
