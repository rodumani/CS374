import * as firebase from 'firebase'

const app = firebase.initializeApp({
    apiKey: 'AIzaSyAIabkecMC8i0cJvE-3YrPWB816k_0fYEY',
    authDomain: 'cs374-32b99.firebaseapp.com',
    databaseURL: 'https://cs374-32b99.firebaseio.com',
    projectId: 'cs374-32b99',
    storageBucket: 'cs374-32b99.appspot.com',
    messagingSenderId: '771327049053',
})

export function getMails(callback) {
    firebase.database().ref('/mails/').on('value', (mails) => {
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

export async function pushMail(body, { address, name }, to, title, file) {
    const mailsRef = firebase.database().ref('/mails/')
    const newMailRef = mailsRef.push()
    const newMailData = {
        content: body,
        from: {
            address,
            name,
        },
        to: to,
        title: title,
        sent: (new Date()).toISOString(),
        attachments: [],
    }
    if (file) {
        // Upload to firebase storage
        const fileKey = (new Date()).valueOf()
        const resp = await firebase.storage().ref(`/${fileKey}`).put(file)
            // newMailData.attachments = { filename: file.name, link: resp.downloadURL, toHide: false, fromHide: false }
        newMailData.attachments.push({ filename: file.name, link: resp.downloadURL, toHide: false, fromHide: false })
    }
    newMailRef.set(newMailData)
}

export function getTags(callback) {
    firebase.database().ref('/tags/').on('value', (tags) => {
        if (!tags.val()) {
            callback([])
            return
        }
        const ret = []
        for (const key of Object.keys(tags.val())) {
            const value = tags.val()[key]
            ret.push(value)
        }
        callback(ret)
    })
}

export async function addTags(account, newTag) {
    await firebase.database().ref('/tags/').push({
        account,
        tag: newTag,
    })
}

export async function putTag(mailKey, attachmentIdx, tag) {
    await firebase.database().ref(`/mails/${mailKey}/attachments/${attachmentIdx}/tags`).push({
        name: tag,
    })
}

export async function removeTag(mailKey, attachmentIdx, tag) {
    await firebase.database().ref(`/mails/${mailKey}/attachments/${attachmentIdx}/tags/${tag.key}`).remove()
    console.log('/mails/' + mailKey + '/attachments/' + attachmentIdx + '/tags/' + tag.key)
}

export async function hideFile(mailKey, attachmentIdx, fileType) {
    if (fileType === "fromFile") {
        await firebase.database().ref(`/mails/${mailKey}/attachments/${attachmentIdx}`).update({ fromHide: true })
    } else {
        await firebase.database().ref(`/mails/${mailKey}/attachments/${attachmentIdx}`).update({ toHide: true })
    }
}

export default app