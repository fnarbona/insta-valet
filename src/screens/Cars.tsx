import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';

import {Box, VStack, Text, Button, HStack} from 'native-base';

type Car = {
  make: string;
  color: string;
  license_plate: string;
  requested: boolean;
};

const CarsScreen = () => {
  // dummy data
  const carsData = [
    {
      make: 'BMW',
      color: 'Black',
      license_plate: '09BQIX',
      requested: false,
    },
    {
      make: 'BMW',
      color: 'Red',
      license_plate: 'A2BKF9',
      requested: false,
    },
  ];

  const [carsList, setCarsList] = useState<Car[]>([]);

  useEffect(() => setCarsList(carsData), []);

  const requestCar = (index: number) => {
    // return if already requested
    if (carsList[index].requested) return;

    // copy state and manipulate, really this should be based on API response when updating in server
    const request = [...carsList];
    request[index].requested = true;

    setCarsList(request);
  };

  return (
    <SafeAreaView>
      <VStack space={4} justifyContent={'center'} alignItems={'center'} mt={10}>
        {carsList.map((car, index) => (
          <HStack
            w={'90%'}
            p={3}
            bg={'gray.200'}
            borderRadius={12}
            justifyContent={'space-between'}>
            <Box>
              <Text>{car.license_plate}</Text>
              <Text>
                {car.make} {car.color}
              </Text>
            </Box>
            <Button
              w={'100px'}
              colorScheme={car.requested ? 'green' : 'blue'}
              onPress={() => requestCar(index)}>
              {car.requested ? 'Requested' : 'Request'}
            </Button>
          </HStack>
        ))}
      </VStack>
    </SafeAreaView>
  );
};

export default CarsScreen;
