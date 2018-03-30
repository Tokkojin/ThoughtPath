import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const patients = [
      { id: 11, name: 'Jack' },
      { id: 12, name: 'Anne' },
      { id: 13, name: 'Danny' },
      { id: 14, name: 'Benjamin' },
      { id: 15, name: 'Thomas' },
      { id: 16, name: 'Rachel' },
      { id: 17, name: 'Sara' },
      { id: 18, name: 'Diana' },
      { id: 19, name: 'Randall' },
      { id: 20, name: 'John' }
    ];
    return {patients};
  }
}
