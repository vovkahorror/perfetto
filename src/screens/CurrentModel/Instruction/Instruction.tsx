import {Dimensions, View, StyleSheet} from 'react-native';
import {InstructionProps} from '../../../types/NavigationTypes';
import Pdf from 'react-native-pdf';
import {WithSafeAreaProvider} from '../../../utils/hoc/WithSafeAreaProvider';
import {BORDER_RADIUS, PADDING_HORIZONTAL, PADDING_VERTICAL, TEXT_COLOR} from '../../../constants/constants';
import Spinner from 'react-native-loading-spinner-overlay';

export const Instruction = ({route}: InstructionProps) => {
    const {uri} = {...route.params};

    return (
        <WithSafeAreaProvider>
            <View style={styles.container}>
                <Pdf
                    source={{
                        uri: uri,
                        cache: true,
                    }}
                    trustAllCerts={false}
                    renderActivityIndicator={(progress) =>
                        <Spinner
                            animation={'fade'}
                            visible
                            color={TEXT_COLOR}
                            textContent={`${Math.round(progress * 100)}%`}
                            textStyle={{color: TEXT_COLOR}}/>}
                    style={styles.pdf}/>
            </View>
        </WithSafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingVertical: PADDING_VERTICAL,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width - PADDING_HORIZONTAL * 2,
        height: Dimensions.get('window').height - PADDING_VERTICAL * 2,
        borderRadius: BORDER_RADIUS,
    },
});