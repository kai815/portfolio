<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <form class="form-contents">
        <dl>
          <dt class="form-title">
            <span>{{ formTitle }}</span>
          </dt>
          <div v-if="hasName">
            <dt class="form-item">
              <span>{{ formTitle + "Name" }}</span>
            </dt>
            <dd class="form-item">
              <input v-model="formData.name" class="form-item-input" type="text" placeholder="JavaScript" name="name">
            </dd>
          </div>
          <div v-if="hasTitle">
            <dt class="form-item">
              <span>{{ formTitle + "Title" }}</span>
            </dt>
            <dd class="form-item">
              <input v-model="formData.title" class="form-item-input" type="text" placeholder="HideoKaizukaのポートフォリオ" name="title">
            </dd>
          </div>
          <div v-if="hasUrl">
            <dt class="form-item">
              <span>{{ formTitle + "URL" }}</span>
            </dt>
            <dd class="form-item">
              <input v-model="formData.url" class="form-item-input" type="text" placeholder="作品のリンク" name="ulr">
            </dd>
          </div>
          <dt class="form-item">
            <span>{{ formTitle + "Discription" }}</span>
          </dt>
          <dd class="form-item">
            <textarea v-model="formData.discription" class="form-item-textarea" name="discription" placeholder="説明を記載" />
          </dd>
          <div v-if="hasImage">
            <dt class="form-item">
              <span>{{ formTitle + "Image" }}</span>
            </dt>
            <dd class="form-item">
              <input class="form-item-file" type="file" name="image" @change="selectImage">
            </dd>
            </dd>
          </div>
          <dd class="form-item">
            <span>
              {{ formTitle + "Number" }}
            </span>
          </dd>
          <dd class="form-item">
            <input v-model="formData.number" class="form-item-number" type="number" name="number">
          </dd>
          <button class="form-button__mini" @click="save">
            Save
          </button>
          <button class="form-button__mini__cancel" @click="hideForm">
            Cancel
          </button>
        </dl>
      </form>
    </div>
  </div>
</template>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.form-contents {
  background-color: #E6EAFB;
  margin: auto;
  padding: 20px;
  width: 50%;
}

.form-title {
  text-align: center;
  font-size: 5vh;
}

.form-item {
  color:#84898C;
  margin-bottom: 2px;
}

.form-item-input {
  background-color:#F3F8FE;
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
}

.form-item-textarea {
  background-color:#F3F8FE;
  width: 100%;
  height: 90px;
  margin-bottom: 10px;
}

.form-item-number {
  background-color:#F3F8FE;
  width: 30%;
  height: 30px;
  margin-bottom: 10px;
}

.form-button__mini {
  background-color: #153297;
  color: #FFF;
  padding: 3px 30px;
  width: 30%;
  font-size: 4vh;
  margin-top: 10px;
}

.form-button__mini__cancel {
  background-color: #A6B1BA;
  color: #FFF;
  padding: 3px 30px;
  width: 30%;
  font-size: 4vh;
  margin-top: 10px;
}

</style>
<script>
export default {
  props: {
    formTitle: {
      type: String,
      default: '',
      required: true
    },
    hasName: {
      type: Boolean,
      default: false,
      required: true
    },
    hasTitle: {
      type: Boolean,
      default: false,
      required: true
    },
    hasUrl: {
      type: Boolean,
      default: false,
      required: true
    },
    hasImage: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data() {
    return {
      formData: {
        name: '',
        title: '',
        discription: '',
        url: '',
        image: ''
      }
    }
  },
  methods: {
    selectImage(event) {
      const files = event.target.files
      this.formData.image = files[0]
    },
    hideForm() {
      this.$emit('hide')
    },
    save(e) {
      e.preventDefault()
      this.$emit('save', this.formData)
    }
  }
}
</script>
