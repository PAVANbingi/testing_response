import React from "react";
import { GrUserWorker } from "react-icons/gr";
import { GoStopwatch } from "react-icons/go";
import { PiBuildingOffice } from "react-icons/pi";
import { TfiMoney } from "react-icons/tfi";
import Testimonials from "@/components/LandingPage/Testimonials";
import Gallery from "@/components/LandingPage/Gallery";
import Brands from "@/components/LandingPage/Brands";
import Faqs from "@/components/LandingPage/Faqs";
import ContactSakiNaki from "@/components/LandingPage/ContactSakiNaki";
import Image from "next/image";


function page() {
  return (
    <div>
      <section>
        <div className="relative h-[70svh] max-h-[500px] bg-[url('/images/pic13.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start p-6 lg:p-20 gap-4 lg:gap-8 text-white">
          <div className="absolute inset-0 bg-black opacity-35 z-0"></div>
          <h3 className="text-base lg:text-lg z-10">
           No.1 Air Hostess Institute in Saki NakaAndheri{" "}
          </h3>
          <h1 className="text-3xl lg:text-5xl font-bold z-10">
            Cabin Crew Academy
          </h1>
          <h3 className="text-base lg:text-lg z-10">
          Aténas Fraternity Air Hostess Academy is the best cabin crew
						training institute in Saki Naka.
          </h3>
          <button className="bg-primary text-white p-3 z-10 font-medium">
            Join AFHA
          </button>
        </div>
      </section>

      <section className="my-20 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-x-16">
          <div className="flex justify-center">
            <img
              src="/images/pic5.jpg"
              className="w-full max-w-[500px] h-auto"
            />
          </div>
          <div className="w-full lg:w-2/5 flex flex-col justify-between gap-5">
            <h2 className="text-3xl lg:text-5xl font-bold">
             Air Hostess Academy in Saki Naka
            </h2>
            <p>
             	Aténas Fraternity Air Hostess Academy (DAHA) is the best air
							hostess academy in Saki Naka. We specialize in grooming aspiring
							professionals for roles as air hostesses, cabin crew, and ground
							staff. Our academy prides itself on offering top-notch education
							and practical experience, ensuring our students are fully prepared
							for the dynamic and demanding aviation sector.
            </p>
            <div className="flex justify-between gap-5">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold">1,500+</h2>
                <p>Students</p>
              </div>
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold">50+</h2>
                <p>Placement Partners</p>
              </div>
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold">4</h2>
                <p>Training Centres</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------- */}
	  <section className="bg-primary py-10 lg:py-16">
  <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-x-20 px-4 lg:px-0">
    <div className="w-full lg:w-[600px] text-white">
      <div className="flex gap-x-4 items-center">
        <hr className="w-[50px] h-1 bg-white border-none" />
        <h2 className="text-3xl lg:text-4xl font-light">
          Why <span className="font-bold">Choose Us</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-5">
        <div className="flex gap-x-5">
          <div>
            <GrUserWorker size={40} />
          </div>
          <div className="w-full">
            <h3 className="text-xl lg:text-2xl font-medium mb-5">
              PRACTICAL TRAINING
            </h3>
            <p className="text-base lg:text-lg font-medium">
              Our students are motivated to apply their knowledge to different service industry sectors by our practical training and hands-on experience.
            </p>
          </div>
        </div>
        <div className="flex gap-x-5">
          <div>
            <TfiMoney size={40} />
          </div>
          <div className="w-full">
            <h3 className="text-xl lg:text-2xl font-medium mb-5">
              PLACEMENT ASSISTANCE
            </h3>
            <p className="text-base lg:text-lg font-medium">
              Aténas Fraternity Air Hostess Academy provides hand-holding support to students with placement assistance. Our students are placed in top companies.
            </p>
          </div>
        </div>
        <div className="flex gap-x-5">
          <div>
            <PiBuildingOffice size={40} />
          </div>
          <div className="w-full">
            <h3 className="text-xl lg:text-2xl font-medium mb-5">
              MODERN INFRASTRUCTURE
            </h3>
            <p className="text-base lg:text-lg font-medium">
              Our classrooms are equipped with all the latest technology to educate today&apos;s professionals. You can get the best state-of-the-art facilities at our institute.
            </p>
          </div>
        </div>
        <div className="flex gap-x-5">
          <div>
            <GoStopwatch size={40} />
          </div>
          <div className="w-full">
            <h3 className="text-xl lg:text-2xl font-medium mb-5">
              WELL-CRAFTED COURSES
            </h3>
            <p className="text-base lg:text-lg font-medium">
              We believe in delivering individualized education in a public setting. Our ongoing, custom courses are a great fit for every student and their unique needs.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-auto flex justify-center">
      <Image
        src="/images/pic7.jpg"
        height={700}
        width={500}
        alt="image"
        className="w-full max-w-[500px] h-auto"
      />
    </div>
  </div>
</section>

{/* ------------------ */}

<section className=" px-4 lg:px-0 ">
  <div className="flex flex-col items-center bg-[#f2f2f2] p-5 lg:p-10">
    <div className="flex gap-x-4 items-center mb-8">
      <hr className="w-[50px] h-1 bg-primary border-none" />
      <h2 className="text-3xl lg:text-4xl font-light">
        Our <span className="font-bold">Courses</span>
      </h2>
    </div>
    
    <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-8 lg:gap-10 my-10 w-full">
      {/* Course Card 1 */}
      <div className="group w-full max-w-[350px] bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
        <img
          src="/images/course2.jpg"
          className="h-[230px] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="Cabin Crew (Aviation), Hospitality & Travel Management"
        />
        <div className="p-5">
          <h2 className="font-medium text-lg lg:text-xl mb-6 text-gray-800">
            Cabin Crew (Aviation), Hospitality & Travel Management
          </h2>
          <button className="bg-primary px-4 py-2 text-white rounded-full hover:bg-primary-dark transition-colors duration-300">
            Register Now
          </button>
        </div>
      </div>

      {/* Course Card 2 */}
      <div className="group w-full max-w-[350px] bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
        <img
          src="/images/course1.jpg"
          className="h-[230px] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="Ground Staff"
        />
        <div className="p-5">
          <h2 className="font-medium text-lg lg:text-xl mb-6 text-gray-800">
            Ground Staff
          </h2>
          <button className="bg-primary px-4 py-2 text-white rounded-full hover:bg-primary-dark transition-colors duration-300 mt-5">
            Register Now
          </button>
        </div>
      </div>

      {/* Course Card 3 */}
      <div className="group w-full max-w-[350px] bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
        <img
          src="/images/pic4.jpg"
          className="h-[230px] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt="Specialized Course for Cabin Crew"
        />
        <div className="p-5">
          <h2 className="font-medium text-lg lg:text-xl mb-6 text-gray-800">
            Specialized Course for Cabin Crew (Short Term)
          </h2>
          <button className="bg-primary px-4 py-2 text-white rounded-full hover:bg-primary-dark transition-colors duration-300">
            Register Now
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

	  
{/* ------------------- */}
<section>
  <div className="relative h-screen bg-[url('/images/toy-plane.jpeg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center gap-6 text-black p-4">
    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold z-10 w-full max-w-[90%] md:max-w-[800px] lg:max-w-[1000px] text-center">
      Ready To Make Your Dream Come True?
    </h1>
    <h3 className="z-10 text-lg sm:text-xl w-full max-w-[90%] md:max-w-[700px] lg:max-w-[900px] text-center">
      Our well-structured courses, combined with real-world training scenarios, will challenge and inspire you to become the best version of yourself.
    </h3>
    <button className="bg-primary text-white py-2 px-6 z-10 font-medium text-base sm:text-lg mt-4">
      Contact Now
    </button>
  </div>
</section>




<section className="">
  
    <Testimonials />
 
</section>

<section className="">
  
    <Gallery />
  
</section>

<section className="my-10 px-4 md:px-8 lg:px-16">
  <div className="max-w-screen-xl mx-auto">
    <Brands />
  </div>
</section>

<section className="my-10 px-4 md:px-8 lg:px-16">
  <div className="max-w-screen-xl mx-auto">
    <Faqs />
  </div>
</section>

<section className="my-10 px-4 md:px-8 lg:px-16">
  <div className="max-w-screen-xl mx-auto">
    <ContactSakiNaki />
  </div>
</section>

    </div>
  );
}

export default page;