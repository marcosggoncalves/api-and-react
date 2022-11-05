import ISuggestion from "./suggestion.type";

export default interface IListProps {
    class?: string,
    title?: string,
    items: ISuggestion[];
    click: Function;
    icon?: any;
}