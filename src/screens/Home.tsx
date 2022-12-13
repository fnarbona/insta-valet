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
        <MenuButton
          label={'My Cars'}
          handlePress={() => navigation.navigate('Cars')}
        />
        <MenuButton
          label={'Parking History'}
          handlePress={() => navigation.navigate('History')}
        />
        <MenuButton
          label={'My Account'}
          handlePress={() => navigation.navigate('Account')}
        />
        <MenuButton
          label={'Validations'}
          handlePress={() => navigation.navigate('Validations')}
        />
        <MenuButton
          label={'Help'}
          handlePress={() => navigation.navigate('Help')}
        />
      </VStack>
    </SafeAreaView>
  );
};

const MenuButton = ({
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
      colorScheme={'blue'}
      onPress={handlePress}>
      <Text fontSize={'xl'} color={'white'}>
        {label}
      </Text>
    </Button>
  );
};

export default HomeScreen;
