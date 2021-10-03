/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import faker from 'faker';
import Odd from './components/Odd';
import BigList, { BigListProps } from 'react-native-big-list';
import Odds from './services/Odds';
import { Liga } from './domain/Liga';
import { Partida } from './domain/Partida';
import PartidaItem from './components/PartidaItem';

type ItemLiga = Partida[];

// const SCREEN_WIDTH = Dimensions.get('window').width;

const App = () => {
  const [lista, setLista] = useState<any[][]>([] as ItemLiga[]);
  const [canrender, setCanrender] = useState<boolean>(false);
  const ligasnomes = useRef<string[]>([]);

  const preparePartidasLists = useCallback((ligas: Liga[]): void => {
    console.log('Entrou em prepara Partidas');
    const itens: ItemLiga[] = [];
    const itensligas: string[] = [];
    ligas.forEach((liga) => {
      itens.push(liga.partviews);
      itensligas.push(liga.descricao);
    });
    setLista(itens);
    ligasnomes.current = itensligas;
  }, []);

  const fetchData = useCallback(async () => {
    console.log('Entrou em fetchData');
    const res = await Odds.jogosHoje();
    const resligas: Liga[] = res.data.ligas;
    preparePartidasLists(resligas);
    setCanrender(true);
  }, [preparePartidasLists]);

  useEffect(() => {
    try {
      console.log('use Effect!');
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [fetchData]);

  // function handleOdd(user: User, option: string) {
  //   const userAdd = {
  //     ...user,
  //     option,
  //   };
  //   setState((prevUsers) => {
  //     const users = prevUsers.users;
  //     return {
  //       users: [...users, userAdd],
  //     };
  //   });
  // }

  const renderSectionHeader = (section: number) => {
    const nomeliga = ligasnomes.current[section];
    return (
      <View style={styles.container}>
        <Text style={styles.league}>{nomeliga}</Text>
      </View>
    );
  };

  const renderItem = ({ item, index, section }: any) => {
    const partida = lista[section][index];
    return (
      <PartidaItem
        partida={item}
        // selectedItems={state.apostas}
        //  onPressItem={oddHandle}
      />
    );
  };

  return (
    <>
      {canrender && (
        <SafeAreaView style={styles.container}>
          <BigList
            sections={lista}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            itemHeight={70}
            sectionHeaderHeight={50} // Required to show section header
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
  league: {
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: '#0070EA',
    color: '#FFFFFF',
    padding: 10,
  },
  container2: {
    flex: 1,
    maxHeight: 50,
    backgroundColor: '#6c5ce7',
    justifyContent: 'center',
    alignItems: 'center',
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
