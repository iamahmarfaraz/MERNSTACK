import './Card.css';

function Card(props){
    return(
        <div className = "">
            {props.children}
        </div>
    );
}

export default Card;