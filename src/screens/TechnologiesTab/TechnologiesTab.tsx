import {Text} from 'react-native';
import {Wrapper} from '../../utils/hoc/Wrapper';
import {useAppSelector} from '../../utils/custom-hooks/useAppSelector';
import {selectTechnologies} from './selectors';

export const TechnologiesTab = () => {
    const technologies = useAppSelector(selectTechnologies);

    return (
        <Wrapper>
            <Text>Технології</Text>
        </Wrapper>
    );
};