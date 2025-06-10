"use server";

import axios from "axios";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  const SERVICE_ID = process.env.EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY!;

  try {
    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: {
          from_name: name,
          from_email: email,
          subject,
          message,
        },
      }
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      console.error("EmailJS error:", response.data);
      return { success: false, error: "Failed to send email" };
    }
  } catch (error) {
    console.error("EmailJS error:", error);
    return { success: false, error: "Unexpected error occurred" };
  }
}
