import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: 16px;
  color: #312e38;
  font-family: 'Roboto-Medium';
  padding: 0px 4px;
`;
export const Description = styled.Text`
  font-size: 13px;
  color: #312e38;
  font-family: 'Roboto-Regular';
  padding: 2px 2px 2px 4px;
`;
export const OddsView = styled.View`
  flex: 1;
  padding-right: 5px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const styleB = StyleSheet.create({
  PartidaView: {
    flexDirection: 'row',
  },
  MatchView: {
    width: '55%',
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingLeft: 6,
  },
  OddsView: {
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 7,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  MatchText: {
    fontSize: 14.5,
  },
  DateText: {
    fontSize: 12,
    color: '#2f3640',
  },
});
