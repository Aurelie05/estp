import Slider, { CustomArrowProps } from "react-slick";
import { Head, Link, usePage } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/Style/Welcome.css";
import { useEffect } from "react"; // Ajout de useEffect pour les animations
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@/Style/Welcome.css'
import slide1 from '@/Assets/fille.jpg'
import { MdOutlinePlace } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import slide2 from '@/Assets/image1 (4).jpg'
import table from '@/Assets/INP-HB_files/ESTP.42cfd471c3b024fce655.png'
import Footer from '@/Layouts/Footer';
import image2 from '@/Assets/INP-HB_files/cycles.png'
import image3 from '@/Assets/INP-HB_files/cycle3.jpg'
import image4 from '@/Assets/INP-HB_files/cycles2.png'
import AOS from "aos";
import "aos/dist/aos.css";




interface PageProp{
    auth: any,
    laravelVersion: string,
    phpVersion : string,
    evenements: EventInfo[],
    sliders: SliderInfo[]; // Ajout de la prop sliders
    
    
}
type EventInfo = {
    id: number;
    image: string;
    date: string;
    lieu: string;  // Remplace 'location' par 'lieu'
    description: string;
  };
  interface SliderInfo {
    id: number;
    titre: string;
    image: string;
}
interface Filiere {
    id: number;
    cycle: string;
    nom_filiere: string;
}
 

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    evenements,
    sliders,
}: PageProp) {
    const { filieres = [] } = usePage().props as { filieres?: Filiere[] };
    const filieresTechSup = filieres.filter(filiere => filiere.cycle === "Cycle Technicien Supérieur");
    const filieresIngenieur = filieres.filter(filiere => filiere.cycle === "Cycle Ingénieur");
    const PrevArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
        return (
            <div 
                className={`${className} slick-arrow slick-prev`} 
                style={{ ...style, display: "block", left: "10px", zIndex: 10, cursor: "pointer" }} 
                onClick={onClick}
            >
                ◀
            </div>
        );
    };
    
    const NextArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
        return (
            <div 
                className={`${className} slick-arrow slick-next`} 
                style={{ ...style, display: "block", right: "10px", zIndex: 10, cursor: "pointer" }} 
                onClick={onClick}
            >
                ▶
            </div>
        );
    };
    
    const programs = [
        {
          icon: "🎓",
          title: "Cycle Technicien",
          description: "Découvrez nos programmes BAC+3 en bâtiment, infrastructure et transport.",
          buttonText: "En savoir plus",
          buttonLink: "/cycletechnicien",
        },
        {
          icon: "📈",
          title: "Cycle Ingénieur",
          description: "Explorez nos programmes BAC+5 en génie civil.",
          buttonText: "En savoir plus",
          buttonLink: "/cycleingenieur",
        },
        {
          icon: "👥",
          title: "Admissions",
          description: "Comment intégrer notre école.",
          buttonText: "Postuler maintenant",
          buttonLink: "https://inphb.ci/concours",
        },
      ];
    
    console.log('Événements:', evenements); 
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Animation plus fluide
        fade: true, // Effet fondu entre les images
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        
    };
    
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durée de l'animation
            once: false, // Permet de rejouer l'animation à chaque passage
        });
    }, []);  

        
          

    return (
        <Guest>
            {/* <Head title="INP-HB" /> */}
            <div className='welcomecontainer'>
            <div className="imageslider">
                <Slider {...settings}>
                    {sliders && sliders.length > 0 ? (
                        sliders.map(slider => (
                            <div key={slider.id} className="slider-item">
                                {/* Image du slider */}
                                <img src={`/storage/${slider.image}`} alt="Slider" className="slider-image" />
                                {/* Overlay noir semi-transparent */}
                                <div className="overlay"></div>
                                {/* Texte fixe affiché sur toutes les images */}
                                <div className="slider-text">
                                    <h2>Bienvenue à l'ESTP</h2>
                                    <p>Ecole superieure des travaux publics</p>
                                    {/* <div className="slider-buttons">
                                        <button className=" btn-primary" onClick={(e) => { e.preventDefault(); window.open('/ecole','_self'); }}>Nos Formations</button>
                                        <button className="btn btn-outline-light">Contactez-Nous</button>
                                    </div> */}
                                    
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Aucun slider disponible.</p>
                    )}
                </Slider>
            </div>

            
            <div className="cards-container">
    {programs.map((program, index) => (
        <div key={index} className="card" data-aos="zoom-in-left" data-aos-once="false">
            <div className="icon">{program.icon}</div>
            <h3 className="title">{program.title}</h3>
            <p className="description">{program.description}</p>

            {program.buttonText && program.buttonLink && (
                <button className="button" onClick={() => window.open(program.buttonLink, "_self")}>
                    {program.buttonText}
                </button>
            )}
        </div>
    ))}
</div>

        {/* <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
                data-aos="zoom-out"
                style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: "red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold"
                }}
            >
                Zoom Out Test
            </div>
        </div> */}

        
                <div className="events-container">
                    <h1 className="events-title">
                        <span className="line2"></span>
                        Nos Evénements
                    </h1>
                    <div className="events-cards">
                        {(evenements && evenements.length > 0) ? (
                            evenements.map((event) => (
                                <div key={event.id} className="event-card">
                                    <img
                                        src={`/storage/${event.image}`}
                                        // alt={event.titre}
                                        className="event-image"
                                    />
                                    <div className="event-details">
                                        <div className="event-info">
                                            <span className="event-date">📅 {event.date}</span>
                                            <span className="event-lieu">📍 {event.lieu}</span>
                                        </div>
                                        <p className="event-description">{event.description}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Aucun événement pour le moment.</p>
                        )}
                    </div>
                </div>
                

                </div>

            <Footer></Footer>
        </Guest>
    );
}
