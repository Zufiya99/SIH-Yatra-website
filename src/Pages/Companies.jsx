import React, { useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineInsertLink } from "react-icons/md";
import ScrollReveal from 'scrollreveal';
import '../App.css';

const Companies = () => {
  const placeImages = [
    "https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/PTV-India-OG-Final.png",
    "https://cdn.britannica.com/79/188879-050-25E7733E/Gateway-of-India-Mumai-monument-2012.jpg",
    "https://www.tripsavvy.com/thmb/soWUDapWGtmRQbvvY5OFMdd8Ezs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1008831236-5c65d6bf4cedfd00014aa310.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/amritsar/mmt/activities/m_activities_amritsar_golden_temple_l_427_639.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_qutab_minar_l_384_574.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/mysore/mmt/activities/m_activities_Mysore_Mysore%20Palace_l_386_579.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/vadodara/mmt/activities/m_activities_vadodara_statue_of_unity_l_405_810.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/m_Baga%20beach_2_l_390_585.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_akshardham_temple_l_418_627.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/hyderabad/mmt/activities/m_activities_hyderabad_charminar_l_514_776.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/m_activities-goa-dudhsagar-waterfalls_l_400_640.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_lotus_temple_l_508_764.jpg",
  ];

  const placeNames = [
    "Taj Mahel", "Gateway", "Marine drive", "Golden Temple", "Qutub Minar", "Mysore Palace", "Statue of Unity", "Baga beach", "Akshardham Temple", "Charminar", "Dudhsagar", "Lotus Temple"
  ];

  const placeURLs = [
    "https://www.tajmahal.gov.in/",
    "https://mumbaicity.gov.in/tourist-place/gateway-of-india/",
    "https://www.tripadvisor.in/Attraction_Review-g304554-d321437-Reviews-Marine_Drive-Mumbai_Maharashtra.html",
    "https://amritsartourism.org.in/golden-temple-harmandir-sahib-amritsar",
    "https://whc.unesco.org/en/list/233/",
    "https://www.holidify.com/places/mysore/mysore-palace-sightseeing-2954.html",
    "https://www.soutickets.in/#/dashboard",
    "https://www.tourmyindia.com/states/goa/baga-beach.html",
    "https://akshardham.com/",
    "https://www.siasat.com/hyderabad-is-the-bhagyalaxmi-temple-at-charminar-expanding-2435006/",
    "https://en.wikipedia.org/wiki/Dudhsagar_Falls",
    "https://en.wikipedia.org/wiki/Lotus_Temple",
  ];

  useEffect(() => {

    ScrollReveal({
      reset: true,
      distance: '100px',
      duration: 2500,
      delay: 100
    });

    ScrollReveal().reveal('.tourism-heading', { origin: 'down' });
    ScrollReveal().reveal('.row', { origin: 'left' });
  })

  return (
    <>
      <div className="container">
        <h2 className='tourism-heading'>Tourist places in India</h2>
        <div className="row">
          {placeImages.map((image, index) => (
            <div key={index} className="col-md-3 mb-3">
              <div className="card">
                <img src={image} className="card-img-top place-image" alt={`Place ${index + 1}`} />
                <div className="card-layer">
                  <h4>{placeNames[index]}</h4>
                  <a href={placeURLs[index]} className='more-link' target='_blank'>More <MdOutlineInsertLink /></a>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center">
            <a href="https://www.makemytrip.com/tripideas/tourist-attractions" className="btn btn-primary" id='view-all' target='_blank'>View More <IoIosArrowForward className='arrow' /></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Companies;
