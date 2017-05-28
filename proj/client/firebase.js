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

function defaultMailInfo (address) {
  return {
    from: {
      address: 'no-reply@nanomario.com',
      name: 'Team NanoMario',
    },
    to: address,
    sent: new Date(),
  }
}

function welcomeMails (address) {
  return {
    '-KkzgXG5hXBbcNJpbKjX': {
      ...defaultMailInfo(address),
      title: 'Welcome to Team NanoMario\'s project',
      content: `Tasks\n
      1. Try to send email to Prof. Juho Kim(juhokim@kaist.ac.kr) without file, including '첨부', 'attach', or 'attachment' in mail body. After that, send maill after attach file.\n
      2. Find a card view of attached files, check all attachments, and filter CS101_HW1 related file only.\n
      3. Add a new tag named ‘Lab Seminar’, and apply it to the file that you sent in first task.`,
    },
    '-KkzgXG5hXBbcNJpbKjY': {
      ...defaultMailInfo(address),
      from: {
        address: 'rohjoon@kaist.ac.kr',
        name: 'Rohjoon Myung',
      },
      title: '[CS101] Submit HW1 20179999',
      content: `Hello, I'm studnet 20179999.\n
      I want to submit CS101 HW1.\n
      Please check the attachment.\n
      Thanks!`,
      attachments: {
        0: {
          filename: '20179999_HW1.py',
          link: 'https://firebasestorage.googleapis.com/v0/b/cs374-32b99.appspot.com/o/20179999_HW1-1495692279192.py?alt=media&token=c9de8dce-96eb-4362-9720-df56b5f8ac4e',
          hide: false,
          tags: {
            KAIST: true,
            CS101_HW1: true,
          },
        },
      },
    },
    '-KkzgXG5hXBbcNJpbKjZ': {
      ...defaultMailInfo(address),
      from: {
        address: 'changjej@kaist.ac.kr',
        name: 'Changje Jeong',
      },
      title: 'Pintos Manual',
      content: `This is a pintos manual.
      
      I hope it'll be useful to you.
      `,
      attachments: {
        0: {
          filename: 'pintos.pdf',
          link: 'https://firebasestorage.googleapis.com/v0/b/cs374-32b99.appspot.com/o/pintos.pdf?alt=media&token=c9de8dce-96eb-4362-9720-df56b5f8ac4e',
          hide: false,
          tags: {},
        },
      },
    },
  }
}

function welcome (address) {
  // Put Default Tags
  firebase.database().ref(`/${md5(address)}/tags/KAIST`).set(true)
  firebase.database().ref(`/${md5(address)}/tags/CS101_HW1`).set(true)

  const mails = welcomeMails(address)
  for (const key in mails) {
    // Put Welcome Mail
    firebase.database().ref(`/${md5(address)}/mails/${key}`).set(mails[key])
  }
}

export function getMails (address, callback) {
  firebase.database().ref(`/${md5(address)}/mails/`).on('value', mails => {
    const ret = []
    if (!mails.val()) {
      callback(ret)
      welcome(address)
      return
    }

    let isNewUser = true
    for (const key of Object.keys(mails.val())) {
      const value = mails.val()[key]
      value.key = key
      ret.push(value)

      if (value.from.address === 'no-reply@nanomario.com') {
        isNewUser = false
      }
    }
    callback(ret)

    if (isNewUser) {
      welcome(address)
    }
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
  let ext
  if (file) {
    // Upload to firebase storage
    const s = file.name.split('.')
    ext = s.pop()
    const fileKey = (new Date()).valueOf()
    const resp = await firebase.storage().ref(`/${s.join('.')}-${fileKey}.${ext}`).put(file)
    const tags = {}
    tags[ext] = true
    newMailData.attachments.push({ filename: file.name, link: resp.downloadURL, hide: false, tags })
  }

  // Receiver Inbox
  const receiverMailsRef = firebase.database().ref(`${md5(to)}/mails/`)
  await receiverMailsRef.push(newMailData)
  firebase.database().ref(`${md5(to)}/tags/${ext}`).set(true)

  if (to !== address) {
    // Sender Sent
    const senderMailsRef = firebase.database().ref(`${md5(address)}/mails/`)
    await senderMailsRef.push(newMailData)
    firebase.database().ref(`${md5(to)}/tags/${ext}`).set(true)
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
