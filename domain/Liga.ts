import { Pais } from './Pais';
import { Partida } from './Partida';

export interface Liga {
  id: number;
  nomeliga: string;
  apelido: string;
  prioridade: number;
  pais: Pais;
  partviews: Partida[];
  mostrar: boolean;
  vazia: boolean;
  descricao: string;
}
