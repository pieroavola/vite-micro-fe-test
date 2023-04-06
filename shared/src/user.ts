import React from "react";

export interface User {
    username: string,
    roles: [string],
}

export type UserContextType = {
    user?: User;
}

export const UserContext = React.createContext<UserContextType>({});
