import { View, Text, Image, Touchable, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { styles } from './styles';
import { useRef, useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Details() {
    const { itemId } = useLocalSearchParams();
    const [modalElementDetailsVisible, setModalElementDetailsVisible] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [title, setTitle] = useState('');
    const [imageSource, setImageSource] = useState<any>(null);
    const router = useRouter();
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Wczytywanie danych z asyncstorage
    useEffect(() => {
        const loadItemData = async () => {
            try {
                const savedData = await AsyncStorage.getItem('robotItems');
                if (savedData && itemId) {
                    const items = JSON.parse(savedData);
                    const item = items.find((i: any) => i.id === itemId);
                    if (item) {
                        setTitle(item.title || '');
                        setImageSource(item.img);
                    }
                }
            } catch (error) {
                console.error('Error loading item data:', error);
            }
        };

        loadItemData();
    }, [itemId]);

    // Helper do dodawania logów
    const addLog = useCallback((message: string) => {
        const timestamp = new Date().toLocaleTimeString();
        const itemTitle = title ? `(${title})` : '';
        const logMessage = `${itemTitle} ${message} `;
        setLogs(prevLogs => [...prevLogs, `[${timestamp}] ${logMessage}`]);
        console.log(message);
    }, [title]);


    // PRZYCISKI DO PRZODU
    const moveForwardPressed = () => {
        addLog("PRESS IN FORWARD BUTTON");

        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            addLog('HOLDING FORWARD BUTTON...');
            // TU MIEJSCE NA WYSYŁANIE KOMEND DO ROBOTA
            //
            //
        }, 500);
    }

    const moveForwardUnpressed = () => {
        addLog("PRESS OUT FORWARD BUTTON");

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        // TU JAKAŚ KOMENDA DO ZATRZYMANIA ROBOTA JAK
        // sendCommand("STOP");
        // CZY CUŚ
    }

    // PRZYCISKI DO TYŁU

    const moveBackwardPressed = () => {
        addLog("PRESS IN BACKWARD BUTTON");

        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            addLog('HOLDING BACKWARD BUTTON...');
            // TU MIEJSCE NA WYSYŁANIE KOMEND DO ROBOTA
            //
            //            
        }, 500);
    }

    const moveBackwardUnpressed = () => {
        addLog("PRESS OUT BACKWARD BUTTON");

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        // TU JAKAŚ KOMENDA DO ZATRZYMANIA ROBOTA JAK
        // sendCommand("STOP");
        // CZY CUŚ        
    }

    // PRZYCISKI W LEWO

    const moveLeftPressed = () => {
        addLog("PRESS IN LEFT BUTTON");

        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            addLog('HOLDING LEFT BUTTON...');
            // TU MIEJSCE NA WYSYŁANIE KOMEND DO ROBOTA
            //
            //            
        }, 500);
    }

    const moveLeftUnpressed = () => {
        addLog("PRESS OUT LEFT BUTTON");

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        // TU JAKAŚ KOMENDA DO ZATRZYMANIA ROBOTA JAK
        // sendCommand("STOP");
        // CZY CUŚ        
    }

    // PRZYCISKI W PRAWO

    const moveRightPressed = () => {
        addLog("PRESS IN RIGHT BUTTON");

        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            addLog('HOLDING RIGHT BUTTON...');
            // TU MIEJSCE NA WYSYŁANIE KOMEND DO ROBOTA
            //
            //            
        }, 500);
    }

    const moveRightUnpressed = () => {
        addLog("PRESS OUT RIGHT BUTTON");


        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        // TU JAKAŚ KOMENDA DO ZATRZYMANIA ROBOTA JAK
        // sendCommand("STOP");
        // CZY CUŚ        
    }

    // PRZYCISKI DO HAMOWANIA

    const moveBrakePressed = () => {
        addLog("PRESS IN BRAKE BUTTON");

        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            addLog('HOLDING BRAKE BUTTON...');
            // TU MIEJSCE NA WYSYŁANIE KOMEND DO ROBOTA
            //
            //            
        }, 500);
    }

    const moveBrakeUnpressed = () => {
        addLog("PRESS OUT BRAKE BUTTON");


        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        // TU JAKAŚ KOMENDA DO ZATRZYMANIA ROBOTA JAK
        // sendCommand("STOP");
        // CZY CUŚ        
    }    

    console.log('Received itemId:', itemId);   
    console.log('Item title:', title);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.text}>AutonomiczneRobotApp</Text>
            </View>
            
            <View style={styles.contentContainer}>
                <Text style={styles.detailsElementTitleText}>Szczegóły: {title}</Text>
                <Image source={imageSource} 
                style={styles.contentTileImage} />

                <View style={styles.MovementContainer}>
                    <TouchableOpacity style={styles.movementButton} onPressIn={moveForwardPressed} onPressOut={moveForwardUnpressed} delayLongPress={100}>
                        <Text style={styles.movementButtonText}>Move Forward</Text>
                    </TouchableOpacity>
                    
                    <View style={styles.horizontalButtonsContainer}>
                        <TouchableOpacity style={styles.movementButton} onPressIn={moveLeftPressed} onPressOut={moveLeftUnpressed} delayLongPress={100}>
                            <Text style={styles.movementButtonText}>Move Left</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.movementButton} onPressIn={moveBrakePressed} onPressOut={moveBrakeUnpressed} delayLongPress={100}>
                            <Text style={styles.movementButtonText}>BRAKE</Text>
                        </TouchableOpacity>                        
                        <TouchableOpacity style={styles.movementButton} onPressIn={moveRightPressed} onPressOut={moveRightUnpressed} delayLongPress={100}>
                            <Text style={styles.movementButtonText}>Move Right</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <TouchableOpacity style={styles.movementButton} onPressIn={moveBackwardPressed} onPressOut={moveBackwardUnpressed} delayLongPress={100}>
                        <Text style={styles.movementButtonText}>Move Backward</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                visible={modalElementDetailsVisible}
                animationType="slide"
                transparent={true}
                >
                <View style={styles.elementDetailsModal}>
                    <View style={styles.elementDetailsModalContent}>
                        <Text style={styles.elementDetailsTitle}>Zapisane szczegóły elementu</Text>
                        <ScrollView style={{maxHeight: 200, marginVertical: 10, width: '100%'}}>
                            {logs.map((log, index) => (
                                <Text key={index} style={{fontSize: 12, marginVertical: 2}}>{log}</Text>
                            ))}
                        </ScrollView>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                            <TouchableOpacity style={styles.closeModalButton} onPress={() => setModalElementDetailsVisible(false)}>
                                <Text style={styles.closeModalButtonText}>Zamknij</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.closeModalButton} onPress={() => setLogs([])}>
                                <Text style={styles.closeModalButtonText}>Wyczyść Logi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={styles.footerContainer}>
                <Text style= {styles.backButton} onPress={() => router.back()}>Wróć</Text>
                <Text style={styles.robotSavedDetailsButton} onPress={() => setModalElementDetailsVisible(true)}>Zobacz zapisane szczegóły</Text>
            </View>            
        </View>
        
    );
}