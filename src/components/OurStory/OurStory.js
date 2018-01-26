import React from 'react';

import './OurStory.css';
import Photo1 from '../../assets/wedding-header.jpg';

function OurStory (props) {
  return (
    <div className="info-container">
      <div className="title-image">
        <h1> Our Story </h1>
        <img src={Photo1} alt="our-story" />
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget erat porta, congue diam sed, pharetra diam. Proin scelerisque felis quam. Donec non orci orci. In hac habitasse platea dictumst. Vestibulum consequat, mi eget elementum pellentesque, ipsum justo commodo lacus, ut dignissim purus massa a nibh. Proin feugiat, enim sed tempor bibendum, ex enim finibus ipsum, quis fringilla purus nunc egestas felis.
          <br />
          <br />
          Sed id faucibus ligula. Phasellus nec neque dui. Aliquam dignissim lacinia arcu non porttitor. Etiam sed metus volutpat, commodo orci quis, pharetra purus. Duis dignissim magna eros, sed feugiat velit cursus at. Mauris vel malesuada leo. Duis elementum eleifend molestie. In sed laoreet dolor. Donec id velit blandit, pulvinar ante vitae, tincidunt risus. Etiam commodo, tortor tempor semper vehicula, elit mi varius nisi, sed suscipit nisi erat vitae odio. Maecenas vel commodo diam.
          <br />
          <br />
          Nam tempus urna est, in maximus est iaculis gravida. Vivamus congue ut lacus in mattis. Etiam eu ipsum in tellus consequat fermentum et in felis. Mauris efficitur massa mauris. Praesent mollis commodo dui, in maximus mi vehicula sit amet. Ut enim libero, molestie sed lacus sed, laoreet vestibulum neque. Mauris non purus neque. Nam feugiat feugiat metus et vulputate. Praesent consequat massa eu luctus dignissim. Aenean volutpat tellus ac aliquet vehicula. Sed molestie ipsum ut leo interdum pretium. Nulla sed nibh quis justo fringilla faucibus sit amet dignissim orci. Duis eu purus nec arcu posuere fringilla a et elit. Nulla facilisi. Maecenas pretium nulla libero, eget ultrices nisi eleifend elementum. Quisque interdum lectus ut dolor posuere porta. Nullam interdum sit amet nibh id dapibus. Donec purus turpis, tristique vel nisi placerat, auctor accumsan nisl. Suspendisse a odio interdum, posuere libero at, maximus lectus. In commodo eget enim in consequat. Quisque laoreet, sapien et egestas vulputate, sem lorem tempor leo, at consequat est dui ut dui.
        </p>
      </div>
    </div>
  );
}

export default OurStory;
