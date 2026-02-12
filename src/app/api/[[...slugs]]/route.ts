import connectDB from "@/lib/db";
import whatsapp from "@/lib/models/whatsapp";
import email from "@/lib/models/mail";
import sms from "@/lib/models/sms";
import { Elysia, t } from "elysia";
import { z } from "zod";

const sendmessage = new Elysia({ prefix: "/send" })
    .get("/whatsapp", async ({ query: { customId } }) => {
        await connectDB();
        const messages = await whatsapp.find({ customId }).sort({ createdAt: -1 });
        return messages;
    }, { query: z.object({ customId: z.string() }) })
    .get("/email", async ({ query: { customId } }) => {
        await connectDB();
        const messages = await email.find({ customId }).sort({ createdAt: -1 });
        return messages;
    }, { query: z.object({ customId: z.string() }) })
    .get("/sms", async ({ query: { customId } }) => {
        await connectDB();
        const messages = await sms.find({ customId }).sort({ createdAt: -1 });
        return messages;
    }, { query: z.object({ customId: z.string() }) })

    .post(
        "/whatsapp",
        async ({ body }) => {
            await connectDB();
            const message = await whatsapp.create({ ...body });
            return message;
        },
        {
            body: z.object({
                customId: z.string(),
                mobileNumber: z.string(),
                message: z.string(),
            }),
        }
    )

    .post(
        "/email",
        async ({ body }) => {
            await connectDB();
            const message = await email.create({ ...body });
            return message;
        },
        {
            body: z.object({
                customId: z.string(),
                emailAddress: z.string(),
                subject: z.string(),
                message: z.string(),
            }),
        }
    )

    .post(
        "/sms",
        async ({ body }) => {
            await connectDB();
            const message = await sms.create({ ...body });
            return message;
        },
        {
            body: z.object({
                customId: z.string(),
                mobileNumber: z.string(),
                message: z.string(),
            }),
        }
    );

const app = new Elysia({ prefix: "/api" })
    .get("/", "Hello Nextjs")
    .post(
        "/",
        ({ body }) => body,
        {
            body: t.Object({
                name: t.String(),
            }),
        }
    )
    .use(sendmessage);

export const GET = app.fetch;
export const POST = app.fetch;

export type App = typeof app;
