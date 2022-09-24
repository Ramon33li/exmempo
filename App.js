import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Dados from './components/Dados';

export default function App() {
	const[nome,setNome] = useState("");
	const [nomeParam, setNomeParam] = useState("");
	const [idade, setIdade] = useState("");
	const [idadeParam, setIdadeParam] = useState("");
	
	function gravar(){
		setNomeParam(nome);
		setIdadeParam(idade);
	}
	
  return (
	  
	  
    <View style={styles.container}>
		 <View style={styles.bloco}>
			 <Text style={styles.Label}>nome:</Text>
			 <TextInput
				 style={styles.Input}
				 Value={nome}
				 onChangeText={(value)=>setNome(value)}
				 />
		       </View> 
               
		  <View style={styles.bloco}>
		  <Text style={styles.Label}>ano nasc...:</Text>
			   <TextInput
				style={styles.Input}
			   value={idade}
			   onChangeText={(value)=>setIdade(value)}
				/>
		  </View>
			  
			  
				<View style={styles.bloco}>
			 <TouchableOpacity style={styles.Botao} onPress={gravar}>
			 <Text style={styles.TextBotao}>mostra</Text>
			 </TouchableOpacity>
		 </View>
		  <View style={styles.bloco}>
		  <Dados nome ={nomeParam} idade={idadeParam}/>
		  </View>
	      </View>
  );
}
		  

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
	bloco:{
		margitop:30,
		width:'80',
		marginlet:'10%'
	},
	Label:{
	fontsizer:20
		
},
Input:{
	borderWidth:1,
	fontsizer:20
},
Botao:{
		backgroundColor:"#000000",
		borderWidth:1,
	    margitop:30,
		marginlet:'10%'
	    
	},
	TextBotao:{
		color:"#FFD700",
		fontsizer:20,
	   TextAlign:'center'
		
	}

});

