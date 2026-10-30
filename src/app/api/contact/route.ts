import nodemailer from "nodemailer";

// Replaces testmail.php: sends the contact form by email and goes back to the home page.
export async function POST(request: Request) {
  const form = await request.formData();
  const field = (name: string) => String(form.get(name) ?? "").trim();
  const name = field("name");
  const email = field("email");
  const subject = field("subject");
  const message = field("message");

  const to = process.env.CONTACT_TO;
  const smtpHost = process.env.SMTP_HOST;
  if (!name || !email || !subject || !message || !to || !smtpHost) {
    return new Response("No se pudo enviar el mensaje.", { status: 400 });
  }

  const transport = nodemailer.createTransport({
    host: smtpHost,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
  });

  await transport.sendMail({
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
    replyTo: email,
    to,
    subject,
    text:
      "Detalles del formulario de contacto desde testmail:\n\n" +
      `Nombre: ${name}\nE-mail: ${email}\nAsunto: ${subject}\nComentarios: ${message}\n`,
  });

  return Response.redirect(new URL("/?mensajeenviado=ok", request.url), 303);
}
