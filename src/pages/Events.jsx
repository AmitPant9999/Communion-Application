import React, { useState, useEffect } from "react";
import EventCard from "../Components/EventCard";
import Header from "../Components/Header";
import { motion } from "framer-motion";
import Filter from "../Components/Filter";

const itemsPerPage = 6;
const events = [
  {
    title: "Interfaith Prayer Gathering",
    date: "March 15, 2025",
    location: "Community Hall",
    description: "Join us for a peaceful interfaith prayer gathering.",
    category: "religious",
    image: "./user-1.jpeg",
  },
  {
    title: "Charity Fundraiser",
    date: "March 20, 2025",
    location: "City Center",
    description: "A charity fundraiser to support the local community.",
    category: "charity",
    image: "./user-2.jpeg",
  },
  {
    title: "Community Picnic",
    date: "April 5, 2025",
    location: "Parkside",
    description: "A fun and relaxing social gathering for the whole family.",
    category: "social",
    image: "./user-3.jpeg",
  },
  {
    title: "Religious Peace Event",
    date: "April 10, 2025",
    location: "City Hall",
    description:
      "A gathering of people from all faiths to promote peace and unity.",
    category: "religious",
    image: "./user-4.jpeg",
  },
  {
    title: "Neighborhood Clean-Up",
    date: "May 1, 2025",
    location: "Downtown",
    description: "A community effort to clean up the neighborhood.",
    category: "charity",
    image: "./user-5.jpeg",
  },
];

function Events() {
  const [currentPage, setCurrentPage] = useState(1);
  const [eventType, setEventType] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [eventsList, setEventsList] = useState(events);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    category: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  // Load events from localStorage on page load
  useEffect(() => {
    const savedEvents = localStorage.getItem("events");
    if (savedEvents) {
      setEventsList(JSON.parse(savedEvents));
    } else {
      setEventsList(events);
    }
  }, []);

  // Apply the filter whenever eventType or eventsList changes
  useEffect(() => {
    if (eventType === "") {
      setFilteredEvents(eventsList);
    } else {
      setFilteredEvents(
        eventsList.filter((event) => event.category === eventType)
      );
    }
  }, [eventType, eventsList]);

  // Calculate the index of the first and last events on the current page
  const indexOfLastEvent = currentPage * itemsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;

  // Slice the filtered events to get the events for the current page
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredEvents.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.title) errors.title = "Title is required";
    if (!formData.date) errors.date = "Date is required";
   
    if (!formData.category) errors.category = "Category is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      const updatedEvents = [...eventsList, formData];
      setEventsList(updatedEvents);
      // Save the newly added event to localStorage
      localStorage.setItem("events", JSON.stringify(updatedEvents));
      setShowModal(false);
      setFormData({
        title: "",
        date: "",

        category: "",
      });
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Header />
      <main className="md:mt-28">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-center text-2xl">
            We Helped Communities Connect & Flourish
            <span className="text-lime-500">✦ Upcoming </span> Events
          </h1>
        </motion.div>

        {/* Filter Component */}
        <div className="mt-12">
          <Filter setEventType={setEventType} eventType={eventType} />
        </div>

        {/* Add New Event Button */}

        {/* Display events in grid layout */}
        <div className="grid md:grid-cols-auto  gap-32 mt-12  ">
          {currentEvents.map((event, index) => {
            return (
              <motion.div
                key={index}
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <EventCard event={event} />
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        <div className="pagination-controls flex justify-center gap-4 mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm translate-y-3">Page {currentPage}</span>
          <button
            onClick={nextPage}
            disabled={
              currentPage === Math.ceil(filteredEvents.length / itemsPerPage)
            }
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* Modal to Add New Event */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-md shadow-lg w-full sm:w-11/12 md:w-1/2 lg:w-1/3 h-max xl:w-1/4 relative">
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>

              <h2 className="text-xl font-bold">Add New Event</h2>
              <form onSubmit={handleSubmit} className="mt-4">
                {/* Form Fields (Title, Date, Location, etc.) */}
                <div>
                  <label htmlFor="title" className="block">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 mt-2"
                  />
                  {formErrors.title && (
                    <p className="text-red-500">{formErrors.title}</p>
                  )}
                </div>

                <div className="mt-2">
                  <label htmlFor="date" className="block">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 mt-2"
                  />
                  {formErrors.date && (
                    <p className="text-red-500">{formErrors.date}</p>
                  )}
                </div>

                <div className="mt-2">
                  <label htmlFor="category" className="block">
                    Category
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 mt-2"
                  />
                  {formErrors.category && (
                    <p className="text-red-500">{formErrors.category}</p>
                  )}
                </div>

                <div className="mt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="bg-gray-500 text-white px-6 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-6 py-2 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Success Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-md shadow-lg w-1/3">
              <h2 className="text-xl font-bold">Success!</h2>
              <p>Your event has been added successfully.</p>
              <button
                onClick={closePopup}
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
        <div id="addevent" className="mt-20 flex flex-col lg:flex-row  gap-10 justify-between items-center  ">
          <div className="lg:w-96 space-y-4">
            <h1 className="text-4xl">Add new event</h1>
            <p className="text-xs">
              Join us to be part of a community where spirituality meets
              innovation. Together, we'll build a world that's more inclusive,
              engaging, and connected than ever before!
            </p>

            <button
              onClick={() => setShowModal(true)}
              className="bg-amber-700 px-2 py-1 rounded-full hover:bg-amber-800 hover:scale-105"
            >
              Add new event &rarr;
            </button>
          </div>
          <img src="./user-4.jpeg" className="rounded-lg" />
        </div>
      </main>
    </div>
  );
}

export default Events;
