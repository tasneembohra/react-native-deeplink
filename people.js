import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
const people = { // We create a hardcoded object with some information about a few people, including only their name and image with a corresponding id key.
  0: {
    name: 'Tasneem',
    image: 'https://i.stack.imgur.com/sMiSv.jpg?s=48&g=1',
  },
  1: {
    name: 'Bender',
    image: 'https://vignette2.wikia.nocookie.net/en.futurama/images/4/43/Bender.png/revision/latest?cb=20150206072725',
  },
  2: {
    name: 'Amy',
    image: 'https://i.ytimg.com/vi/4sCtTq7K3yI/hqdefault.jpg',
  },
  3: {
    name: 'Fry',
    image: 'http://www.supergrove.com/wp-content/uploads/2017/03/fry-futurama-22-which-robot-from-quotfuturamaquot-are-you.jpg',
  }
}
class People extends React.Component {
  static navigationOptions = {
    title: 'People',
  };
  render() {
    const { id } = this.props.navigation.state.params; //  We destructure the id prop that we will be receiving. If no user exists for this id, we display a message.
    if (!people[id]) return <Text>Sorry, no data exists for this user</Text>
return ( // We use the id to reference the correct person, displaying their image and name.
      <View>
        <Text style={styles.text}>{people[id].name}</Text>
        <Image
          style={styles.image}
          source={{ uri: people[id].image }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  text: {
    margin: 19,
    fontSize: 22,
  },
  image: {
    width: 400,
	height: 400,
  },
});
export default People;