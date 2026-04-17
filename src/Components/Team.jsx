import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import '../CSS/Team.css'

import img1 from '../assets/team (1).svg'
import img2 from '../assets/team (2).svg'
import img3 from '../assets/team (3).svg'
import img4 from '../assets/team (5).svg'
import img5 from '../assets/team (7).svg'
import img6 from '../assets/team (8).svg'

const teamMembers = [
  { name: "Tom Cruise", role: "Founder & Chairman", img: img1 },
  { name: "Emma Watson", role: "Managing Director", img: img2 },
  { name: "Will Smith", role: "Product Designer", img: img3 },
  { name: "Scarlett Bryan", role: "UI/UX Lead", img: img4 },
  { name: "John Carter", role: "Tech Lead", img: img5 },
  { name: "Sophia Miller", role: "Marketing Head", img: img6}
];

const Team = () => {
  return (
    <div className="team-section">
      <h2 className="section-title">Our Team</h2>

      <Swiper
        modules={[Pagination ]}
        slidesPerView={3}
        centeredSlides={true}          
        spaceBetween={5}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="team-card">
              <div className="team-img-box">
                <img
                  src={member.img}
                  alt={member.name}
                  className="team-img"
                />
              </div>

              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>

              <div className="team-icons">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
