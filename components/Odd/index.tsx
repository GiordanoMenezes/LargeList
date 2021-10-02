import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {User} from '../../App';

interface OddProps {
  value: string;
  id: string;
  type: string;
  selectedItems: User[];
  pressHandle: () => void;
}

const Odd = ({value, id, type, selectedItems, pressHandle}: OddProps) => {
  //const [selecao, setSelecao] = useState<boolean>(false);

  // function handleClick() {
  //    setSelecao(true);
  //   pressHandle();
  // }

  const selUser = selectedItems.find(it => it.id === id);
  return (
    <Text
      style={selUser && selUser.option === type ? styles.oddOn : styles.oddOff}
      onPress={pressHandle}>
      {value}
    </Text>
  );
};

const styles = StyleSheet.create({
  oddOff: {
    fontSize: 14,
    opacity: 0.5,
    margin: 10,
    backgroundColor: 'yellow',
    padding: 12,
  },
  oddOn: {
    fontSize: 14,
    opacity: 0.5,
    margin: 10,
    backgroundColor: '#2BF4F6',
    padding: 12,
  },
});

export default Odd;
