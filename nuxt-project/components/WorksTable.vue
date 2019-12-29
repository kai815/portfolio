<template>
  <tr>
    <td>
      {{ work.number }}
    </td>
    <td v-if="!isEditableTitle" @dblclick="isEditableTitle = true">
      {{ work.title }}
    </td>
    <td v-else>
      <input :value="work.title" type="text" @blur="updateTitle($event.target.value, work.id)">
    </td>
    <td v-if="!isEditableImageUrl" @dblclick="isEditableImageUrl = true">
      <img :src="work.imageUrl" class="img">
    </td>
    <td v-else>
      <input :value="work.imageUrl" type="text" @blur="updateImageUrl($event.target.value, work.id)">
    </td>
    <td v-if="!isEditableLinkUrl" @dblclick="isEditableImageUrl = true">
      <a :href="work.linkUrl" target="_blank">{{ work.title }}</a>
    </td>
    <td v-else>
      <input :value="work.linkUrl" type="text" @blur="updateLinkUrl($event.target.value, work.id)">
    </td>
    <td v-if="!isEditableDisc" @dblclick="isEditableDisc = true">
      {{ work.discription }}
    </td>
    <td v-else>
      <input :value="work.discription" type="text" @blur="updateDisc($event.target.value, work.id)">
    </td>
    <td>
      <button @click="remove(work.id)">
        削除
      </button>
    </td>
  </tr>
</template>
<style>
.img {
  width: 50px;
  height: 30px;
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
