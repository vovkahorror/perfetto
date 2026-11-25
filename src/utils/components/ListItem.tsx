import {FC, memo} from 'react';
import {ComponentProps} from 'react';
import {List} from 'react-native-paper';
import {TEXT_COLOR} from '../../constants/constants';
import 'react-native-get-random-values';

export const ListItem: FC<ComponentProps<typeof List.Item>> = memo((props) => {
    return (
        <List.Item titleStyle={{color: TEXT_COLOR, textDecorationLine: 'underline'}}
                   descriptionStyle={{fontSize: 16, fontWeight: '700', color: TEXT_COLOR}}
                   titleNumberOfLines={2}
                   descriptionNumberOfLines={10}
                   {...props} />
    );
});