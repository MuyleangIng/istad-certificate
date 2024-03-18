import MainSignIn from "@/components/MainSignin";
const desc = "CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company.";

export const metadata = {
    title: 'CSTAD',
    description: desc,
}
export default function Home() {
    return (
        <MainSignIn/>
    );
}