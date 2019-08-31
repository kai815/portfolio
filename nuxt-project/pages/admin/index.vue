<template>
  <div>
    <h1>管理画面</h1>
    <ul>
      <li>Workの編集へ(画面作成したらリンクも作成)</li>
      <li>aboutの編集へ(画面作成したらリンクも作成)</li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      loaded: false
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    setTimeout(() => {
      if (!this.isAuthenticated) {
        // ログインしていなかったら飛ぶページを設定
        this.$router.push('/admin/login')
      }
      this.loaded = true
    }, 0)
  }
}
</script>
