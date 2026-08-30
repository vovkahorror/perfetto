import {View} from 'react-native';
import {useEffect} from 'react';
import Svg, {G, Ellipse, Path} from 'react-native-svg';
import Animated, {useSharedValue, useAnimatedStyle, withRepeat, withTiming, withDelay, Easing} from 'react-native-reanimated';

const Bean = ({delay}: { delay: number }) => {
    const translateY = useSharedValue(0);
    const opacity = useSharedValue(0.5);

    useEffect(() => {
        translateY.value = withDelay(delay, withRepeat(
            withTiming(-12, {duration: 600, easing: Easing.inOut(Easing.ease)}), -1, true
        ));
        opacity.value = withDelay(delay, withRepeat(
            withTiming(1, {duration: 600, easing: Easing.inOut(Easing.ease)}), -1, true
        ));
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{translateY: translateY.value}],
        opacity: opacity.value,
    }));

    return (
        <Animated.View style={animatedStyle}>
            <Svg width={26} height={40} viewBox="-22 -32 44 64">
                <G transform="rotate(30)">
                    <Ellipse cx="0" cy="0" rx="16" ry="26" fill="#6a3e2e" stroke="#000" strokeWidth={3.5}/>
                    <Path d="M -5 -20 Q 12 -5 -2 0 T 5 20" fill="none" stroke="#000" strokeWidth={3} strokeLinecap="round"/>
                </G>
            </Svg>
        </Animated.View>
    );
};

export const LoadingBeans = () => (
    <View style={{flexDirection: 'row', gap: 8}}>
        <Bean delay={0}/>
        <Bean delay={150}/>
        <Bean delay={300}/>
        <Bean delay={450}/>
    </View>
);