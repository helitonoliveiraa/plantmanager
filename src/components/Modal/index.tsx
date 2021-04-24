import React from 'react';
import { Modal, Text, View, Pressable } from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import { PlantProps } from '../../types';

import { styles } from './styles';

type ModalProps = {
  plant: PlantProps;
  isOpen: boolean;
  handleDelete: () => void;
  handleCloseModal: () => void;
};

export function CustomModal({
  isOpen,
  plant,
  handleDelete,
  handleCloseModal,
}: ModalProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent visible={isOpen}>
        <View style={styles.content}>
          <View style={styles.photoContainer}>
            <SvgFromUri uri={plant.photo} width={90} height={90} />
          </View>

          <Text style={styles.text}>Deseja mesmo deletar sua</Text>
          <Text style={styles.plant}>{`${plant.name}?`}</Text>

          <View style={styles.buttonsContainer}>
            <Pressable
              style={[styles.button, styles.buttonCancel]}
              onPress={handleCloseModal}
            >
              <Text style={styles.buttonCancelText}>Cancelar</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={handleDelete}>
              <Text style={styles.buttonDeleteText}>Deletar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
