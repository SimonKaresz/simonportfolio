import Email from "@models/email";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const { name, email, subject, message } = await request.json();

  try {
    await connectToDB();
    const newEmail = new Email({ name, email, subject, message });

    await newEmail.save();
    return new Response(JSON.stringify(newEmail), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new email", { status: 500 });
  }
};
