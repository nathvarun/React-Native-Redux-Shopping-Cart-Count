import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Electronics" onPress={() => this.props.navigation.navigate('Electronics')} />
                <Button title="Books" onPress={() => this.props.navigation.navigate('Books')} />
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});