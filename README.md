### Frontend API Documentation

1. **Set Up Your Project**:

   - Use `create-react-app` to bootstrap your React project.
     ```bash
     npx create-react-app instagram-clone
     cd instagram-clone
     ```

2. **Install Dependencies**:

   - Install necessary libraries like `react-router-dom` for routing, `axios` for API calls, and `firebase` for backend services (authentication, database, and storage).
     ```bash
     npm install react-router-dom axios firebase
     ```

3. **Folder Structure**:
   Organize your project like this:

```
instagram-clone/
├── public/
├── src/
│   ├── pages/
│   │   ├────chatabox
│   │   │      └──ChatBox.jsx
│   │   ├────ChatBoxHeader
│   │   │      └──Header.jsx
│   │   ├────footar-menu
│   │   │      ├──PlaySquare.jsx
│   │   │      ├──Profile.jsx
│   │   │      ├──ProfileMessage.jsx
│   │   │      ├──Reels.jsx
│   │   │      └──Scarch.jsx
│   │   ├────header-menu
│   │   │      ├──Likebutton.jsx
│   │   │      ├──Message.jsx
│   │   │      ├──NewRequest.jsx
│   │   │      └──NewRequestManage.jsx
│   │   ├── Login.jsx
│   │   ├── LoginWthFaceBook.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── UserSingup.jsx
│   │   ├── RobutSecurityPage.jsx
│   │   ├── EmailSinup.jsx
│   │   ├── YourStory.jsx
│   │   ├── BottomNav.jsx
│   │   ├── OpenHomePage.jsx
│   │   └──img
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── README.md
├── package.json
└── ...
```

4. **Create Pages**:

   - Build reusable components like:
     - `Navbar.js`: For the top navigation bar.
     - `Post.js`: For displaying individual posts.
     - `Sidebar.js`: For the sidebar with user info and suggestions.
     - `Story.js`: For displaying user stories.
     - `Login.jsx` :For Login Page.
     - `LoginWthFaceBook.jsx` :For Login with Facebook.
     - `ForgotPassword.jsx` :For Forgot Password page.
     - `UserSingup.jsx` :
     - `RobutSecurityPage.jsx` :
     - `EmailSinup.jsx` :
     - `YourStory.jsx` :
     - `BottomNav.jsx` :
     - `OpenHomePage.jsx`  :

5. **Set Up Routing**:

   - Use `react-router-dom` to handle navigation between pages (e.g., Home, Profile, Login).

     ```jsx
     import React from "react";
     import { Route, Routes } from "react-router-dom";
     import LoginPage from "./pages/LoginPage";
     import LoginWthFaceBook from "./pages/LoginWthFaceBook";
     import UserSignup from "./pages/UserSingup";
     import ForgotPassword from "./pages/ForgotPassword";
     import EmailSignup from "./pages/EmailSignup";
     import RobotSecurityPage from "./pages/RobotSecurityPage";
     import OpenHomePage from "./pages/OpenHomePage";
     import Likebutton from "./pages/header-menu/Likebutton";
     import Massege from "./pages/header-menu/Message";
     import YourStory from "./pages/YourStory";
     import PlaySquare from "./pages/footar-menu/PlaySquare";
     import Reels from "./pages/footar-menu/Reels";
     import Scarch from "./pages/footar-menu/Scarch";
     import Profile from "./pages/footar-menu/Profile";
     import NewRequest from "./pages/header-menu/NewRequest";
     import ProfileMessage from "./pages/footar-menu/ProfileMessage";
     import NewRequestManage from "./pages/header-menu/NewRequestManage";
     import ChatBox from "./pages/chetabox/ChatBox";
     import EditProfile from "./pages/Profile-Page/EditProfile";

     function App() {
       return (
         <div>
           <Routes>
             <Route path="/" element={<LoginPage />} />
             <Route path="/UserSignup" element={<UserSignup />} />
             <Route path="/LoginWthFaceBook" element={<LoginWthFaceBook />} />
             <Route path="/ForgotPassword" element={<ForgotPassword />} />
             <Route path="/EmailSignup" element={<EmailSignup />} />
             <Route path="/RobotSecurityPage" element={<RobotSecurityPage />} />
             <Route path="/OpenHomePage" element={<OpenHomePage />} />
             <Route path="/Likebutton" element={<Likebutton />} />
             <Route path="/Massege" element={<Massege />} />
             <Route path="/YourStory" element={<YourStory />} />
             <Route path="/Scarch" element={<Scarch />} />
             <Route path="/PlaySquare" element={<PlaySquare />} />
             <Route path="/Reels" element={<Reels />} />
             <Route path="/Profile" element={<Profile />} />
             <Route path="/NewRequest" element={<NewRequest />} />
             <Route path="/ProfileMessage" element={<ProfileMessage />} />
             <Route path="/NewRequestManage" element={<NewRequestManage />} />
             <Route path="/ChatBox" element={<ChatBox />} />
             <Route path="EditProfile" element={<EditProfile />} />
           </Routes>
         </div>
       );
     }
     ```

6. **Integrate Firebase**:

   - Use Firebase for:
     - **Authentication**: Sign-up, login, usersignup, LoginWthFaceBook, and logout.
     - **Firestore Database**: Store user data and posts.
     - **Storage**: Upload and store images.

7. **Styling**:

   - Use CSS or a library like `styled-components` or `Tailwind CSS` for styling.

8. **Deploy**:
   - Deploy your app using platforms like Vercel, Netlify, or Firebase Hosting.

---

## Features

- User authentication (Sign up, Login, Logout, LoginWthFaceBook, usersignup)
- Create and view posts
- User profiles
- Responsive design

## Technologies Used

- React.js
- Firebase (Authentication, Firestore, Storage)
- React Router DOM
- Axios (for API calls)
- CSS (for styling)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/instagram-clone.git
   cd instagram-clone
   ```
````
````
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Firebase:

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add your Firebase configuration in `src/firebase.js`.

4. Run the app:
   ```bash
   npm run dev
   ```

````
````
### 1. `/login`

**Description:**
    *   This endpoint renders the login page, allowing users to authenticate and access their accounts.

**Status Codes:**
    *   200 OK: Successfully renders the login page.

**Data Requirements:**
    *   None (GET request to display the login form).
    *   On form submission (POST request):
        *   `username` (string): User's username or email.
        *   `password` (string): User's password.

### 2. `/usersignup`

**Description:**
    *   This endpoint renders the user signup page, allowing new users to create an account.

**Status Codes:**
    *   200 OK: Successfully renders the signup page.

**Data Requirements:**
    *   None (GET request to display the signup form).
    *   On form submission (POST request):
        *   `mobilenumber` (string): User's mobile number.
        *   `fullname` (string): User's full name.
        *   `username` (string): User's desired username.
        *   `password` (string): User's desired password.

### 3. `/emailsignup`

**Description:**
    *   This endpoint renders the email signup page, where users provide their birthday information.

**Status Codes:**
    *   200 OK: Successfully renders the email signup page.

**Data Requirements:**
    *   None (GET request to display the form).
    *   On form submission (POST request):
        *   `month` (string): Selected month of birth.
        *   `day` (string): Selected day of birth.
        *   `year` (string): Selected year of birth.

### 4. `/forgotpassword`

**Description:**
    *   This endpoint renders the forgot password page, allowing users to reset their password.

**Status Codes:**
    *   200 OK: Successfully renders the forgot password page.

**Data Requirements:**
    *   None (GET request to display the form).
    *   On form submission (POST request):
        *   `username` (string): User's username or email.

### 5. `/robotsecurity`

**Description:**
    *   This endpoint renders a security check page to confirm the user is not a robot.

**Status Codes:**
    *   200 OK: Successfully renders the robot security page.

**Data Requirements:**
    *   None (GET request to display the security check).
    *   On form submission (POST request):
        *   `checkbox` (boolean): Confirmation that the user is not a robot.

### 6. `/openhomepage`

**Description:**
    *   This endpoint renders the main homepage after successful login or signup.


