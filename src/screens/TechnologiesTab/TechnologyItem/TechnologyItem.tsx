import {Text, View} from 'react-native';
import {Technology} from '../../../store/data/technologies';

export const TechnologyItem = ({item}: TechnologyItemProps) => {
    return (
        <View>
            <Text>TechnologyItem</Text>
        </View>
    );
};

interface TechnologyItemProps {
    item: Technology;
}