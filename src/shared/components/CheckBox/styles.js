
import {StyleSheet} from "react-native";
import {hp, RF, wp} from "../../theme/responsive";
import {FONTS} from "../../../assets/fonts";
import colors from "../../../assets/colors/colors";

const styles = StyleSheet.create({

    mainContainer:{
        marginVertical:hp(0.5),
        // borderWidth:1,
        height:hp(3),
        width:'100%',
        flexDirection:'row',
    },
    checkBoxContainer:{
        height:'100%',
        width: '10%',
        // borderWidth:1,
        justifyContent:'center',
        alignItems:'center',

    },
    checkBoxLabel:{
        height:'100%',
        width:'50%',
        // borderWidth:1,
        flexDirection:'row',
        // borderWidth:1

    },

    iconStyles:{
        height:hp(2),
        width:hp(2),
        resizeMode:'contain',
    },
    lableContainer:{
        height:'100%',
        width:'50%',
        // borderWidth:1,
        flexDirection:'row',
        // paddingLeft:wp(3),
        // justifyContent:'center',
        alignItems:"center",
    },
    lableStyles:{
        fontSize:RF(12),
        fontFamily:FONTS.MilliardMedium,
        color:colors.GRAY_SCALE,

    }
});
export default styles
