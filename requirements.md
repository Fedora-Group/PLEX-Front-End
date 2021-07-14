# Software Requirements 

## Scope (In/Out)
### INs : 
* The web app will allow visitors to Sign up using basic auth 
* The web app will allow visitors to Sign in using bearer auth 
* The web app will Authenticate users through google/facebook oauth 
* The web app will have its own API for saving and editing events happening soon and adding new events.   
* The app accounts will run on Role based access control for hosting and creating events 
* The app will allow Screen share for the event host .
* The app will allow Camera share for the event host .
* The app will allow Chat for the event audience .
​
​
### OUTs  :
* My web app will never turn into an IOS or Android app
* My web app will never turn into a social media platform. 
​
​
## Minimum Viable Product ( vs ) 
Authentication features:
* Sign-up and sign-in with Facebook/Google .
* Normal signup and sign in.
​
The user can add their own event to be added to the API and be available for other users to attend, and then become the admin of the event . When the event takes place ,users can attend the event virtually online .Users can search for specific events to attend, and the event admin can communicate with  the audience with a real time camera feature , and can present the events content through screen share feature .an event admin can (create)/update events details ,or Delete events.
​
​
​
## Stretch
The app will have permission built for separating  private from public events.
​
## Functional Requirements
* A user can create events .
* A room admin can open camera ­.
* A room admin can share screen .
* a user can update their profile info.
* a user can search for upcoming events. 
​
​
## Data Flow
 
The user will enter the website through an account created and saved in the website database and authenticated by google/facebook , and after signing in the user will be able to view the whole website and search for events to attend that are saved and retrieved from the website API ,the user will also be able to plan and create their own events and becoming the event admin and controlling the content by sharing the screen and opening their cameras. <br>
​
​
## Non-Functional Requirements

#### Security 
​
Our app will be secured with basic auth for sign up , bearer auth for sign in and oauth for authentication of users  ,and role based access control for each role defined in the website. 
​
#### Testability 
​
Our app will be tested for each functionality added up to at least 80% covered.