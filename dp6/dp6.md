# CS374 - DP6
### Team NanoMario

## POV
Graduate Student needs to manage the documents received on E-mail because they are sharing many files with E-mail and it’s uncomfortable.

## Target Users
Graduate students who suffer problems about attaching files on mail system & hope managing files in mail well.

## Tasks
1. Try to send email to Prof. Juho Kim(juhokim@kaist.ac.kr) without file, including words such as '첨부', 'attach', or 'attachment' in mail body. After that, send a mail after attaching a file.
2. Find a card view of attached files, checking all attachments, and filter CS101_HW1 related files only.
3. Add a new tag named ‘Lab Seminar’, and apply it to the file that you have sent on the first task.

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
1. There is no way to remove tags.
- Similar feedback mentioned more than 5 times.
- We added removing functionaliy to remove tag, which is attached on the mail, or created by user. Also, we can hide files on Files tab.
2. Cannot handle very long tag.
- It was mentioned three times.
- We added length restriction on the length of a tag. A user cannot make a tag with more than 20 characters.
3. Because mails sent or received are on a single mail box, it is uncomfortable.
- mentioned three times.
- We divided our mail box to `Sent` and `Inbox`(received mail).
4. The date format is not easily readable to human. (ex. 2017-05-11T04:18:03.427Z)
- mentioned three times.
- We actually showed date with system status. To solve this, we used moment.js to display dates and times much readable.
5. Tags look clickable but they aren't.
- mentioned twice.
- Because a color of tags on the file was blue at heuristic evaluation, it was more colorful & highlighted than file's title or others. So we changed our tag's color to grey, and reduced the size.
6. There is no change when I click Mail icon or text 'mail' on upper left side.
- mentioned twice.
- As most site provides a function returning to the main page when clicking upper left side logo, we set user go back to Inbox page.
7. When click the from whom. I expect the mails with 'whom's' mail list. or resend to 'whom' . but it didn't.
- mentioned twice.
- When user clicks Sender's name on the Inbox, most user expected for a mail system to provides a sending email page to the sender. But showing different result when clicking different area of a single row does not seem to be a good idea, we applied it on 'show mail' page. 
8. There are no 'Date' column on the Inbox. Users will definitely expect the date information in the Inbox.
- mentioned once.
- We add date column on the Inbox.
9. Search bar doesn't work.
- mentioned twice.
- We have not enough time to implement serach functionality and designing a search result page, we would skip this functionality. 
10. Tags are messy
- mentioned more than thrid times.
- As the mid-fi prototype shared the all tags data to every user, it was so messy. So we add 'account' functionality and make a tag system for a user to add and manage their own tags.
11. Technical issues including error when adding a tag, UI vibration, and so on.
- mentioned a lot.
- Everyting was a bug, and we fixed every issues.

Other minor heuristic evaluations are not listed.

### Representative screenshots
![login page](./login.JPG)
- This is login page of our mail system. You can login with vaild email address format and your name.
---
![inbox](./inbox.JPG)
- If you login, you can see received files on Inbox tab. Also, you can check their is clip image, if there is attachment in mail.
---
![Warning when you sending mail](./warn_no_attached_file.JPG)
- Task 1 related screenshot.
- When you send a new mail, if some keywords about attachment included in your mail body but  there is no attached files, we give a warning when you click `Send` Button.
---
![Files](./files.JPG)
 - Task 2 related screenshot.
 - If you click Files tab, you can watch our mail system's distinct feature from other mail systems. We helps you to manage attached files with tags. All files that you sent of received are managed by tags. Items are ordered in recently sent/received files. Lab_schedule.doc in screenshot is what I sent in Task 1.
---
 ![Filtered files](./CS101_HW1.png)
 - Task 2 related screenshot.
 - Also, you can filter files with tags. We hope this feature helps graduate students manage files easily when they work as TA, or when they have some special events.
---
 ![Adding new tag](./new_tag.JPG)
 - Task 3 related screenshot.
 - If you click `Add new tag` button, you can add new tag. For preventing broken design, tag size is limited as 20 characters.
---
 ![Lab seminar tag added](./tag_added.JPG)
 - Task 3 related screenshot.
 - Finally, you can add proper tag to file!
---
 ![Mail body](./mail_body.JPG)
 - Also, you can check your tags on Inbox/Sent showing mail page.

## Individual Reflections

### Rohjoon Myung (20090336)

#### Which part the UI did you directly contribute to?
  I mainly contributed ‘tag’ functionality, such as adding a new tag, removing a tag, and listing files filtered by a tag. Also, from the feedback, I developed several small functions to improve usability like autofocusing when a small window pops up, handling keyboard input like esc and enter, and so on.

#### What were some of the difficulties you faced?
  I had never used vue framework before. Also, I was not familiar with html and css things. So, I need some time to be familiar with those things we used for the project.
  Also, It was so hard to determine how could we make this button much more visible or how could we make this list not to be like a button, and so on. There are a lot of things to decide in UI, but it was the first time for us to consider such a perceptional things, it was a bit hard to figuring out the proper solution.

#### List one useful implementation skill you learned while working on DP5 and DP6.
 Now I’m much familiar with ES6 javascript syntax, and usage of it. The most interesting I’ve learned was that every single element of Javascript is an object so that I could add whatever I want such as functions, variables, and so on, to the object.
 I’d been much familiar with Bootstrap so that I could easily modify html file much more nicely and decent. I could search whatever CSS I would like to apply, such as proper font color and size, layout of elements, a design of button, and so on.
 And I could utilize vue framework much better so that I could easily add some functionality with simple & compact codes, which doesn’t need to be copied & pasted a lot.

### Changje Jeong (20110846)

#### Which part the UI did you directly contribute to?
I directly contribute to Login view, Inbox/Sent list view, and Files tab's file grid. Also, I built the basic layout of our project, e.g. Side Navbar, Topbar.

#### What were some of the difficulties you faced?
Because we made it without server, making data structure and logics to work properly with shared firebase database was hard. 

#### List one useful implementation skill you learned while working on DP5 and DP6.
I have known firebase before the class but I haven't used it. I've learned how to use firebase database and hosting on firebase hosting. It was good opportunity to learn many features and limitations of firebase database. Especially, firebase hosting is much easier than I expected.

### Seongwon Lee (20150556)

#### Which part the UI did you directly contribute to?
I mainly implemented the modal that showed when user click `New Mail` Button, and sending data to Firebase. and I implemented tag showing when user watch mail body.

#### What were some of the difficulties you faced?
Actually I almost novice to Vue.js and Firebase, it was hard to use these tools well. I faced so many errors, so it made my coding speed slow. But I was able to get a lot of help from our team members - Thanks to team members.

#### List one useful implementation skill you learned while working on DP5 and DP6.
Alert in bootstrap was different with alert in javascript. Actually alert in javascript was something like modal, but we implemented alert as a div with v-show(makes div showed when some condition matched). Maybe, alert with div would be proper to these days web. And I was able to know how to use Firebase, and it helped me a lot when I do pr3.

### Seungmin Lee (20150566)

#### Which part the UI did you directly contribute to?
I mainly contributed showing a mail's specifications and contents (ShowMail.vue), hiding an attached file in the Files tab, and preventing generation of a duplicated tag or an empty tag.

#### What were some of the difficulties you faced?
I used npm(node package manager) and vue.js for the first time. It takes a lot of time to study and understand about the usage and structure of them. I only have used database with tables. It was quite unfamiliar to use firebase database, which is a json form.

#### List one useful implementation skill you learned while working on DP5 and DP6.
By working on DP5 and DP6, I have known and used about lots of libraries such as Bootstrap, Font Awesome, element-ui, moment, vuex, vue-router and how to apply these libraries using npm install or putting in the html head tag. I think I can find and use new more libraries that I need at anytime.


## Studio Reflections
1. (Students) There are a lot of reflections from students. We classified the reflections in several categories and determine how important they are. If the task is done, we wrote '(done)' sign on the right of the category title or the reflection item.

#### Notify the error (done)
> - It’s already implemented and it’s working well. Please note the mail address please to check it.
> - New Mail: form validation is not kind, please note why this field incorrect.

We thought it is reasonable and this makes a user confused. So we correct it. Now, if user enters an email address wrong, the error message exactly notify user what was wrong.

#### Files
> - I want to distinguish the files I got and the ones I sent. 
> - Files: group by receiver not sender (sender is always same, maybe)

Most students would like to classify files sent and files received. Now, we just sort it and people could check whether it is sent or received through the sender's email. We're going to add this new feature, distinguishing files sent or received, before the user test. 

> - Files: Date is not human-friendly format2. (done)

We agreed, so we reflect it. 

#### Removing Tags (done)
> - In sent page, tags delete is impossible
> - tag is not removable. I mean the tag categories, not tag on each mail.

This must be implemented. Now you can remove the tag by clicking 'remove tag' button, which changes the state of the list of tag. You cannot undo the action right now. 

#### Handling empty tag (done)
> - There shouldn’t be 'new tag' drop down ui when there is no more tag to add.
> - always the empty option appears
> - Should not allow "empty tag"

Actually it was a bug. Now, a user cannot add an empty tag and also, the system don't show any tagging options to files if there is no tag to add. 

#### Problems with hiding a file (done)
> - Hide = remove? I could not see the hidden files again after refreshing
> - Can I redo hide?
> - I can’t undo when I click the hide button. 
> - What does that ‘hide’ mean? It seems like in ‘unclassified’ page, ‘hide’ means to hide it. However in ‘All’ page, ‘hide’ means delete? Oh.. I was just curios so clicked it, but my files are no longer shown in the other folder either.. I think that ‘hide’ is quite a dangerous operation. So maybe pop-up for caution will be helpful. 

Actually, `hide` button do not delete the file. It just make it to disappear on the list. But this makes a user feel that the file is removed, so we add 'hide' field to list up separately, and undoing 'hide' status for a file to be re-shown on the file list. 

#### Several technical problem (done)
> - If I click ‘send’ button 3 times, it’s actually sent 3 times..
>-  clearly there’s something wrong with the send button. First it doesnt disappear, furthermore, it sends multiple mails, which is not cool.
> - Files: ‘New Tags’ form position is changed by # of tags.
> - I can see files with tag in set box but the ‘files’ tab does not show any single file. 

As we didn't handle exceptions clicking a butotn while waiting for a response, several problems were happened. So we handled them, and also, fixed an layout bug.


#### Tagging a file when sending a mail
> - If would be also great if I can ‘tag’ a file when I am sending a email. 

We thought it is a good idea so that We’re going to add this before the user test. 


#### Tagging on Sent view (done)
> - I want to add tag in the “Sent” box

We thought it is important for usability, we implemented it right away. 

#### Problem on testing 
> - I need more ‘resources’ to test inbox function 

For a user to experience this system, we have to add several default data including emails and dummy files. We're going to define what data should we put as default when developing a user test, and implement it before the testing. 


#### Left navbar is too large (done)
> - Left navbar is too large. I think it might be better to adjust the width of it.

Because the width of navbar is proportional to the size of window, some people might feel the left navbar was so large when the window is the full screen size. So, we add css to restrict maximum width of navbar. 

#### A file specific mail sent notification
> - Send: notify what type of mail is sent. (ex. New Image Mail is Sent)

It is actually cool idea as giving a user concrete feedback of what file was sent. But we're not sure we can handle this before the semester end. We're going to planning whether we implement this or not on DP8 period. 

#### Future work (which we will not implement on this semester)
##### Drag and Drop feature. 
> - In ‘files’ page, I want direct manipulation of the files. I know I can put tags, then they go to the corresponding folder. However, it’d be greater if I can just drag and drop. Also, it’d be nicer if I can drag multiple files at the same time, and drop them. 

It is so hard to implement and not much important to test as our main features. Also, it is too much for the hi-fi prototpye. So we drop it for this semester and have left it as a future work.

##### Previewing the file
> - The image should be able to preview right away, clicking to open a new tab to view is not very effective.

We thought it is too much for the prototype.

##### Subtag
> - Can we have ‘tag’ and ‘subtag’? for example files with CS374 tags may have subtags ‘DP1’ ‘DP2’… 

Also, it is too much for our prototype. We don't have enough time to implement this, and it is hard to implement because we have to re-consider the system design to do so.

##### Searching
> - Search: can we choose some directory(Inbox, Sent, File) to search?

First, we're going to add this feature, but as the time and implementation issue, we couldn't do it. To implement search functionality, we should design the 'search result' page and implement it, but we don't have much time to do them.

##### Length of the list of the email. 
> - IT WOULD BE A HUGE PROBLEM IF THERE ARE A LOT OF MAILS BECAUSE
 IF SO, THE NUMBER OF TAGS WOULD BE INCREADIBLY HUGE 
 (THAT IS THE REASON WHY WE DONT USUALLY SEE THIS FEATURE IN MAIL SYSTEMS, THEY USE SEACH INSTEAD)
 -> ONE POTENTIAL SOLUTION COULD BE: DON’T AUTOMATICALLY PRODUCE TAGS FOR MAILS, LET USERS DO IT MANUALLY.
> - i guess the length of the list would be so long when you get many emails. 

Maybe, the pagination might be helpful for this problem. But we thought this problem is not that important for verifying our main feature and testing to user, so we're not going to implement this. 


2. (TA) There were two feedbacks from TA, and both feedbacks were helpful to us. So we gonna implement both feedbacks on our prototype.

> - I wish that your prototype could use extension of files to classify the attached files.

Extension is a good cue about what this file is. And we are going to add 'Adding tag automatically' function later in process. So, we can add tag about extension automatically before user test started. For example, 'hwp' tag will be added automatically on '\*.hwp' file, or 'doc' tag on '\*.doc' file.

> - In the sent page, if there are many sent emails, the user cannot distinguish which emails have attached files or not. It would be better to emphasis the attached file mark or use tags.

There were clip mark for representing this mail has attachments, but it was too small so hard to recognize when there are many emails. So we largen the clip mark to emphasize it.
