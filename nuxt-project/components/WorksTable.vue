<template>
  <tr>
    <td class="admin-work-contents__td admin-work-contents__td__nowrap">
      {{ work.number }}
    </td>
    <td class="admin-work-contents__td admin-work-contents__td__nowrap" v-if="!isEditableTitle" @dblclick="isEditableTitle = true">
      {{ work.title }}
    </td>
    <td v-else>
      <input class="admin-work-contents__td__input" :value="work.title" type="text" @blur="updateTitle($event.target.value, work.id)">
    </td>
    <td class="admin-work-contents__td admin-work-contents__td__nowrap" v-if="!isEditableImageUrl" @dblclick="isEditableImageUrl = true">
      <img :src="work.imageUrl" class="img">
    </td>
    <td v-else>
      <input class="admin-work-contents__td__input" :value="work.imageUrl" type="text" @blur="updateImageUrl($event.target.value, work.id)">
    </td>
    <td class="admin-work-contents__td admin-work-contents__td__nowrap" v-if="!isEditableLinkUrl" @dblclick="isEditableLinkUrl = true">
      <a :href="work.linkUrl" target="_blank">{{ work.linkUrl }}</a>
    </td>
    <td v-else>
      <input class="admin-work-contents__td__input" :value="work.linkUrl" type="text" @blur="updateLinkUrl($event.target.value, work.id)">
    </td>
    <td class="admin-work-contents__td" v-if="!isEditableDisc" @dblclick="isEditableDisc = true">
      {{ work.discription }}
    </td>
    <td v-else>
      <textarea class="admin-work-contents__td__input" :value="work.discription" type="text" @blur="updateDisc($event.target.value, work.id)"></textarea>
    </td>
    <td class="admin-work-contents__td admin-work-contents__td__nowrap">
      <button class="delete-button" @click="remove(work.id)">
        <font-awesome-icon class="fa-1x fa-fw" :icon="['fas', 'times']"/>
      </button>
    </td>
  </tr>
</template>
<style>
.img {
  width: 50px;
  height: 30px;
}
.admin-work-contents__td{
  color: #000000;
  border-bottom:0.5px solid #ccc;
  background-color: #fafcfc;
  border-radius: 1px;
  padding: 5px;
}
.admin-work-contents__td__nowrap {
  white-space: nowrap;
}
.admin-work-contents__td__input{
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
    work: Object,
    index: Number
  },
  data() {
    return {
      isEditableTitle: false,
      isEditableImageUrl: false,
      isEditableLinkUrl: false,
      isEditableDisc: false
    }
  },
  methods: {
    remove(id) {
      this.$store.dispatch('works/remove', id)
    },
    updateTitle(title, id) {
      /* eslint-disable no-console */
      this.$store.dispatch('works/updateTitle', { title, id })
      this.isEditableTitle = false
    },
    updateImageUrl(imageUrl, id) {
      this.$store.dispatch('work/updateImageUrl', { imageUrl, id })
      this.isEditableImageUrl = false
    },
    updateLinkUrl(linkUrl, id) {
      this.$store.dispatch('work/updateLinkUrl', { linkUrl, id })
      this.isEditableLinkUrl = false
    },
    updateDisc(discription, id) {
      this.$store.dispatch('works/updateDiscriptoin', { discription, id })
      this.isEditableDisc = false
    }
  }
}
</script>
