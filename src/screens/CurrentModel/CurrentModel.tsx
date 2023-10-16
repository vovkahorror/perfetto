import {Text, View} from 'react-native';
import {CurrentModelProps} from '../../types/NavigationTypes';

export const CurrentModel = ({route}: CurrentModelProps) => {
    const {model} = {...route.params};

    return (
        <View>
            <Text>{model}</Text>
        </View>
    );
};