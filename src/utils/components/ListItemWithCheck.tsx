import {ListItem} from './ListItem';
import {FC, memo} from 'react';
import {Props} from 'react-native-paper/src/components/List/ListItem';

export const ListItemWithCheck: FC<CustomProps & Props> = memo(({title, description, ...props}) => {
    const simplifiedDescription = typeof description === 'boolean' ? (description ? 'Так' : 'Ні') : description;

    return description !== null && description !== undefined &&
        <ListItem title={title} description={simplifiedDescription} {...props}/>;

});

interface CustomProps {
    title: string;
    description?: string | number | boolean;
}