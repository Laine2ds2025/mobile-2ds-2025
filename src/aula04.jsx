import React, { Component } from "react";
import { View, Text, StyleSheet, Image} from "react-native"; 

class Aula04 extends Component {
    render() {
        return(
                <View>
                    <Text>Aula04 - trabalhando com imagens!</Text>
                    <Image 
                        styles={ styles.img }
                        source={{ uri: 'https://us.123rf.com/450wm/blumer/blumer1705/blumer170500012/78103093-cachorro-e-gato-minimalista-ilustra%C3%A7%C3%A3o-vetorial-pincel-tra%C3%A7os.jpg?ver=6'}}
                    />         
                </View>
        );
    }
}

export default Aula04;

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 50,
    }
})
