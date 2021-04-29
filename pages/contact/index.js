import Navigation from "components/Navigation";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <div className="layout">
        <div className="left-side bg-coffe">
          <h1 className="left-title">SAY HI</h1>
          <img src="images/coffe.svg" alt="Coffe Cup" className="h-44" />
          <Navigation />
        </div>

        <div className="right-side text-coffe font-bold font-poppins">
          <div className="font-black font-nunito text-3xl sm:text-5xl">
            <h3>marcosmartinez8</h3>
            <h3>@outlook.com</h3>
          </div>
          <p className="p-8">
            Si te ha gustado mi trabajo y tenes alguna propuesta sos bienvenido
            a contactarme.
            <br />
            Estoy disponible para trabajos.
          </p>
          <div className="flex items-center">
            <a
              href="https://github.com/Marcosmzq"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <img
                src="images/github.svg"
                alt="GitHub Icon"
                className="h-16 transform hover:scale-125"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/marcos-martinez-42a077201/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-6xl"
            >
              <img
                src="images/linkedin.svg"
                alt="GitHub Icon"
                className="h-16 transform hover:scale-125"
              />
            </a>
          </div>
          <div>
            <h3 className="text-2xl text-center">Marcos Martinez</h3>
            <h3 className="text-2xl">— Buenos Aires, Argentina.</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
