import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Gallery = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className=" py-14 px-5  bg-amber-300">
            <h1 className=" font-bold text-2xl font-serif text-center ">Toy Gallery</h1>
            <p className=" text-center mb-5 text-gray-500">Here are some of our best looking toys</p>
            <div className=" grid grid-cols-3 gap-5 ">
                <img className="  rounded-xl  row-span-2 col-span-2" data-aos="zoom-in" src="https://images.unsplash.com/photo-1456082902841-3335005c3082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" />
                <img className=" md:h-64 rounded-xl " data-aos="fade-left" src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                <img className=" md:h-64 rounded-xl" data-aos="fade-up" src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                <img className=" md:h-64 rounded-xl" data-aos="fade-up" src="https://images.unsplash.com/photo-1589632727880-664c976618ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="" />
                <img className=" rounded-xl row-span-2 col-span-2" data-aos="zoom-in-up" src="https://images.unsplash.com/photo-1586458873452-7bdd7401eabd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1183&q=80" alt="" />
                <img className=" md:h-64 rounded-xl" data-aos="zoom-in-right"  src="https://images.unsplash.com/photo-1592004604827-63bab259629f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
            
        </div>
    );
};

export default Gallery;