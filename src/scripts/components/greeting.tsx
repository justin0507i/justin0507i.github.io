import { useEffect, useState } from "react";

const duration = 3000;
const greetings = [
    'Nice to meet you',
    '很高兴和你相遇',
    'आपसे मिलकर खुशी हुई',
    'Encantado de conocerte',
    'Enchanté de te rencontrer',
    'تشرفت بلقائك',
    'আপনার সাথে পরিচিত হয়ে খুশি হয়েছি',
    'Приятно познакомиться',
    'Prazer em conhecê-lo',
    'Senang bertemu dengan Anda',
    'آپ سے ملکر خوشی ہوئی',
    'Freut mich, dich kennenzulernen',
    'はじめまして',
    'ਤੁਹਾਨੂੰ ਮਿਲਕੇ ਖੁਸ਼ੀ ਹੋਈ',
    'Piacere di conoscerti',
    '만나서 반갑습니다',
    'உங்களை சந்தித்ததில் மகிழ்ச்சி',
    'Tanıştığımıza memnun oldum',
    'ยินดีที่ได้รู้จักคุณ',
    'خوشبختم از دیدار شما',
    'Aangenaam kennis te maken',
    'Χάρηκα για τη γνωριμία',
    '好高興認識你',
    'Seneng ketemu karo sampeyan',
    'Îmi pare bine să te cunosc',
    'Rất vui được gặp bạn',
    'మీతో పరిచయం అయ్యింది చాలా ఆనందంగా ఉంది',
    'Siz bilan tanishganimdan hursandman',
    'Ուրախ եմ հանդիպելու',
    'Сізбен танысқаныма қуаныштымын',
];

export default function Greeting() {
    const [idx, setIdx] = useState(0);
    function increment() {
        if (idx + 1 < greetings.length) {
            setIdx(idx + 1);
        } else {
            setIdx(0);
        }
    }

    useEffect(() => {
        const interval = window.setInterval(() => {
            increment();
        }, duration);
        return () => {
            window.clearInterval(interval);
        };
    }, [idx]);
    return (
        <p style={{
            fontSize: 18,
            textAlign: 'center',
            marginTop: 30,
            fontFamily: 'monospace'
        }}>{greetings[idx]}</p>
    )
}