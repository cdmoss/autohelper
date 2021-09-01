import * as React from 'react';
import { Keyboard, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Dropdown from 'react-native-dropdown-picker';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useState } from 'react';

export default function AddItemScreen({ navigation }: RootTabScreenProps<'AddItem'>) {
  const [selectedItemType, changeSelectedItemType] = useState<string>();
  const [pickerIsOpen, togglePicker] = useState<boolean>(false);
  const itemTypes = [
    {label: 'Oil change', value: 'oil'},
    {label: 'Gas report', value: 'gas'}];
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>I would like to add:</Text>
        <Dropdown 
          items={itemTypes}
          value={selectedItemType as string | null}
          open={pickerIsOpen}
          setOpen={togglePicker}
          setValue={changeSelectedItemType} />
        <View style={styles.separator} lightColor="#eee" darkColor="gray" />
        <View style={styles.addForm}>
          <TextInput style={styles.textInput} placeholder="Distance..." placeholderTextColor="gray" />
          <TextInput style={styles.textInput} placeholder="Price..." keyboardType="numeric" placeholderTextColor="gray" />
          <TextInput style={styles.textInput} placeholder="Performed by..." placeholderTextColor="gray" />
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={{color: 'black'}}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40
  },
  title: {
    fontSize: 15,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 25,
    height: 1,
    width: '100%',
  },
  addForm: {
    
  },
  textInput: {
    marginBottom: 15,
    backgroundColor: 'white',
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  addBtn: {
    marginTop: 40,
    backgroundColor: 'white',
    height: 50,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }
});
