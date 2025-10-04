import { ListItem } from "../ListItem/ListItem"
import navigationn from "../../data/navigation.json"

export const List = ({navigation}) => {
    return <>
    <h1>{navigation}</h1>
    <ul>
        {navigationn.map(({id, text, src}) => <ListItem key={id} text={text} src={src}/>)}
    </ul>
    </>
}