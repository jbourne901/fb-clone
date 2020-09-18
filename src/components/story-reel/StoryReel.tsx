import React from 'react';
import './StoryReel.css';
import Story from "./story";

const StoryReel = () => {
  const psrc1="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4";
  const img1="https://photoresources.wtatennis.com/photo-resources/2019/10/11/8dd46ea3-71a8-4066-9e74-46994d9c46c2/OkiOcyoQ.jpg?width=1440&height=797"

  const psrc2="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4";
  const img2="https://compass-ssl.xboxlive.com/assets/e7/ee/e7ee002d-931a-4252-8913-b87e7eb4d722.jpg?n=FH4_LEGO_carousel.jpg"

  const psrc3="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4";
  const img3="https://pix6.agoda.net/hotelImages/10934/-1/ec874f043548c49a13356d003ff51cd6.jpg?s=1024x768"

  const psrc4="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4";
  const img4="https://www.surfcanarias.com/wp-content/uploads/2020/04/beneficios-del-surf-1-300x200.jpg"

  const psrc5="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4";
  const img5="https://9to5google.com/wp-content/uploads/sites/4/2020/03/Android-11-DP2-2.jpg?quality=82&strip=all&w=1600";

  return (
    <div className="story-reel">
      <Story profileSrc={psrc1} image={img1} title="Sonny Sangha" />
      <Story profileSrc={psrc2} image={img2} title="Rafeh Qazi" />
      <Story profileSrc={psrc3} image={img3} title="Fraknie" />
      <Story profileSrc={psrc4} image={img4} title="Aaron Bernath" />
      <Story profileSrc={psrc5} image={img5} title="Naz" />
    </div>
  );
}

export default StoryReel;
