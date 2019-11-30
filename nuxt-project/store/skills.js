import { firestoreAction } from 'vuexfire'
import _ from 'lodash'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const skillsRef = db.collection('skills')

export const state = () => ({
  skills: []
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('skills', skillsRef)
  }),
  add: firestoreAction((context, skill) => {
    /* eslint-disable no-console */
    console.log(skill)
    if (skill.name.trim()) {
      console.log(skill)
      // alert('skilladdstore')
      skillsRef.doc().set({
        name: skill.name,
        discription: skill.discription,
        number: skill.number,
        created: firebase.firestore.FieldValue.serverTimestamp()
      }).then((ref) => {
        console.log(ref)
      }).catch((err) => {
        console.log(err)
      })
    }
  }),
  remove: firestoreAction((context, id) => {
    skillsRef.doc(id).delete()
  }),
  toggle: firestoreAction((context, skill) => {
    skillsRef.doc(skill.id).update({
      done: !skill.done
    })
  })
}

export const getters = {
  orderdSkills: (state) => {
    console.log('getters')
    console.log(state)
    return _.sortBy(state.skills, 'number')
  }
}
