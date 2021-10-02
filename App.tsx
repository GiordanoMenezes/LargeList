/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import faker from 'faker';
import Odd from './components/Odd';
import {IndexPath, LargeList, LargeListDataType} from 'react-native-largelist';

export interface User {
  id: string;
  image: string;
  name: string;
  cvv: string;
  casa: number;
  empate: number;
  fora: number;
  description: string;
  option?: string;
}

// type ItemList = {
//   type: string;
//   item: User;
// };

const SCREEN_WIDTH = Dimensions.get('window').width;

const App = () => {
  const [lista, setLista] = useState<LargeListDataType>([]);
  const [canrender, setCanrender] = useState<boolean>(false);
  const [state, setState] = useState<{users: User[]}>({users: []});

  useEffect(() => {
    const fakeData: LargeListDataType = [
      {
        items: [] as User[],
      },
    ];
    for (let i = 0; i < 300; i += 1) {
      fakeData[0].items.push({
        id: faker.datatype.uuid(),
        cvv: faker.finance.creditCardCVV(),
        casa: faker.datatype.number(),
        empate: faker.datatype.number(),
        fora: faker.datatype.number(),
        image: faker.image.avatar(),
        name: faker.name.firstName(),
        description: faker.random.words(5),
      });
    }
    console.log(fakeData);
    setLista(fakeData);
    setCanrender(true);
  }, []);

  function handleOdd(user: User, option: string) {
    const userAdd = {
      ...user,
      option,
    };
    setState(prevUsers => {
      const users = prevUsers.users;
      return {
        users: [...users, userAdd],
      };
    });
  }

  const renderItem = ({row}: IndexPath) => {
    const user = lista[0].items[row];
    const {description, image, name, cvv, casa, fora, id} = user;
    return (
      <View style={styles.listItem}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.body}>
          <Text style={styles.name}>{`${name}`}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.odds}>
            <Odd
              value={cvv}
              id={id}
              type={'cvv'}
              selectedItems={state.users}
              pressHandle={() => handleOdd(user, 'cvv')}
            />
            <Odd
              value={`${casa}`}
              id={id}
              type={'casa'}
              selectedItems={state.users}
              pressHandle={() => handleOdd(user, 'casa')}
            />
            <Odd
              value={`${fora}`}
              id={id}
              type={'fora'}
              selectedItems={state.users}
              pressHandle={() => handleOdd(user, 'fora')}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      {canrender && (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.container2}>
            <Text
              style={
                styles.title
              }>{`Usuários Selecionados: ${state.users.length}`}</Text>
          </View>
          <LargeList
            style={styles.container}
            data={lista}
            heightForIndexPath={() => 150}
            renderIndexPath={renderItem}
          />
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    minHeight: 1,
    minWidth: 1,
  },
  container2: {
    flex: 1,
    maxHeight: 50,
    backgroundColor: '#6c5ce7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    paddingHorizontal: 15,
    maxWidth: SCREEN_WIDTH - (80 + 20),
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    borderRightWidth: 1,
    borderRightColor: 'lightgray',
  },
  image: {
    height: 80,
    width: 80,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    opacity: 0.5,
  },
  listItem: {
    flexDirection: 'row',
    margin: 10,
  },
  odds: {
    flexDirection: 'row',
  },
});

export default App;
