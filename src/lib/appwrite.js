import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66daeb9a0004e5ae2761");

export const account = new Account(client);
export const databases = new Databases(client);
