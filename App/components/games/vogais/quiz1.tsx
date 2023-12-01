import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import VStyles from "../../../styles/components/games/vogais/intro";

interface gameIn{ 
    nextPage: (e:string) => void, 
    voltar: () => void
    leave: () => void,
    letter: string
}

export default function Quiz1({nextPage, voltar, leave, letter}: gameIn){
    const [answ, setAnsw] = useState(0);
    const [msg, setMsg] = useState('');

    return(
        <View style={VStyles.container2}>
            <Text style={VStyles.text}>Qual dessas libras é a letra "{letter}"?</Text>
            <View style={VStyles.showImgOut}>
                <View style={VStyles.double}>
                    <TouchableOpacity onPress={()=>nextPage(letter == "E" ? "acertou" : "errou")}>
                        <Image style={VStyles.img} source={require('../../../assets/letras/eL.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>nextPage(letter == "I" ? "acertou" : "errou")}>
                        <Image style={VStyles.img} source={require('../../../assets/letras/iL.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={VStyles.double}>
                    <TouchableOpacity onPress={()=>nextPage(letter == "A" ? "acertou" : "errou")}>
                        <Image style={VStyles.img} source={require('../../../assets/letras/aL.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>nextPage(letter == "O" ? "acertou" : "errou")}>
                        <Image style={VStyles.img} source={require('../../../assets/letras/oL.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>nextPage(letter == "U" ? "acertou" : "errou")}>
                        <Image style={VStyles.img} source={require('../../../assets/letras/uL.png')}></Image>
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