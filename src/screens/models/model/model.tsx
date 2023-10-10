import {ListRenderItem, Text, View} from 'react-native';
import {CoffeeMachine} from '../../../store/models';

export const Model: ListRenderItem<CoffeeMachine> = ({item}) => {
    return (
        <View>
            <Text>{item.model}</Text>
        </View>
    );
};