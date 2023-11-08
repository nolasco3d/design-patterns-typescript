import type { User } from './types/user.interface';

export class MyDatabase {
    // Why use static attribute?
    private static _instance: MyDatabase | null = null;
    private users: User[] = [];
  
    private constructor() {}

    // why use static method?
    public static get instance(): MyDatabase {
        // Why appoint to direct class rather than this ?
        if(!MyDatabase._instance) {
            MyDatabase._instance = new MyDatabase();
        }

        return MyDatabase._instance;
    }

    public add(user: User): void {
        this.users.push(user);
    }

    public remove(id: number): void {
        this.users = this.users.filter(user => user.id !== id);
    }

    public show(): void {
        for (const user of this.users) {
            console.log(user);
            
        }
    }
}