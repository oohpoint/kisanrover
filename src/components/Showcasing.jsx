

const events = [
    {
        image: '/product/P1.jpg',
        title: 'DEFENCE EXPO 2022',
        rotation: -6,
    },
    {
        image: '/product/P2.jpg',
        title: 'EXCON 2023',
        rotation: 2,
    },
    {
        image: '/product/P3.jpg',
        title: 'AGRIMACH 2024',
        rotation: 6,
    },
];


const ShowcasingInnovation = () => {
    return (
        <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-semibold mb-3">
                        <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                            Showcasing the Innovation
                        </span>
                    </h1>
                    <p className="text-gray-800 text-md md:text-lg max-w-2xl mx-auto leading-tight">
                        Bullwork's Electric Vehicles at Major Events
                    </p>
                </div>

                {/* Polaroid Grid */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="group perspective-1000"
                            style={{
                                transform: `rotate(${event.rotation}deg)`,
                            }}
                        >
                            {/* Polaroid Card */}
                            <div className="bg-white p-4 pb-16 shadow-2xl rounded-sm transition-all duration-300 hover:scale-105 hover:rotate-0 hover:shadow-3xl cursor-pointer w-72 md:w-80">
                                {/* Image */}
                                <div className="relative w-full aspect-[9/10] bg-gray-200 mb-4 overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Title */}
                                <div className="text-center">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 ">
                                        {event.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ShowcasingInnovation