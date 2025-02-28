// import React, { useEffect } from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import { MdOutlineInsertLink } from "react-icons/md";
// import ScrollReveal from "scrollreveal";
// import "../App.css";

// const Companies = () => {
//   const placeImages = [
//     "https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/PTV-India-OG-Final.png",
//     "https://cdn.britannica.com/79/188879-050-25E7733E/Gateway-of-India-Mumai-monument-2012.jpg",
//     "https://www.tripsavvy.com/thmb/soWUDapWGtmRQbvvY5OFMdd8Ezs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1008831236-5c65d6bf4cedfd00014aa310.jpg",
//     "https://hblimg.mmtcdn.com/content/hubble/img/amritsar/mmt/activities/m_activities_amritsar_golden_temple_l_427_639.jpg",
//     "https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_qutab_minar_l_384_574.jpg",
//     "https://hblimg.mmtcdn.com/content/hubble/img/mysore/mmt/activities/m_activities_Mysore_Mysore%20Palace_l_386_579.jpg",
//     "https://hblimg.mmtcdn.com/content/hubble/img/vadodara/mmt/activities/m_activities_vadodara_statue_of_unity_l_405_810.jpg",
//     "https://hblimg.mmtcdn.com/content/hubble/img/Chennai/mmt/activities/m_activities_chennai_marina_beach_l_505_757.jpg",
//     "https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_akshardham_temple_l_418_627.jpg",
//     "https://hblimg.mmtcdn.com/content/hubble/img/hyderabad/mmt/activities/m_activities_hyderabad_charminar_l_514_776.jpg",
//     "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/m_activities-goa-dudhsagar-waterfalls_l_400_640.jpg",
//     "https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_lotus_temple_l_508_764.jpg",
//   ];

//   const placeNames = [
//     "Taj Mahal",
//     "Gateway",
//     "Marine Drive",
//     "Golden Temple",
//     "Qutub Minar",
//     "Mysore Palace",
//     "Statue of Unity",
//     "Marina Beach",
//     "Akshardham Temple",
//     "Charminar",
//     "Dudhsagar",
//     "Lotus Temple",
//   ];

//   const placeURLs = [
//     "https://sketchfab.com/models/33149233cefd492b9abdd50fe5a8c921/embed?ui_theme=dark",
//     "https://sketchfab.com/models/38a652e9f3bf49039026ef65ef61ac92/embed",
//     "https://sketchfab.com/models/2d7c132fc9d74af0933b7ce5c0cf9a5a/embed",
//     "https://sketchfab.com/models/6b40ad464ccb402b99c311413875c860/embed",
//     "https://sketchfab.com/models/e165e25ec8f1497aa83ab72419f40ddc/embed",
//     "https://sketchfab.com/models/0439ee6964c94a10bf9767088469bb94/embed",
//     "https://sketchfab.com/models/05016de16ef445f1a18c062c5d92f1fb/embed",
//     "https://sketchfab.com/models/d2d9562747ea495c895ac86089b39db3/embed",
//     "https://sketchfab.com/models/ea0390fdb4f14d5090840ea1a5402aa1/embed",
//     "https://sketchfab.com/models/02f2b1c07bbd42388ba75b4db60ea821/embed",
//     "https://sketchfab.com/models/ceceb4527684419889007a23ab930cef/embed",
//     "https://sketchfab.com/models/0a81d18db3c947fbbdc8d60edd1ef323/embed",
//   ];

//   return (
//     <div className="container mx-auto px-4  bg-Primary">
//       <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 tourism-heading">
//         Tourist Places in India
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {placeImages.map((image, index) => (
//           <div
//             key={index}
//             className="group relative overflow-hidden rounded-lg shadow-lg"
//           >
//             <img
//               src={image}
//               alt={placeNames[index]}
//               className="w-full h-64 object-cover"
//             />

//             {/* Transparent overlay on hover */}
//             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
//               <h4 className="text-white text-lg font-semibold mb-2">
//                 {placeNames[index]}
//               </h4>
//               <a
//                 href={placeURLs[index]}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
//               >
//                 <MdOutlineInsertLink />
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View More Button */}
//       <div className="text-center mt-8">
//         <a
//           href="https://www.makemytrip.com/tripideas/tourist-attractions"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
//         >
//           View More <IoIosArrowForward className="ml-2" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Companies;


import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineInsertLink } from "react-icons/md";
import "../App.css";

const TouristPlaces = () => {
  const placeImages = [
    "https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/PTV-India-OG-Final.png",
    "https://cdn.britannica.com/79/188879-050-25E7733E/Gateway-of-India-Mumai-monument-2012.jpg",
    "https://www.tripsavvy.com/thmb/soWUDapWGtmRQbvvY5OFMdd8Ezs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1008831236-5c65d6bf4cedfd00014aa310.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/amritsar/mmt/activities/m_activities_amritsar_golden_temple_l_427_639.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_qutab_minar_l_384_574.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/mysore/mmt/activities/m_activities_Mysore_Mysore%20Palace_l_386_579.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/vadodara/mmt/activities/m_activities_vadodara_statue_of_unity_l_405_810.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/Chennai/mmt/activities/m_activities_chennai_marina_beach_l_505_757.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_akshardham_temple_l_418_627.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/hyderabad/mmt/activities/m_activities_hyderabad_charminar_l_514_776.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/m_activities-goa-dudhsagar-waterfalls_l_400_640.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_lotus_temple_l_508_764.jpg",
  ];

  const placeNames = [
    "Taj Mahal",
    "Gateway of India",
    "Marine Drive",
    "Golden Temple",
    "Qutub Minar",
    "Mysore Palace",
    "Statue of Unity",
    "Marina Beach",
    "Akshardham Temple",
    "Charminar",
    "Dudhsagar Falls",
    "Lotus Temple",
  ];

  const placeURLs = [
    "https://sketchfab.com/models/33149233cefd492b9abdd50fe5a8c921/embed?ui_theme=dark",
    "https://sketchfab.com/models/38a652e9f3bf49039026ef65ef61ac92/embed",
    "https://sketchfab.com/models/2d7c132fc9d74af0933b7ce5c0cf9a5a/embed",
    "https://sketchfab.com/models/6b40ad464ccb402b99c311413875c860/embed",
    "https://sketchfab.com/models/e165e25ec8f1497aa83ab72419f40ddc/embed",
    "https://sketchfab.com/models/0439ee6964c94a10bf9767088469bb94/embed",
    "https://sketchfab.com/models/05016de16ef445f1a18c062c5d92f1fb/embed",
    "https://sketchfab.com/models/d2d9562747ea495c895ac86089b39db3/embed",
    "https://sketchfab.com/models/ea0390fdb4f14d5090840ea1a5402aa1/embed",
    "https://sketchfab.com/models/02f2b1c07bbd42388ba75b4db60ea821/embed",
    "https://sketchfab.com/models/ceceb4527684419889007a23ab930cef/embed",
    "https://sketchfab.com/models/0a81d18db3c947fbbdc8d60edd1ef323/embed",
  ];

  return (
    <div className="container mx-auto px-4 py-10 bg-Primary">
      <h2 className="text-center text-3xl font-bold mb-10 text-highlight">
        Explore India's Iconic Tourist Destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {placeImages.map((image, index) => (
          <a
            key={index}
            href={placeURLs[index]}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg shadow-lg transition transform hover:scale-105"
          >
            <img
              src={image}
              alt={placeNames[index]}
              className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:opacity-80"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
              <h4 className="text-white text-lg font-semibold mb-2">
                {placeNames[index]}
              </h4>
              <MdOutlineInsertLink className="text-white text-3xl" />
            </div>
          </a>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <a
          href="https://www.makemytrip.com/tripideas/tourist-attractions"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View More <IoIosArrowForward className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default TouristPlaces;
