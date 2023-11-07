export class MyDatabase {
    // Why use static attribute?
    private static instance: MyDatabase | null = null;
  
    private constructor() {}

    // why use static method?
    public static getInstance(): MyDatabase {
        // Why appoint to direct class rather than this ?
        if(!MyDatabase.instance) {
            MyDatabase.instance = new MyDatabase();
        }

        return MyDatabase.instance;
    }
}