import { Calligraffitti } from 'next/font/google';
import Image from 'next/image'
const calligraphy = Calligraffitti({weight: '400', preload: false});

export default function OurStory() {
    return (
        <main>
            <div>
                <Image
                    src="./banner2.jpg"
                    alt="Banner Image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"/>
                <div className="absolute inset-0 flex items-center justify-end text-right">
                    <div className="px-32">
                        <p className={`${calligraphy.className} text-6xl font-semibold text-modern-rich`}>Kimmy & Joseph</p>
                        <p className={`text-2xl text-modern-text`}>Kimmy & Joseph say 'I do' on [Wedding Date]!<br/>
                            Save the date! 💍🎉
                        </p>
                        <p className="text-1xl text-modern-text">#KimmyAndJosephSayIDo</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
