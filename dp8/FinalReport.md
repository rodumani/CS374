# CS374 - DP8
### Team NanoMario

# 1. Studio Presentation
## 1-1. Summarize findings from your user testing
- Many people tried to add a file at the new tag page which is empty.
- Many people did not understand what hidden button represents.
- Many people try to add a new tag by typing on ‘drop down menu of selecting a new tag’ on each file cards.

## 1-2. Report progress on your iteration. 

- Our goal was to fix existing bugs, and to implement new features from user testing feedbacks.
- We had fixed several bugs found on the user test.
- We took another user test to verify our prototype again.
- We tried to implement new features to resolve usability issue found on the user test period.

# 2. Final Presenation
## 2-1.  What part of the design process you want to convey to the audience

- We will show how prototypes have emerged through the overall design process, and emphasize what each of the features of the prototype is meant to be.
- Because the quality of the hi-fi prototype is quite good, we will convey the audience through the features of the prototype.


## 2-2. Which part do you think is most exciting and strongest?

- `UI screenshots or walkthrough` part might be the most exciting and strongest, because Many of the prototype's features are designed to meet user needs and address a variety of usability issues.

# 3. Video
You could watch our video in [here](https://www.youtube.com/watch?v=UbCikJJBA-A&feature=youtu.be). 


# 4. Iteration
## 4-1. How did you spend the DP8 period for iteration? Why?
1.  We fixed several bugs found on DP7 period. 
    
- To make our prototype running smoothly, we had to fix bugs. To finalize our prototype, we fixed bugs. 

2.  We implemented new features to resolve high and mid usability issues found on DP7 period.
   
- Our goal is to make a fine, grand, and refined prototype. So to reslove the usability issues, we make several new features and implement them.  

3. We took another user test to verify our system.
    
- Our assumption and solution to fix the usability issues might be wrong. So we took another user test to check whether we solved them correctly. 

4. We could not implement rest of the issues becuase we don't have much time to prepare the final exams.

## 4-2. What changes did you make? Show concrete examples and data whenever applicable.
### Bug Fix
1. File was not downloaded but showed on a new chrome tab

- Most people afforded to download the file when click the files. We fixed it so that now it starts downloading files on `files` page when a user clicks a file card.

2. When a sender tags a file, on a receiver's view, the file has a tag, which is not expected.

- We modified a tag to be managed separately for each user.

3. A user could not send a mail to un-registered users, i.e. a user who had never used our program.

- This bug was found during the additional user test held on the iteration period.  So we've fix it.


### New features
1. Auto tagging

- A user could create a condition and a tag to add if the condition matches.

2. Notify user that mail body is empty

- Actually, this feature is not related with our Point of View and HMW things. But for the improved usability experience on using prototype, we add this functionality.

3. Automatic tagging with file extension

- A user could manage their files with file extensions. A system adds a tag to each files with its file extension automatically. 


## 4-3. What did you learn? (from the iteration)
- We learned what the true design process is! By fixing several usability issues and doing a user test again, our team fully understood a design Process based on making a prototype, testing to users, finding usability issues, which is included in iteration process.
- The more we repeated the Iteration process, the better the quality of the prototype.
- It is always difficult to finalize.

# 5. Individual reflection
## Rohjoon Myung (20090336)
1. What part of the UI implementation did you contribute to?

- Adding a tag to a file.
- Removing a tag 
- Handling keyboard input

2. What worked well and not in your team? How did you overcome any hurdle in teamwork? What lesson about teamwork did you learn that you might apply to your next team project?

- The teamwork was really great. Every meeting was done very efficent so that we had never been spending whole night to write a report or prepare something.
- Luckily, everything was fine. Sometimes one of team members was sick or tired. Then we all understood his health and let him rest. He worked really well after getting better. 
- For a good teamwork, understand and trust each other is the most important thing. We trusted each other, so we let him rest when he was sick or tired, as we knew that he will be better and do his work well on next time. 

3. Throughout the team-based design project experience, what did you learn about the user-centered design process and web-based GUI implementation?

- I learned the importance and power of prototype. Before we dived into the design process, I wondered how a paper prototype would work, and the paper prototype works really well. Through that, I found that a good prototype does not need to be well-crafted, but it  needs to have a clear features we want to test.
- For a web-based GUI implementation, technically I learned CSS / HTML / Firebase-db. Also I learned there are a lot of libraries for a programmer to make a web very delicate and well-formed, such as Bootstrap. 


## Changje Jeong (20110846)
1. What part of the UI implementation did you contribute to?

- Login
- Inbox / Sent mails list
- Files tab file grid
- Automatic Tagging
- Base layouts : SideNavbar, Topbar

2. What worked well and not in your team? How did you overcome any hurdle in teamwork? What lesson about teamwork did you learn that you might apply to your next team project?

Our team worked very well on every iterations. I think it's because our team has become friendly. I already know Rohjoon for 6 years, and SeungMin and Seongwon have been friend even before CS374 team project. As we leanred at early CS374 class, it made us as psychologically safe.
I tried to adopt Vue.js and some other modern web development frameworks to our team but this could have been difficult to other teammates. Although it's complexity, thank to our teammates who have succesfully learned and finished design project. Because our team are all from Computer Science department, it was hard to make our prototype more pretty (although it's not the main point of design project, I wanted to make it more pretty). 
I've learned becoming close with teammates is really important. I think it's important to be able to say "I have a problem". If any of teammates have problem, but if he(she) doesn't share about it to team, it can slow the team down.

3. Throughout the team-based design project experience, what did you learn about the user-centered design process and web-based GUI implementation?

I've learned how to get solutions from an abstract idea. At the beginning of the design project, I didn't expect we would make this kind of product. During user interviews, implementations, and user testings, our ideas became concrete and useful solutions. About web-based GUI implementation, I've learned the most of users are accusstomed to use complex functionality of web app and they expected similar functionalities from our prototype. Because there are a lot of high quality web applications nowadays, users usage patterns are also be changed during few years.

## Seongwon Lee (20150556)
1. What part of the UI implementation did you contribute to?
- I mainly implemented the modal that showed when user click `New Mail` Button. Also I managed sending it's data to Firebase.
- I implemented tag showing when user watch mail body.

2. What worked well and not in your team? How did you overcome any hurdle in teamwork? What lesson about teamwork did you learn that you might apply to your next team project?
- Luckily I met really good teammates, so I got many helps from them. I was able to get much inspiration from teammates, and learned how to coding frontend. We actively exchanged opinions and it were very positive for our team.
- But we used more and more times for DP as time goes by. Maybe our team was able to manage time more efficient. Long group meetings made us tired. To solve this, we used much time with teammates - not for preparing HCI DP or making prototype, but for playing together! We went to karaoke, or ate meal together. This has made our relationship stronger and made the schedule more bearable.
- Using private time with team members can strengthen team's power. Also, sharing ideas actively with teammates is really important for making better result. So, talking much time with teammates about anything - for team works, or for private things - is important.


3. Throughout the team-based design project experience, what did you learn about the user-centered design process and web-based GUI implementation?
- I learned user testing part is really important. Even if the UI has been carefully designed, it can be inconvenient to use. It can't be watched by developer's eye, but only by user. So, it is much better to make UI a little bit better than to create a complete UI at once. It is much more efficient!
- I was almost novice to Vue.js and Firebase and other frameworks. But thanks to teammates, I got many helps from them and learned how to use them. Also, I used the Bootstrap for the first time and learned how to implement alert with a div tag. In addition, I have been introduced to several useful libraries like Moment.js.



## SeungMin Lee (20150566)
1. What part of the UI implementation did you contribute to?

- showing a mail's specifications and contents (ShowMail.vue)
- archiving an attached file in the Files tab
- preventing generation of a duplicated tag or an empty tag
- adding hierarchy and `#` icon to the tag list

2. What worked well and not in your team? How did you overcome any hurdle in teamwork? What lesson about teamwork did you learn that you might apply to your next team project?

- Very luckily, all of team members were great and our team performed the best every time. Every team members participated in the project enthusiastically, and I really appreciate the efforts of our team memebers. We handled works very efficiently by dividing up and assigning the works to do.
- Because our team usually met at night, sometimes we were tired and exhausted. We overcame this problem by working in pairs.
- By doing the CS374 team project, I learned that communicating with team members, dividing and assigning work are very important in team projects. Also, I learned that working in pairs is a really good idea.

3. Throughout the team-based design project experience, what did you learn about the user-centered design process and web-based GUI implementation?

- 
- 
By working on DP5 and DP6, I have known and used about lots of libraries such as Bootstrap, Font Awesome, element-ui, moment, vuex, vue-router and how to apply these libraries using npm install or putting in the html head tag. I think I can find and use new more libraries that I need at anytime.


