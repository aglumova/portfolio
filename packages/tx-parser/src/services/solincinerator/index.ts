import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../../ServiceDefinition';
import { matchAnyInstructionWithPrograms } from '../../utils/parseTransaction/matchAnyInstructionWithPrograms';

const platformId = 'solincinerator';

const contract = {
  name: 'Incinerator',
  address: 'F6fmDVCQfvnEq2KR8hhfZSEczfM9JK9fWbCsYJNbTGn7',
  platformId,
};

const service: ServiceDefinition = {
  id: `${platformId}-cleanup`,
  name: 'Cleanup',
  platformId,
  networkId: NetworkId.solana,
  matchTransaction: (tx) =>
    matchAnyInstructionWithPrograms(tx, [contract.address]),
};

export const services: ServiceDefinition[] = [service];
export default services;
