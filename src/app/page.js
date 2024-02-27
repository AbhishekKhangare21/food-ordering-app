import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur sit amet consectetur
            adipisicing elit. Dolore eum harum tenetur delectus quae debitis
            modi at assumenda. Repudiandae, maxime.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eum
            harum tenetur delectus quae debitis modi at assumenda. Repudiandae,
            maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore eum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eum
            harum.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-50" href="tel:+4684928922">
            +46 762 348 123
          </a>
        </div>
      </section>
    </>
  );
}
