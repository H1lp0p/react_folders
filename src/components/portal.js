import {createPortal} from 'react-dom';
import '../styles/additional.css'
import {useState} from "react";

function ModalWindow({containerId = "", children, onClose = () => {}}) {

    const [isActive, setIsActive] = useState(false);



    function exitWindow(){
        document.getElementById("portalContainer").style.display = "none";
        onClose()
    }

    function DenyBtn(onClickFunc = () => {}){
        return (
            <div className="toolBtn" onClick={exitWindow}>
                <img width="13" height="13" src="https://img.icons8.com/metro/26/multiply.png" alt="multiply"/>
            </div>
        )
    }

    return (
        <Portal id={containerId}>
            <div className="modal-bg" onClick={exitWindow}>
                <div className="modal-window">
                    {children}
                </div>
                <div className="modal-window">
                    {<DenyBtn onClickFunc={exitWindow}/>}
                </div>
            </div>
        </Portal>
    )
}



function Portal({id = "", children = []}) {
    const container = createContainer(id)
    return createPortal(children, container)
}

function createContainer({id = "portalContainer", parent = null}){
    if (document.getElementById(id)){
        return document.getElementById(id);
    }

    if (parent === null){
        parent = document.body;
    }

    const portalContainer = document.createElement("div");
    portalContainer.id = id;
    parent.appendChild(portalContainer);
    return portalContainer;
}

export default ModalWindow;