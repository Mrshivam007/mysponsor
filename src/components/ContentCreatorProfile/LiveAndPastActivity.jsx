import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);
  const [isCounting, setIsCounting] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && !isCounting) {
      setIsCounting(true);
    }
  }, [inView, isCounting]);

  useEffect(() => {
    if (isCounting) {
      const increment = Math.ceil((end - start) / (duration * 60)); // Calculate increment per frame
      const interval = setInterval(() => {
        if (count < end) {
          setCount((prevCount) => prevCount + increment);
        } else {
          setCount(end); // Ensure count ends at the specified end value
          clearInterval(interval);
        }
      }, 1000 / 60); // 60 frames per second

      // Cleanup function to clear interval on unmount
      return () => clearInterval(interval);
    }
  }, [isCounting, count, duration, end, start]);

  return <span ref={ref}>{count}</span>;
};

const LiveAndPast = () => {
  return (
    <section id="counts" className="counts">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <Counter start={0} end={68} duration={1} />
              <p>Subscriber Increases</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <Counter start={0} end={560} duration={1} />
              <p>Followers Increases</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <Counter start={0} end={3} duration={3} />
              <p>New Posts</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-people"></i>
              <Counter start={0} end={5} duration={1} />
              <p>Video's Uploaded</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveAndPast;
