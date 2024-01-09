import Image from "next/image"

export default function LastSlide() {
    return (
        <section className="container bg-sfprimary w-full h-[800px] mt-4 flex justify-center items-center ">
            <Image className="" src='/SF-icon.png' width={120} height={120} alt='sf-icon'/>
        </section>
    )
}