import { conf } from "../appwrite/auth";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (userAccount) {
                // Call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (err) {
            throw err;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(
                email,
                password
            );
        } catch (err) {
            throw err;
        }
    }
}

const authService = new AuthService();

export default authService;
