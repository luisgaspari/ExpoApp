import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Slot } from "expo-router";
import "@/global.css";

export default function Layout() {
    return (
        <GluestackUIProvider mode="light">
            <Slot />
        </GluestackUIProvider>
    );
}