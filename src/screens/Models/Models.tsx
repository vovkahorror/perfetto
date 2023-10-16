import {FlatList, View, StyleSheet, ImageBackground, ListRenderItem, Pressable} from 'react-native';
import {useAppSelector} from '../../utils/custom-hooks/useAppSelector';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ModelsProps} from '../../types/NavigationTypes';
import {selectModels} from './selectors';
import {ModelItem} from './ModelItem/ModelItem';
import {CoffeeMachine} from '../../store/models';

export const Models = ({navigation}: ModelsProps) => {
    const insets = useSafeAreaInsets();
    const models = useAppSelector(selectModels);

    const renderItem: ListRenderItem<CoffeeMachine> = ({item}) => {
        return (
            <Pressable onPress={() => navigation.navigate('CurrentModel', item)}>
                <ModelItem item={item}/>
            </Pressable>
        );
    };

    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <ImageBackground source={require('../../../assets/background/background1.webp')}>
                <FlatList
                    data={models}
                    renderItem={renderItem}
                    contentContainerStyle={{paddingHorizontal: 20}}/>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'contain',
    },
});