import Card from "../Components/Card";
import Header from "../Components/Header";
import { motion } from "framer-motion";
import TestimonialSlider from "../Components/TestimonialSlider";
import Accordain from "../Components/Accordian";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="text-black">
      <Header />
      <main className="  md:mt-28">
        <div>
          <div className="">
            <div>
              <motion.div
                initial={{ opacity: 0 }} // Starting state
                animate={{ opacity: 1 }} // Ending state
                transition={{ duration: 3 }} // Transition duration in seconds
              >
                <h1 className="lg:text-4xl text-2xl text-center font-extrabold text-gray-700">
                  Connecting People Across Faiths & Interests
                </h1>
                <p className=" text-sm text-center mt-4  text-slate-400">
                  Connecting people of all faiths through events and community
                  support
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }} // Starting state
            animate={{ opacity: 1 }} // Ending state
            transition={{ duration: 5 }}
          >
            <div className="mt-12 flex lg:flex-row flex-col items-center gap-10 justify-between">
              <div className="space-y-3 flex flex-col items-center lg:items-start ">
                <h2 className=" text-2xl font-bold lg:text-3xl  ">
                  Discover a{" "}
                  <span className="text-4xl "> Vibrant Community</span>
                </h2>
                <p className="lg:w-72 text-xs">
                  Join us to be part of a community where spirituality meets
                  innovation. Together, we'll build a world that's more
                  inclusive, engaging, and connected than ever before!
                </p>
                <button className="bg-amber-700 px-2 py-1 rounded-full hover:bg-amber-800 hover:scale-105">
                  View Our Service &rarr;
                </button>
              </div>
              <div class="relative w-2/3 h-[400px]">
                <img
                  src="./img1.jpg"
                  alt="Background Image"
                  className="w-full h-full object-cover rounded-xl lg:-rotate-3 "
                />
                <img
                  src="./img2.jpeg"
                  alt="Overlay Image"
                  className="absolute top-0 left-1/2 rounded-xl transform -translate-x-1/2 w-full  h-full object-cover opacity-10 transition-opacity duration-300 ease-in-out hover:opacity-100 lg:-rotate-3"
                />
              </div>
            </div>
          </motion.div>
          <div
            className="mt-24 w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('./bg-image.webp'), linear-gradient(to right, #d1fae5, #374151)",
            }}
          >
            <h1 className="text-3xl font-bold">Why Join Us</h1>
            <div className="gap-6 flex flex-col items-center md:grid md:gap-6 md:grid-cols-auto p-12 w-full h-full">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  heading={"Unifying Communities"}
                  para={
                    "Communion bridges diverse religious communities, becoming the social glue for faiths, beliefs, and traditions."
                  }
                />
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card
                  heading={"Unifying Communities"}
                  para={
                    "Communion bridges diverse religious communities, becoming the social glue for faiths, beliefs, and traditions."
                  }
                />
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card
                  heading={"Unifying Communities"}
                  para={
                    "Communion bridges diverse religious communities, becoming the social glue for faiths, beliefs, and traditions."
                  }
                />
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card
                  heading={"Unifying Communities"}
                  para={
                    "Communion bridges diverse religious communities, becoming the social glue for faiths, beliefs, and traditions."
                  }
                />
              </motion.div>
            </div>
          </div>
          <div className="mt-24  bg-slate-50 py-8">
            <h1 className="text-3xl">Why Users Say</h1>
            <TestimonialSlider/>
          </div>
        <div className="mt-24">
            <Accordain/>

        </div>
        </div>
        
      </main>
      <div className="mt-24 bg-black ">

      <Footer/>
      </div>
    </div>
  );
}

export default Home;
