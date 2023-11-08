import { MyDatabase } from './creational/singleton/my-database';

console.log('Start! 🚀');

const db = MyDatabase.instance;

db.add({id: 137, name: 'Rick', age: 33});
db.add({id: 213, name: 'Morty', age: 14});
db.add({id: 255, name: 'Birdperson', age: 79});
db.add({id: 76, name: 'Summer', age: 18});


db.remove(255);

db.show();