import { firestoreAction } from 'vuexfire'
import _ from 'lodash'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const storage = firebase.storage()
const worksRef = db.collection('works')

export const state = () => ({
  works: []
})

export const actions = {
  getAll: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('works', worksRef)
  }),
  serchWorkNumber: firestoreAction(({ bindFirestoreRef }, number) => {
    /* eslint-disable no-console */
    console.log(number)
    bindFirestoreRef('works', worksRef.where('number', '==', number))
  }),
  add: firestoreAction((context, work) => {
    if (work.title.trim()) {
      worksRef.doc().set({
        title: work.title,
        imageUrl: work.imageUrl,
        linkUrl: work.linkUrl,
        discription: work.discription,
        number: work.number,
        created: firebase.firestore.FieldValue.serverTimestamp()
      }).then((ref) => {
      }).catch((err) => {
        alert(err)
      })
    }
  }),
  remove: firestoreAction((context, id) => {
    worksRef.doc(id).delete()
  }),

  updateTitle: firestoreAction((context, work) => {
    /* eslint-disable no-console */
    worksRef.doc(work.id).update({
      title: work.title
    }).then((ref) => {
    }).catch((err) => {
      alert(err)
    })
  }),
  updateImageUrl: firestoreAction((context, work) => {
    /* eslint-disable no-console */
    worksRef.doc(work.id).update({
      imageUrl: work.imageUrl
    }).then((ref) => {
    }).catch((err) => {
      alert(err)
    })
  }),
  updateLinkUrl: firestoreAction((context, work) => {
    /* eslint-disable no-console */
    worksRef.doc(work.id).update({
      linkUrl: work.linkUrl
    }).then((ref) => {
    }).catch((err) => {
      alert(err)
    })
  }),
  updateDiscriptoin: firestoreAction((context, work) => {
    /* eslint-disable no-console */
    worksRef.doc(work.id).update({
      discription: work.discription
    }).then((ref) => {
    }).catch((err) => {
      alert(err)
    })
  }),
  imageUpload: (context, image) => {
    /* eslint-disable no-console */
    const storageRef = storage.ref().child('works/' + image.name)
    storageRef.put(image).then(function (snapshot) {
      console.log('Uploaded a blob or file!')
    })
  }
}

export const getters = {
  orderdWorks: (state) => {
    /* eslint-disable no-console */
    // console.log(state)
    return _.sortBy(state.works, 'number')
  }
}
