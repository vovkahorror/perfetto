import {ListItem} from './ListItem';
import {FC, memo} from 'react';
import {ComponentProps} from 'react';
import {List} from 'react-native-paper';

export const ListItemWithCheck: FC<CustomProps & ComponentProps<typeof List.Item>> = memo(({title, description, ...props}) => {
    const simplifiedDescription = typeof description === 'boolean' ? (description ? 'Так' : 'Ні') : description;

    return description !== null && description !== undefined &&
        <ListItem title={title} description={simplifiedDescription} {...props}/>;

});

interface CustomProps {
    title: string;
    description?: string | number | boolean;
}