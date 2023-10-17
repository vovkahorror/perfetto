import {FC} from 'react';
import {Props} from 'react-native-paper/src/components/List/ListAccordion';
import {List} from 'react-native-paper';

export const ListAccordion: FC<Props> = (props) => {
    return (
        <List.Accordion theme={{colors: {primary: 'orange'}}} {...props}>
            {props.children}
        </List.Accordion>
    );
};