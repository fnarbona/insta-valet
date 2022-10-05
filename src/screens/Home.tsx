import React from 'react';
import {GestureResponderEvent} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../App';
// components
import {SafeAreaView} from 'react-native';
import {Button, Text, VStack} from 'native-base';

type HomeScreenProps = NativeStackScreenProps<RootStackParamsList, 'Home'>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <SafeAreaView>
      <VStack
        space={'5'}
        justifyContent={'center'}
        alignItems={'center'}
        mt={10}>
        <HomeButton
          label={'My Cars'}
          handlePress={() => navigation.navigate('Cars')}
        />
        <HomeButton
          label={'Parking History'}
          handlePress={() => navigation.navigate('History')}
        />
        <HomeButton
          label={'My Account'}
          handlePress={() => navigation.navigate('Account')}
        />
        <HomeButton
          label={'Validations'}
          handlePress={() => navigation.navigate('Validations')}
        />
        <HomeButton
          label={'Help'}
          handlePress={() => navigation.navigate('Help')}
        />
      </VStack>
    </SafeAreaView>
  );
};

const HomeButton = ({
  handlePress,
  label,
}: {
  handlePress: (event: GestureResponderEvent) => void;
  label: String;
}) => {
  return (
    <Button
      h={'80px'}
      w={'80%'}
      borderRadius={12}
      bg={'blue.600'}
      onPress={handlePress}>
      <Text fontSize={'xl'} color={'white'}>
        {label}
      </Text>
    </Button>
  );
};

export default HomeScreen;
