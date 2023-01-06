Resources:
https://ionic.io/ionicons

//mapview
https://medium.com/geekculture/mapview-in-expo-react-native-5aa69eb81519

install postgis

https://postgis.net/install/

resolve error "extension postgis is not available. install on system where postgreSQL is running"

https://stackoverflow.com/questions/66411176/postgis-extension-not-installing

how to insert a geography column into postgreSQL

https://www.youtube.com/watch?v=mFc-gGJLRE0&t=159s


# Scout

###Purpose
 The goal of scout is to help people socialize and find their nearest skatepark, ski resort, or bouldering spot. With the Scout app users can use the map to see the closest activities near them, or view specific ones on the list. Users will also be able to add new locations and checkin at a location or even comment on locations to let people know what the current landscape condition is or simply just meet up to hang out.

###Build

Various libraries and tools went into building Scout.
- React Native to render components and run Javascript. 
- Expo Go is used to simplify the React Native code so that is responsive on both IOS and Android without needing to know any specific code. It also simplified the process of add a map, mapview, and user location.
- PostgreSQL is being used as the backend API along with Node, and Express.

###Getting Started


To get started first create a new project using Expo Go(I'm using VS Code), This will install and configure all necesarry packages and  modules needed to use React Native.

 - There is also the React Native CLI quickstart but that requires Xcode or Android Studio and may take longer to set up if you don't have it already installed.

Once the Expo Go libary is install, you can download the Expo Go app onto your phone. This is where your website will be rendered and display any changes with a live refresh.
