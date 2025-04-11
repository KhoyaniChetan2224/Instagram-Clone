### API Documentation

1. **Set Up Your Project**:

   - Use `create-react-app` to bootstrap your React project.
     ```bash
        `npx create-react-app instagram-clone`
        `npx create-react-app client`
        `cd client`
        `npm install axios`
        `npm install -D tailwindcss postcss autoprefixer`
        `npx tailwindcss init -p`
        `cd instagram-clone`
     ```

2. **Install Dependencies**:

   - Install necessary libraries like `react-router-dom` for routing, `axios` for API calls, and `firebase` for backend services (authentication, database, and storage).
     ```bash
     npm install react-router-dom axios firebase
     ```

3. **Folder Structure**:
   Organize your project like this:


```
Instagram/
├── Backend/
│   ├── .env                         // Environment variables
│   ├── app.js                       // Main application configuration
│   ├── package.json                 // Backend dependencies & scripts
│   ├── README.md                    // Backend API documentation
│   ├── server.js                    // Server entry point
│   ├── Model/
│   │   ├── Post.js                  // Post model (Mongoose schema)
│   │   ├── Reel.js                  // Reel model (Mongoose schema)
│   │   └── User.js                  // User model (Mongoose schema)
│   └── Routes/
│       ├── post.js                  // Routes for posts endpoints
│       ├── profile.js               // Routes for user profile endpoints
│       └── search.js                // Routes for search endpoints
└── frontend/
    ├── .gitignore                   // Files/folders ignored by Git
    ├── eslint.config.js             // ESLint configuration
    ├── index.html                   // Main HTML file
    ├── package.json                 // Frontend dependencies & scripts
    ├── postcss.config.js            // PostCSS configuration
    ├── tailwind.config.js           // Tailwind CSS configuration
    ├── vite.config.js               // Vite bundler configuration
    ├── public/                      // Public assets folder
    │   └── vite.svg                 // Example public asset
    └── src/
        ├── App.css                  // Global styles
        ├── App.jsx                  // Root component with routes
        ├── index.css                // Main CSS file
        ├── main.jsx                 // React application entry point
        ├── assets/                  // Static assets (images, icons, etc.)
        │   └── react.svg
        └── pages/                   // Page-level React components
            ├── BottomNav.jsx        // Bottom navigation bar
            ├── EmailSignup.jsx      // Email signup page
            ├── ForgotPassword.jsx   // Forgot password page
            ├── LoginPage.jsx        // Login page
            ├── LoginWthFaceBook.jsx // Login with Facebook page
            ├── RobotSecurityPage.jsx// Robot security verification page
            ├── OpenHomePage.jsx     // Home page after login
            ├── UserSingup.jsx       // User signup page
            ├── YourStory.jsx        // Your story page (media playback)
            ├── ChetBoxHeader/       // Chat header components
            │   └── Header.jsx
            ├── chetabox/            // Chat related components
            │   └── ChatBox.jsx
            ├── footar-menu/         // Footer menu components
            │   ├── PlaySquare.jsx   // Create new post/reel component
            │   ├── Reels.jsx        // Reels page component
            │   ├── Scarch.jsx       // Search page component
            │   └── ProfileMessage.jsx // Profile messages view
            ├── header-menu/         // Header menu components (e.g., likes, messages, requests)
            │   ├── Likebutton.jsx
            │   ├── Message.jsx
            │   ├── NewRequest.jsx
            │   └── NewRequestManage.jsx
            ├── Profile-Page/        // User profile settings and editing pages
            │   ├── EditProfile.jsx
            │   ├── ActivitySetting.jsx
            │   └── SettingAndActivity.jsx
            ├── ViewProfileUser/     // Viewing other users' profiles
            │   ├── ViewProfile.jsx
            │   └── components/
            │       ├── ProfileHeader.jsx
            │       └── PostGrid.jsx
            └── components/          // Reusable UI components
                └── UploadReel.js    // Upload reel functionality

```

🔧 Backend Setup (Node.js + Express + MongoDB)
4. **Initialize Backend**:
    - `mkdir server && cd server`
    - `npm init -y`
    - `npm install express mongoose cors dotenv`

5. **Set Up Routing**:

   - Use `react-router-dom` to handle navigation between pages (e.g., Home, Profile, Login).
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
### 5. `/login`

**Description:**
    *   This endpoint renders the login page, allowing users to authenticate and access their accounts.

**Status Codes:**
    *   200 OK: Successfully renders the login page.

**Data Requirements:**
    *   None (GET request to display the login form).
    *   On form submission (POST request):
        *   `username` (string): User's username or email.
        *   `password` (string): User's password.

### 6. `/usersignup`

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

### 7. `/emailsignup`

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

### 8. `/forgotpassword`

**Description:**
    *   This endpoint renders the forgot password page, allowing users to reset their password.

**Status Codes:**
    *   200 OK: Successfully renders the forgot password page.

**Data Requirements:**
    *   None (GET request to display the form).
    *   On form submission (POST request):
        *   `username` (string): User's username or email.

### 9. `/robotsecurity`

**Description:**
    *   This endpoint renders a security check page to confirm the user is not a robot.

**Status Codes:**
    *   200 OK: Successfully renders the robot security page.

**Data Requirements:**
    *   None (GET request to display the security check).
    *   On form submission (POST request):
        *   `checkbox` (boolean): Confirmation that the user is not a robot.

### 10. `/openhomepage`

**Description:**
    *   This endpoint renders the main homepage after successful login or signup.



## 11. /chetabox

**Component:** `ChatBox.jsx`  
**Location:** `src/pages/chetabox/ChatBox.jsx`

**Description:**  
Provides the chat interface where users view and send messages.

**State Management:**  
- **messages:** An array of message objects, e.g.  
  `{ text: String, sender: "user" | "other" }`
- **input:** A string holding the current text input.

**Data Requirement:**  
Each message requires a text string and a sender identifier.  
Example:
```json
{
  "text": "Hello!",
  "sender": "user"
}
```

---

## 12. /ChetBoxHeader

**Component:** `Header.jsx`  
**Location:** `src/pages/ChetBoxHeader/Header.jsx`

**Description:**  
Renders the header area for the chat interface. May include profile info, navigation icons, or status indicators.

**State/Props Considerations:**  
- Typically receives props or uses context for dynamic details (e.g. username, profile picture).
- Displays static elements such as logos or placeholders.

**Data Requirement:**  
- Profile image URL  
- Username text

---

## 13. /Components

**Folder:** `src/pages/components`  

**Description:**  
Contains reusable UI components. For example, the `UploadReel.js` file allows users to upload a video reel.

**State Management (UploadReel Example):**  
- **caption:** A string for the reel’s caption.
- **video:** A File object representing the selected video.
- **Data Submission:**  
  Uses a FormData object including keys:
  - `video`
  - `caption`
  - `userId` (a string or ObjectId)

**Data Requirement:**  
For uploading reels, ensure the file and text fields are not empty.

---

## 14. /footer-menu

**Folder:** `src/pages/footar-menu`  

**Description:**  
Contains components that make up the footer navigation/menu.  
Key components include:
- **Scarch.jsx:** Implements search functionality.
- **ProfileMessage.jsx:** Deals with profile messages.
- **Reels.jsx:** Displays a series of reels (short videos).

**State/Props and Data Handling:**  
- **Scarch.jsx:**  
  - **query:** A string for the search term.
  - **results:** An object with arrays for `users` and `posts`.  
  Expected data structures:
  ```json
  {
    "users": [ { "username": "john_doe", "profilePic": "url", "fullName": "John Doe" } ],
    "posts": [ { "_id": "123", "imageUrl": "url", "caption": "Sample caption" } ]
  }
  ```
- **Reels.jsx:**  
  Expects an array of reel objects with `_id`, `videoUrl`, and `caption`.

---

## 15. /header-menu

**Folder:** `src/pages/header-menu`  

**Description:**  
Hosts header dropdowns and interactive icons. Key components include:
- `NewRequest.jsx` & `NewRequestManage.jsx`: Manage friend/follow requests.
- `Message.jsx`: Displays messaging notifications.
- `Likebutton.jsx`: Provides like interaction on posts.

**State/Props and Data Handling:**  
- Components update based on user interaction (e.g. reading a new notification).
- They may receive props such as counts, icons, or status flags.

---

## 16. /Profile-Page

**Folder:** `src/pages/Profile-Page`  

**Description:**  
Contains components for displaying and managing a user's profile, settings, and activities.  
Key examples include:
- **EditProfile.jsx:** For modifying profile details.
- **SettingAndActivity.jsx / ActivitySetting.jsx:** For privacy, notifications, and other account settings.

**State Management:**  
- Uses controlled input fields for updating values like username, bio, pronouns, and gender.
- Settings arrays hold objects with title, icon, and (optionally) count values.

**Data Requirement:**  
Profile data should include:
```json
{
  "username": "your_username",
  "fullName": "Your Full Name",
  "profilePic": "URL to profile picture",
  "bio": "Short biography"
}
```

---

## 17. /ViewProfileUser

**Folder:** `src/pages/ViewProfileUser`  

**Description:**  
Displays other users’ profiles along with their posts.  
**Key Component:** `ViewProfile.jsx`  
- Uses `useParams` to fetch the username from the URL.
- Uses an HTTP GET request (e.g., via axios) to retrieve data from `/api/profile/:username`.

**State Management:**  
- **data:** Object with properties:
  - `user`: User profile information.
  - `posts`: Array of post objects.

**Data Requirement:**  
- **User object:** Should include username, full profile info.
- **Posts:** Array with each post having properties such as `imageUrl` and `caption`.

---

## 18. /img

**Folder:** `src/pages/img`  

**Description:**  
Stores static media asset files (images, videos) used throughout the frontend.  
**Usage:**  
- Imported and rendered by components such as `YourStory.jsx` and `EmailSignup.jsx`.
- Ensure URLs are correctly referenced to serve proper media content.

**Data Requirement:**  
- The assets should be in standard formats (JPG, PNG, MP4) and properly optimized for web usage.

---

## General Data Handling and Integration

- **Input Validation:** All form components validate that required fields are filled before submission.
- **Data Format:**  
  - JSON format for text data.  
  - FormData for file uploads (images, videos).
- **API Integration:**  
  Components like `ViewProfile.jsx`, `Scarch.jsx`, and `Reels.jsx` utilize axios to fetch and post data from/to the backend API endpoints.
- **Routing:**  
  Client-side routing is managed using React Router to map paths (like `/Profile`, `/EmailSignup`, `/OpenHomePage`) to their corresponding components.

---
