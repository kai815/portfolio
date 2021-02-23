<template>
  <div class="admin__contents">
    <div class="admin__sidevar">
      <h2 class="sidevar__menu__title">
        Admin
      </h2>
      <ul class="sidevar__menu">
        <li>
          <button class="sidevar__menu__item" :class="{'sidevar__menu__item__active': isActiveRow === '1'}" @click="changeActiveRow('1')">
            Works
          </button>
        </li>
        <li>
          <button class="sidevar__menu__item" :class="{'sidevar__menu__item__active': isActiveRow === '2'}" @click="changeActiveRow('2')">
            About
          </button>
        </li>
        <li>
          <button class="sidevar__menu__item sidevar__menu__item__bottom" @click="logout">
            Logout
          </button>
        </li>
      </ul>
    </div>
    <div class="admin__main">
      <ul v-if="isActiveRow === '1' " class="tab-change-button__list">
        <li class="tab-change-button__list__item" :class="{'tab-change-button__list__item__active': isActiveColumn === '1'}">
          <button @click="changeActiveColumn('1')">
            Works
          </button>
        </li>
      </ul>
      <ul v-else-if="isActiveRow === '2' " class="tab-change-button__list">
        <li class="tab-change-button__list__item" :class="{'tab-change-button__list__item__active': isActiveColumn === '1'}">
          <button @click="changeActiveColumn('1')">
            Skills
          </button>
        </li>
        <li class="tab-change-button__list__item" :class="{'tab-change-button__list__item__active': isActiveColumn === '2'}">
          <button @click="changeActiveColumn('2')">
            Personality
          </button>
        </li>
      </ul>
      <div v-if="isActiveRow === '1'" class="row-tab__active">
        <worksIndex />
      </div>
      <div v-else-if="isActiveRow === '2'" class="row-tab__active">
        <div v-if="isActiveColumn === '1'">
          <skillsIndex />
        </div>
        <div v-else-if="isActiveColumn === '2'">
          <personalityIndex />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
a {
  color: inherit;
  text-decoration: none;
}

.admin__contents{
  overflow: hidden;
  height: 100%;
}

/* sidevar */

.admin__sidevar {
  width: 10%;
  min-width: 100px;
  height: 100%;
  background: #081C63;
  color:#FCFDFF;
  padding: 10px 0px;
  text-align: center;
  position: fixed;
  float:left;
}
.sidevar__menu {
  list-style: none;
  margin: 10px auto;
}
.sidevar__menu__title{
  white-space: nowrap;
}

.sidevar__menu__item {
  outline: none;
  padding:10px;
  width: 100%;
  white-space: nowrap;
  font-weight: 500;
}
.sidevar__menu__item__active {
  background-color: #0C8AFF;
  font-weight: 700;
  position: relative;
}
.sidevar__menu__item__active::after {
  right: 0;
  border: solid 8px transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  /* pointer-events: none; */
  border-right-color: #ECEBF3;
  top: 50%;
  margin-top: -8px;
}
/* .sidevar__menu__item__bottom {
} */
.admin__main {
  height: 100%;
  width:90%;
  background-color: #ECEBF3;
  float: right;
  overflow: scroll;
}

.row-tab__active {
  background-color: #FFFFFF;
  margin:15px;
  margin-top:0px;
  padding: 15px;
}

.tab-change-button__list {
  list-style: none;
  margin:15px 0px 0px 15px;
}

.tab-change-button__list__item {
  display: inline-block;
  padding: 10px;
  color: #081C63;
  background-color: #A7A5C0;
  font-weight: 500;
}
.tab-change-button__list__item >button {
  outline: none;
}

.tab-change-button__list__item:first-child {
  margin-left: 0px;
}

.tab-change-button__list__item__active {
  display: inline-block;
  margin: 0px;
  background-color: #FFFFFF;
  color:#005ab3;
  font-weight: 700;
}
</style>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import firebase from '~/plugins/firebase'
import worksIndex from '~/components/WorksIndex.vue'
import skillsIndex from '~/components/SkillsIndex.vue'
import personalityIndex from '~/components/PersonalityIndex.vue'

export default {
  layout: 'admin',
  components: {
    worksIndex,
    skillsIndex,
    personalityIndex
  },
  data() {
    return {
      loaded: false,
      isActiveRow: '1',
      isActiveColumn: '1'
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapState('auth', ['user'])
  },
  mounted() {
    setTimeout(() => {
      if (!this.isAuthenticated) {
        // ログインしていなかったら飛ぶページを設定
        this.$router.push('/admin/login')
      }
      this.loaded = true
    }, 0)
  },
  methods: {
    ...mapActions('auth', ['setUser']),
    changeActiveRow(num) {
      this.isActiveRow = num
      this.isActiveColumn = '1'
    },
    changeActiveColumn(num) {
      this.isActiveColumn = num
    },
    logout() {
      firebase.auth().signOut()
        .then(() => {
          this.setUser(null)
          this.$router.push('/admin/login')
        }).catch((error) => {
          alert(error)
        })
    }
  }
}
</script>
