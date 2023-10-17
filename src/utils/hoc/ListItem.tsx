import {FC} from 'react';
import {Props} from 'react-native-paper/src/components/List/ListItem';
import {List} from 'react-native-paper';

export const ListItem: FC<Props> = (props) => {
    return (
        <List.Item descriptionStyle={{fontSize: 16, fontWeight: '700'}} titleNumberOfLines={2}
                   descriptionNumberOfLines={4} {...props} />
    );
};