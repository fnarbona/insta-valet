import React from 'react';
import {SafeAreaView} from 'react-native';

import {FormControl, Input, Text, VStack} from 'native-base';

const AccountScreen = () => {
  return (
    <SafeAreaView>
      <VStack w={'80%'} margin={'auto'} pt={10} space={3}>
        <FormControl>
          <FormControl.Label>Name:</FormControl.Label>
          <Input value={'Fernando Narbona'} size={'lg'} />
          <FormControl.ErrorMessage>Hello</FormControl.ErrorMessage>
        </FormControl>
        <FormControl>
          <FormControl.Label>Phone:</FormControl.Label>
          <Input value={'(786) 344-7889'} size={'lg'} />
          <FormControl.ErrorMessage>Hello</FormControl.ErrorMessage>
        </FormControl>
        <FormControl>
          <FormControl.Label>Email:</FormControl.Label>
          <Input value={'fernando.narbona@gmail.com'} size={'lg'} />
          <FormControl.ErrorMessage>Hello</FormControl.ErrorMessage>
        </FormControl>
        <FormControl>
          <FormControl.Label>Building:</FormControl.Label>
          <Input value={'Brickell Ten Condominiums'} size={'lg'} />
          <FormControl.ErrorMessage>Hello</FormControl.ErrorMessage>
        </FormControl>
      </VStack>
    </SafeAreaView>
  );
};

export default AccountScreen;
