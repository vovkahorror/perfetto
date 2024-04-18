import {FC, memo} from 'react';
import {Props} from 'react-native-paper/src/components/List/ListItem';
import {List} from 'react-native-paper';
import {TEXT_COLOR} from '../../constants/constants';
import 'react-native-get-random-values';

export const ListItem: FC<Props> = memo((props) => {
    return (
        <List.Item titleStyle={{color: TEXT_COLOR, textDecorationLine: 'underline'}}
                   descriptionStyle={{fontSize: 16, fontWeight: '700', color: TEXT_COLOR}}
                   titleNumberOfLines={2}
                   descriptionNumberOfLines={10}
                   {...props} />
    );
});