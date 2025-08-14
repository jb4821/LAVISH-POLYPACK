import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, mobile, location, product, inquiry_type, message } =
    await req.json();

  const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
        body { font-family: 'Inter', sans-serif; line-height: 1.7; color: #2A4D39; background: #F2E8CF; margin: 0; padding: 24px; max-width: 600px; margin: 0 auto; }
        .container { background: #F2E8CF; border-radius: 12px; padding: 32px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3); position: relative; overflow: hidden; }
        .header { background: linear-gradient(90deg, #D4A017, #8B5E3C, #D4A017); background-size: 300% 300%; animation: gradientShift 10s ease infinite; padding: 24px; text-align: center; border-radius: 10px 10px 0 0; margin: -32px -32px 32px -32px; }
        @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .header h1 { margin: 0; font-size: 26px; font-weight: 800; color: #FFFFFF; text-transform: uppercase; letter-spacing: 1.2px; }
        .greeting { font-size: 18px; font-weight: 600; color: #D4A017; margin-bottom: 16px; }
        .content { font-size: 16px; color: #2A4D39; margin-bottom: 24px; }
        .highlight { color: #D4A017; font-weight: 600; text-decoration: none; transition: color 0.3s ease; }
        .highlight:hover { color: #b88b14; }
        .message-block { background: #FFFFFF; padding: 16px; border-radius: 8px; border-left: 4px solid #8B5E3C; margin: 16px 0; font-style: italic; color: #2A4D39; }
        .footer { margin-top: 32px; text-align: center; font-size: 12px; color: #2A4D39; border-top: 1px solid #8B5E3C; padding-top: 16px; }
        .footer a { color: #D4A017; text-decoration: none; transition: color 0.3s ease; }
        .footer a:hover { color: #b88b14; }
        .signature { font-size: 14px; color: #2A4D39; margin-top: 16px; text-align: center; }
        @media (max-width: 480px) { body { padding: 16px; } .container { padding: 20px; } .header h1 { font-size: 22px; } .content { font-size: 14px; } .greeting { font-size: 16px; } }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Inquiry Received!</h1>
        </div>
        <div class="greeting">Hello LAVISH POLYPACK Team,</div>
        <div class="content">You've got a new inquiry from <span class="highlight">${name}</span>! They're excited to connect with you about your packaging solutions. Here's what they shared:</div>
        <div class="message-block">${message}</div>
        <div class="content">They're interested in <span class="highlight">${product}</span> and have specified this as a <span class="highlight">${inquiry_type}</span> inquiry. You can reach them at <a class="highlight" href="mailto:${email}">${email}</a> or give them a call at <a class="highlight" href="tel:${mobile}">${mobile}</a>. They're located in <span class="highlight">${location}</span>.</div>
        <div class="content">This inquiry landed in your inbox on ${time}. Let's make their packaging dreams a reality!</div>
        <div class="signature">Best regards,<br>Your Website Contact System</div>
        <div class="footer"><p>Sent from <a href="https://lavishpolypack.com">lavishpolypack.com</a></p><p>LAVISH POLYPACK LLP, Tankara, Gujarat 363650, India</p></div>
      </div>
    </body>
    </html>
  `;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Website Inquiry" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    subject: `New Inquiry from ${name}`,
    html,
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
} 