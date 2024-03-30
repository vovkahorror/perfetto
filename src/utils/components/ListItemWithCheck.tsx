import {ListItem} from './ListItem';

export const ListItemWithCheck = ({title, description, ...props}: {
    title: string,
    description?: string | number | boolean
}) => {
    const simplifiedDescription = typeof description === 'boolean' ? (description ? 'Так' : 'Ні') : description;

    return (
        <>
            {description !== null && description !== undefined &&
                <ListItem title={title} description={simplifiedDescription} {...props}/>}
        </>
    );
};