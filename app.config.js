const IS_DEV = process.env.APP_VARIANT === 'development';

export default {
    'name': IS_DEV ? 'Perfetto Dev' : 'Perfetto',
    'slug': 'perfetto',
    'version': '1.3.2',
    'orientation': 'portrait',
    'icon': './assets/icon.png',
    'userInterfaceStyle': 'light',
    'splash': {
        'image': './assets/splash.png',
        'resizeMode': 'contain',
        'backgroundColor': '#082141'
    },
    'assetBundlePatterns': [
        '**/*'
    ],
    'ios': {
        'supportsTablet': true,
        'requireFullScreen': true,
        'bundleIdentifier': IS_DEV ? 'com.vovkahorror.perfetto.dev' : 'com.vovkahorror.perfetto',
    },
    'android': {
        'adaptiveIcon': {
            'foregroundImage': IS_DEV ? './assets/adaptive-icon-dev.png' : './assets/adaptive-icon.png',
            'backgroundColor': '#082141'
        },
        'permissions': [
            'android.permission.READ_EXTERNAL_STORAGE',
            'android.permission.WRITE_EXTERNAL_STORAGE',
            'android.permission.DOWNLOAD_WITHOUT_NOTIFICATION',
            'android.permission.ACCESS_NETWORK_STATE'
        ],
        'package': IS_DEV ? 'com.vovkahorror.perfetto.dev' : 'com.vovkahorror.perfetto',
        'versionCode': 4
    },
    'web': {
        'favicon': './assets/favicon.png'
    },
    'plugins': [
        '@config-plugins/react-native-blob-util',
        '@config-plugins/react-native-pdf',
        [
            'expo-screen-orientation',
            {
                'initialOrientation': 'DEFAULT'
            }
        ],
        [
            'expo-build-properties',
            {
                'android': {
                    'enableProguardInReleaseBuilds': true,
                    'extraProguardRules': '-keep public class com.horcrux.svg.** {*;}',
                    'allowBackup': false
                }
            }
        ]
    ],
    'extra': {
        'eas': {
            'projectId': 'dabf6189-da82-491e-afdc-9500b600a8ac'
        }
    }
};
