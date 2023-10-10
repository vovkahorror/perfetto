import {Image, ListRenderItem, Text, View, StyleSheet} from 'react-native';
import {CoffeeMachine} from '../../../store/models';

export const Model: ListRenderItem<CoffeeMachine> = ({item}) => {
    return (
        <View>
            <Image style={styles.image} source={{uri: item.imageUrl[0]}}/>
            <Text>{item.model}</Text>
            <Text>{item.series}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
    },
});