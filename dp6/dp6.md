# CS374 - DP6
### Team NanoMario

## POV
Graduate Student needs to manage the documents received on E-mail because they are sharing many files with E-mail and it’s uncomfortable.

## Target Users
Graduate students who suffer problems about attaching files on mail system & hope managing files in mail well.

## Tasks
1. Try to send email to Prof. Juho Kim(juhokim@kaist.ac.kr) without file, including '첨부', 'attach', or 'attachment' in mail body. After that, send maill after attach file.
2. Find a list view of attached files, check all attachments, and filter CS101_HW related file only.
3. Add a new tag named ‘Lab-Seminar’, and apply it to the file that you sent in first task.

## Implementation Notes

### URL of your prototype


### URL of your Git repository
https://github.com/rodumani/CS374/tree/master/proj

### Libraries and frameworks
- vue.js: JavaScript view framework
- vuex: State management library for vue.js
- vue-router: JavaScript router for vue.js
- vee-validate: Validating inputs for vue.js
- element-ui: UI framework for vue.js
- font-awesome: Icon libarary
- moment: JavaScript datetime library
- firebase: Firebase JavaScript client
- bootstrap: The most popular front-end framework for developing web
- babel: JavaScript Transiler from ES6+ to ES5
- webpack: assets bundler

### Lessons from heuristic evaluation
1. No way to remove tags.
- Similar feedback mentioned more than 5 times.
- We added 'Hide' function to remove tag. also, we can hide files on Files.
2. Cannot handle very long tag.
- mentioned three times.
- We added length restriction on tag size. User cannot make tag with more than 20 characters.
3. Because Sent mail and received mail is in one box. Mixed mail is uncomfortable.
- mentioned three times.
- We divied our mail box to Sent and Inbox(received mail).
4. The date format is not easily readable to human. (ex. 2017-05-11T04:18:03.427Z)
- mentioned three times.
- We actually showed date with system status. To solve this, we used moment.js for display dates and times beautifully.
5. Tags look clickable but they aren't.
- mentioned twice.
- Because tag's color was blue at heuristic evaluation, it was more colorful & highlighted than file's title or others. So we changed our tag's color to grey, and reduced size.
6. There is no change when I click Mail icon or text 'mail' on upper left side.
- mentioned twice.
- Because most site provides return to main page when click upper left side logo, we set user go back to Inbox page.
7. When click the from whom. I expect the mails with 'whom's' mail list. or resend to 'whom' . but it didn't.
- mentioned twice.
- When user click Sender's name in Inbox, most mail system provides showing sending email page to sender. So we applied it to our mail system, too. 
8. There are no 'Date' column on the Inbox. Users will definitely expect the date information in the Inbox.
- mentioned once.
- We add date column on the Inbox.

Other minor heuristic evaluations are not listed.

### Representative screenshots


## Individual Reflections

### Rohjoon Myung (20090336)

#### Which part the UI did you directly contribute to?

#### What were some of the difficulties you faced?

#### List one useful implementation skill you learned while working on DP5 and DP6.

### Changje Jeong (20110846)

#### Which part the UI did you directly contribute to?

#### What were some of the difficulties you faced?

#### List one useful implementation skill you learned while working on DP5 and DP6.

### Seongwon Lee (20150556)

#### Which part the UI did you directly contribute to?

#### What were some of the difficulties you faced?

#### List one useful implementation skill you learned while working on DP5 and DP6.

### Seungmin Lee (20150566)

#### Which part the UI did you directly contribute to?

#### What were some of the difficulties you faced?

#### List one useful implementation skill you learned while working on DP5 and DP6.

## Studio Reflections
1. (Students)

2. (TA) I wish that your prototype could use extension of files to classify the attached files.
Extension is a good cue about what this file is. And we are going to add 'Adding tag automatically' function later in process. So, we can add tag about extension automatically before user test started. For example, 'hwp' tag will be added automatically on '*.hwp' file, or 'doc' tag on '*.doc' file.

3. (TA) In the sent page, if there are many sent emails, the user cannot distinguish which emails have attached files or not. It would be better to emphasis the attached file mark or use tags.
There were clip mark for representing this mail has attachments, but it was too small so hard to recognize when there are many emails. So we largen the clip mark to emphasize it.