<template>
  <tr>
    <td class="admin-skill-contents__td admin-skill-contents__td_nowrap">
      {{ skill.number }}
    </td>
    <td v-if="!isEditableName" class="admin-skill-contents__td admin-skill-contents__td_nowrap" @dblclick="isEditableName = true">
      {{ skill.name }}
    </td>
    <td v-else>
      <input class="admin-skill-contents__td__input" :value="skill.name" type="text" @blur="updateName($event.target.value, skill.id)">
    </td>
    <td v-if="!isEditableDisc" class="admin-skill-contents__td" @dblclick="isEditableDisc = true">
      {{ skill.discription }}
    </td>
    <td v-else>
      <textarea class="admin-skill-contents__td__input" :value="skill.discription" type="text" @blur="updateDisc($event.target.value, skill.id)" />
    </td>
    <td class="admin-skill-contents__td">
      <button class="delete-button" @click="remove(skill.id)">
        <font-awesome-icon class="fa-1x fa-fw" :icon="['fas', 'times']" />
      </button>
    </td>
  </tr>
</template>
<style>
textarea {
  resize: none;
}
.admin-skill-contents__td{
  color: #000000;
  border-bottom:0.5px solid #ccc;
  background-color: #fafcfc;
  border-radius: 1px;
  padding: 5px;
}
.admin-skill-contents__td_nowrap {
  white-space: nowrap;
}
.admin-skill-contents__td__input{
  width: 100%;
  padding:5px;
  box-sizing:border-box;
}
.delete-button{
  background-color: rgb(91, 91, 91);
  color: #FFFFFF;
  border-radius: 50%;
}
.delete-button:hover{
  background-color: rgb(235, 11, 11);
  color: #FFFFFF;
  border-radius: 50%;
}
</style>
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
