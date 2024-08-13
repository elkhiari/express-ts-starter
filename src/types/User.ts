interface User extends Document{
    username: string;
    password: string;
    email: string;
    avatar?: string;
}

export default User