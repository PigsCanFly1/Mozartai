# GitHub SSH Key Setup Guide

This guide will help you set up SSH keys for GitHub authentication, which is recommended for secure access to this repository.

## Why Use SSH Keys?

SSH keys provide a secure way to authenticate with GitHub without entering your username and password every time. This is especially useful when pushing code frequently or using automated deployment tools.

## Prerequisites

- Git installed on your system
- A GitHub account

## Step 1: Check for Existing SSH Keys

Before generating a new SSH key, check if you already have one:

```bash
ls -al ~/.ssh
```

Look for files named `id_rsa.pub`, `id_ecdsa.pub`, or `id_ed25519.pub`. If you see any of these, you may already have an SSH key.

## Step 2: Generate a New SSH Key

If you don't have an SSH key, generate one using the following command:

### For Linux and macOS:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

If your system doesn't support Ed25519, use RSA:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

### For Windows:

Open Git Bash or PowerShell and run the same commands as above.

**Note:** Replace `your_email@example.com` with the email address associated with your GitHub account.

When prompted:
1. Press Enter to accept the default file location (`~/.ssh/id_ed25519`)
2. Enter a secure passphrase (optional but recommended)

## Step 3: Add SSH Key to the SSH Agent

### Linux and macOS:

```bash
# Start the ssh-agent in the background
eval "$(ssh-agent -s)"

# Add your SSH private key to the ssh-agent
ssh-add ~/.ssh/id_ed25519
```

If you used RSA, replace `id_ed25519` with `id_rsa`.

### Windows (PowerShell):

```powershell
# Start the ssh-agent
Get-Service -Name ssh-agent | Set-Service -StartupType Manual
Start-Service ssh-agent

# Add your SSH private key
ssh-add $HOME/.ssh/id_ed25519
```

## Step 4: Copy Your SSH Public Key

### Linux:

```bash
cat ~/.ssh/id_ed25519.pub
```

### macOS:

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

This automatically copies the key to your clipboard.

### Windows (Git Bash):

```bash
cat ~/.ssh/id_ed25519.pub | clip
```

### Windows (PowerShell):

```powershell
Get-Content $HOME/.ssh/id_ed25519.pub | Set-Clipboard
```

## Step 5: Add SSH Key to GitHub

1. Go to GitHub and log in
2. Click your profile photo in the upper-right corner, then click **Settings**
3. In the user settings sidebar, click **SSH and GPG keys**
4. Click **New SSH key** or **Add SSH key**
5. In the "Title" field, add a descriptive label (e.g., "My Laptop")
6. Select **Authentication Key** as the key type
7. Paste your public key into the "Key" field
8. Click **Add SSH key**
9. If prompted, confirm your GitHub password

## Step 6: Test Your SSH Connection

```bash
ssh -T git@github.com
```

You should see a message like:

```
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

If you see this message, your SSH key is set up correctly!

## Step 7: Clone the Repository Using SSH

Now you can clone this repository using SSH:

```bash
git clone git@github.com:PigsCanFly1/Mozartai.git
```

Or if you already cloned it with HTTPS, switch to SSH:

```bash
cd Mozartai
git remote set-url origin git@github.com:PigsCanFly1/Mozartai.git
```

Verify the change:

```bash
git remote -v
```

## Troubleshooting

### Permission Denied (publickey)

If you see this error:

```
Permission denied (publickey).
```

Try these solutions:

1. **Check if your SSH key is loaded:**
   ```bash
   ssh-add -l
   ```
   If you see "The agent has no identities", add your key:
   ```bash
   ssh-add ~/.ssh/id_ed25519
   ```

2. **Verify your SSH key is on GitHub:**
   - Go to GitHub Settings → SSH and GPG keys
   - Confirm your key is listed

3. **Check SSH key permissions:**
   ```bash
   chmod 700 ~/.ssh
   chmod 600 ~/.ssh/id_ed25519
   chmod 644 ~/.ssh/id_ed25519.pub
   ```

### Could Not Open a Connection to Your Authentication Agent

On Windows, ensure the ssh-agent service is running:

```powershell
Get-Service -Name ssh-agent | Set-Service -StartupType Automatic
Start-Service ssh-agent
```

### Multiple SSH Keys

If you use multiple SSH keys for different services, create an SSH config file:

```bash
# Create or edit ~/.ssh/config
touch ~/.ssh/config
chmod 600 ~/.ssh/config
```

Add the following content:

```
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes
```

## Additional Resources

- [GitHub's Official SSH Key Documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [Generating a New SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Testing Your SSH Connection](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)

## Security Best Practices

1. **Never share your private key** (`id_ed25519` without `.pub`)
2. **Use a passphrase** to protect your private key
3. **Regularly rotate your SSH keys** (at least once a year)
4. **Remove old SSH keys** from GitHub when you no longer use them
5. **Keep your private key secure** with proper file permissions

---

For issues specific to this repository, please open an issue on GitHub or contact the maintainers.
