# CS374 - DP2
### Team NanoMario

## POV: Point Of View
Graduate Student needs to manage the documents received on E-mail because they are sharing many files with E-mail and it’s uncomfortable.
We met: Graduate Student in Multimedia computing lab
It’d be game-changing to: manage the documents received via E-mail
We were amazed to realize: they are sharing many files with E-mail


## Persona
다양한 채널을 통해 사람들과 자잘한 information (text, image, excel, documents, etc) 공유를 많이 함

1. demographic information such as name, occupation, age, and gender
    ![Photo](./persona.jpg)
    
    name | age | gender | occupation
    -- | -- | -- | -- 
    김공유 Gongyu Kim | 28 | male | Ph.D studnet in KAIST SoC

2. motivations

    I want to finish work quickly. I want to reduce the inefficiency like the useless time of finding a document.

3. beliefs
    * Work must be handled efficiently.
    * Respect the way the group prefers rather than personal preference.

4. preferences
    * Professor
    * Early off work
    * Efficient work
    * Hates the situation where things are delayed with minor mistakes

5. a story or a scenario that captures a task the persona has in mind, with surrounding context.

    I’m 28 years old, Ph.D student in KAIST SoC. A week ago, I had tried to send an email to professor, my research advisor, to share a paper. I personally like Dropbox and Google Drive, but I’m trying to use email as the most lab people, including the professor, are primarily communicating via email.
    However, I was annoyed because I could not get a reply from my professor for a week. When I checked my mail again, I realized that I sent the mail without attaching my paper. I think the mail-sharing system is really uncomfortable.
    One day, my colleague asked me to reshare the file that professor shared before, but I could not find it easily in the mailbox. So I inevitably asked the professor to resend the file again.


## HMW questions
1. HMW improve E-mail attaching document system?
2. **HMW remove attachments from mail?**
3. HMW do not use E-mail when sharing file?
4. **HMW give a better way to manage attachment files?**
5. HMW should not make a file needed to be shared?
6. HMW directly share a document via email when it is saved?
7. HMW a lab leader take care of all file managements?
8. **HMW prevent from forgetting the attachment?**
9. HMW save attachments from the email automatically on the local computer, when the mail is received. 
10. HMW support deep search inside to attachments.


## Solution Ideas
1. **HMW remove attachments from mail?**
    1. Create a cloud storage integrated to save attachments of email
    2. Save files outside and share only link of the files?
    3. When a user uploads a file, connect it to external service.
    4. If a user share a document on external service, send it to the mail.
    5. Put the content of attachment into body of mail.
    6. Share a document in hard-copy.
    7. 
    8.
    9.
    10.

2. **HMW give a better way to manage attachment files?**
    1. Browse files like a folder
    2. Make several cloud folder for attached files, for each mail sharing team.
    3. Make a folder of emails with something attached.
    4. Automatically save the attached files at external file server and browse them.
    5. Filter mail with and without attached files.
    6. Automatically upload it on drive.
    7. Suggest attachment title if it's title is not clear e.g. document.pdf, thesis.docx
    8. 
    9.
    10. 

3. **HMW prevent from forgetting the attachment?**
    1. Set different background color on editor if attachment exists or not
    2. Set different background color on mail-list if attachment exists or not
    3. Automatically group mail by file types
    4. Separate “Send a mail” and “Send file” button
    5. Filter mail with attachments with file name extension.
    6. Make thread for related files.(version control system for mail.)
    7. Add a tag or an image on the title of a mail, which represents attachments.
    8. When an attachment doesn’t exists, show an alert message to get confirm from the user.
    9. Modify attachment before a receiver didn't open yet.
    10. Support receiving check on attachments.


## Top3 Solution
1. Create a cloud storage integrated to save attachments of email
2. Browse files attached to mail system like a folder
3. Set different background color on editor if attachment exists or not

## Storyboards
1. Create a cloud storage integrated to save attachments of email
![story-cloud](./story-cloud.png)

2. Browse files attached to mail system like a folder
![story-folder](./story-folder.png)

3. Set different background color on editor if attachment exists or not
![story-editor](./story-editor.png)
