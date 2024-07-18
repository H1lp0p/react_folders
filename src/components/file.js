import icon from '../icons/fileIcon.svg';
import '../styles/object.css';

function File({label = "None", parentId = null, selfId=null}){
    return (
        <div className="fileObject" onClick={() => alert(`${label} clicked`)}>
            <img src={icon} className="fileIcon" alt={`$File {label} icon`}/>
            <p>{label}</p>
        </div>
    );
}

export default File