
import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { yellow } from 'ansi-colors';

class App extends Component {
    state = {
        text: '',
        places: [],
    }

    handleAddPlaces = () => {
        const { text, places } = this.state;
        this.setState({
            places: [
                ...places,
                text
            ]
        })
    }
    
    render() {
        const generatePlaces = (places) => {
            return places.map(place => <Text>{place}</Text>)
        }
        return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View style={styles.container}>
                    <Text>Wahaahahah</Text>
                    <TextInput
                    style={{height: 80, borderColor: 'black', borderWidth: 1}}
                    placeholder="Type something here"
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    />
                    <Button
                        onPress={this.handleAddPlaces}
                        title="Add"
                    />
                    {generatePlaces(this.state.places)}
                </View>
            </SafeAreaView>
        </Fragment>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});

export default App;
