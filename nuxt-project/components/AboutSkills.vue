<template>
  <div class="display-inline">
    <span class="skill-discription slide-in-to-top" @mouseover="showDiscription" @mouseout="hideDiscription">
      {{ skill.name }}/
    </span>
  </div>
</template>
<script>
export default {
  props: {
    skill: Object
  },
  methods: {
    showDiscription() {
      this.$emit('showDiscription', this.skill.discription)
    },
    hideDiscription() {
      this.$emit('hideDiscription')
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

.skill-discription {
  font-size: 3ex;
  color: #0e0d0d;
  word-spacing: 2px;
  margin:20px 0px;
}
.skill-discription:hover{
  text-shadow: 5px 5px 2px #999999;
  font-size: 4ex;
}
.skill-discription-box {
  display: block;
  padding: 3px;
  width: 90%;
  border: 1px solid #EEE;
  background-color: #EEE;
  box-shadow: 1px 1px 2px #EEE;
  left: 0;
  right: 0;
  margin: 10px auto;
  position: absolute;
  bottom:
}
.skill-discription-box-text {
  font-size: 2ex;
  font-weight: bald;
  color: #635c5c;
  word-spacing: 2px;
  text-align: left;
}
.slide-in-to-top {
  animation: slide-in-to-top 3s ease 1s backwards;
}

</style>
