import React from "react";
import Title from "./Title";
import { TextInitial, CalendarSync, } from "lucide-react";
const aboutSection = [
   { 
    id:1,
    title: "Developpeur front-end",
    description: "Je suis un développeur front-end passionné par la création d'expériences utilisateur exceptionnelles. Avec une solide maîtrise des technologies web modernes telles que HTML, CSS et JavaScript, je m'efforce de concevoir des interfaces intuitives et réactives. Mon objectif est de transformer les idées en réalité en utilisant les meilleures pratiques de développement front-end pour offrir des sites web attrayants et performants.",
   icon: <TextInitial className="text-green-600 scale-150" />
},
{
    id:2,
    title: "Developpeur back-end",
    description: "En tant que développeur back-end, je suis spécialisé dans la création de la logique serveur et la gestion des bases de données pour assurer le bon fonctionnement des applications web. Avec une expertise en langages tels que Node.js, Python ou Ruby, je conçois des API robustes et sécurisées pour permettre une communication fluide entre le front-end et le back-end. Mon objectif est de construire des systèmes évolutifs et performants qui répondent aux besoins des utilisateurs tout en garantissant la sécurité et la fiabilité des données.",
    icon: <CalendarSync className="text-green-600 scale-150" />
},
   ];
export const About = () => {
  return (
    <section className="  bg-gray-800 text-white  ">
      <div className="bg-base-300 p-10 mb-10 md:mb-32">
        <Title title="À propos" />
        <div className="md:h-screen flex justify-center items-center">
        <div className="hidden md:flex-col  text-center items-center md:flex">
            <img src='image.jpg' alt="photo" className='w-96 object-cover rounded-xl' />
     </div>
     <div className=" md: ml-4 space-y-4">
{
    aboutSection.map((section) => (
        <div key={section.id} className="flex items-center bg-base-100 gap-4 flex-col md:flex-row p-5 rounded-xl md:w-96 shadow-xl   ">
            <div className="text-green-600">
                {section.icon}
            </div>
            <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                <p className="text-gray-300 text-sm ">{section.description}</p>
            </div>
        </div>
    ))}
     </div>
     </div>
     </div>
    </section>
  );
};
