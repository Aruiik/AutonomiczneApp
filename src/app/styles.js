import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: 
    {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    },

    titleContainer: 
    {
      height: 80,
      flexShrink: 0,
      backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },

    contentContainer:
    {
      flex: 1,
      width: '100%',
      backgroundColor: 'lightgray',
    },

    footerContainer:
    {
      height: 60, // Stała wysokość
      flexShrink: 0,
      backgroundColor: 'yellow',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },

    text: 
    {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },

    detailsElementTitleText: 
    {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 60,
    },

    contentTile: 
    {
      width: Platform.OS === 'web' ? 800 : '100%', 
      maxWidth: Platform.OS === 'web' ? 800 : '100%',
      
      height: 150, 
      backgroundColor: 'white',
      borderRadius: 20,
      marginBottom: 20,
      flexDirection: 'row',
      padding: 15,
      alignItems: 'center',
      alignSelf: 'center', 

      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },

    addTileContent: 
    {
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },

    contentTileImage: 
    {
      width: 120,
      height: 120,
      borderRadius: 15,
      marginRight: 15,
    },

    contentTileRight: 
    {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 120,
      paddingLeft: 10,
    },

    contentTitle:
    {
      fontWeight: '900',
      fontSize: 18,
      flexWrap: 'wrap',
      textAlign: 'left',
      flexShrink: 1,
      maxWidth: '100%',
    },

    buttonsContainer: 
    {
      flexDirection: 'row',
      gap: 10,
      width: '100%',
    },

    buttonToAdd: {
      width: Platform.OS === 'web' ? 800 : '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 25,
      marginBottom: 25,
      flexDirection: 'row',
      padding: 15,
      gap: 20,
      height: 150,
    },

    modalAddContainer:
    {
      marginTop: 200,
      marginBottom: 200,
    },

    modalPopUpContainer:
    {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
    },

    modalPopUpContent:
    {
      width: 300, 
      padding: 20, 
      backgroundColor: 'white', 
      borderRadius: 10
    },

    modalTextInput:
    {
      borderBottomWidth: 1, 
      marginTop: 10, 
      marginBottom: 20
    },

    confirmButton:
    {
      flex: 1,
      backgroundColor: '#4CAF50',
      paddingVertical: 10,
      marginRight: 10,
      borderRadius: 5,
      alignItems: 'center'
    },

    cancelButton:
    {
      flex: 1,
      backgroundColor: '#f44336',
      paddingVertical: 10,
      marginLeft: 10,
      borderRadius: 5,
      alignItems: 'center'
    },

    modalButtonsLocalisationContainer:
    {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      marginTop: 20
    },

    modalButtonsText:
    {
      color: 'white',
      fontWeight: 'bold'
    },

    editIconContainer: {
      flex: 1,
      backgroundColor: '#4CAF50',
      padding: 8,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },

    deleteIconContainer: {
      flex: 1,
      backgroundColor: '#f44336',
      padding: 8,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 12,
    },

    headerDeatils: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
      width: '100%',
      height: '10%',
    },

    MovementContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: 60,
      gap: 15,
    },

    horizontalButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 15,
      width: '100%',
    },

    movementButton: {
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 25,
      borderRadius: 10,
      minWidth: 120,
    },

    movementButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },

    backButton: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      fontWeight: 'bold',
      padding: 5,
      borderRadius: 5,
    },    

    robotSavedDetailsButton: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 5,
      borderRadius: 5,
      color: 'white',
      fontWeight: 'bold',
    },

    elementDetailsModal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    elementDetailsModalContent: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10
    },

    elementDetailsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10
    },

    closeModalButton: {
      backgroundColor: 'red',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center'
    },

    closeModalButtonText: {
      color: 'white',
      fontWeight: 'bold'

    }
  });

export default styles;