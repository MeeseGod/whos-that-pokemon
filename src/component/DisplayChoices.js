import "../style/displayChoices.css";

export default function DisplayChoices(props){
    return (
        <div className="displayChoicesContainer" style={ {left: `${props.xyValues[0]}%`, top: `${props.xyValues[1]}%`, visibility: props.choiceVisibility} }>
            
        </div>
    )
}