import React from "react";

export interface User {
    username: string,
    roles: [string],
}

export type UserContextType = {
    user?: User;
    setUser: (user: User) => void;
}

export const UserContext = React.createContext<UserContextType>({
    setUser: (_) => {
    },
});
