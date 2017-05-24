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
[https://cs374-32b99.firebaseapp.com](cs374-32b99.firebaseapp.com)


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



- - - -
## Notify the error (done)
* It’s already implemented and it’s working well. Please note the mail address please to check it.
* **New Mail: form validation is not kind, please note why this field incorrect.**
- - - -
## Files
* I want to distinguish the files I got and the ones I sent. 
* Files: group by receiver not sender (sender is always same, maybe)
>> 보낸 파일과 받은 파일을 구분하고 싶다. 
현재 sorting만 해둔 상태고, 보낸 사람 메일을 보면 확인할 수 있긴 하다. 
보낸메일 포함 / 보낸 메일 제외 버튼을 User test전에 추가할 예정이다. 

* **Files: Date is not human-friendly format2. (done)**
- - - -
## Remove Tags
3. **In sent page, tags delete is impossible**
4. 25 tag is not removable. I mean the tag categories, not tag on each mail.
>> done. 
- - - -
## Handling empty tag (done)
* **There shouldn’t be ‘new tag’ drop down ui when there is no more tag to add.**
* always the empty option appears
* 17 Should not allow “empty tag”

- - - -
## Hiding a file
* Hide = remove? I could not see the hidden files again after refreshing
* Can I redo hide?
* I can’t undo when i click the hide button. x 
* What does that ‘hide’ mean? It seems like in ‘unclassified’ page, ‘hide’ means to hide it. However in ‘All’ page, ‘hide’ means delete? Oh.. I was just curios so clicked it, but my files are no longer shown in the other folder either.. I think that ‘hide’ is quite a dangerous operation. So maybe pop-up for caution will be helpful. 
>> Hide가 remove는 아닌데, remove 처럼 느껴져서, Hide Field를 따로 만들어 별도로 모아서 보여주도록 수정하였다. 즉각적인 undo 기능이 직접 존재하지는 않지만, hidden 메뉴에 들어가서 undo 할 수 있다. 
- - - -
## technical problem (solved)
10. **If I click ‘send’ button 3 times, it’s actually sent 3 times..**
11. clearly there’s something wrong with the send button. First it doesnt disappear, furthermore, it sends multiple mails, which is not cool.
12. Files: ‘New Tags’ form position is changed by # of tags.
13. I can see files with tag in set box but the ‘files’ tab does not show any single file. 
- - - -
## Tagging a file when sending a mail
* If would be also great if I can ‘tag’ a file when I am sending a email. 
>> We’re going to add this before the user test. 

- - - -
## Tagging on Sent view (done)
* I want to add tag in the “Sent” box
>> 중요하다고 생각해서 구현 했다. 
- - - -
## problem on testing 
* I need more ‘resources’ to test inbox function 
>> 유저 테스트를 설계하면서, 기본 데이터를 어떻게 구성하고 넣을지 고민한 뒤 구현할 예정이다. 

- - - -
## Left navbar is too large (안중요)
* Left navbar is too large. I think it might be better to adjust the width of it.

- - - -
## Future work
#### Drag and Drop feature. 
5. In ‘files’ page, I want direct manipulation of the files. I know I can put tags, then they go to the corresponding folder. However, it’d be greater if I can just drag and drop. Also, it’d be nicer if I can drag multiple files at the same time, and drop them. 

#### 메일 보낼 때 다른 알림
* Send: notify what type of mail is sent. (ex. New Image Mail is Sent)

#### previewing the file
* The image should be able to preview right away, clicking to open a new tab to view is not very effective.
>> 너무 어렵다…. 

#### Subtag
* Can we have ‘tag’ and ‘subtag’? for example files with CS374 tags may have subtags ‘DP1’ ‘DP2’… 
>> 프로토 타입에서 너무 과분하다. 구현할 시간이 부족하고, 기존의 시스템에서 고쳐야 할것이 많아 구현이 불가능하다. 

#### searching
* Search: can we choose some directory(Inbox, Sent, File) to search?
시간상 이유로 구현이 불가능했다. 

#### Length of the list of the email. 
1. IT WOULD BE A HUGE PROBLEM IF THERE ARE A LOT OF MAILS BECAUSE
 IF SO, THE NUMBER OF TAGS WOULD BE INCREADIBLY HUGE 
 (THAT IS THE REASON WHY WE DONT USUALLY SEE THIS FEATURE IN MAIL SYSTEMS, THEY USE SEACH INSTEAD)
 -> ONE POTENTIAL SOLUTION COULD BE: DON’T AUTOMATICALLY PRODUCE TAGS FOR MAILS, LET USERS DO IT MANUALLY.
4. i guess the length of the list would be so long when you get many emails. 
>> Pagination을 하면 되지만 굳이하지는 않을 것이다. 

2. (TA) I wish that your prototype could use extension of files to classify the attached files.
Extension is a good cue about what this file is. And we are going to add 'Adding tag automatically' function later in process. So, we can add tag about extension automatically before user test started. For example, 'hwp' tag will be added automatically on '*.hwp' file, or 'doc' tag on '*.doc' file.

3. (TA) In the sent page, if there are many sent emails, the user cannot distinguish which emails have attached files or not. It would be better to emphasis the attached file mark or use tags.
There were clip mark for representing this mail has attachments, but it was too small so hard to recognize when there are many emails. So we largen the clip mark to emphasize it.
