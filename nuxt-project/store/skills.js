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
    if (skill.name.trim()) {
      skillsRef.doc().set({
        name: skill.name,
        discription: skill.discription,
        number: skill.number,
        created: firebase.firestore.FieldValue.serverTimestamp()
      }).then((ref) => {
      }).catch((err) => {
        alert(err)
      })
    }
  }),
  remove: firestoreAction((context, id) => {
    skillsRef.doc(id).delete()
  }),
  // toggle: firestoreAction((context, skill) => {
  //   /* eslint-disable no-console */
  //   console.log(skill)
  //   skillsRef.doc(skill.id).update({
  //     name: skill.name,
  //     discription: skill.discription
  //   }).then((ref) => {
  //   }).catch((err) => {
  //     alert(err)
  //   })
  // })
  toggleName: firestoreAction((context, skill) => {
    /* eslint-disable no-console */
    skillsRef.doc(skill.id).update({
      name: skill.name
    }).then((ref) => {
    }).catch((err) => {
      alert(err)
    })
  }),
  toggleDiscriptoin: firestoreAction((context, skill) => {
    /* eslint-disable no-console */
    skillsRef.doc(skill.id).update({
      discription: skill.discription
    }).then((ref) => {
    }).catch((err) => {
      alert(err)
    })
  })
}

export const getters = {
  orderdSkills: (state) => {
    return _.sortBy(state.skills, 'number')
  }
}
