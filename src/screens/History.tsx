import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';

import {VStack, HStack, Text, Box} from 'native-base';

type HistoryDataPoint = {
  start_time: number;
  end_time: number | null;
  license_plate: string;
};

const HistoryScreen = () => {
  // dummy data
  const historyData = [
    {
      start_time: 1665015200000,
      // end_time: 1665015500000,
      end_time: null,
      license_plate: '09BQIX',
    },
  ];

  const [historyList, setHistoryList] = useState<HistoryDataPoint[]>([]);

  useEffect(() => setHistoryList(historyData), []);

  const getDateTime = (unix_timestamp: number | null) => {
    if (!unix_timestamp) return 'Currently parked';
    return new Date(unix_timestamp).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getElapsedTime = (start_time: number, end_time: number | null) => {
    const timestamp = new Date(start_time);

    if (!end_time) {
      let elapsedTimeMs = Math.abs(new Date().getTime() - start_time);
      let days = elapsedTimeMs / (24 * 60 * 60 * 1000);
      let hours = (days % 1) * 24;
      let minutes = (hours % 1) * 60;
      let secs = (minutes % 1) * 60;
      [days, hours, minutes, secs] = [
        Math.floor(days),
        Math.floor(hours),
        Math.floor(minutes),
        Math.floor(secs),
      ];

      return days + 'd ' + hours + 'h ' + minutes + 'm ';
    }
  };

  return (
    <SafeAreaView>
      <VStack space={4} justifyContent={'center'} alignItems={'center'} mt={10}>
        {historyList.map((dataPoint, index) => (
          <HStack
            key={index}
            w={'90%'}
            p={3}
            bg={'gray.200'}
            borderRadius={12}
            justifyContent={'space-between'}>
            <Box>
              <Text>In: {getDateTime(dataPoint.start_time)}</Text>
              <Text>Out: {getDateTime(dataPoint.end_time)}</Text>
            </Box>
            <Box>
              <Text>
                Duration:{' '}
                {getElapsedTime(dataPoint.start_time, dataPoint.end_time)}
              </Text>
            </Box>
          </HStack>
        ))}
      </VStack>
    </SafeAreaView>
  );
};

export default HistoryScreen;
