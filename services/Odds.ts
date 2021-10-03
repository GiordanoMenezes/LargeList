import { Api } from './api';

export default {
  jogosHoje: () => Api.get<any>('http://api-nacional.nordeste-idc.saveincloud.net/testesnacional/tela/telaHoje'),
};
