# CS374 - DP4
### Team NanoMario

## POV
Graduate Student needs to manage the documents received on E-mail because they are sharing many files with E-mail and it’s uncomfortable.

We didn't change our POV, because our POV is still proper to us.

## Tasks
1. Write a new mail to Prof. Juho Kim, attaching a report file.
2. Find a list view of attached files, and check all attachments, and filter CS101_HW related file only.
3. Add a new tag named ‘Lab-Seminar’, and apply it to the ‘0402_lab.ppt’ file.

We also did not changed our tasks from DP3.

## Prototype
### Prototyping tool
We used Google Slides for our lo-fi prototyping. We checked all of recommended tools in DP4 introduction like Marvel, Invision, proto.io. But these tools were too advanced and had high learnability. So, it looked hard to use in a short time. So we used Google Slides, the tool which is familiar with us and easy to implement our functions in lo-fi prototyping level. Also, some recommended tools showed which is clickable with blue lectangle, if you double click where is not clickable. But we thought it is bad for user testing, because user should be able to click where cannot click because we should watch how user acts.

### Design choices
- sorting function


### Representative screenshots

![main](./main.jpg)
This is our main page. If you open our website, this page will appear at first. Actually, it is similar with Gmail. 
![nofile](./nofile.jpg)
* If you write a mail (In prototype, the body of the message is pre-written.) and send file without attaching file, we gives a toast, underline the sentence which includes `attachment` in it. And prevent sending mail without attachments.
* Preventing sending mail without attachments.

![yesfile](./yesfile.jpg)
* If you attached file, background color is changed to light green and `Send` button is changed to red color.
* Preventing sending mail without attachments.

![files](./files.jpg)
* If you click `Files` button, it first shows list of all attachments.
* Function for managing attachments easily with cloud-like service.

![CS101](./CS101.jpg)
* A view of attachment files which is filtered by tag #CS101_HW. When a user click `New Tag` button at left down corner, he/she can add a new tag.
* Function for managing attachments easily with cloud-like service.

![newtag](./newtag.jpg)
* Page for add new tag. In prototype, the textfield is pre-written.
* Function for managing attachments easily with tags.

![changetag](./changetag.jpg)
* You can change tags of files when you click `+` button in file list. In prototype, you were only able to change 0402_lab.ppt's tag, adding Lab Seminar tag. 
* Function for managing attachments easily with tags.

### Instructions
**accessible and executable prototype link**
https://docs.google.com/presentation/d/1NoFqw6YFvfMyzXwfhDT44Cf_9tkGPQPBhUKCOg-6VCE/edit?usp=sharing
**instruction**
Please run “presentation” mode. And please use a mouse, not a keyboard.

## Observations
### Participants
- P1: M.S. student in School of Electrical Engineering / Male / using gmail / Working as TA
- P2: M.S. student in Department of Chemical and Biomolecular Engineering / Male / using kaist mail / Working as TA
- P3: M.S. student in Department of Chemical and Biomolecular Engineering / Male / using kaist mail / Do not work as TA
- P4: Ph.D. 1st grade / Male / using gmail / Working as TA

### Usability problems (Observations)
#### Task 1
1. Most users failed to recognize color change on background when a file is attached. (P1, P3, P4)
2. Most users failed to recognize "Send" button changed when a file is attached. (P1, P3, P4)
3. 
4.

#### Task 2
5. Most users tried to find attachments by search. But as our prototype doesn't support searching files, they scanned a related mail on the inbox mail list.
6. Most users felt hard to find files menu because (1) it is new functionality and (2) there is no clue or connection between an ordinary mail system and the new file-menu system.
7. As there was no tags when users sent a mail on Task 1, most users didn't recoginze the existing of tag functionality until they reached 'files' menu.
8.

#### Task 3
9. Most people clicked a label not a checkbox when adding tags.


## Paper vs Digital
### 1. types of usability issues they helped identify

### 2. participants' reaction and expectation to prototypes

### 3. summarize what changes you made in the digital prototype based on the feedback from your paper prototyping testing


## Studio Reflections
1. (TA) + Your prototype is very similar to Google email UI, which is easy to use when they experienced. - However, since your project is focused on attaching file problems in an email system, I wish that the attaching symbol is too small when we sending the email. Also, I think your team should consider that how to show multiple files in a single email. Also, the list form for showing attached files may not useful in case of many attached files. 

2. (Students) 

