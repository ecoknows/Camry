import React from 'react';
import {View, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import { theme } from '../constants';

const ViewField = props => {
    const {
    style,
    children,
    animated,

    // position
    center,
    middle,
    end,

    // behaviour
    touchable,
    round,

    // flex
    flex,
    row,
    rowVerse,
    absolute,

    //size
    scale,

    //colr
    white,
    peach,
    accent,

    ...rest
    } = props;

    const ViewStyle = [
        style,
        styles.view,

        // flex
        row && styles.row,
        rowVerse && styles.rowVerse,
        flex == false && { flex: 0},
        flex && {flex: flex},
        absolute && {position: 'absolute'},

        round && {borderRadius: round},

        //size
        scale && {height: scale, width: scale},

        // position
        center && {justifyContent: 'center'},
        middle && {alignItems: 'center'},
        end && {justifiyContent: 'flex-end',},

        //color
        white && styles.white,
        peach && styles.peach,
        accent && styles.accent,
        
    ];
    if(animated){
        return(
             <Animated.View style={ViewStyle} {...rest} >{children}</Animated.View>
        )
    }


    if(touchable){
        return(
        <View style={ViewStyle} {...rest} >
            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={props.press}>
                {children}
            </TouchableOpacity>
        </View>
        );
    }

    return(
        <View style={ViewStyle} {...rest} >{children}</View>
    )
}

export default ViewField;

const styles = StyleSheet.create({
    view : {
        flex: 1,
    },// default text 


    row: { flexDirection: 'row'},
    rowVerse: {flexDirection: 'row-reverse'},

    //colors 
    white: {backgroundColor: 'white'},
    peach: {backgroundColor: theme.colors.peach},
    accent: {backgroundColor: theme.colors.accent},
});