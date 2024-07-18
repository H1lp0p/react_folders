import './App.css';
import MainPannel from "./components/mainPannel";
import Toolbar from "./components/toolBar";
import ModalWindow from "./components/portal";
import {useState} from "react";

let testItems = [
    {type: "folder",
    label: "folder1"},
    {type: "folder",
    label: "folder2"},
    {type: "file",
    label: "file1"},
    {type: "file",
    label: "cats.png"}
]

function App() {

    const [portalFlag, setPortalFlag] = useState(true);

    let modalChildren = [
        <p>Well, there is something here</p>,
        <button onClick={alert("I'm Bob")}>Call Bob</button>
    ]

    const openPortal = (children = []) => {
        setPortalFlag(true);
        document.getElementById("portalContainer").style.display = "block";
    }

    const closePortal = () => {
        setPortalFlag(false);
        //document.getElementById("modalWindow").remove()
    }

    return (
         <div className="App">
             {portalFlag && (<ModalWindow id="modal-window" containerId={"root"} onClose={closePortal}>
                 {modalChildren.length > 0 ? modalChildren : <p>There is nothing here...?</p>}
             </ModalWindow>)}
            <Toolbar toolBtn1={openPortal} />
            <MainPannel items={testItems}/>
        </div>
    );
}

export default App;


//TODO: перелопать model-window и portal
//TODO: сделать роуты нормальные
//TODO: бахнуть формы отдельно
//TODO: разобраться с localStorage и сделать из этого мощнейший карман со всем глобальным