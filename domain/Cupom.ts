import { Aposta } from './Aposta';

export interface Cupom {
  codigo: string;
  aposta: Aposta[];
  fator: number;
  valor: number;
  retorno: number;
  nomecliente: string;
  dataCupom: Date;
  cambista: string;
}
