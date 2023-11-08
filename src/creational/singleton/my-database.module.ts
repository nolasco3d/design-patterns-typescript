import type { User } from './types/user.interface';

const users: User[] = [];

export const MyDatabaseModule = {

    add(user: User): void {
        users.push(user);
    },

    remove(id: number): void {
    // users = users.filter(user => user.id !== id);
    
        // users.splice(id, 1);
    
        users.filter(user => user.id !== id);
    },

    show(): void {
        for (const user of users) {
            console.log(user);
          
        }
    }
};