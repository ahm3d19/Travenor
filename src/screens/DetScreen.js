import React, { useRef } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';

const DetScreen = () => {
  const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.open();
    }
  };
  return (
    // <View style={styles.container}>

    <View style={styles.container}>
      <Text>DetScreen</Text>
      <View>
      <Button title="Open Modal" onPress={openModal} />
      <Modalize ref={modalRef}>
        <View style={{ padding: 20 }}>
          <Text>This is my modal content</Text>
        </View>
      </Modalize>
    </View>
    </View>

    // </View>
  );
};

export default DetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
