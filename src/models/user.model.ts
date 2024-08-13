import IUser from "../types/User";
import { Schema } from "mongoose";

const UserSchema = new Schema<IUser>({
  username: { 
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function(v: string) {
        return /^[a-zA-Z0-9._-]{3,16}$/.test(v);
      },
      message: (props: any) => `${props.value} is not a valid username
        (must be between 3 and 16 characters and can only contain letters, numbers, periods, underscores, and hyphens)!`,
    }
    },
  email: { 
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function(v: string) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(v);
      },
      message: (props: any) => `${props.value} is not a valid email!`,
    }
   },
  password: { 
    type: String,
    required: true,
    validate: {
      validator: function(v: string) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(v);
      },
      message: (props: any) => `Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number!`,
    }
  },
  avatar : {
    type: String,
  },

}, { timestamps: true });


