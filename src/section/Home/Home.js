import { Box } from "../../components/box";
import { Heading1, Heading2 } from "../../components/text/text";
import React from "react";

export const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-screen my-16">
    <div className="mx-8">
      <div className="md:flex ">
        <div className="max-w-xl">
          <div>
            <div className="text-blue-500 block p-1 bg-blue-100 border rounded max-w-fit">
              <Heading2 text="We are Leading Software Company" />
            </div>
            <div className="text-4xl font-bold mt-6">
              Your One-Stop Solution for{" "}
              <span className="text-indigo-600"> All</span>
            </div>

            <div className="text-indigo-600 ">
              <Heading1 text="Web Development Needs" />
            </div>
            <div>
              <hr className="w-64 h-2 my-6 bg-indigo-600 border-0 " />
            </div>
            <Heading2 text="Our web design & development company leverages large knowledge base to deliver best-in-domain solutions that meet needs, business and budget expectations of our customers. Our experts offer advanced technology solutions that add real-value to their business. It is simple- we understand that our success is measured by the success of our esteemed clients." />
          </div>
          <div className="my-12 mx-4">
            <Box title="Experience Lightning-Fast Loading Times!" body=" Our web design & development company leverages large knowledge base to deliver best-in-domain solutions that meet needs, business and budget expectations of our customers. " />
            <Box title="Best In Designing" body="Best in designing: Creativity, aesthetics, functionality, innovation, user-centric, intuitive, elegant, responsive, impactful, visually appealing, timeless, harmonious, engaging, memorable"/>
            <Box title="Protect Your Site With Hosting And SSL" body="Secure your website with hosting and SSL (Secure Sockets Layer) for enhanced data protection and trust" />
          </div>
        </div>
        <div>
          <img src="/images/website.png" alt="website" />
        </div>
      </div>
      <div className="flex md:justify-end lg:justify-end justify-center ">
      <a href="whatsapp://send?text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND" title="Share on whatsapp">
      <button
          type="button"
          className="flex items-center gap-2 rounded-3xl px-6 py-2.5 text-sm font-medium leading-normal text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          style={{ backgroundColor: "#16be45" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          Whatsapp Us
        </button>
        </a>
        </div>
    </div>
    </div>
  );
};
