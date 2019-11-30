<template>
  <div>
    <!-- ログイン中に表示される画面 -->
    <div v-if="isAuthenticated">
      {{ user.email }}でログイン中です<br>
      <button @click="logout">
        ログアウト
      </button>
      <br>
      <nuxt-link to="/admin">
        管理画面へ
      </nuxt-link>
    </div>
    <!-- ログインしていない時に表示される画面 -->
    <div v-else>
      メール<br>
      <input v-model="email" type="text"><br>
      パスワード<br>
      <input v-model="password" type="password"><br>
      <button @click="login">
        ログイン
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import firebase from '~/plugins/firebase'
export default {
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
      const { uid, email, displayName } = user
      this.setUser({ uid, email, displayName })
    })
  },
  methods: {
    ...mapActions('auth', ['setUser']),
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          // ログインしたら飛ぶページを指定
          // this.$router.push("/member-page")
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
