import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {useAppSelector} from '../../utils/custom-hooks/useAppSelector';
import {ModelsProps} from '../../types/NavigationTypes';
import {selectModels} from './selectors';
import {ModelItem} from './ModelItem/ModelItem';
import {CoffeeMachine} from '../../store/models';
import {WithSafeAreaProvider} from '../../utils/hoc/WithSafeAreaProvider';
import {PADDING_HORIZONTAL, PADDING_VERTICAL} from '../../constants/constants';

export const Models = ({navigation}: ModelsProps) => {
    const models = useAppSelector(selectModels);

    const renderItem: ListRenderItem<CoffeeMachine> = ({item}) => (
        <ModelItem item={item} navigation={navigation}/>);

    return (
        <WithSafeAreaProvider>
            <FlatList
                data={models}
                renderItem={renderItem}
                contentContainerStyle={styles.contentContainerStyle}/>
        </WithSafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingVertical: PADDING_VERTICAL,
        gap: 10,
    },
});