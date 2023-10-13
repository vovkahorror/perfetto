import {FlatList, View, StyleSheet, ImageBackground} from 'react-native';
import {Model} from './model/model';
import {useAppSelector} from '../../utils/custom-hooks/useAppSelector';
import {selectModels} from './selectors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ModelsProps} from '../../types/NavigationTypes';

export const Models = ({navigation}: ModelsProps) => {
    const insets = useSafeAreaInsets();
    const models = useAppSelector(selectModels);

    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <ImageBackground source={require('../../../assets/background/background1.webp')}>
                <FlatList
                    data={models}
                    renderItem={Model}
                    contentContainerStyle={{paddingHorizontal: 20}}/>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'contain',
    }
})