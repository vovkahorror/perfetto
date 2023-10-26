import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {useAppSelector} from '../../utils/custom-hooks/useAppSelector';
import {ModelsProps} from '../../types/NavigationTypes';
import {selectModels, selectSearchQuery} from './selectors';
import {ModelItem} from './ModelItem/ModelItem';
import {CoffeeMachine} from '../../store/models';
import {WithSafeAreaProvider} from '../../utils/hoc/WithSafeAreaProvider';
import {
    BACKGROUND_COLOR,
    PADDING_HORIZONTAL,
    PADDING_VERTICAL,
    TEXT_COLOR,
    TEXT_FOCUS_COLOR,
} from '../../constants/constants';
import {Searchbar} from 'react-native-paper';
import {setSearch} from '../../store/models-reducer';
import {useAppDispatch} from '../../utils/custom-hooks/useAppDispatch';

export const Models = ({navigation}: ModelsProps) => {
    const dispatch = useAppDispatch();
    const models = useAppSelector(selectModels);
    const searchQuery = useAppSelector(selectSearchQuery);

    const onChangeSearch = (query: string) => {
        dispatch(setSearch(query));
    };

    const renderItem: ListRenderItem<CoffeeMachine> = ({item}) => (
        <ModelItem item={item} navigation={navigation}/>);

    return (
        <WithSafeAreaProvider>
            <FlatList
                data={models}
                renderItem={renderItem}
                ListHeaderComponent={
                    <Searchbar
                        placeholder="Введіть модель для пошуку"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        iconColor={TEXT_COLOR}
                        theme={{
                            colors: {
                                primary: TEXT_FOCUS_COLOR,
                                onSurface: TEXT_COLOR,
                                onSurfaceVariant: TEXT_FOCUS_COLOR
                            }
                        }}
                        style={{
                            backgroundColor: BACKGROUND_COLOR,
                        }}
                    />}
                contentContainerStyle={styles.contentContainerStyle}
                keyboardShouldPersistTaps="always"/>
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