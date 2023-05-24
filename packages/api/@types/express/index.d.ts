declare namespace Express {
  export interface Request {
    userData: {
      googleId: string;
      userId: string;
    };
  }
}
