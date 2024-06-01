import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, {useState} from "react";

function Navbar (){
    const[activeView, setActiveView] = useState('Home');

    const changeView = () => {
        switch (activeView) {
        case 'Home':
            return < Home />;
        case 'Upload':
            return < Upload />;
        case 'Posts':
            return < Posts />;
        case 'Edit':
            return < Edit />;
        case 'Profile':
            return < Profile />;
        default:
            return < Home />;
        }
    }

return (
<div>
    <nav> 
        <ul>
            <li onClick={() => setActiveView('Home')}>Home</li>
            <li onClick={() => setActiveView('Upload')}>Upload</li>
            <li onClick={() => setActiveView('Posts')}>Posts</li>
            <li onClick={() => setActiveView('Edit')}>Edit</li>
            <li onClick={() => setActiveView('Profile')}>Profile</li>
        </ul>
    </nav>
    <div>
        {changeView()}
    </div>
</div> )
}

const Home = () => <div>Home Content</div>;
const Upload = () => <div>Upload content</div>
const Posts = () => <div>Posts Content</div>;
const Edit = () => <div>Edit Content</div>;
const Profile = () => <div>Profile Content</div>;

export default Navbar;