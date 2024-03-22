import {FlatList, ListRenderItem, StyleSheet, Text} from 'react-native';
import {Wrapper} from '../../utils/hoc/Wrapper';
import {useAppSelector} from '../../utils/custom-hooks/useAppSelector';
import {selectTechnologies} from './selectors';
import {TechnologyItem} from './TechnologyItem/TechnologyItem';
import {Technology} from '../../store/data/technologies';
import {
    GAP,
    PADDING_HORIZONTAL,
    PADDING_VERTICAL,
    TEXT_FOCUS_COLOR,
    TEXT_SHADOW_COLOR,
} from '../../constants/constants';

export const TechnologiesTab = () => {
    const technologies = useAppSelector(selectTechnologies);

    const renderItem: ListRenderItem<Technology> = ({item}) => (
        <TechnologyItem item={item}/>);

    return (
        <Wrapper>
            <FlatList
                data={technologies}
                renderItem={renderItem}
                contentContainerStyle={styles.contentContainerStyle}
                keyboardShouldPersistTaps={'always'}
                ListFooterComponent={<Text style={styles.text}>* — технологія присутня не в усіх моделях
                    кавомашин</Text>}/>
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: PADDING_VERTICAL,
    },
    contentContainerStyle: {
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingVertical: PADDING_VERTICAL,
        gap: GAP,
    },
    text: {
        paddingHorizontal: PADDING_HORIZONTAL,
        fontSize: 14,
        fontWeight: '700',
        color: TEXT_FOCUS_COLOR,
        textShadowColor: TEXT_SHADOW_COLOR,
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
    },
});