import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput, Image, Touchable } from 'react-native';
import React, { useState, useEffect } from 'react';
const defaultImage = require('../../assets/images/icon.png');
import { styles } from './styles';
import { ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

type DataItem = {
  id: string;
  title?: string;
  img?: any;
  isAddButton?: boolean;
}

const AutonomiczneRobotApp = () => 
  {
    const [data, setData] = useState<DataItem[]>([
      { id: 'add', isAddButton: true }, // przycisk "dodaj"
    ]);

    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);
    const [newItemTitle, setNewItemTitle] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editedText, setEditedText] = useState('');
    const [currentItemTitle, setCurrentItemTitle] = useState('');
    const router = useRouter();

    useEffect(() => {
      const loadData = async () => {
        try {
          const savedData = await AsyncStorage.getItem('robotItems');
          if (savedData) {
            setData(JSON.parse(savedData));
          }
        } catch (e) {
          console.log('Błąd wczytywania danych:', e);
        }
      };

      loadData();
    }, []);

    const startEditing = (item: DataItem) => {
    setEditingId(item.id);
    setEditedText(item.title || '');
    setCurrentItemTitle(item.title || '');
    setModal2Visible(true);
  };

    const saveEdit = (id: string) => {
    setData(prev =>
      prev.map(item =>
        item.id === id ? { ...item, title: editedText } : item
      )
    );

    try {
      const updatedData = data.map(item =>
        item.id === id ? { ...item, title: editedText } : item
      );
      AsyncStorage.setItem('robotItems', JSON.stringify(updatedData));
    } catch (e) {
      console.log('Błąd zapisywania danych:', e);
    }
    setEditingId(null);
    setEditedText('');
    setModal2Visible(false);
  };

    const handleAddItem = () => {
      setNewItemTitle('');
      setModal1Visible(true); 
    }

    const handleConfirmAdd = () => {
      if(!newItemTitle.trim()) return;

      const newItem: DataItem = {
        id: Date.now().toString(),
        title: newItemTitle,
        img: defaultImage,
      };

      const newData = [...data.filter(d => !d.isAddButton), newItem, {id: 'add', isAddButton: true }];
      setData(newData);

      try {
        AsyncStorage.setItem('robotItems', JSON.stringify(newData));
      } catch (e) {
        console.log('Błąd zapisywania danych:', e);
      }
      

      setModal1Visible(false);
    }

    const handleDeleteItem = (id: string) => {
      const newData = data.filter(d => d.id !== id);
      setData(newData);

      try {
        AsyncStorage.setItem('robotItems', JSON.stringify(newData));
      } catch (e) {
        console.log('Błąd zapisywania danych:', e);
      }
    }

    // console.log('Data:', data);    

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>AutonomiczneRobotApp</Text>
        </View>

        <View style={styles.contentContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: 1,
              paddingVertical: 20,
              width: '100%',
            }}
            renderItem={({ item }) => 
              {
                if (item.isAddButton) 
                {
                  return (
                    <TouchableOpacity style={styles.buttonToAdd} onPress = {() => handleAddItem()}>
                      <View style={styles.contentTile}>
                        <Text style={styles.contentTitle}>Add Item</Text>
                      </View>
                    </TouchableOpacity>
                  );
                }

                return (
                  <TouchableOpacity
                    onPress={() =>
                      router.push({
                        pathname: '/details',
                        params: {
                          itemId: item.id
                        }
                      })
                    }
                  >
                    <View style={styles.contentTile}>
                      <ImageBackground source={item.img} style={styles.contentTileImage}>
                      </ImageBackground>
                      <View style={styles.contentTileRight}>
                        <Text style={styles.contentTitle}>{item.title}</Text>
                        <View style={styles.buttonsContainer}>
                          <TouchableOpacity style={styles.editIconContainer} onPress={() => startEditing(item)}>
                            <Text style={styles.buttonText}>Edit</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.deleteIconContainer} onPress={() => handleDeleteItem(item.id)}>
                            <Text style={styles.buttonText}>Delete</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
          />

          <Modal
            visible={modal1Visible}
            transparent={true}
            animationType="slide"
            style = {styles.modalAddContainer}
          >
            <View style = {styles.modalPopUpContainer}>
              <View style = {styles.modalPopUpContent}>
                <Text>Podaj nazwę nowego elementu: </Text>
                <TextInput
                  value={newItemTitle}
                  onChangeText={setNewItemTitle}
                  placeholder="Nazwa elementu"
                  style={styles.modalTextInput}
                />
                  <View style={styles.modalButtonsLocalisationContainer}>
                    <TouchableOpacity
                      onPress={handleConfirmAdd}
                      style={styles.confirmButton}
                    >
                      <Text style={styles.modalButtonsText}>Dodaj</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => setModal1Visible(false)}
                      style={styles.cancelButton}
                    >
                      <Text style={styles.modalButtonsText}>Anuluj</Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </View>

          </Modal>

          <Modal
            visible={modal2Visible}
            transparent={true}
            animationType="slide"
            style = {styles.modalAddContainer}
          >
            <View style = {styles.modalPopUpContainer}>
              <View style = {styles.modalPopUpContent}>
                <Text>Podaj nazwę: </Text>
                <TextInput
                  value={editedText}
                  onChangeText={setEditedText}
                  placeholder={currentItemTitle}
                  style={styles.modalTextInput}
                />
                  <View style={styles.modalButtonsLocalisationContainer}>
                    <TouchableOpacity
                      onPress={() => saveEdit(editingId!)}
                      style={styles.confirmButton}
                    >      
                      <Text style={styles.modalButtonsText}>Edytuj</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => setModal2Visible(false)}
                      style={styles.cancelButton}
                    >
                      <Text style={styles.modalButtonsText}>Anuluj</Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </View>

          </Modal>          
        </View>

        <View style={styles.footerContainer}>
          <Text>Footer content goes here</Text>
        </View>

      </View>
    )
}

export default AutonomiczneRobotApp