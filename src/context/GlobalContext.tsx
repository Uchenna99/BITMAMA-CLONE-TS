import { createContext, useContext, useState } from "react";


interface OAuthContextProps {
    googleCred: GoogleAuthPayload | null;
    setgoogleCred: React.Dispatch<React.SetStateAction<GoogleAuthPayload | null>>;
}

export interface GoogleAuthPayload {
    iss: string;
    azp: string;
    aud: string;
    sub: string;
    email: string;
    email_verified: boolean;
    exp: number;
    family_name: string;
    given_name: string;
    iat: number;
    jti: string;
    name: string;
    nbf: number;
    picture: string;
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
    const googleContext = useContext(Context);
    if(!googleContext){
        throw new Error('Context unavailable here')
    }
    return googleContext;
};