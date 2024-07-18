import logo from '../logo.svg';
import '../styles/additional.css'

function ToolBar({toolBtn1 = () => {}, toolBtn2 = () => {}}) {
    return(
        <div className={"toolBar"}>
            <span className={"toolBtn"} id="toolBtn1" onClick={toolBtn1}><img src={logo}/></span>
            <span className={"toolBtn"} id="toolBtn2" onClick={toolBtn2}><img src={logo}/></span>
        </div>
    );
}

export default ToolBar;