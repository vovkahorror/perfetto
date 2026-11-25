const IS_DEV = process.env.APP_VARIANT === 'development';
// CMake 3.31.6 (Ninja 1.12) is only needed on Windows for long paths and is not
// installed on Expo Build's Linux image, so the override must stay local.
const IS_WINDOWS = process.platform === 'win32';

export default {
    'name': IS_DEV ? 'Perfetto Dev' : 'Perfetto',
    'slug': 'perfetto',
    'version': '1.5.0',
    'orientation': 'portrait',
    'icon': './assets/icon.png',
    'userInterfaceStyle': 'light',
    "newArchEnabled": true,
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
        'versionCode': 10
    },
    'web': {
        'favicon': './assets/favicon.png'
    },
    'plugins': [
        '@config-plugins/react-native-blob-util',
        '@config-plugins/react-native-pdf',
        "expo-font",
        [
            'expo-splash-screen',
            {
                'image': './assets/splash.png',
                'resizeMode': 'contain',
                'backgroundColor': '#082141'
            }
        ],
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
                    'allowBackup': false,
                    ...(IS_WINDOWS ? {'cmakeVersion': '3.31.6'} : {})
                }
            }
        ],
        [
            "expo-status-bar"
        ]
    ],
    'extra': {
        'eas': {
            'projectId': 'dabf6189-da82-491e-afdc-9500b600a8ac'
        }
    }
};
