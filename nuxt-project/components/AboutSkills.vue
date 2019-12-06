<template>
  <div class="display-inline">
    <span class="skill-discription" @mouseover="changeShowDiscription" @mouseout="changeShowDiscription">
      {{ skill.name }}/
    </span>
    <div v-if="showDiscription" class="skill-discription-box skill-discription-box-text" >
      <span class="typing">
        {{ skill.discription }}
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
.display-inline {
  display:inline;
}
.skill-discription {
  font-size: 3ex;
  color: #161515;
  word-spacing: 2px;
}
.skill-discription:hover{
  text-shadow: 2px 2px 1px #999999, -5px -5px 1px #999999;
  font-size: 4ex;
}
.skill-discription-box {
  display: block;
  border-radius: 5px;
  border: groove 2px #161515;
  width: 90%;
  left: 0;
  right: 0;
  margin: 10px auto;
  position: absolute;
  bottom: 0;
}
.skill-discription-box-text {
  font-size: 3ex;
  color: #161515;
  word-spacing: 2px;
  text-align: left;
}
</style>
