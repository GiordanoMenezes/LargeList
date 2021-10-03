import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { Aposta } from '../../domain/Aposta';
import { Partida } from '../../domain/Partida';
import { styleB } from './styles';
import { parseISO, format } from 'date-fns';
import Odd from '../../components/Odd';

type PartidaItemProps = {
  partida: Partida;
  // selectedItems: Aposta[];
  //  onPressItem: (partida: Partida, opcao: string, odd: number) => void;
};

const PartidaItem = ({
  partida,
}: // selectedItems,
//  onPressItem,
PartidaItemProps) => {
  // const apostasids = extendedState.map(ap => ap.partidaid);
  const parsedDate = format(parseISO(partida.dataP.toString()), 'dd/MM/yyyy HH:mm');
  // const selItem = apostas
  //   ? apostas.find((ap) => ap.partidaid === id)
  //   : undefined;

  return (
    <View style={styleB.PartidaView}>
      <View style={styleB.MatchView}>
        <Text style={styleB.MatchText}>{partida.casa}</Text>
        <Text style={styleB.MatchText}>{partida.fora}</Text>
        <Text style={styleB.DateText}>{`${parsedDate}  +${partida.qtOdds}`}</Text>
      </View>
      <View style={styleB.OddsView}>
        <Odd
          value={partida.odCasa}
          // partida={partida}
          // option={'casa'}
          // selectedItems={selectedItems}
          //   pressHandle={onPressItem}
        />
        <Odd
          value={partida.odEmpate}
          // partida={partida}
          //  option={'empate'}
          // selectedItems={selectedItems}
          //   pressHandle={onPressItem}
        />
        <Odd
          value={partida.odFora}
          //  partida={partida}
          //  option={'fora'}
          // selectedItems={selectedItems}
          //  pressHandle={onPressItem}
        />
      </View>
    </View>
  );
};

export default PartidaItem;
