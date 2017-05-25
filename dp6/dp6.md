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
There are a lot of reflections from students. We classified the reflections in several categories and determine how important they are. If the task is done, we wrote '(done)' sign on the right of the category title or the reflection item.

### Notify the error (done)
>> It’s already implemented and it’s working well. Please note the mail address please to check it.
>> New Mail: form validation is not kind, please note why this field incorrect.
We thought it is reasonable and this makes a user confused. So we correct it. Now, if user enters an email address wrong, the error message exactly notify user what was wrong.

### Files
>> I want to distinguish the files I got and the ones I sent. 
>> Files: group by receiver not sender (sender is always same, maybe)
Most students would like to classify files sent and files recieved. Now, we just sort it and people could check weather it is sent or recieved though then sender's email. We're going to add this new feature, distinguishing files sent or received, before the user test. 

>> Files: Date is not human-friendly format2. (done)
We agreed, so we reflect it. 

### Removing Tags (done)
>> In sent page, tags delete is impossible**
>> tag is not removable. I mean the tag categories, not tag on each mail.
This must be implemented. Now you can remove the tag by clicking 'remove tag' button, which changes the state of the list of tag. You cannot undo the action right now. 

### Handling empty tag (done)
>> There shouldn’t be ‘new tag’ drop down ui when there is no more tag to add.
>> always the empty option appears
>> Should not allow “empty tag”
Actually it was a bug. Now, a user cannot add an empty tag and also, the system doesn't show any tagging options to files if there is no tag to add. 

### Problems with hiding a file (done)
>> Hide = remove? I could not see the hidden files again after refreshing
>> Can I redo hide?
>> I can’t undo when i click the hide button. x 
>> What does that ‘hide’ mean? It seems like in ‘unclassified’ page, ‘hide’ means to hide it. However in ‘All’ page, ‘hide’ means delete? Oh.. I was just curios so clicked it, but my files are no longer shown in the other folder either.. I think that ‘hide’ is quite a dangerous operation. So maybe pop-up for caution will be helpful. 
Actually, `hide` button does not delete the file. It just make it not showing on the list. But this makes a user feel that the file is removed, so we add 'hide' field to list up separately, and undoing 'hide' status for a file to be re-shown on the file lise. 

### Several technical problem (done)
>> If I click ‘send’ button 3 times, it’s actually sent 3 times..
>> clearly there’s something wrong with the send button. First it doesnt disappear, furthermore, it sends multiple mails, which is not cool.
>> Files: ‘New Tags’ form position is changed by # of tags.
>> I can see files with tag in set box but the ‘files’ tab does not show any single file. 
As we didn't handle exceptions clicking a butotn while waiting for a response, several problems are happened. So we handle them, and also, fix an layout bug.


### Tagging a file when sending a mail
>> If would be also great if I can ‘tag’ a file when I am sending a email. 
We thought it is good idea so that We’re going to add this before the user test. 


### Tagging on Sent view (done)
>> I want to add tag in the “Sent” box
We thought it is important for usability, we implement it right away. 

### Problem on testing 
>> I need more ‘resources’ to test inbox function 
For a user to experience this system, we have to add several default data including emails and dummy files. We're going to define what data should we put as default when developing a user test, and implement it before the testing. 


### Left navbar is too large 
>> Left navbar is too large. I think it might be better to adjust the width of it.
Only one student always points out this problem. But out team doesn't think it is a big problem, so we have just left this problem.

### A file specific mail sent notification
>> Send: notify what type of mail is sent. (ex. New Image Mail is Sent)
It is actually cool idea as giving a user concrete feedback of what file was sent. But we're not sure we can handle this before the semester end. We're going to planning weather we implement this or not on DP8 period. 

### Future work (which we will not implement on this semester)
#### Drag and Drop feature. 
>> In ‘files’ page, I want direct manipulation of the files. I know I can put tags, then they go to the corresponding folder. However, it’d be greater if I can just drag and drop. Also, it’d be nicer if I can drag multiple files at the same time, and drop them. 
It is so hard to implement and not that important to testing our main features. Also, it is too much for the hi-fi prototpye. So we drop it for this semester and have left it as a future work.

#### previewing the file
>> The image should be able to preview right away, clicking to open a new tab to view is not very effective.
We thought it is too much for the prototype.

#### Subtag
>> Can we have ‘tag’ and ‘subtag’? for example files with CS374 tags may have subtags ‘DP1’ ‘DP2’… 
Also, it is too much for our prototype. We don't have enough time to implement this, and it is hard to implement because we have to re-consider the system design to do so.

#### searching
>> Search: can we choose some directory(Inbox, Sent, File) to search?
First, we're going to add this feature, but as the time and implementation issue, we couldn't do it. To implement search functionality, we should design the 'search result' page and implement it, but we don't have much time to do them.

#### Length of the list of the email. 
>> IT WOULD BE A HUGE PROBLEM IF THERE ARE A LOT OF MAILS BECAUSE
 IF SO, THE NUMBER OF TAGS WOULD BE INCREADIBLY HUGE 
 (THAT IS THE REASON WHY WE DONT USUALLY SEE THIS FEATURE IN MAIL SYSTEMS, THEY USE SEACH INSTEAD)
 -> ONE POTENTIAL SOLUTION COULD BE: DON’T AUTOMATICALLY PRODUCE TAGS FOR MAILS, LET USERS DO IT MANUALLY.
>> i guess the length of the list would be so long when you get many emails. 
Maybe, the pagination might be helpful for this problem. But we thought this problem is not that important for verifying our main feature and testing to user, so we're not going to implement this. 


2. (TA) I wish that your prototype could use extension of files to classify the attached files.
Extension is a good cue about what this file is. And we are going to add 'Adding tag automatically' function later in process. So, we can add tag about extension automatically before user test started. For example, 'hwp' tag will be added automatically on '*.hwp' file, or 'doc' tag on '*.doc' file.

3. (TA) In the sent page, if there are many sent emails, the user cannot distinguish which emails have attached files or not. It would be better to emphasis the attached file mark or use tags.
There were clip mark for representing this mail has attachments, but it was too small so hard to recognize when there are many emails. So we largen the clip mark to emphasize it.
