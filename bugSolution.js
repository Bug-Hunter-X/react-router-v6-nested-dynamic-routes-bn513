To fix the issue, rearrange the routes within the `<Routes>` component, placing the more specific route before the more general route:

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId/profile" element={<UserProfile />} />
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function User() { 
  return <div>User</div>;
}

function UserProfile() { 
  return <div>User Profile</div>;
}
```

By placing the `/users/:userId/profile` route before `/users/:userId`, React Router will correctly match the more specific route first, ensuring the `<UserProfile />` component renders correctly when navigating to `/users/123/profile`.  This ensures that the correct components render based on the exact URL.