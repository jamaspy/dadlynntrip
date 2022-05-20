import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Box from "../components/Box";
import HotelList from "../components/HotelList";
import TripDetails from "../components/TripDetails";
import { events } from "../data/dates";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="min-h-screen p-2 hero">
        <h1 className="text-4xl font-bold text-center text-white ">
          Dad & Lynn Trip Downunder
        </h1>
        <div className="container m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 p-4 rounded-lg bg-white bg-opacity-25">
          {events.map((i) => (
            <Box
              key={i?.date}
              event={i?.event}
              date={i?.date}
              xmas={i?.xmas}
              location={i?.location}
            />
          ))}
        </div>
        <div className="container m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 p-4 rounded-lg bg-white bg-opacity-80">
          <HotelList />
        </div>
        <div className="container m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 p-4 rounded-lg bg-white bg-opacity-80">
          <TripDetails />
        </div>
      </div>
    </>
  );
};

export default Home;
