import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
<<<<<<< HEAD
import Home  from './Home';
=======
>>>>>>> 0f4e15ae89d451d6e7fea08619d104a692525137
import { HomeNavigator } from '../navigators/HomeNavigator';
import { ConnectButton, SignInButton } from '../components/sign-in/sign-in-ui';

const ProfileScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigation = useNavigation();

<<<<<<< HEAD
 
=======
  // const handleConnectWallet = () => {
  //   // Xử lý kết nối ví ở đây, sau khi kết nối thành công, cập nhật state
  //   setIsLoggedIn(true);
  // };

  // const handleSignIn = () => {
  //   // Xử lý đăng nhập ở đây, sau khi đăng nhập thành công, cập nhật state
  //   setIsLoggedIn(true);
  // };
>>>>>>> 0f4e15ae89d451d6e7fea08619d104a692525137

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require('../img/girl.jpg')}  
        />
        <Text style={styles.profileName}>John Doe</Text>  
      </View>
      <View style={styles.separator}></View>
      <View style={styles.stats}>
        {isLoggedIn ? (
          <HomeNavigator />
        ) : (
          <View style={styles.buttonContainer}>
            <ConnectButton />
            <SignInButton />
          </View>
        )}
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  stats: {
    flexDirection: 'column',  
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProfileScreen;
