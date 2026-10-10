
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

let client;
const mongoUri = process.env.MONGODB_URI || "";

if (process.env.NODE_ENV === "development") {
    if (!global._mongoClient) {
        global._mongoClient = new MongoClient(mongoUri || "mongodb://localhost:27017/bazar-dor");
    }
    client = global._mongoClient;
} else {
    client = new MongoClient(mongoUri || "mongodb://localhost:27017/bazar-dor");
}

const db = client.db("bazar-dor");

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
    secret: process.env.BETTER_AUTH_SECRET,
    trustedOrigins: [
        process.env.BETTER_AUTH_URL,
        "https://bazar-dor-beryl.vercel.app",
        process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
        "http://localhost:3000",
    ].filter(Boolean),
    database: mongodbAdapter(db, {
        client,
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
    },
});