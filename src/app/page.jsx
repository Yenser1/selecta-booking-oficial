import { Monoton } from "next/font/google"

const monoton = Monoton({
    subset: ['latin'],
    weight: '400'
    
})

function LandingPage(){
    return (
        <section className={`w-full h-screen flex justify-center items-center`}
        >
            <h1 className={`${monoton.className} text-9xl`}
            >This is Selecta Booking</h1>
        </section>
        
    )
}

export default LandingPage