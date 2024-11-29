import {Route, Routes} from "react-router";
import HomePage from "./pages/Home";
import './App.css';
import BlogPage from "./pages/blogPage";
import ContactPage from "./pages/contactPage";
import BlogItemPage from "./pages/blogItem";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/contact-us" element={<ContactPage/>}/>
                <Route path="/blogs" element={<BlogPage/>}/>
                <Route path="/blogs/:slug" element={<BlogItemPage/>}/>
                <Route path="*" element={<h1>Not Found</h1>}/>
            </Routes>
        </div>
    );
}

export default App;
