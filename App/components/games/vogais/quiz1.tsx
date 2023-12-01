import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import VStyles from "../../../styles/components/games/vogais/intro";

interface gameIn{ 
    nextPage: (e:string) => void, 
    voltar: () => void
    leave: () => void,
}

export default function Quiz1({nextPage, voltar, leave}: gameIn){
    const [answ, setAnsw] = useState(0);
    const [msg, setMsg] = useState('');

    return(
        <View style={VStyles.container2}>
            <Text style={VStyles.text}>Qual dessas libras é a letra "A"?</Text>
            <View style={VStyles.showImgOut}>
                <View style={VStyles.double}>
                    <TouchableOpacity onPress={()=>nextPage("errou")}>
                        <Image style={VStyles.img} source={require('../../../assets/letras/eL.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>nextPage("errou")}>
                        <Image style={VStyles.img} source={require('../../../assets/letras/iL.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>nextPage("acertou")}>
                        <Image style={VStyles.img} source={require('../../../assets/letras/aL.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>

            <Text>{msg}</Text>

            <TouchableOpacity onPress={voltar}>
                <Text style={VStyles.textOut}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}