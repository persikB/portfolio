import './App.css'
import Preview from "./Preview/Preview.tsx";
import Header from "./Header/Header.tsx";
import Description from "./Description/Description.tsx";
import Skills from "./Sckills/Skills.tsx";
import Contacts from "./Contacts/Contacts.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Preview/>
            <Description/>
            <Skills/>
            <Contacts/>
        </div>
    )
}

export default App




