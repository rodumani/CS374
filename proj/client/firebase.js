import * as firebase from 'firebase'
import * as md5 from 'md5'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAIabkecMC8i0cJvE-3YrPWB816k_0fYEY',
  authDomain: 'cs374-32b99.firebaseapp.com',
  databaseURL: 'https://cs374-32b99.firebaseio.com',
  projectId: 'cs374-32b99',
  storageBucket: 'cs374-32b99.appspot.com',
  messagingSenderId: '771327049053',
})

export function getMails (address, callback) {
  firebase.database().ref(`/${md5(address)}/mails/`).on('value', mails => {
    const ret = []
    if (!mails.val()) {
      callback(ret)
      return
    }

    for (const key of Object.keys(mails.val())) {
      const value = mails.val()[key]
      value.key = key
      ret.push(value)
    }
    callback(ret)
  })
}

/* eslint-disable max-params*/
export async function pushMail (body, { address, name }, to, title, file) {
  const newMailData = {
    content: body,
    from: {
      address,
      name,
    },
    to,
    title,
    sent: (new Date()).toISOString(),
    attachments: [],
  }
  if (file) {
    // Upload to firebase storage
    const s = file.name.split('.')
    const ext = s.pop()
    const fileKey = (new Date()).valueOf()
    const resp = await firebase.storage().ref(`/${s.join('.')}-${fileKey}.${ext}`).put(file)
    newMailData.attachments.push({ filename: file.name, link: resp.downloadURL, hide: false })
  }

  // Receiver Inbox
  const receiverMailsRef = firebase.database().ref(`${md5(to)}/mails/`)
  await receiverMailsRef.push(newMailData)

  if (to !== address) {
    // Sender Sent
    const senderMailsRef = firebase.database().ref(`${md5(address)}/mails/`)
    await senderMailsRef.push(newMailData)
  }
}
/* eslint-enable */

export function getTags (address, callback) {
  firebase.database().ref(`${md5(address)}/tags/`).on('value', tags => {
    if (!tags.val()) {
      callback([])
      return
    }
    callback(Object.keys(tags.val()))
  })
}

export async function addTags (address, tag) {
  await firebase.database().ref(`/${md5(address)}/tags/${tag}`).set(true)
}
export async function removeTag (address, tag) {
  await firebase.database().ref(`/${md5(address)}/tags/${tag}`).remove()
}

export async function putTag (address, mailKey, attachmentIdx, tag) {
  await firebase.database().ref(`/${md5(address)}/mails/${mailKey}/attachments/${attachmentIdx}/tags/${tag}`).set(true)
}

export async function removeMailTag (address, mailKey, attachmentIdx, tag) {
  await firebase.database().ref(`${md5(address)}/mails/${mailKey}/attachments/${attachmentIdx}/tags/${tag}`).remove()
}

export async function hideFile (address, mailKey, attachmentIdx) {
  await firebase.database().ref(`${md5(address)}/mails/${mailKey}/attachments/${attachmentIdx}/hide`).set(true)
}

export async function unhideFile (address, mailKey, attachmentIdx) {
  await firebase.database().ref(`${md5(address)}/mails/${mailKey}/attachments/${attachmentIdx}/hide`).set(false)
}

export default app
