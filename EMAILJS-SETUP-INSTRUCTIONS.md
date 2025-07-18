# EmailJS Setup Instructions for Lex AI Assistant

## Provided API Keys
- **Public Key**: `84RrI4uYEZ72RmStk`
- **Private Key**: `Nm6xVszthFP6mb_ZKawhw` (Keep this secure!)

## Complete Setup Process

### Step 1: Access EmailJS Dashboard
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. **Login** using the account associated with these API keys
3. If you don't have the login credentials, ask the person who provided the keys

### Step 2: Set Up Email Service
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **Gmail** (recommended) or your preferred email provider
4. **Connect your email** where you want to receive contact form messages
5. **Copy the Service ID** (format: `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Set up the template:

**Template Name**: `Lex AI Contact Form`

**Subject**: `New Contact from Lex AI Assistant - {{subject}}`

**Template Content**:
```html
Hello Ahsan,

You have received a new message from your Lex AI Assistant contact form:

---
Sender Details:
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Category: {{category}}
Preferred Contact Method: {{contact_method}}

Message:
{{message}}

---
This message was sent from the Lex AI Assistant contact form.
Please respond to: {{from_email}}

Best regards,
Lex AI Assistant Contact System
```

4. **Save the template**
5. **Copy the Template ID** (format: `template_xxxxxxx`)

### Step 4: Update Contact.tsx File
Replace these values in your `src/pages/Contact.tsx`:

```typescript
const serviceID = 'service_YOUR_ACTUAL_SERVICE_ID'; // From Step 2
const templateID = 'template_YOUR_ACTUAL_TEMPLATE_ID'; // From Step 3
const publicKey = '84RrI4uYEZ72RmStk'; // Already provided
```

### Step 5: Test the Contact Form
1. Run your development server: `npm run dev`
2. Go to the Contact page
3. Fill out the contact form
4. Submit it
5. **Check YOUR email inbox** for the message
6. Check browser console for any errors

## What Happens When Someone Fills the Form:
1. User fills out the contact form on your website
2. Form data gets sent to EmailJS
3. EmailJS sends an email to YOUR inbox
4. You receive the contact information and can respond directly

## Email Flow:
```
Website Visitor → Fills Contact Form → EmailJS → Your Email Inbox
```

## Template Variables Explained:
- `{{from_name}}` - Name entered by the website visitor
- `{{from_email}}` - Email entered by the website visitor
- `{{subject}}` - Subject entered by the visitor
- `{{category}}` - Category selected by the visitor
- `{{contact_method}}` - Preferred contact method selected
- `{{message}}` - Message content from the visitor

## Required Information from EmailJS Account:
You need to get these from the EmailJS dashboard:
- ✅ **Public Key**: `84RrI4uYEZ72RmStk` (Already provided)
- ❌ **Service ID**: `service_xxxxxxx` (Get from Email Services)
- ❌ **Template ID**: `template_xxxxxxx` (Get from Email Templates)

## Next Steps:
1. **Access the EmailJS account** with the provided keys
2. **Set up email service** and get Service ID
3. **Create email template** and get Template ID
4. **Update Contact.tsx** with the actual IDs
5. **Test the contact form**

## Troubleshooting:
- **No email received**: Check spam folder, verify email service setup
- **Form submission error**: Verify Service ID and Template ID are correct
- **Template not working**: Check variable names match exactly
- **Access issues**: Contact the person who provided the API keys

## Security Note:
- Public Key is safe to use in frontend code
- Private Key should never be exposed in frontend code
- Current setup uses client-side EmailJS which is secure for contact forms
