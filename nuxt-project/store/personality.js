import { firestoreAction } from 'vuexfire'
import _ from 'lodash'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const storage = firebase.storage()
const personalityRef = db.collection('personality')

export const state = () => ({
  personality: []
})

export const actions = {
  getAll: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('personality', personalityRef)
  }),
  add: firestoreAction((context, personality) => {
    const storageRef = storage.ref().child('about/personality/' + personality.image.name)
    storageRef.put(personality.image).then(function (snapshot) {
      storageRef.getDownloadURL().then(function (imageUrl) {
        if (personality.discription.trim()) {
          personalityRef.doc().set({
            imageUrl: imageUrl,
            discription: personality.discription,
            number: personality.number,
            created: firebase.firestore.FieldValue.serverTimestamp()
          }).then((ref) => {
          }).catch((err) => {
            alert(err)
          })
        }
      })
    })
  }),
  remove: firestoreAction((context, id) => {
    personalityRef.doc(id).delete()
  }),
  updateImageUrl: firestoreAction((context, personality) => {
    /* eslint-disable no-console */
    personalityRef.doc(personality.id).update({
      imageUrl: personality.imageUrl
    }).then((ref) => {
    }).catch((err) => {
      alert(err)
    })
  }),
  updateDiscriptoin: firestoreAction((context, personality) => {
    /* eslint-disable no-console */
    personalityRef.doc(personality.id).update({
      discription: personality.discription
    }).then((ref) => {
    }).catch((err) => {
      alert(err)
    })
  })
}

export const getters = {
  orderdPersonality: (state) => {
    /* eslint-disable no-console */
    // console.log(state)
    return _.sortBy(state.personality, 'number')
  }
}
