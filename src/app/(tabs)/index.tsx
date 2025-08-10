import React from 'react'
import {Image, StyleSheet, Text, View} from "react-native";
import posts from "../../../assets/data/posts.json"
import {formatDistanceToNowStrict} from "date-fns";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"

const HomeScreen = () => {
    const {title, description, group, created_at, image, upvotes, nr_of_comments} = posts[0]

    return (
        <View style={{paddingHorizontal: 16, paddingVertical: 10}}>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={{uri: group.image}} alt={group.name} style={styles.image}/>
                <Text style={{fontWeight: 'bold'}}>{group.name}</Text>
                <Text style={{color: 'gray'}}>{formatDistanceToNowStrict(new Date(created_at))}</Text>
                <View style={{marginLeft: 'auto'}}>
                    <Text style={styles.joinButtonText}>Join</Text>
                </View>
            </View>

            <View>
                <Text style={styles.title}>{title}</Text>
                {image && (
                    <Image source={{uri: image}} alt={title}
                           style={{width: '100%', aspectRatio: 4 / 3, borderRadius: 15}}/>
                )}

                {!image && description && (
                    <Text numberOfLines={4}>{description}</Text>
                )}

            </View>

            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row', gap: 10}}>
                    <View style={[{flexDirection: 'row'}, styles.iconBox]}>
                        <MaterialCommunityIcons name='arrow-up-bold-outline' size={19} color="black"/>
                        <Text style={{fontWeight: '500', marginLeft: 5, alignSelf: 'center'}}>{upvotes}</Text>
                        <View style={{
                            width: 1,
                            backgroundColor: '#D4D4D4',
                            height: 14,
                            marginHorizontal: 7
                        }}/>
                        <MaterialCommunityIcons name='arrow-down-bold-outline' size={19} color="black"/>
                    </View>
                    <View style={[{flexDirection: 'row'}, styles.iconBox]}>
                        <MaterialCommunityIcons name='comment-outline' size={19} color="black"/>
                        <Text style={{fontWeight: '500', marginLeft: 5, alignSelf: 'center'}}>{nr_of_comments}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 'auto', gap: 10}}>
                    <MaterialCommunityIcons name='trophy-outline' size={19} color="black"/>
                    <MaterialCommunityIcons name='share-outline' size={19} color="black"/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    image: {
        width: 32,
        height: 32,
        borderRadius: 16
    },
    joinButtonText: {
        backgroundColor: '#0D469B',
        color: 'white',
        paddingVertical: 2,
        paddingHorizontal: 7,
        borderRadius: 10,
        fontWeight: 'bold'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        letterSpacing: 0.5
    },
    iconBox: {
        borderWidth: 0.5,
        borderColor: '#D4D4D4',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    }
})

export default HomeScreen;