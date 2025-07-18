# EmailJS Setup Guide for Lex AI Assistant Contact Form

## Your EmailJS Configuration
- **Public Key**: `84RrI4uYEZ72RmStk`
- **Private Key**: `Nm6xVszthFP6mb_ZKawhw` (Keep this secure!)

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account using the keys provided above
3. Verify your email

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended for personal use)
4. Follow the setup instructions to connect your email
5. Note your **Service ID** (you'll need this for the Contact.tsx file)

## Step 3: Create Email Template
1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Set up your template with these variables:

**Template Subject**: `New Contact from Lex AI Assistant - {{subject}}`

**Template Body**:
```
Hello {{to_name}},

You have received a new message from your Lex AI Assistant contact form:

---
From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Category: {{category}}
Preferred Contact Method: {{contact_method}}

Message:
{{message}}

---
This message was sent from the Lex AI Assistant contact form.
Best regards,
Lex AI Assistant Contact System
```

4. Save the template and note your **Template ID**

## Step 4: Update Contact.tsx Configuration
In your `src/pages/Contact.tsx` file, update these lines:

```typescript
const serviceID = 'your_service_id_here'; // Replace with your actual Service ID from Step 2
const templateID = 'your_template_id_here'; // Replace with your actual Template ID from Step 3
const publicKey = '84RrI4uYEZ72RmStk'; // Already configured
```

## Step 5: Test the Contact Form
1. Run your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the contact form
4. Check your email for the message
5. Check browser console for any errors

## Email Template Variables Used
- `{{to_name}}` - Your name (hardcoded as "Ahsan")
- `{{from_name}}` - Sender's name from form
- `{{from_email}}` - Sender's email from form
- `{{subject}}` - Subject from form
- `{{category}}` - Selected category from form
- `{{contact_method}}` - Preferred contact method from form
- `{{message}}` - Message content from form

## Troubleshooting
- **Email not received**: Check spam folder, verify email service configuration
- **Form submission fails**: Check browser console for errors, verify Service ID and Template ID
- **Template variables not working**: Ensure variable names match exactly (case-sensitive)
- **Service connection issues**: Re-verify your email service in EmailJS dashboard

## Monthly Limits (Free Tier)
- **200 emails per month** - Perfect for portfolio/contact forms
- **2 email services**
- **10 email templates**

## Security Notes
- Your **Public Key** is safe to use in frontend code
- Keep your **Private Key** secure and never expose it in frontend code
- The current setup uses client-side EmailJS which is secure for contact forms

## Advanced Configuration (Optional)
- Set up email filtering rules in your email client
- Create auto-responder for contact form submissions
- Add reCAPTCHA to prevent spam (requires additional setup)
- Set up email notifications for different categories

## Support
If you encounter issues:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Verify your EmailJS account dashboard settings
3. Test with a simple template first
4. Check network connectivity and firewall settings
