import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Mousewheel, EffectFade } from 'swiper/modules';
import { presentationData } from './data';
import * as Infographics from './Infographics';
import BackgroundVisuals from './BackgroundVisuals';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Slide = ({ data, index, total }) => {
  const hasVisual = !!data.visualComponent;
  const VisualComp = hasVisual ? Infographics[data.visualComponent] : null;

  return (
    <div
      className={[
        'slide-inner',
        `slide-type-${data.type}`,
        hasVisual ? 'has-visual' : 'no-visual',
      ].join(' ')}
    >
      {/* ── Text Column ── */}
      <div className="slide-text-col">
        <h1 className="slide-title">
          {data.title}
          {data.highlight && <span className="slide-highlight"> {data.highlight}</span>}
        </h1>

        {data.content && <p className="slide-body">{data.content}</p>}

        {data.type === 'title' && data.presenters && (
          <div className="slide-presenters">
            {data.presenters.join('  ·  ')}
          </div>
        )}

        {data.bullets && data.type !== 'references' && (
          <ul className="slide-bullets">
            {data.bullets.map((bullet, i) => (
              <li key={i} className="slide-bullet">
                <span className="slide-bullet-marker" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {data.type === 'discussion' && data.discussionQuestion && (
          <blockquote className="slide-discussion">
            {data.discussionQuestion}
          </blockquote>
        )}

        {data.type === 'references' && (
          <div className="slide-references">
            {data.bullets.map((ref, i) => (
              <div key={i} className="slide-reference">{ref}</div>
            ))}
          </div>
        )}
      </div>

      {/* ── Visual Column ── */}
      {hasVisual && VisualComp && (
        <div className="slide-visual-col">
          <VisualComp />
        </div>
      )}

      {/* ── Slide number ── */}
      <div className="slide-number">
        {index + 1} / {total}
      </div>
    </div>
  );
};

function App() {
  const total = presentationData.length;

  return (
    <div className="app">
      <BackgroundVisuals />
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Mousewheel, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        mousewheel={{ forceToAxis: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >
        {presentationData.map((data, i) => (
          <SwiperSlide key={data.id}>
            <Slide data={data} index={i} total={total} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
