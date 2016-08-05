import { Parties } from '../../../both/collections/parties/parties.collection';
 
export function loadParties() {
  if (Parties.find().count() === 0) {
    const parties = [
      {
        name: 'Dubstep-Free Zone',
        description: 'Can we please just for an evening not listen to dubstep.',
        location: 'Palo Alto'
      },
      {
        name: 'All dubstep all the time',
        description: 'Get it on!',
        location: 'Palo Alto'
      },
      {
        name: 'Savage lounging',
        description: 'Leisure suit required. And only fiercest manners.',
        location: 'San Francisco'
      }
    ];
 
    parties.forEach((party) => Parties.insert(party));
  }
}