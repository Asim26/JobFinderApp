import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Overlay} from 'react-native-elements';
import {SkypeIndicator} from 'react-native-indicators';
import colors from "../../../assets/colors/colors";
import {RF} from "../../theme/responsive";
import {GST} from "../../theme/globalStyles";

const Loader = ({isLoading}: {isLoading: boolean}) => {
    return (
        <>
            <Overlay isVisible={isLoading} overlayStyle={styles.container}>
                <View style={styles.loaderContainer}>
                <SkypeIndicator color={colors.APP_THEME} size={RF(40)} />
                </View>
            </Overlay>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent:'center',
        alignItems:'center'
    },
    loaderContainer: {
        height: RF(70),
        width: RF(70),
        justifyContent:"center",
        alignItems:"center",
        borderRadius: RF(10),
        backgroundColor: colors.WHITE,
        ...GST.shadowProp1
    },
});

export default Loader;
