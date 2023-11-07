import { MyDatabase } from './creational/singleton/my-database';

console.log('Start! 🚀');

const db1 = MyDatabase.getInstance();

const db2 = MyDatabase.getInstance();

console.log('Are both db\'s equals? ', db1 === db2);
