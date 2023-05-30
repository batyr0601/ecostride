# EcoStride

Done as part of Save the Future Hackathon, EcoStride is an environment-friendly cross-platform mobile application, designed to promote walking & local eco-friendly businesses. 

# Inspiration
Stunned by the daunting statistic of global climate change, we were inspired to tackle the issue of carbon emissions by incentivizing users to walk more and take less fuel-powered modes of transportation.

# What it Does
EcoStride rewards you for every step you take. Every thousand steps lead to one newly planted tree. While walking, collect rewards, coupons, and other deals, all in-app to use at local businesses. Additionally, use our AI-assisted "EcoSearch" function to find sustainable local businesses nearby!

# Mobile Application (how we built it)
The mobile application (iOS/Android) is built in Flutter using the programming language Dart. For our maps SDK, we utilize Google Cloud Platform’s Google Maps API. For step tracking, we use custom-created algorithms that utilize the devices X, Y, and Z, velocity to label steps, breaks and running. For our AI-assisted sustainable search, we utilize publicly available information fed into an artificial intelligence model that, using various parameters, labels sustainable or unsustainable businesses. As a result, our app is able to recommend several sustainable suggestions for the user, whether it be restaurants, grocery, or department stores. Our backend was made using Google Cloud Platform’s Firebase SDK. We use Firestore, Firebase Analytics, and Firebase Functions. User authentication is handled through “ghost-authentication” and user data is stored within the NoSQL Firestore to enable concurrency between mobile and web applications.

# Web Application (how we built it)
Along with the app, we also built a complementary web application. The purpose of the web application is to display the leaderboards among the users, track who has completed the most steps, gamifying the experience of using environmentally friendly transport. To accomplish this part of the project, we used ReactJS to build the front end and connected it to our database hosted on Firebase. It is run concurrently with the mobile application, allowing for steps to be updated in real-time, as our users are actively taking steps to saving the planet. We also added a support button that allows users to sponsor individuals to take more steps, prompting the sponsored users application (concurrent communication between mobile and web applications).

# This is only the website repo.
