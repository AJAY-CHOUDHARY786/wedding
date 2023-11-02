import React from 'react'
import '../Style/Section2.css'
const Services = () => {

    const data = [
        {
            img: "/821D4CF83E2B31CFA22DFFC7CD_1515498213055.webp",
            ftext: "WEDDING PLANNING",
            btext: "Your truly stress-free wedding planning experience begins with our enthusiastic team. Our consultants put their art into planning perfection, but you still hold the final word. We will be there with you every step of the way.",
        },
        {
            img: "/47099003AFF3ED977BDCE724DA_1515498160963.webp",
            ftext: "DESTINATION WEDDINGS",
            btext: "Your wedding is one of the most significant milestones of your life. And what’s more romantic than jetting off to a beautiful location and celebrating the start of the rest of your life amidst people you cherish with a destination wedding.",
        },
        {
            img: "/FA93E28EC7E60978F3E2E6C49C_1515498185862.webp",
            ftext: "WEDDING DECOR",
            btext: "We’re a wedding styling company specializing in chic, elegant and innovative themes, decors and sets for weddings. Every kind of theme is made possible with one symbolic wave of our magic wand to cherish and enhance your wedding.",
        },
        {
            img: "/8A28AC6DF23660B069BE141EC2_1515498252683.webp",
            ftext: "HOST SERVICES FOR WEDDING",
            btext: "Every wedding has a timeline, and it takes a skilled Wedding Host, a modern day toastmaster, to keep it on track. We provide professional hosts for wedding at very cost effective rates to our clients.",
        },
        {
            img: "/EF91BB41D143159BC9B2779626_1579354516786.webp",
            ftext: "Decoration Services",
            btext: "Any theme related and customised decoration available with our best hands on it.",
        },
        {
            img: "/5012F7977664956861ED14261E_1579354384152.webp",
            ftext: "Light System",
            btext: "Choose the choice of your lights and LEDs that you want for any event you organise.",
        },
        {
            img: "/004AA160842C95C0A4814C012E_1579354948547.webp",
            ftext: "Sound Systems",
            btext: "We provide the best sound systems to make your events cheerful and memorable.",
        },
        {
            img: "/A24741650650FBAFE5154CB41A_1548941400877.webp",
            ftext: "Catering Services",
            btext: "An event is just incomplete without food. We offer the best catering services for any of your event.",
        },


    ]
    return (
        <>
            <section className='service-main'>
                <section className='service-heading'>
                    <h2>SERVICES WE PROVIDE</h2>
                    <hr />
                </section>
                <section className='service-grid'>
                    {
                        data.map((d, i) => {
                            const { img, ftext, btext } = d;
                            return (
                                    <section style={{ backgroundImage: `url(${img})` }} className='service-item' key={i}>


                                        <div className="service-container">
                                        <h1 className='service-heading' style={{fontSize:"30px",color:"white"}}>{ftext}</h1>
                                        <p className='service-text'>{btext}</p>


                                        </div>
                                       
                                    </section>
                            )
                        })
                    }
                </section>
            </section>
        </>
    )
}

export default Services;