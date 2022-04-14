import { Platform } from 'react-native';

const theme = {
    backgroundColor: {
        primary: '#24292e'
    },
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        heading: 'white'
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            web: 'Futura',
            default: 'System'
        })
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    }
};

export default theme;