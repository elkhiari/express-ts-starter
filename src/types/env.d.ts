// src/types/env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      MONGO_URI?: string;
      // Add other environment variables here as needed
    }
  }
  