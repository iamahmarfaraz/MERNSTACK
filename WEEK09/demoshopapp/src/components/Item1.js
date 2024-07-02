import './Item1.css';


function Item(props){
    const para = ` ${props.name} React Component using Props `;
    console.log(props);
    return(
        <div >
            {props.children}
            <p className="new">{para}</p>
            
            <p>New word reacts 1</p>
            {props.children}
        </div>
    );
}

export default Item;