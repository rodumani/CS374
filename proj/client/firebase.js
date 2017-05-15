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
  const ret = []
  for (const key of Object.keys(mails.val())) {
    const value = mails.val()[key]
    value.key = key
    ret.push(value)
  }
  return ret
}

export async function pushMail (body, to, title, file) {
  const mailsRef = firebase.database().ref('/mails/')
  const newMailRef = mailsRef.push()
  const newMailData = {
    content: body,
    from: {
      address: 'changjej@kaist.ac.kr',
      name: 'Changje Jung',
    },
    to: to,
    title: title,
    sent: (new Date()).toISOString(),
    attachments: [],
  }
  if (file) {
    // Upload to firebase storage
    const fileKey = (new Date()).valueOf()
    console.log(fileKey)
    const resp = await firebase.storage().ref(`/${fileKey}`).put(file)
    newMailData.attachments.push({ filename: file.name, link: resp.downloadURL })
  }
  newMailRef.set(newMailData)
}

export async function getTags () {
  const tags = await firebase.database().ref('/tags/').once('value')
  const ret = []
  for (const key of Object.keys(tags.val())) {
    const value = tags.val()[key]
    ret.push(value)
  }
  return ret
}

export async function addTags (newTag) {
  await firebase.database().ref('/tags/').push(newTag)
}

export async function putTag (mailKey, attachmentIdx, tag) {
  await firebase.database().ref(`/mails/${mailKey}/attachments/${attachmentIdx}/tags`).push({
    name: tag,
  })
}

export default app
