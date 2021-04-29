import Head from "next/head";
import Navigation from "components/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="layout">
        <div className="left-side bg-rose">
          <h1 className="left-title">HELLO.</h1>
          <img src="images/welcome.svg" alt="Welcome" className="h-44" />
          <Navigation />
        </div>
        <div className="right-side text-rose text-center font-bold font-nunito text-2xl">
          <h1 className="font-black font-poppins text-4xl">
            Bienvenido a mi portafolio
          </h1>
          <p>Espero que lo disfrutes</p>
          <p>
            Si podes dejame tu opinion cuando termines de ver el portafolio, me
            ayudaria mucho.
          </p>
          <p>Gracias por tu tiempo!</p>
        </div>
      </div>
    </>
  );
}
