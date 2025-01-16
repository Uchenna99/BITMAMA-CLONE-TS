import { createContext, useContext, useState } from "react";


interface OAuthContextProps {
    googleCred: GoogleAuthPayload | null;
    setgoogleCred: React.Dispatch<React.SetStateAction<GoogleAuthPayload | null>>;
}

export interface GoogleAuthPayload {
    aud: string; // Audience: Client ID for your app
    azp: string; // Authorized party
    email: string; // User's email
    email_verified: boolean; // Whether the email is verified
    exp: number; // Expiration time (Unix timestamp)
    family_name: string; // User's last name
    given_name: string; // User's first name
    iat: number; // Issued at (Unix timestamp)
    iss: string; // Issuer (e.g., Google's auth server URL)
    jti: string; // JWT ID (unique identifier for the token)
    name: string; // Full name of the user
    nbf: number; // Not before (Unix timestamp)
    picture: string; // URL of the user's profile picture
    sub: string; // Subject (user's unique ID in Google's system)
}


export const Context = createContext<OAuthContextProps | null>(null);


export const OAuthContext = ({Children}:any)=>{
    const [googleCred, setgoogleCred] = useState<GoogleAuthPayload | null>(null);


    return(
        <>
            <Context.Provider value={{
                googleCred, setgoogleCred
            }}>
                {Children}
            </Context.Provider>
        </>
    )

};

export const useOAuthContext = ()=>{
    const GoogleContext = useContext(Context);
    if(!GoogleContext){
        throw new Error('Context unavailable here')
    }
    return GoogleContext;
};