
import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
    state = {
        text: ''
    }
    render() {
        return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View>
                    <Text>Wahaahahah</Text>
                    <TextInput
                    style={{height: 80, borderColor: 'black', borderWidth: 1}}
                    placeholder="Type something here"
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    />
                </View>
            </SafeAreaView>
        </Fragment>
        );
    }
};

const styles = StyleSheet.create({
  
});

export default App;
