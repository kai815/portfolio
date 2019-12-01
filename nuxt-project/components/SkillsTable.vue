<template>
  <tr>
    <td>
      {{ skill.number }}
    </td>
    <td v-if="!isEditableName" @dblclick="isEditableName = true">
      {{ skill.name }}
    </td>
    <td v-else>
      <input :value="skill.name" type="text" @blur="updateName($event.target.value, skill.id)">
    </td>
    <td v-if="!isEditableDisc" @dblclick="isEditableDisc = true">
      {{ skill.discription }}
    </td>
    <td v-else>
      <input :value="skill.discription" type="text" @blur="updateDisc($event.target.value, skill.id)">
    </td>
    <td>
      <button @click="remove(skill.id)">
        削除
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    skill: Object,
    index: Number
  },
  data() {
    return {
      isEditableName: false,
      isEditableDisc: false
    }
  },
  methods: {
    remove(id) {
      this.$store.dispatch('skills/remove', id)
    },
    updateName(name, id) {
      /* eslint-disable no-console */
      this.$store.dispatch('skills/toggleName', { name, id })
      this.isEditableName = false
    },
    updateDisc(discription, id) {
      this.$store.dispatch('skills/toggleDiscriptoin', { discription, id })
      this.isEditableDisc = false
    }
  }
}
</script>
