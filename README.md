# React-native

can acheive both IOS Android in single code base

advantages:
cross-platform compatibility
native components

major adv is :
Hot Reloading 
which let you see the changes you make in real time
making the development process faster & more efficient

Expo - is tool for react native app dev -> simplicity -> we dont need to worry about config our dev env and native dependancies

Also offers :
navigation
camera
gestures
maps

it also have routing system called expo router

expo router have file based routing system like next js  that is simpler 

React NAtive fundamental components

Same like React we are using JS but in React NAtive (RN) instead of JSX for view we can use native mobile components

ex: View, Text native components from React Native 
import {View, Text} from 'react-native'

 Text component => display the text in react same style we can use like in react 
 style={{fontSize: 24}}
 <Text  style={{fontSize: 24}}></Text>

 View Component -> it is used to create a container or view for other components
-> think of it as a box or container that holds other components
-> it is similar to <div> element functionality like in HTML but with some added functionality specific to mob apps
<View> -> create layout structures for other components
-> it has no of props that can be used to control its appearance & behaviour

** View Component-> by default it uses the flex layout **
which makes it really easy to control how its child components are laid out within the container


RN - have some awesome Touchable components 
these components are perfect to create
buttons, links other interactive elements -> so RN dont have the buttons instead of that it have TouchableOpacity 
ex: create a button component in react native in code base

RN - ActivityIndicator -> fully customizable
it is used for showing a spinner or loading indicator in app. we can customize the color and size 

RN have important components ->  Flatlist
Flatlist -> it is like a map to render html list like react -> used for rendering a long list of items that needs to be scrolled efficiently
it have extra features -> optimized scroll performance  and Item separation 

Flatlist -> for larger list with smooth scrolling 
map -> smaller list

RN have important components ->  ScrollView 
It is like a box that can be hold multiple components and views, providing a scrolling container for them. 
ex: overflow: Scroll in html. Allowing you to easily navigate through a list of items or a large amount of content in our app
we can make sure that users can easily explore the content making the app more intuitive and user  friendly

RN have important components ->  SafeAreaView
it provides a safre zone to render your app's content without being covered by the device's hardware features like the notch, home indicator, status bar.
it make sure that app conent should displayed within visible area making app more accessibale


Expo Router brings the best routing concepts from the web to native iOS and Android apps. 
Every file in the app directory automatically becomes a route in your mobile navigation, making it easier than ever to build, maintain, and scale your project. 
It's built on top of our powerful React Navigation suite enabling truly native navigation. The entire deep linking system is automatically generated live, so users can share links to any route in your app.

create new reactnative app

npx create-expo-app@latest -e with-router

npm install expo-font axios react-native-dotenv

npm install -g expo-cli
