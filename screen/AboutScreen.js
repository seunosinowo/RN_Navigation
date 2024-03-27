import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AboutScreen({route, navigation}){
    
    const {name} = route.params;
    //const navigation = useNavigation()
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>About {name} </Text>

            {/* <Button title="Go back to Home"
            onPress={() => navigation.navigate("Home") }
            /> */}

            <Button title="Update the name" 
            onPress={() => navigation.setParams ({
                name: "Codevolution"
            })}
            />

            <Button title="Go back with data"
                onPress={() => navigation.navigate("Home", {result: "Data from About"})}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 16,
    },
})