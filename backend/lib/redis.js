import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis({
	host: "subtle-grouse-4262.upstash.io",
	port: 6379,
	password: "ARCmAAImcDFhNzk5MjI0Y2Q3ODM0MTg2YWJjNjg5YTY4OWQxOGVmNnAxNDI2Mg",
	tls: {},
});
