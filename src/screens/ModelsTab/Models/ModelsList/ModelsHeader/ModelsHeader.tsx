import {Pressable, StyleSheet, View} from 'react-native';
import {Icon, Searchbar} from 'react-native-paper';
import {BACKGROUND_COLOR, TEXT_COLOR, TEXT_FOCUS_COLOR} from '../../../../../constants/constants';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../../../../utils/custom-hooks/useAppSelector';
import {selectSearchQuery} from '../../selectors';
import {setSearch} from '../../../../../store/models-slice';
import {useAppDispatch} from '../../../../../utils/custom-hooks/useAppDispatch';
import {useDrawerStatus} from '@react-navigation/drawer';

export const ModelsHeader = () => {
    const dispatch = useAppDispatch();
    const searchQuery = useAppSelector(selectSearchQuery);
    const navigation = useNavigation();
    const status = useDrawerStatus();

    const onChangeSearch = (query: string) => {
        dispatch(setSearch(query));
    };

    const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer());

    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Введіть модель для пошуку"
                onChangeText={onChangeSearch}
                value={searchQuery}
                iconColor={TEXT_COLOR}
                theme={{
                    colors: {
                        primary: TEXT_FOCUS_COLOR,
                        onSurface: TEXT_COLOR,
                        onSurfaceVariant: TEXT_FOCUS_COLOR,
                    },
                }}
                style={{
                    flex: 1,
                    backgroundColor: BACKGROUND_COLOR,
                }}
            />
            <Pressable onPress={toggleMenu}>
                <Icon size={42} source={status === 'closed' ? 'menu' : 'menu-open'} color={TEXT_COLOR}/>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
});