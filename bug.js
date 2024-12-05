In React Router Dom v6, a common issue arises when using nested routes with dynamic segments.  If you're not careful with how you structure your routes, you might encounter unexpected rendering behavior or routing errors.  For example:

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId" element={<User />} />
        <Route path="/users/:userId/profile" element={<UserProfile />} />
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

In this scenario, if you navigate to `/users/123/profile`, the `<User />` component will render first, because the route `/users/:userId` is a parent route of `/users/:userId/profile`.  The more specific route will only be matched if it's placed *before* the more general route in the route array. The order of routes matters significantly.