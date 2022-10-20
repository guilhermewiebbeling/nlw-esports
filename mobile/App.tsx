import { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native'; 
import { Subscription } from 'expo-modules-core';
import { 
  useFonts, 
  Inter_400Regular, 
  Inter_600SemiBold, 
  Inter_700Bold, 
  Inter_900Black 
} from '@expo-google-fonts/inter';

import * as Notifications from 'expo-notifications';
import './src/services/notificationConfigs';
import { getPushNotificationToken } from './src/services/getPushNotificationToken';

import { Routes } from './src/routes/';
import { Background } from './src/components/Background/'
import { Loading } from './src/components/Loading/';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_900Black 
  });

  const getNotficationListener = useRef<Subscription>();
  const responseNotficationListener = useRef<Subscription>();

  /*useEffect(() => {
    getPushNotificationToken();
  });

  useEffect(() => {
    getNotficationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    responseNotficationListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      if (getNotficationListener.current && responseNotficationListener.current) {
        Notifications.removeNotificationSubscription(getNotficationListener.current);
        Notifications.removeNotificationSubscription(responseNotficationListener.current);
      }
    }
  }, []);*/

  return (
    <Background>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent />
        { fontsLoaded ? <Routes/> : <Loading/> }
    </Background>
  );
}