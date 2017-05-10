import * as firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAIabkecMC8i0cJvE-3YrPWB816k_0fYEY',
  authDomain: 'cs374-32b99.firebaseapp.com',
  databaseURL: 'https://cs374-32b99.firebaseio.com',
  projectId: 'cs374-32b99',
  storageBucket: 'cs374-32b99.appspot.com',
  messagingSenderId: '771327049053',
})

export async function getMails () {
  const mails = await firebase.database().ref('/mails/').once('value')
  return mails.val()
}

export async function getTags () {
  const tags = await firebase.database().ref('/tags/').once('value')
  var ret = []
  for (const key of Object.keys(tags.val()))
  {
    const value = tags.val()[key]
    ret.push(value)
  }
  return ret
}

export async function addTags (newTag) {
  // const tags = await getTags();
  // var updates = {}
  // updates[tags.length] = newTag
  await firebase.database().ref('/tags/').push(newTag);
  return
}

export async function putTag (mailKey, attachmentIdx, tag) {
  await firebase.database().ref(`/mails/${mailKey}/attachments/${attachmentIdx}/tags`).push({
    name: tag,
  })
}

export default app
