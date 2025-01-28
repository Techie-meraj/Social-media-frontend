
**PostMaster-App Frontend**

### **Frontend Features**

1. **CreatePost.jsx**:
   - A component that allows users to create new posts.
   - Each post contains details such as a title, description, and an image, which are linked to the specific user who creates them.

2. **Footer.jsx**:
   - A clean and responsive footer UI component.
   - Provides navigation links or app information as needed.

3. **Home.jsx**:
   - The homepage of the application, serving as the landing page.
   - Displays an overview of the app's functionality or recent posts (if applicable).

4. **Login.jsx**:
   - Handles user authentication.
   - Users can log in with their credentials, and upon successful login, they gain access to the main features of the app.

5. **Top Navigation After Login**:
   - Once logged in, three buttons appear at the top:
     - **Post**: Displays all posts created by any user.
     - **My Posts**: Displays posts created specifically by the logged-in user.
     - **Create Post**: Redirects to the post creation page.

6. **Navbar.jsx**:
   - Contains navigation links for **Login** and **Register**.
   - Users can register a new account or log in using an existing one.

7. **PostCard.jsx**:
   - Each post displays:
     - **Username**: The name of the user who created the post.
     - **Title**: The title of the post.
     - **Description**: The post's description.
     - **Image**: An image related to the post.
   - Includes two buttons:
     - **Delete**: Deletes the post.
     - **Update**: Redirects to the update form to edit post details.

8. **Updatedetails.jsx**:
   - Used to update the content of an already existing post.
   - Pre-fills the form with the current post details, making it easier to edit.


### **State Management**

- **Context Store**:
  - The application uses a context store to manage global state.
  - **Redux Toolkit**:
    - Handles state changes for login and logout functionality.
    - Ensures a seamless experience for managing user sessions and authentication.


### **User-Specific Features**

- Each user has their own collection of posts.
- Posts are displayed dynamically based on the logged-in user's data.
- Users can manage their posts efficiently with options to create, update, and delete posts.
