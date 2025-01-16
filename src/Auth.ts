import { jwtDecode } from "jwt-decode";

interface CredentialResponse {
    credential: string;
    clientId: string;
    select_by: 'btn' | 'auto' | 'user';
}

interface GoogleAuthPayload {
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


const onSuccess = (credentialResponse: CredentialResponse)=>{
    console.log('Login Successful', jwtDecode(credentialResponse.credential));
    // return jwtDecode(response.credential);
};