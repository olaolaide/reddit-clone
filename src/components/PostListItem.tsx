import React from 'react'
import {Image, StyleSheet, Text, View} from "react-native";
import {Post} from "../types/post";
import {formatDistanceToNowStrict} from "date-fns";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const PostListItem = ({post}: { post: Post }) => {
    return (
        <View style={{paddingHorizontal: 16, paddingVertical: 10}}>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={{uri: post.group.image}} alt={post.group.name} style={styles.image}/>
                <Text style={{fontWeight: 'bold'}}>{post.group.name}</Text>
                <Text style={{color: 'gray'}}>{formatDistanceToNowStrict(new Date(post.created_at))}</Text>
                <View style={{marginLeft: 'auto'}}>
                    <Text style={styles.joinButtonText}>Join</Text>
                </View>
            </View>

            <View>
                <Text style={styles.title}>{post.title}</Text>
                {post.image && (
                    <Image source={{uri: post.image}} alt={post.title}
                           style={{width: '100%', aspectRatio: 4 / 3, borderRadius: 15}}/>
                )}

                {!post.image && post.description && (
                    <Text numberOfLines={4}>{post.description}</Text>
                )}

            </View>

            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row', gap: 10}}>
                    <View style={[{flexDirection: 'row'}, styles.iconBox]}>
                        <MaterialCommunityIcons name='arrow-up-bold-outline' size={19} color="black"/>
                        <Text style={{fontWeight: '500', marginLeft: 5, alignSelf: 'center'}}>{post.upvotes}</Text>
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
                        <Text
                            style={{fontWeight: '500', marginLeft: 5, alignSelf: 'center'}}>{post.nr_of_comments}</Text>
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

export default PostListItem;