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
We used Google Slides for our lo-fi prototyping. We checked all of recommended tools in DP4 introduction like Marvel, Invision, proto.io. But these tools were too advanced and had high learnability. So, it looked hard to use efficiently in a short time. So we used Google Slides, the tool which is familiar with us and easy to implement our functions in lo-fi prototyping level. Also, some recommended tools showed which is clickable with blue lectangle, if you double click where is not clickable. But we thought it is bad for user testing, because user should be able to click where cannot click because we should watch how user acts when there is no additional clue like blue lectangle.

### Design choices
* Sorting and searching functionality of files is missing.
It is so hard to represent those kind of functions, so that we do not implement it on lo-fi prototype. 
* When adding a new tag, there should be a keyboard input, but we didn't.
We chose the prototpying tool to 'Google Slides' so that user could not enter any text by therself. We are actually not intended to missing that part but we dropped it to choose the proper prototyping tool. 
* Automatic detecting algorithm by analyzing the body of email whether the attachment files should be or not is missing. 
It needs a real code implementation, so we cannot implement it building lo-fi prototype.
* A simple tutorial or a bridge between an our new feature ( a system managing attachments ) and an ordinary email system are missing.
As we have not enough time to consider about it, we would like to consider deeply and implement some features and elements related to it on mid-fi prototype.


### Representative screenshots

![main](./main.jpg)
* This is our main page. If you open our website, this page will appear at first. Actually, it is similar with Gmail. 
---

![nofile](./nofile.jpg)
* If you write a mail (In prototype, the body of the message is pre-written.) and send file without attaching file, we gives a toast, underline the sentence which includes `attachment` in it.
* Preventing sending mail without attachments.
---

![yesfile](./yesfile.jpg)
* If you attached file, background color is changed to light green and `Send` button is changed to red color.
* Preventing sending mail without attachments.
---

![files](./files.jpg)
* If you click `Files` button, it first shows list of all attachments.
* Function for managing attachments easily with cloud-like service.
---

![CS101](./CS101.jpg)
* A view of attachment files which is filtered by tag #CS101_HW. When a user click `New Tag` button at left down corner, he/she can add a new tag.
* Function for managing attachments easily with cloud-like service.
---

![newtag](./newtag.jpg)
* Page for add new tag. In prototype, the textfield is pre-written.
* Function for managing attachments easily with tags.
---

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
  * We think that changing color is not enough recognizable to users. We will discuss about effective methods to show the user that file is attached and implement at mid-fi prototype.
2. Most users failed to recognize "Send" button changed when a file is attached. (P1, P3, P4)
  * We think it is a similiar with problem 1. We will discuss about effective methods to show the user that file is attached and implement at mid-fi prototype.
3. Some users was uncomfortable with small size of an attachment icon. (P2, P3)
  * We will make the icon more larger at mid-fi prototype.

#### Task 2
4. Most users tried to find attachments by search. But as our prototype doesn't support searching files, they scanned a related mail on the inbox mail list. (P2, P3, P4)
  * We think people usually tend to find files first by searching. We will make our prototype being able to search files at high-fi prototype.
5. Most users felt hard to find files menu because (1) it is new functionality and (2) there is no clue or connection between an ordinary mail system and the new file-menu system. (P1, P2, P3, P4)
  * We never thought about a bridge between an ordinary mail system and the new file-menu system. We will discuss more about this problem and reflect some features at mid-fi prototype.
6. As there was no tags when users sent a mail on Task 1, most users didn't recoginze the existing of tag functionality until they reached 'files' menu.(P1, P2, P3, P4)
  * We could manage sent files in the files tab, but there is no clue on it. We will make it possible to add tags on attachments when writing a mail in mid-fi prototype.
7. Most users spent time on clicking a clip symbol at the right of the mail list to find a list view of attached files. (P1, P2, P3)
  * We thought that this is because the affordance of a clip symbol strongly relates with the concept of attachments in users' mind model. We will take advantage of this fact and add some new features at mid-fi prototype.
8. A word "Files" on the menu list has less affordance to a list of attachments so that it does not seem to fully represent the new features. (P2, P3)
  * We will change the title of the menu 'files', or make better use of the facts we discovered from question 7, to make things more clear.

#### Task 3
9. Most people clicked a label not a checkbox when adding tags.(P1, P2, P4)
  * We will make it possible to select tags by clicking labels at mid-fi prototype.
10. Some people were annoyed by the process of registering a new tag. They wanted the ability to automatically tag or show suggestion tags. (P1, P2, P3, P4)
  * We will provide features about adding tags automatically or suggesting tags at high-fi prototype.



## Paper vs Digital
### 1. types of usability issues they helped identify
* In paper prototypes, people did not know that color change of buttons and background was intended, but in digital prototypes, people realized it was intended.
* Thanks to that, we knew for sure that the color change of the button and backgound was hard for people to notice.
* We realized that people prefer to click on the content itself rather than the checkbox, as the digital prototype can clearly distinguish between clickable and non-clickable areas.

### 2. participants' reaction and expectation to prototypes
* People do not expect any keyboard input for the paper prototype, but expect it in the digital prototype.
* When people used paper prototypes, they were very careful clicking on something, but when using digital prototypes, they tried to poke around.


### 3. summarize what changes you made in the digital prototype based on the feedback from your paper prototyping testing
* We add a functionality of `reducing mistakes in sending emails without attachments`. If you tried to send a mail without attachment, a notification will be shown.
* A list of tags of attachments is sorted as alphabetical order to find a tag easily.
* A clickable button and a text is distinguished clearly on digital prototype. 
* We added `search bar` on the top of the tag list, which is cleary visible to users.
* We didn't changed the position of `+ add tags` button because it is much more affordable.



## Studio Reflections
1. (TA)
    1. Compliments
        - Your prototype is very similar to Google email UI, which is easy to use when they experienced.

    2. Concerns
        - However, since your project is focused on attaching file problems in an email system, I wish that the attaching symbol is too small when we sending the email. Also, I think your team should consider that how to show multiple files in a single email. Also, the list form for showing attached files may not useful in case of many attached files. 

    We thought deeply about missing attachments even though the user had to attach attachments as recovery. However, as prevention, we think it is useful to give visual focus to recall memory about attachments to user. We will consider this in the next prototype. 

2. (Students) 
    1. Compliments
        - I really like this kind of design.

    2. Observations
        - Besides the prototype, I think it would be important to appeal difference of your service from Gmail.
            Until now, we kept thinking about attachments and it brings lack of connection between mail and attachments. We are going to fill this gap by provide auto tagging or tag suggestions on mail editor.
        - Are all the files I got from mail automatically added to the list? What if there're some files that I don't want to save?
            Basically, yes. We didn't think about remove it from list yet, but we think it's important. We'll consider it on Mid-Fi prototyping.
        - I think it would be arduous if the receiver has to tag all of the emails :(
            Of course not. We are going to provide auto-tagging based on the rules on Mid-Fi prototyping.

    3. Prototype usability problems 
        - Nice but hard to notice which button is activated or not. 
        - Once you go, you can't go back.
        - Clicking new mail will create a new mail, but then how to close it..
        - It's hard to know what is clickable, I have to click everywhere.
        - Sometimes your prototype stuck somewhere.. 
        - Many buttons are clickable in some page, but not available when something is changed on that page.I know that it is a constrained when prototyping with ppt, but u shouldn't have used it.

        As we mentioned at Prototyping tool section, most other prototyping tools show a blue bounding box on the screen when a user clicks non-supported component. However, we thought it can make testers to try to find out blue box only, without thinking about the task. 
        We also removed some clickable buttons or features after entering some steps to prevent going in to wrong states, but a student gave us a feedback about it. We might had to keep it.

    4. Trivia
        - That idea of prototype using ppt is so mind blowing.
        - I like the frog.
        - frog is sad
        - Sad frog ㅠㅠㅠㅠ


