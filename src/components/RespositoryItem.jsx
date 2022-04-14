import { View, Text, Image, StyleSheet } from 'react-native';
import theme from './theme';

const RepositoryItem = (
    { fullName, description, language, 
      forksCount, stargazersCount, ratingAverage, 
      reviewCount, ownerAvatarUrl
    }) => {

    const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
        },
        tinyLogo: {
            width: 50,
            height: 50,
        },
        logo: {
            width: 66,
            height: 58,
        },
        flexContainer: {
            display: 'flex',
            margin: 10,
            backgroundColor: theme.colors.heading,
            fontFamily: theme.fonts.main
        },
        flexDirectionColumn: {
            flexDirection: 'column',
        },
        flexDirectionRow: {
            flexDirection: 'row',
        },
        flexRowSpacing: {
            justifyContent: 'space-around',
            marginTop: 20
        },
        flexItemTop: {
            fontSize: theme.fontSizes.subheading,
            marginLeft: 20,
            marginTop: 10
        },
        flexItemBold: {
            fontWeight: theme.fontWeights.bold,
            fontFamily: theme.fonts.main
        },
        flexItemLang: {
            flexGrow: 0,
            backgroundColor: theme.colors.primary,
            minWidth: 50,
            maxWidth: 150,
            padding: 10, 
            textAlign: 'center',
            borderRadius: 10,
            color: theme.colors.heading,
            fontWeight: theme.fontWeights.bold,
            fontFamily: theme.fonts.main
        },
        flexItemBottom: {
            textAlign: 'center',
            marginBottom: 5
        }
    });

    return(
        <View style={styles.flexContainer}>
            <View style={[styles.flexDirectionRow ]}>
                <Image source={{uri: ownerAvatarUrl}} style={styles.logo}></Image>
                <View style={[styles.flexDirectionColumn]}>
                    <Text style={[styles.flexItemTop, styles.flexItemBold]}>{fullName}</Text>
                    <Text style={styles.flexItemTop}>{description}</Text>
                    <Text style={[styles.flexItemLang, styles.flexItemTop]}>{language}</Text>
                </View>  
            </View>
            <View style={[styles.flexDirectionRow, styles.flexRowSpacing]}>
                <View style={[styles.flexDirectionColumn, styles.flexItemBottom]}>
                    <Text style={styles.flexItemBold}>
                        {stargazersCount > 1000 ? (Math.round(stargazersCount/100) / 10) + 'k' : stargazersCount}
                    </Text>
                    <Text>Stars</Text>
                </View>
                <View style={[styles.flexDirectionColumn, styles.flexItemBottom]}>
                    <Text style={styles.flexItemBold}>
                        {forksCount > 1000 ? (Math.round(forksCount/100) / 10) + 'k' : forksCount}
                    </Text>
                    <Text>Fork</Text>
                </View>
                <View style={[styles.flexDirectionColumn, styles.flexItemBottom]}>
                    <Text style={styles.flexItemBold}>{reviewCount}</Text>
                    <Text>Review</Text>
                </View>
                <View style={[styles.flexDirectionColumn, styles.flexItemBottom]}>
                    <Text style={styles.flexItemBold}>{ratingAverage}</Text>
                    <Text>Rating</Text>
                </View>
            </View>
        </View>
    )
}

export default RepositoryItem;