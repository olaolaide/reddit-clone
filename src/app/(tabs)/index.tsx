import React from 'react'
import {FlatList, Text} from "react-native";
import posts from "../../../assets/data/posts.json"
import PostListItem from "../../components/PostListItem";

const HomeScreen = () => {
    return (
        <FlatList
            data={posts}
            renderItem={({item}) => <PostListItem post={item}/>}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={() => (
                <>
                    <Text>Header</Text>
                </>
            )}
            ListFooterComponent={() => (
                <>
                    <Text>Footer</Text>
                </>
            )}
        />


    )
}


export default HomeScreen;