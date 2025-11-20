# Gmail SMTP Email Setup Guide

This guide will help you set up Gmail SMTP for your portfolio contact form.

## Step 1: Enable 2-Factor Authentication on Gmail

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google", click on **2-Step Verification**
4. Follow the prompts to enable 2FA if not already enabled

## Step 2: Create an App Password

1. After enabling 2FA, go back to **Security**
2. Under "Signing in to Google", click on **App passwords**
   - If you don't see this option, make sure 2FA is enabled
3. In the "Select app" dropdown, choose **Mail**
4. In the "Select device" dropdown, choose **Other (Custom name)**
5. Enter a name like "Portfolio Website"
6. Click **Generate**
7. **Copy the 16-character password** that appears (you won't be able to see it again)

## Step 3: Configure Your .env File

1. In your portfolio directory, create a file named `.env` (copy from `.env.example`)
2. Open the `.env` file and add your credentials:

```bash
# Email Configuration (Gmail SMTP)
EMAIL_ADDRESS=your-email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx

# Flask Configuration
SECRET_KEY=your-random-secret-key-here
```

**Replace:**
- `your-email@gmail.com` with your actual Gmail address
- `xxxx xxxx xxxx xxxx` with the 16-character app password you generated
- `your-random-secret-key-here` with a random string (you can generate one with: `python3 -c "import secrets; print(secrets.token_hex(32))"`)

## Step 4: Install Dependencies and Restart

```bash
# Install the new dependency
source venv/bin/activate
pip install python-dotenv

# Restart the Flask server
# Press Ctrl+C to stop the current server, then run:
python3 app.py
```

## Step 5: Test the Contact Form

1. Go to http://127.0.0.1:5000/contact
2. Fill out the form with test data
3. Submit the form
4. Check your Gmail inbox for the message!

## Troubleshooting

### "Email service is not configured" error
- Make sure your `.env` file exists and has the correct credentials
- Restart the Flask server after creating/editing `.env`

### "Error sending email" error
- Check that your app password is correct (no spaces)
- Make sure 2FA is enabled on your Gmail account
- Check that "Less secure app access" is NOT blocking the connection
- Try generating a new app password

### Email not received
- Check your spam/junk folder
- Verify the EMAIL_ADDRESS in `.env` is correct
- Check the Flask console for error messages

## Security Notes

- **Never commit your `.env` file to Git** - it's already in `.gitignore`
- The `.env.example` file is safe to commit (it has placeholder values)
- Keep your app password secure - treat it like a regular password
- You can revoke app passwords anytime from your Google Account settings
