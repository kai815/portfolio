<template>
  <div class="display-inline" @click="changeShowDiscription">
    {{ skill.name }}/
    <span v-if="showDiscription">
      {{ skill.discription }}
    </span>
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
      /* eslint-disable no-console */
      console.log('test')
      this.showDiscription = !this.showDiscription
    }
  }
}
</script>
<style scoped>
.display-inline {
    display:inline;
}
</style>
