import {FlatList, ImageBackground, ListRenderItem} from 'react-native';
import {useAppSelector} from '../../utils/custom-hooks/useAppSelector';
import {ModelsProps} from '../../types/NavigationTypes';
import {selectModels} from './selectors';
import {ModelItem} from './ModelItem/ModelItem';
import {CoffeeMachine} from '../../store/models';
import {WithSafeAreaProvider} from '../../utils/hoc/WithSafeAreaProvider';

export const Models = ({navigation}: ModelsProps) => {
    const models = useAppSelector(selectModels);

    const renderItem: ListRenderItem<CoffeeMachine> = ({item}) => <ModelItem item={item} navigation={navigation}/>;

    return (
        <WithSafeAreaProvider>
            <ImageBackground source={require('../../../assets/background/background1.webp')}>
                <FlatList
                    data={models}
                    renderItem={renderItem}
                    contentContainerStyle={{paddingHorizontal: 20}}/>
            </ImageBackground>
        </WithSafeAreaProvider>
    );
};