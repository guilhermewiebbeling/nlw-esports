import React, { useState } from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import  * as Clipboard from 'expo-clipboard';

import { THEME } from '../../theme';
import { styles } from './styles';
import { Heading } from '../Heading'

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({discord, onClose, ...rest}: Props) {
  const[copying, setCopying] = useState<boolean>(false);

  async function handleCopyDiscordToClipboard() {
    setCopying(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert('Discord copiado!', 'Usuário copiado.')
    setCopying(false);
  }

  return (
    <Modal transparent 
      statusBarTranslucent 
      animationType='fade'
      {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.close}
            onPress={onClose}>
            <MaterialIcons name='close' 
              size={20} 
              color={THEME.COLORS.CAPTION_500} />
          </TouchableOpacity>

          <CheckCircle size={64} 
            color={THEME.COLORS.SUCCESS} 
            weight='bold' />

          <Heading style={{alignItems: 'center', marginTop: 24}}
            title="Let's play!"
            subtitle='Agora é só começar a jogar!'
          />

          <Text style={styles.label}>
            Adicione no discord
          </Text>
          <TouchableOpacity style={styles.discordButton}
            disabled={copying}
            onPress={handleCopyDiscordToClipboard}>
            <Text style={styles.discordLabel}>
              {copying ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
   </Modal>
  );
}