import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: 
    {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },

    titleContainer: 
    {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'yellow',
      alignItems: 'center',
      width: '100%',
      height: '10%',
    },

    contentContainer:
    {
      flex: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 40,
      backgroundColor: 'lightgray',
      paddingTop: 20,
      width: '100%',
    },

    footerContainer:
    {
      flex: 0.5,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: 'yellow',
      alignItems: 'center',
      width: '100%',
      height: '5%',
      gap: 20,
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
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 25,
      marginBottom: 25,
      flexDirection: 'row',
      padding: 15,
      gap: 20,
    },

    contentTileImage:
    {
      width: 150,
      height: 150,
      borderRadius: 15,
      flexShrink: 0,
    },

    contentTileRight:
    {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      height: 150,
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
      flexDirection: 'column',
      gap: 10,
      left: '50%',
      width: '50%',
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