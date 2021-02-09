// import { example, anotherExample } from '../src/data.js';


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

import {getPokemones} from '../src/data.js';

describe('Probar Async/Await', () => {

    it('Realizar peticion a una api', async () => {
        await getPokemones().then(data => {
            expect(data.results).toBeGreaterThan[0];
        });
    });
});
