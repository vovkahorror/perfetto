import {Dimensions, View} from 'react-native';
import {InstructionProps} from '../../../types/NavigationTypes';
import Pdf from 'react-native-pdf';

export const Instruction = ({route}: InstructionProps) => {
    const {uri} = {...route.params};

    return (
        <View>
            <Pdf
                source={{
                    uri: uri,
                    cache: true,
                }}
                trustAllCerts={false}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={{
                    flex: 1,
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }}/>
        </View>
    );
};