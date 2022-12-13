import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {Text, Divider, Box} from 'native-base';

const HelpScreen = () => {
  const questionsList = [
    {
      header: 'QUESTION 1',
      content: 'Example content 1',
    },
    {
      header: 'QUESTION 2',
      content: 'Example content 2',
    },
    {
      header: 'QUESTION 3',
      content: 'Example content 3',
    },
    {
      header: 'QUESTION 4',
      content: 'Example content 4',
    },
  ];

  return (
    <SafeAreaView>
      {questionsList.map(q => (
        <Collapse>
          <CollapseHeader>
            <Box p={3}>
              <Text>{q.header}</Text>
            </Box>
            <Divider />
          </CollapseHeader>
          <CollapseBody>
            <Box p={3} bg={'blue.100'}>
              <Text>{q.content}</Text>
            </Box>
            <Divider />
          </CollapseBody>
        </Collapse>
      ))}
    </SafeAreaView>
  );
};

export default HelpScreen;
