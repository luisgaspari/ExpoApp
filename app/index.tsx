import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { Heading } from '@/components/ui/heading';
import { Input, InputField } from "@/components/ui/input"
import { Button, ButtonText } from '@/components/ui/button';
import { router } from "expo-router";

export default function Login() {

    const handleLogin = () => {
        router.replace('home');
    }

    const defaultColor = "#4ab2d2";

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/react_1.png")} />
            <Heading size='3xl' className="m-5">Login</Heading>
            <Input
                variant="outline"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                className="pl-3 my-2 mx-10"
            >
                <InputField placeholder="Digite seu login..." />
            </Input>
            <Input
                variant="outline"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                className="pl-3 my-2 mx-10"
            >
                <InputField placeholder="Digite seu senha..." />
            </Input>
            <Button
                onPress={handleLogin}
                size="lg"
                variant="solid"
                className="m-5"
            >
                <ButtonText>Entrar</ButtonText>
            </Button>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 150,
        height: 150,
        margin: 10,
    }
});
