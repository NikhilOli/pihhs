
export interface ServiceData {
    title: string;
    imageUrl: string;
    description: string;
}

const serviceData: ServiceData[] = [
    {
        title: "Handwriting Skill Assessment",
        imageUrl: "/service1.avif",
        description: "Get a personalized evaluation of your handwriting style and learn how to improve clarity, speed, and elegance."
    },
    {
        title: "Personalized Coaching Sessions",
        imageUrl: "/service2.avif",
        description: "One-on-one coaching tailored to refine your writing technique, posture, and hand control."
    },
    {
        title: "Creative Calligraphy Workshop",
        imageUrl: "/service3.avif",
        description: "Explore the art of calligraphy and enhance your handwriting with creative flourishes and styles."
    },
    {
        title: "Kids' Handwriting Programs",
        imageUrl: "/service4.avif",
        description: "Specially designed courses for kids to build neat and confident handwriting from an early age."
    }
];


export default serviceData;
