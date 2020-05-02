<template>
  <tr>
    <td class="admin-personality-contents__td admin-personality-contents__td__nowrap">
      {{ personality.number }}
    </td>
    <td v-if="!isEditableImageUrl" class="admin-personality-contents__td admin-personality-contents__td__nowrap" @dblclick="isEditableImageUrl = true">
      <img :src="personality.imageUrl" class="img">
    </td>
    <td v-else>
      <input class="admin-personality-contents__td__input" :value="personality.imageUrl" type="text" @blur="updateImageUrl($event.target.value, personality.id)">
    </td>
    <td v-if="!isEditableDisc" class="admin-personality-contents__td" @dblclick="isEditableDisc = true">
      {{ personality.discription }}
    </td>
    <td v-else>
      <textarea class="admin-personality-contents__td__input" :value="personality.discription" type="text" @blur="updateDisc($event.target.value, personality.id)" />
    </td>
    <td class="admin-personality-contents__td admin-personality-contents__td__nowrap">
      <button class="delete-button" @click="remove(personality.id)">
        <font-awesome-icon class="fa-1x fa-fw" :icon="['fas', 'times']" />
      </button>
    </td>
  </tr>
</template>
<style>
textarea {
  resize: none;
}
.img {
  width: 50px;
  height: 30px;
}
.admin-personality-contents__td{
  color: #000000;
  border-bottom:0.5px solid #ccc;
  background-color: #fafcfc;
  border-radius: 1px;
  padding: 5px;
}
.admin-personality-contents__td__nowrap {
  white-space: nowrap;
}
.admin-personality-contents__td__input{
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
    personality: Object,
    index: Number
  },
  data() {
    return {
      isEditableImageUrl: false,
      isEditableDisc: false
    }
  },
  methods: {
    remove(id) {
      this.$store.dispatch('personality/remove', id)
    },
    updateImageUrl(imageUrl, id) {
      this.$store.dispatch('personality/updateImageUrl', { imageUrl, id })
      this.isEditableImageUrl = false
    },
    updateDisc(discription, id) {
      this.$store.dispatch('personality/updateDiscriptoin', { discription, id })
      this.isEditableDisc = false
    }
  }
}
</script>
