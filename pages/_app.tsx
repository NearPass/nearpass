import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="flex bg-white h-screen w-full">
            <Sidebar />
            <div className="h-screen w-full relative overflow-y-scroll">
                <Component {...pageProps} />
                <Toaster position="bottom-right" />
            </div>
        </div>
    );
}

export default MyApp;
