import React from 'react'
import '../Style/Section2.css'
const Services = () => {

    const data = [
        {
            img: "/service.webp",
            ftext: "Destination And Venues",
            btext: "As the best wedding planner we’ll help you find the places that match your vibe and bring your vision to life. Whether it’s in your city or outside of it, point us to it. Then get a drink, let us bond with them. All you have to do is show up.",
        },
        {
            img: "/service.webp",
            ftext: "service -02",
            btext: "As the best wedding planner we’ll help you find the places that match your vibe and bring your vision to life. Whether it’s in your city or outside of it, point us to it. Then get a drink, let us bond with them. All you have to do is show up.",
        },
        {
            img: "/service.webp",
            ftext: "Destination And Venues",
            btext: "As the best wedding planner we’ll help you find the places that match your vibe and bring your vision to life. Whether it’s in your city or outside of it, point us to it. Then get a drink, let us bond with them. All you have to do is show up.",
        },
        {
            img: "/service.webp",
            ftext: "Destination And Venues",
            btext: "As the best wedding planner we’ll help you find the places that match your vibe and bring your vision to life. Whether it’s in your city or outside of it, point us to it. Then get a drink, let us bond with them. All you have to do is show up.",
        },
        {
            img: "/service.webp",
            ftext: "Destination And Venues",
            btext: "As the best wedding planner we’ll help you find the places that match your vibe and bring your vision to life. Whether it’s in your city or outside of it, point us to it. Then get a drink, let us bond with them. All you have to do is show up.",
        },
        {
            img: "/service.webp",
            ftext: "Destination And Venues",
            btext: "As the best wedding planner we’ll help you find the places that match your vibe and bring your vision to life. Whether it’s in your city or outside of it, point us to it. Then get a drink, let us bond with them. All you have to do is show up.",
        },
        // {
        //     img: "/Copy-of-Untitled-564-×-564px-1.webp",
        //     ftext: "Destination And Venues",
        //     btext: "As the best wedding planner we’ll help you find the places that match your vibe and bring your vision to life. Whether it’s in your city or outside of it, point us to it. Then get a drink, let us bond with them. All you have to do is show up.",
        // }
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
                                        <h1 className='service-heading'>{ftext}</h1>
                                        <p className='service-text'>{btext}</p>
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