import Header from "../Components/Header";

function About() {
             return (
    <div>
        <Header/>

    <div className=" min-h-screen py-8 px-4 sm:px-8">
    
      
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Our Story</h2>
            <p className="text-sm text-gray-700">
              Our communion is a community of believers united in faith, love, and service. We come together
              to share in the sacrament of communion, deepening our connection with God and each other.
            </p>
            <p className="text-sm text-gray-700">
              Founded in 200, our church has grown into a loving and supportive community dedicated to making
              a difference in the lives of all. We welcome people of all backgrounds, committed to living by the
              teachings of Christ.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Mission and Values</h2>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Faith: We believe in the transformative power of God's love.</li>
              <li>Community: We are a family bound together by love and support.</li>
              <li>Service: We strive to make the world a better place through acts of kindness.</li>
              <li>Growth: We encourage spiritual and personal growth in Christ.</li>
            </ul>
          </div>

         
          <div className="relative h-64 sm:h-80 md:h-full rounded-lg overflow-hidden shadow-lg">
            <img
              src="./user-2.jpeg"
              alt="Communion Gathering"
              className="w-full h-full object-cover"
              />
          </div>
        </div>

        {/* Mission Statement Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4">
            Our mission is to be a beacon of light in the world, spreading hope, love, and faith through the
            power of communion. Together, we strive to live out the teachings of Christ, building a community that
            reflects His love.
          </p>
        </div>
      </section>
    </div>
              </div>
  );
      
}

export default About
