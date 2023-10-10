import {FlatList, View} from 'react-native';
import {Model} from './model/model';
import {useAppSelector} from '../../utils/custom-hooks/useAppSelector';
import {selectModels} from './selectors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Models = ({}: ModelsProps) => {
    const insets = useSafeAreaInsets();
    const models = useAppSelector(selectModels);

    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <FlatList
                data={models}
                renderItem={Model}/>
        </View>
    );
};

interface ModelsProps {

}