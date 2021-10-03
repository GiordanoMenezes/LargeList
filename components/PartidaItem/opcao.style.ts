import styled from 'styled-components/native';

interface OpcaoProps {
  selected: boolean;
}

const Opcao = styled.Text<OpcaoProps>`
  background-color: ${({ selected }: OpcaoProps) =>
    selected ? '#0B7D2D' : '#F9C40F'};
  color: ${({ selected }: OpcaoProps) => (selected ? '#fff' : '#000')};
  width: 50px;
  margin: 3px;
  height: 56px;
  text-align: center;
  padding-top: 16px;
  border-radius: 4px;
  font-size: 14px;
`;

// export default Opcao;
