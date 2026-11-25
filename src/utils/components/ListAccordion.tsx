import {ComponentProps, FC, memo, useState} from 'react';
import {List} from 'react-native-paper';
import {BORDER_RADIUS, TEXT_COLOR, TEXT_FOCUS_COLOR} from '../../constants/constants';

type IconSource = ComponentProps<typeof List.Icon>['icon'];

export const ListAccordion: FC<ComponentProps<typeof List.Accordion> & CustomProps> = memo(({icon, expanded, ...props}) => {
    const [isExpanded, setIsExpanded] = useState(expanded !== undefined ? expanded : false);

    const currentColor = isExpanded ? TEXT_FOCUS_COLOR : TEXT_COLOR;

    return (
        <List.Accordion theme={{colors: {background: 'transparent'}}}
                        left={props => icon && <List.Icon {...props} icon={icon} color={currentColor}/>}
                        right={({isExpanded}) => <List.Icon
                            icon={isExpanded ? 'arrow-up-drop-circle-outline' : 'arrow-down-drop-circle-outline'}
                            color={currentColor}/>}
                        titleStyle={{color: currentColor, fontWeight: '700'}}
                        expanded={isExpanded}
                        onPress={() => setIsExpanded(!isExpanded)}
                        rippleColor={TEXT_COLOR}
                        style={{borderRadius: BORDER_RADIUS}}
                        {...props}>
            {props.children}
        </List.Accordion>
    );
});

interface CustomProps {
    icon?: IconSource;
    expanded?: boolean;
}