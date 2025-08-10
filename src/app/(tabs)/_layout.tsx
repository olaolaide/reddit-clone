import {Tabs} from "expo-router";
import {AntDesign, Feather, Ionicons} from "@expo/vector-icons";

const TabLayout = () => {
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: 'black'}}>
            <Tabs.Screen name='index' options={{
                title: 'Home',
                headerTitle: 'Reddit',
                headerTintColor: '#FF5700',
                tabBarIcon: ({color}) =>
                    <AntDesign name='home' size={24} color={color}/>
            }}/>

            <Tabs.Screen name='communities' options={{
                headerTitle: 'Communities',
                tabBarIcon: ({color}) =>
                    <Feather name='user' size={24} color={color}/>
            }}/>

            <Tabs.Screen name='create' options={{
                headerTitle: 'Create',
                tabBarIcon: ({color}) =>
                    <AntDesign name='plus' size={24} color={color}/>
            }}/>

            <Tabs.Screen name='chat' options={{
                headerTitle: 'Chat',
                tabBarIcon: ({color}) =>
                    <Ionicons name='chatbubble-ellipses-outline' size={24} color={color}/>
            }}/>

            <Tabs.Screen name='inbox' options={{
                headerTitle: 'Inbox',
                tabBarIcon: ({color}) =>
                    <AntDesign name='home' size={24} color={color}/>
            }}/>
        </Tabs>
    )
}

export default TabLayout;