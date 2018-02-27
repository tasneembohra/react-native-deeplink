# react-native-deeplink
Sample app to handle deeplinks in andoid and ios using React Native Linking Api

##### Linking Api:	https://facebook.github.io/react-native/docs/linking.html

Linking will provide for us an API that will allow us to listen for an incoming linked url, and then we can handle the url like
```
componentDidMount() {
  Linking.addEventListener('url', this.handleOpenURL);
}
componentWillUnmount() {
  Linking.removeEventListener('url', this.handleOpenURL);
}
handleOpenURL(event) {
  console.log(event.url);
  const route = e.url.replace(/.*?:\/\//g, '');
  // do something with the url, in our case navigate(route)
}
```
When a user in an external app or website clicks on one of our links, we will open in our new app and navigate to the intended url:
```
peopleapp://people/0
peopleapp://people/1
peopleapp://people/2
..etc
```
That will navigate to the people route, and then show a person based on the id.

## Configuring iOS

### Step 1. Add URL type to info.plist

	* Open info.plist and at the top of the file, create a new property called URL types
	* Expand item 0 (zero) and choose URL Schemes.
	* Give item 0 the name you would like your app to be linkable as. In our case, I chose peopleapp as the name.
	
### Step 2. Add the following code to AppDelegate.m

Below last existing import add this import:

`#import <React/RCTLinkingManager.h>`

## Configuring Android

```
<intent-filter android:label="filter_react_native">
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />
  <data android:scheme="peopleapp" android:host="people" /> // A
</intent-filter>
```
