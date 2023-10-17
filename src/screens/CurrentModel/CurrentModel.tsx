import {Text} from 'react-native';
import {CurrentModelProps} from '../../types/NavigationTypes';
import {WithSafeAreaProvider} from '../../utils/hoc/WithSafeAreaProvider';

export const CurrentModel = ({route}: CurrentModelProps) => {
    const {
        model,
        series,
        imageUrl,
        videoId,
        description,
        summary,
        technicalData,
        colourMaterialFinish,
        functions,
        controlPanel,
        features,
        miscellaneous,
    } = {...route.params};

    return (
        <WithSafeAreaProvider>
            <Text>{model}</Text>
            <Text>{series}</Text>
            <Text>{description}</Text>
        </WithSafeAreaProvider>
    );
};