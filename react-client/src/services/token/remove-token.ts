import { TOKEN_KEY } from "./token-key";

function removeToken(): void {
    localStorage.removeItem(TOKEN_KEY);
}

export default removeToken;