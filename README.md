# Smart-Auth

<<<<<<< HEAD
(<img src="https://firebasestorage.googleapis.com/v0/b/react-netflix-clone-c36b6.appspot.com/o/gp.jpg?alt=media&token=f977cbef-80ac-4cce-81f3-c99d90634ba6" alt="poster" width="500">)

=======
>>>>>>> 77de079 (resend changes)

## Problem Statement:
Authentication and authorization are critical components of web applications, but implementing them securely and efficiently can be complex and most of the features on any website have to be purchased by developers and it becomes upgraded. Developers often face challenges in integrating robust authentication systems that handle various authentication methods, role-based access control, and additional security features seamlessly.


## Key Features:
- 🔐 Next-auth v5 (Auth.js)
- 🔑 Credentials Provider
- 🌐 OAuth Provider (Social login with Google & GitHub)
- 🔒 Forgot password functionality
- ✉️ Email verification
- 📱 Two factor verification
- 👥 User roles (Admin & User)
- 🔓 Login component (Opens in redirect or modal)
- 📝 Register component
- 🤔 Forgot password component
- ✅ Verification component
- ⚠️ Error component
- 🔘 Login button
- 🚪 Logout button
- 🔍 Exploring next.js middleware
- 📈 Extending & Exploring next-auth session
- 🔄 Exploring next-auth callbacks
- 👤 useCurrentUser hook
- 🛂 useRole hook
- 🖥️ Example with server component
- 💻 Example with client component
- 🛡️ Protect API Routes for admins only
- 🔐 Protect Server Actions for admins only
- 📧 Change email with new verification in Settings page
- 🔑 Change password with old password confirmation in Settings page
- 🔔 Enable/disable two-factor auth in Settings page
- 🔄 Change user role in Settings page 


## Tech Stacks: 

. Next.js 14
. Next-auth v5 (Auth.js)
. JavaScript
. React
. OAuth Provider (Google, GitHub)
. Node.js


## Tracks:

Web Development, Authentication, Authorization, Next.js, Next-auth


## Installation Guide:
```shell
1. Clone the repository: git clone https://github.com/auth-system/
   smart-auth.git
```

### Setup Prisma
```shell
npx prisma generate
npx prisma db push
```

### Start the app

```shell
npm run dev
```

## Setup .env file


```js
DATABASE_URL=
DIRECT_URL=

AUTH_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

RESEND_API_KEY=

NEXT_PUBLIC_APP_URL=
```

## Usage:

1. Configure authentication providers in next-auth.config.js.
2. Integrate authentication components and hooks into your Next.
   js application.
3. Utilize provided components such as Login, Register, 
   Forgot Password, and Settings.
4. Implement role-based access control using RoleGate component
   and utility functions.
5. Secure API routes and server actions for authenticated users
<<<<<<< HEAD
   or specific roles.








=======
   or specific roles
>>>>>>> 77de079 (resend changes)
