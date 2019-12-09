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

.slide-in-to-top {
  animation: slide-in-to-top 3s ease 1s backwards;
}

</style>
