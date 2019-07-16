
import React, {Component, Fragment} from 'react';
import _ from 'underscore';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableHighlight,
  FlatList,
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
                {
                    id: _.uniqueId('id_'),
                    value: text
                }
            ]
        })
    }

    handleDeletePlaces = (id) => {
        const { places } = this.state;
        const filteredPlaces = places.filter((p,i) => p.id !== id )
        this.setState({
            places: filteredPlaces
        }) 
    }
    
    render() {
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
                    <FlatList style={{backgroundColor: 'pink'}}
                        data={this.state.places}
                        renderItem={({item}) => {
                            return (
                                <TouchableHighlight onPress={() => this.handleDeletePlaces(item.id)}>
                                    <View>
                                        <Text>{item.value}</Text>
                                    </View>
                                </TouchableHighlight>
                            )
                        }}
                    />
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
