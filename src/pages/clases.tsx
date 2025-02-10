import React from "react";
import { useInView } from "react-intersection-observer";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Button from "../components/shared/Button";

import ImgA1 from "../images/parvrittaUpavistaKonasanaY.png";

const IndexPage = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <Layout>
      <img
        src={ImgA1}
        className="lg:absolute lg:bottom-0 lg:-ml-16 lg:-left-16 z-0 "
      />
      <div className="bg-yellow lg:absolute lg:h-full w-full lg:w-1/2 top-0 right-0 z-10 flex items-center justify-center pt-4 pb-8 flex-col">
        <div
          ref={ref}
          className={`p-4 md:p-20 text-left transition-all duration-1000 ease-in-out text-xl text-center lg:text-left ${
            inView ? "opacity-100" : "opacity-0 translate-x-16"
          }`}
        >
          <p className="font-bold underline text-2xl mb-8">
            Clases presenciales y en línea
          </p>
          <p>
            Lunes, miércoles y jueves <strong>19:30 hrs - 20:50 hrs</strong>
          </p>
          <p>
            Sábados <strong>8:30 hrs - 9:50 hrs</strong>
          </p>
        </div>

        <Button
          text="Mas información"
          action={() =>
            (window.location.href = "https://urdhvayogaestudio.com/clases/")
          }
        />
      </div>
      <Footer className="lg:absolute lg:bottom-0" />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Gilberto Yoga - Clases</title>;
