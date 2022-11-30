import {Platform, StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';
import {FONTS} from '../../../assets/fonts';
import {RF} from '../../theme/responsive';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    cancelRowContainer: {
        flex: 0.15,
    },
    cancelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: RF(10),
    },
    cancelIconContainer: {
        // marginTop: RF(10),
        height:RF(10),
        width:RF(10),
        justifyContent:'center',
        alignItems:'center',
        position: "absolute",
        top:RF(15),
        right: RF(15),
        zIndex:999,
    },
    cancelIcon: {
        width: RF(25),
        height: RF(25),
        resizeMode:'contain'
    },
    imageRowContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginBottom: RF(20),
        // alignSelf:'center'
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode:"cover",
        borderRadius:RF(10)
    },
    textContainer: {
        flex: 0.3,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: RF(17),
        color: colors.BLACK,
        fontFamily: FONTS.Milliard,
        marginVertical: RF(10),
        marginHorizontal: RF(20),
    },
    descriptionRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: RF(28),
    },
    descriptionText: {
        fontSize: RF(12),
        color: colors.BLACK,
        fontFamily: FONTS.ProximaNova,
    },
    buttonContainer: {
        flex: 0.2,
        marginHorizontal: RF(20),
    },
    backgroundVideo: {
        position: 'absolute',
        // height:'100%',
        // width:'100%',
        //
        // top: Platform.OS === "ios" ? 0 : RF(135),
        top:0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

export default styles;
