import {OnboardFlow} from 'react-native-onboard';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OnBoard = () => {
  return (
    <View>
      <OnboardFlow
        pages={[
          {
            primaryButtonTitle: 'Get Started',
            title: 'Life is short and the world is wide',
            subtitle:
              'At Friends tours and travel, we customize reliable and trutworthy educational tours to destinations all over the world',
            imageUri: 'https://frigade.com/img/example1.png',
          },
          {
            primaryButtonTitle: 'Next',
            title: 'It’s a big world out there go explore',
            subtitle:
              'To get the best of your adventure you just need to leave and go where you like. we are waiting for you',
            imageUri: 'https://frigade.com/img/example1.png',
          },
          {
            primaryButtonTitle: 'Next',
            title: 'People don’t take trips, trips take people',
            subtitle:
              'To get the best of your adventure you just need to leave and go where you like. we are waiting for you',
            imageUri: 'https://frigade.com/img/example1.png',
          },
        ]}
        // autoPlay={true}
        showDismissButton={true}
        titleStyle={{paddingLeft: 20}}
        type={'fullscreen'}
        primaryButtonStyle={{backgroundColor: '#24BAEC'}}
        paginationColor="#C4FFFF"
        paginationSelectedColor="#24BAEC"
      />
      
    </View>
  );
};

export default OnBoard;

const styles = StyleSheet.create({});
