import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {Wrapper} from '../../utils/hoc/Wrapper';
import {useAppSelector} from '../../utils/custom-hooks/useAppSelector';
import {selectTechnologies} from './selectors';
import {TechnologyItem} from './TechnologyItem/TechnologyItem';
import {Technology} from '../../store/data/technologies';
import {PADDING_HORIZONTAL, PADDING_VERTICAL} from '../../constants/constants';

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
                keyboardShouldPersistTaps={'always'}/>
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingVertical: PADDING_VERTICAL,
        gap: 10,
    },
});