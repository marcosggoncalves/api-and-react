import IListProps from "../types/list.props.type";

export default function ListSuggestion(props: IListProps) {
    return (
        <div className={props.class}>
            <h3>{props.title}</h3>
            <ul>
                {props.items.map((item, index) => {
                    return <li onClick={() => props.click(item.suggestion)} key={index}>{props.icon}{item.suggestion}</li>;
                })}
            </ul>
        </div>
    );
}

