import {FC, useState} from 'react';
import {Props} from 'react-native-paper/src/components/List/ListAccordion';
import {List} from 'react-native-paper';
import {BORDER_RADIUS, TEXT_COLOR, TEXT_FOCUS_COLOR} from '../../constants/constants';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

export const ListAccordion: FC<Props & CustomProps> = ({icon, ...props}) => {
    const [isExpanded, setIsExpanded] = useState(false);

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
};

interface CustomProps {
    icon?: IconSource;
}