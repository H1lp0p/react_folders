import File from './file';
import Folder from './folder';
import '../styles/mainPannel.css';
import config from '../config';

function MainPannel({items = [], columns = 4}){

    //const src = http.get(config.APIlink);

    function Item({rowInd = 0, label = "None", item=null}){
        console.log(rowInd);
        return <span style={{gridRow: rowInd + 1}}>
            {item.type === "file" ? <File label={item.label}/> : <Folder label={item.label}/>}
        </span>
    }

    const objectList = items.map((el, i) =>
        <Item key={i} columns={columns} rowInd={Math.floor(i / columns)} item={el} />);

    return (
        <div className={'dirPanel'}>
            {objectList}
        </div>
    );
}


export default MainPannel;