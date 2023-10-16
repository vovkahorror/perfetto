import {Image, StyleSheet, Text, View} from 'react-native';
import {CoffeeMachine} from '../../../store/models';
import {FC} from 'react';

export const ModelItem: FC<ModelItemProps> = ({item}) => {
    return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: item.imageUrl[0]}}/>
                <View>
                    <Text style={styles.model}>{item.model}</Text>
                    <Text style={styles.series}>{item.series}</Text>
                </View>
            </View>
    );
};

interface ModelItemProps {
    item: CoffeeMachine;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 10,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    model: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    series: {
        fontSize: 16,
        fontStyle: 'italic',
    },
});