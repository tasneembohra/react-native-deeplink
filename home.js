import React from 'react';
import { Platform, Text, Linking } from 'react-native';
class Home extends React.Component {
	static navigationOptions = {
	  // We declare a title using static navigationOptions for react-navigation to show a title when we are on this route.
    title: 'Home',
  };
	componentDidMount() {
	// If we are on Android, we immediately call the navigate method passing in the url.
  if (Platform.OS === 'android') {
    Linking.getInitialURL().then(url => {
      this.navigate(url);
    });
  } else {
	  // If we are on iOS, We add an event listener to call handleOpenUrl when an incoming link is detected.
      Linking.addEventListener('url', this.handleOpenURL);
    }
  }
  
  componentWillUnmount() { // We delete the Linking listener on componentWillUnmount
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = (event) => { // When handleOpenURL is called, we pass the event url to the navigate method.
    this.navigate(event.url);
  }

	navigate = (url) => {
	  // We first parse the url to get the id and route name. We then check to see if the route name is equal to people, and if so we navigate to the People component, passing the id as a prop.
		const { navigate } = this.props.navigation;
		const route = url.replace(/.*?:\/\//g, '');
		const id = route.match(/\/([^\/]+)\/?$/)[1];
		const routeName = route.split('/')[0];
	
		if (routeName === 'people') {
		navigate('People', { id, name: 'Tasneem' })
		};
  	}

  render() {
    return <Text>Hello from Home!</Text>;
  }

}

export default Home;