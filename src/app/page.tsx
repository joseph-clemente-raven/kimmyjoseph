import Image from 'next/image'

export default function Home() {
    return (
        <main>
            <div>
                <Image
                    src="./banner.jpg"
                    alt="Banner Image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"/>
                <div className="absolute inset-0 flex items-center justify-end text-right">
                    <div className="px-32">
                        <p className="text-6xl font-semibold text-modern-rich">Kimmy & Joseph</p>
                        <p className="text-2xl text-modern-text">Kimmy & Joseph say 'I do' on [Wedding Date]!<br/>
                            Save the date! 💍🎉
                        </p>
                        <p className="text-1xl text-modern-text">#KimmyAndJosephSayIDo"</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
