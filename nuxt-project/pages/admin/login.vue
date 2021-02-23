<template>
  <div class="form-main">
    <!-- ログインしていない時に表示される画面 -->
    <div v-if="!isAuthenticated" class="form-contents">
      <h3 class="form-title">
        Login
      </h3>
      <p class="form-item-text">
        Eamil
      </p>
      <p class="form-item-text">
        <input v-model="email" class="form-item-input" type="text">
      </p>
      <p class="form-item-text">
        Password
      </p>
      <p><input v-model="password" class="form-item-input" type="password"></p>
      <button class="form-button" @click="login">
        Login
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import firebase from '~/plugins/firebase'
export default {
  layout: 'admin',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('auth', ['isAuthenticated'])
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { uid, email, displayName } = user
        this.setUser({ uid, email, displayName })
      }
    })
  },
  methods: {
    ...mapActions('auth', ['setUser']),
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          // ログインしたら飛ぶページを指定
          this.$router.push('/admin/')
        }).catch((error) => {
          alert(error)
        })
    },
    logout() {
      firebase.auth().signOut()
        .then(() => {
          this.setUser(null)
        }).catch((error) => {
          alert(error)
        })
    }
  }
}
</script>
<style>
.form-main {
  background-color: #B1C3E5;
  width: 100%;
  height: 100vh;
  padding-top: 10vh;
}
.form-contents {
  background-color: #E6EAFB;
  margin: auto;
  padding: 20px;
  width: 50%;
  height: 50%;
  /* position: absolute;
  top: 10%;
  left: auto; */
}

.form-title {
  text-align: center;
  font-size: 5vh;
  color:
}
.form-item-text {
  color:#84898C;
  margin-bottom: 2px;
}
.form-item-input {
  background-color:#F3F8FE;
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
}
.form-button {
  background-color: #153297;
  color: #FFF;
  padding: 3px 30px;
  width: 100%;
  font-size: 4vh;
  margin-top: 10px
}
</style>
