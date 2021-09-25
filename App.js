import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const App = () => {

  const addEntry = () => {
    console.log('Adicionado')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.saldo}>
        Saldo: $2.102,45
      </Text>
      <Button 
        title='Adicionar'
        onPress={addEntry}/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  saldo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  }
})

export default App;