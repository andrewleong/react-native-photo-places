
import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableHighlight,
  ScrollView,
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

    handleDeletePlaces = (id) => {
        const { places } = this.state;
        const filteredPlaces = places.filter((p,i) => i !== id )
        this.setState({
            places: filteredPlaces
        }) 
    }
    
    render() {
        const generatePlaces = (places) => {
            return places.map((place, index) => {
                return (
                <TouchableHighlight onPress={() => this.handleDeletePlaces(index)}>
                    <View>
                        <Text>{place}</Text>
                    </View>
                </TouchableHighlight>
                )
            })
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
                    <ScrollView style={{backgroundColor: 'pink'}}>
                        {generatePlaces(this.state.places)}
                    </ScrollView>
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
