import nodemailer from "nodemailer";

export const sendContactEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required." });
    }

    // Configure Nodemailer transporter (using Gmail as an example)
    const transporter = nodemailer.createTransport({
      service: "gmail", // For Gmail SMTP
      auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.PASSWORD, // Your app password (not your actual Gmail password)
      },
    });

    // Define email options
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender details (from contact form)
      to: process.env.EMAIL, // Email where you want to receive the messages
      subject: `New Contact Form Submission from ${name}`,
      text: `You have received a new message from the contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending contact email:", error);
    res.status(500).json({ message: error.message });
  }
};
