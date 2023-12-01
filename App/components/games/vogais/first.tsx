import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import VStyles from "../../../styles/components/games/vogais/intro";

interface gameIn{ 
    nextPage: () => void, 
    voltar: () => void
    leave: () => void,
}

export default function First({nextPage, voltar, leave}: gameIn){
    return(
        <View style={VStyles.container2}>
            <Text style={VStyles.text}>Vamos aprender a letra "A"</Text>
            <View style={VStyles.showImgOut}>
                <View style={VStyles.double}>
                    <Image style={VStyles.img} source={require('../../../assets/letras/aL.png')}></Image>
                    <Image style={VStyles.img} source={require('../../../assets/letras/a.png')}></Image>
                </View>
            </View>
            <Text style={VStyles.text}>Tente fazer na sua casa</Text>

            <TouchableOpacity style={VStyles.bt} onPress={nextPage}>
                <Text style={VStyles.btText}>Próximo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={voltar}>
                <Text style={VStyles.textOut}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}