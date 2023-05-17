declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT?: string | number;
      MONGO_ROOT_USERNAME: string;
      MONGO_ROOT_PASSWORD: string;
      MONGO_HOST: string;
      MONGO_PORT: string;
      MONGO_DATABASE_NAME: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      API_URL?: string;
    }
  }
}

// convert this file into a module by adding an empty export statement
export {};
