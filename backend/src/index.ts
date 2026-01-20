import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

/* Health check */
app.get("/", (_req, res) => {
  res.send("ReachInbox Backend is running");
});

/* Create email (from Compose page) */
app.post("/emails", async (req, res) => {
  const { toEmail, subject, body, scheduledAt, userEmail } = req.body;

  if (!toEmail || !subject || !body || !scheduledAt || !userEmail) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const email = await prisma.emailJob.create({
    data: {
      toEmail,
      subject,
      body,
      scheduledAt: new Date(scheduledAt),
      userEmail,
      status: "scheduled",
    },
  });

  res.json(email);
});

/* Get emails for logged-in user */
app.get("/emails/:userEmail", async (req, res) => {
  const { userEmail } = req.params;

  const emails = await prisma.emailJob.findMany({
    where: { userEmail },
    orderBy: { scheduledAt: "asc" },
  });

  res.json(emails);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
