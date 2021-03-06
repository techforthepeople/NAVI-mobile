#  NAVI (Solidarity) - Mobile Application

Winning solution for IBM's TechToProtect Challenge! iOS Mobile Application for Emergency Responders. Built in conjunction with Web Application and Sensor. Click here for information https://github.com/techforthepeople

## Motivation

The Tech to Protect Challenge is designed to inspire participants to connect, collaborate, and create technologies of the future for public safety. NAVI provides an integrated, all in one platform for Emergency Responders to locate each other and detect when they are in danger. This repo contains code for the mobile application.

## Functionality

* Users can view emergency responders in the area and click to see basic information
* Users can sync their location as well as health data from Apple HealthKit including real-time updates of their heart rate while wearing Apple Watch (or other wearable connected to the Apple Health app). This information can be monitored remotely on the web dashboard by authorized personnel.
* Users can post messages for other emergency personnel on the application with priority labelling. IBM Watson is used to detect signs of distress in messages and flag them.
* Users can configure alert thresholds for an associated wearable sensor (see [NAVI-IoT-device](https://github.com/techforthepeople/NAVI-IoT-device))

## :hammer_and_pick: Built With

* Javascript
* React Native
* React Native Maps
* Apple HealthKit
* IBM Watson Tone Analyzer API
* Auth0

## :writing_hand: Authors

* Andrew O’Grady - [aogrady3](https://github.com/aogrady3)
* Vishnu Ravi - [vishnuravi](https://github.com/vishnuravi)
* Vincent Tse - [Greashun](https://github.com/Greashun)
* David P - [droza](https://github.com/droza)
* Nayyif OUSSAMATOU - [bkkenzo](https://github.com/bkkenzo)

## Screenshots

### Locating first responders and viewing data
<img src="https://user-images.githubusercontent.com/36509646/68819446-03448e00-0656-11ea-805d-8a4a2bd580df.png" alt="alt text" width="200" height="400"> <img src="https://user-images.githubusercontent.com/36509646/68819496-1fe0c600-0656-11ea-8e70-0899c3261d3a.png" alt="alt text" width="200" height="400">

### Sharing sensor and health data & configuring sensor alert thresholds
<img src="https://user-images.githubusercontent.com/1212163/70878058-e91c0980-1f8d-11ea-8cc0-2547bc1943ad.png" alt="alt text" width="200" height="400"> <img src="https://user-images.githubusercontent.com/1212163/68947284-13a65700-0783-11ea-9ffb-50f766aecb89.png" alt="alt text" width="200" height="400">

### Priority-labeled communication between first responders with Watson-powered distress detection
<img src="https://user-images.githubusercontent.com/1212163/70914249-98d09600-1fe5-11ea-8a6d-30d57350520c.png" alt="alt text" width="200" height="400"> <img src="https://user-images.githubusercontent.com/1212163/70915336-ab4bcf00-1fe7-11ea-94ad-37a26a607e46.png" alt="alt text" width="200" height="400"> 

## Demo Link
https://www.youtube.com/watch?v=2gxkPN-a7gw&feature=youtu.be

## Instructions

To test the app, you will need a Mac with [Node.js](https://nodejs.org/) and Xcode installed. An [IBM cloud account](https://cloud.ibm.com/) with Watson Tone Analyzer service is required for sentiment analysis.

1. Clone the repository to your Mac.
2. Open up the repository folder in your terminal and run `npm install` to download dependencies.
3. (Optional) Edit the `.env.sample` and paste in the API key from your IBM cloud account's Watson Tone Analyzer service. Then, rename it to `.env`.
4. Run `npx react-native run-ios` to start the app in the iOS simulator.
