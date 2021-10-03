import React, { memo, useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Aposta } from '../../domain/Aposta';
import { Partida } from '../../domain/Partida';

interface OddProps {
  value: string;
  // partida: Partida;
  // option: string;
  // selectedItems: Aposta[];
  // pressHandle: (partida: Partida, opcao: string, odd: number) => void;
}

const Odd = ({
  value,
}: // partida,
// option,
// selectedItems,
// pressHandle,
OddProps) => {
  //const { apostas } = useContext(CupomContext);
  //const [selecao, setSelecao] = useState<boolean>(false);

  // function handleClick() {
  //    setSelecao(true);
  //   pressHandle();
  // }

  // const selAposta = apostas.find((aposta) => aposta.partidaid === partida.id);
  return (
    <Text
      style={styles.oddOff}
      // onPress={() => pressHandle(partida, option, Number(value))}
    >
      {value}
    </Text>
  );
};

const styles = StyleSheet.create({
  oddOff: {
    fontSize: 14,
    margin: 3,
    backgroundColor: '#f9d031',
    paddingVertical: 16,
    borderRadius: 4,
    height: 55,
    width: 60,
    textAlign: 'center',
  },
  oddOn: {
    fontSize: 14,
    margin: 3,
    backgroundColor: '#d12d21',
    color: '#fff',
    paddingVertical: 16,
    borderRadius: 4,
    height: 55,
    width: 60,
    textAlign: 'center',
  },
});

export default Odd;
