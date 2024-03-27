import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {GAP, PADDING_HORIZONTAL, PADDING_VERTICAL} from '../../../../constants/constants';
import {useAppSelector} from '../../../../utils/custom-hooks/useAppSelector';
import {selectModels} from '../selectors';
import {CoffeeMachine} from '../../../../store/data/models';
import {ModelItem} from './ModelItem/ModelItem';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {ModelsStackParamList} from '../../../../types/NavigationTypes';
import {FC} from 'react';
import {Wrapper} from '../../../../utils/components/Wrapper';
import {ModelsHeader} from './ModelsHeader/ModelsHeader';

const backgroundImage = require('../../../../../assets/background/background3.webp');

export const ModelsList: FC<ModelsListProps> = ({navigation}) => {
    const models = useAppSelector(selectModels);

    const renderItem: ListRenderItem<CoffeeMachine> = ({item}) => (
        <ModelItem item={item} navigation={navigation}/>);

    return (
        <Wrapper backgroundImage={backgroundImage}>
            <FlatList
                data={models}
                renderItem={renderItem}
                ListHeaderComponent={ModelsHeader}
                contentContainerStyle={styles.contentContainerStyle}
                keyboardShouldPersistTaps={'always'}/>
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingVertical: PADDING_VERTICAL,
        gap: GAP,
    },
});

interface ModelsListProps {
    navigation: NativeStackNavigationProp<ModelsStackParamList, 'Models'>;
}