import Post from '../Components/Post/Post';
import { Text, View, ScrollView } from 'react-native';
import { Linking } from 'react-native';

const profile = {
    id: 1,
    username: "myUser",
    following: [2, 5, 8, 33, 58, 72, 73, 91]
}

const Discover = () => {
    var rows = [];
    return(
        <View style={{ flex: 1 }}>
            <ScrollView>
                <Text>Discover!</Text>
                <h1>Discover</h1>
                <h2>{profile.username}</h2>
            </ScrollView>
        </View>
    )
  };
  
export default Discover;