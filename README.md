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
