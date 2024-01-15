import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add_contact from './features/website/Add_contact';
import Add_user from './features/website/Add_user';
import EditContact from './features/website/EditContact';
import EditData from './features/website/EditData';
import Header from './features/website/Header';
import Manage_contact from './features/website/Manage_contact';
import Manage_user from './features/website/Manage_user';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><Add_user /></>}> </Route>
        <Route path="Add_contact" element={<><Header /><Add_contact /></>}> </Route>
        <Route path="Manage_user" element={<><Header /><Manage_user /></>}> </Route>
        <Route path="Manage_contact" element={<><Header /><Manage_contact /></>}> </Route>
        <Route path="EditData/:id" element={<><Header /><EditData /></>}> </Route>
        <Route path="EditContact/:id" element={<><Header /><EditContact /></>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
