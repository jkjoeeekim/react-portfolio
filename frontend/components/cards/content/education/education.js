import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const Education = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [animating, animate] = useState(false);

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const allContents = document.getElementsByClassName('contents');

  const content1 = (inView1 && inView2) ? (
    <motion.div ref={ref1}>
      <motion.div
        key='content1'
        className="contents first-content"
        id="edu-content-1"
        animate={{ opacity: [0, 0.1, 0.1, 0.1, 0.3, 0.4, 1], scale: [0, 0.1, 0.1, 0.1, 0.6, 1.2, 1], y: [-100, -300, -450, -550, -600, -200, 0] }}
        transition={{ delay: 0, duration: 0.7, times: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.7], type: 'spring', stiffness: 700, damping: 30 }}
      >
        <motion.div
          className="content-first-title content-titles"
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <motion.div
            className="content-title-name-majors"
          >
            <motion.div
              animate={{ opacity: 1, x: 40 }}
              transition={{ delay: 1.5 }}
            >
              App Academy
            </motion.div>
            <motion.div
              className="content-title-majors"
              animate={{ opacity: 1, x: -60 }}
              transition={{ delay: 1.5 }}
            >
              Computer Software Engineering
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.ul
          className="content-descriptions"
        >
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2 }}
          >Highly selective software-engineering(SWE) program with a 3% acceptance rate</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2.15 }}
          >Accumulative 700+ hours full-stack SWE program</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -140 }}
            transition={{ delay: 2.3 }}
            className='content-description-dates'
          >May 2021 - August 2021</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  ) : (
    <motion.div ref={ref1}>
      <motion.div
        key='content1'
        className="contents first-content"
        id="edu-content-1"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0.5 }}
        transition={{ delay: 0 }}
      >
        <motion.div
          className="content-first-title content-titles"
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25 }}
        >
          <motion.div
            className="content-title-name-majors"
          >
            <motion.div>
              App Academy
            </motion.div>
            <motion.div
              className="content-title-majors"
            >
              Computer Software Engineering
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.ul
          className="content-descriptions"
        >
          <motion.li>Highly selective software-engineering(SWE) program with a 3% acceptance rate</motion.li>
          <motion.li>Accumulative 700+ hours full-stack SWE program</motion.li>
          <motion.li
            className='content-description-dates'
          >May 2021 - August 2021</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );

  const content2 = (inView2 && inView3) ? (
    <motion.div ref={ref2}>
      <motion.div
        key='content2'
        className="contents"
        id="edu-content-2"
        animate={{ opacity: [0, 0.1, 0.1, 0.1, 0.3, 0.4, 1], scale: [0, 0.1, 0.1, 0.1, 0.6, 1.2, 1], y: [-100, -300, -450, -550, -600, -200, 0] }}
        transition={{ delay: 0, duration: 0.7, times: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.7], type: 'spring', bounce: 0.8 }}
      >
        <motion.div
          className="content-first-title content-titles"
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <motion.div
            className="content-title-name-majors"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 40 }}
              transition={{ delay: 1.5 }}
            >
              UC Riverside extension
            </motion.div>
            <motion.div
              className="content-title-majors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -60 }}
              transition={{ delay: 1.5 }}
            >
              Computer Software Engineering
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.ul
          className="content-descriptions"
        >
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2 }}
          >UCR endorsed coding bootcamp through Trilogy Education</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2.15 }}
          >Accumulative 500+ hours full-stack SWE program</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -140 }}
            transition={{ delay: 2.3 }}
            className='content-description-dates'
          >July 2020 - January 2021</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  ) : (
    <motion.div ref={ref2}>
      <motion.div
        key='content2'
        className="contents"
        id="edu-content-2"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0.5 }}
        transition={{ delay: 0 }}
      >
        <motion.div
          className="content-first-title content-titles"
        >
          <motion.div
            className="content-title-name-majors"
          >
            <motion.div>
              UC Riverside extension
            </motion.div>
            <motion.div
              className="content-title-majors"
            >
              Computer Software Engineering
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.ul
          className="content-descriptions"
        >
          <motion.li>UCR endorsed coding bootcamp through Trilogy Education</motion.li>
          <motion.li>Accumulative 500+ hours full-stack SWE program</motion.li>
          <motion.li
            className='content-description-dates'
          >July 2020 - January 2021</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );

  const content3 = (inView3 && inView4) ? (
    <motion.div ref={ref3}>
      <motion.div
        key='content3'
        className="contents"
        id="edu-content-3"
        animate={{ opacity: [0, 0.1, 0.1, 0.1, 0.3, 0.4, 1], scale: [0, 0.1, 0.1, 0.1, 0.6, 1.2, 1], y: [-100, -300, -450, -550, -600, -200, 0] }}
        transition={{ delay: 0, duration: 0.7, times: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.7], type: 'spring', bounce: 0.8 }}
      >
        <motion.div
          className="content-first-title content-titles"
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <motion.div
            className="content-title-name-majors"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 40 }}
              transition={{ delay: 1.5 }}
            >
              Cal Poly Pomona
            </motion.div>
            <motion.div
              className="content-title-majors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -60 }}
              transition={{ delay: 1.5 }}
            >
              Aerospace Engineering
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.ul
          className="content-descriptions"
        >
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2 }}
          >Accepted into CPP's impacted Aerospace Engineering program</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2.15 }}
          >Completed 48 / 127 credits</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -140 }}
            transition={{ delay: 2.3 }}
            className='content-description-dates'
          >August 2011 - June 2014</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  ) : (
    <motion.div ref={ref3}>
      <motion.div
        key='content3'
        className="contents"
        id="edu-content-3"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0.5 }}
        transition={{ delay: 0 }}
      >
        <motion.div
          className="content-first-title content-titles"
        >
          <motion.div
            className="content-title-name-majors"
          >
            <motion.div>
              Cal Poly Pomona
            </motion.div>
            <motion.div
              className="content-title-majors"
            >
              Aerospace Engineering
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.ul
          className="content-descriptions"
        >
          <motion.li>Accepted into CPP's impacted Aerospace Engineering program</motion.li>
          <motion.li>Completed 48 / 127 credits</motion.li>
          <motion.li
            className='content-description-dates'
          >August 2011 - June 2014</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );

  const content4 = (inView4 && !inView3) ? (
    <motion.div ref={ref4}>
      <motion.div
        key='content4'
        className="contents last-content"
        id="edu-content-4"
        animate={{ opacity: [0, 0.1, 0.1, 0.1, 0.3, 0.4, 1], scale: [0, 0.1, 0.1, 0.1, 0.6, 1.2, 1], y: [-100, -300, -450, -550, -600, -200, 0] }}
        transition={{ delay: 0, duration: 0.7, times: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.7], type: 'spring', bounce: 0.8 }}
      >
        <motion.div
          className="content-first-title content-titles"
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <motion.div
            className="content-title-name-majors"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 40 }}
              transition={{ delay: 1.5 }}
            >
              App Academy
            </motion.div>
            <motion.div
              className="content-title-majors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -60 }}
              transition={{ delay: 1.5 }}
            >
              Computer Software Engineering
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.ul
          className="content-descriptions"
        >
          <motion.li
            animate={{ opacity: 1, x: -140 }}
            transition={{ delay: 2.3 }}
            className='content-description-dates'
          >May 2021 - August 2021</motion.li>
        </motion.ul>
        <motion.div
          className="content-first-title content-titles"
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <motion.div
            className="content-title-name-majors"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 40 }}
              transition={{ delay: 1.5 }}
            >
              UC Riverside ext. Trilogy
            </motion.div>
            <motion.div
              className="content-title-majors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -60 }}
              transition={{ delay: 1.5 }}
            >
              Computer Software Engineering
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.ul
          className="content-descriptions"
        >
          <motion.li
            animate={{ opacity: 1, x: -140 }}
            transition={{ delay: 2.3 }}
            className='content-description-dates'
          >July 2020 - January 2021</motion.li>
        </motion.ul>
        <motion.div
          className="content-first-title content-titles"
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <motion.div
            className="content-title-name-majors"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 40 }}
              transition={{ delay: 1.5 }}
            >
              Cal Poly Pomona
            </motion.div>
            <motion.div
              className="content-title-majors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -60 }}
              transition={{ delay: 1.5 }}
            >
              Aerospace Engineering
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.ul
          className="content-descriptions"
        >
          <motion.li
            animate={{ opacity: 1, x: -140 }}
            transition={{ delay: 2.3 }}
            className='content-description-dates'
          >August 2011 - June 2014</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  ) : (
    <motion.div ref={ref4}>
      <motion.div
        key='content4'
        className="contents last-content"
        id="edu-content-4"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0.5 }}
        transition={{ delay: 0 }}
      >
        <motion.div
          className="content-first-title content-titles"
        >
          <motion.div
            className="content-title-name-majors"
          >
            <motion.div>
              Card 4
            </motion.div>
            <motion.div
              className="content-title-majors"
            >
              Computer Software Engineering
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.ul
          className="content-descriptions"
        >
          <motion.li>Highly selective software-engineering(SWE) program with a 3% acceptance rate</motion.li>
          <motion.li>Accumulative 700+ hours full-stack SWE program</motion.li>
          <motion.li
            className='content-description-dates'
          >May 2021 - August 2021</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );

  const myRef = useRef(null);

  const handleScroll = () => {
    if (scrolling) {
      myRef.current.scrollTop = scrollY;
    } else if (((scrollY < myRef.current.scrollTop) && (scrollY < ((allContents.length - 1) * 2225)))) {
      setScrolling(true);
      setTimeout(() => {
        myRef.current.scrollTop = ((2225 * ((Math.floor(scrollY / 2225)) + 1)));
        setScrolling(false);
      }, 400);
      setScrollY(myRef.current.scrollTop);
      scrollProgressBar('down');
    } else if ((scrollY > myRef.current.scrollTop)) {
      setScrolling(true);
      setTimeout(() => {
        myRef.current.scrollTop = ((2225 * (Math.floor(scrollY / 2226))));
        setScrolling(false);
      }, 400);
      setScrollY(myRef.current.scrollTop);
      scrollProgressBar('up');
    } else {
      myRef.current.scrollTop = scrollY;
    }
  };

  const scrollProgressBar = (dir) => {
    if (animating) return;
    animate(true);
    setTimeout(() => {
      animate(false);
    }, 500);
    switch (dir) {
      case 'down':
        if (!!document.getElementById(`scroll-${(Math.floor(scrollY / 2225)) + 2}`)) {
          document.getElementById(`scroll-${(Math.floor(scrollY / 2225)) + 2}`).classList.add('scrolled');
          if (!!document.getElementById(`edu-content-${(Math.floor(scrollY / 2225)) + 1}`)) {
            document.getElementById(`edu-content-${(Math.floor(scrollY / 2225)) + 1}`).animate({
              transform: 'scale(1.15)',
              easing: 'linear'
            }, 160);
            setTimeout(() => {
              document.getElementById(`edu-content-${(Math.floor(scrollY / 2225)) + 1}`).animate({
                transform: 'scale(0.2)',
                opacity: '0',
                easing: 'linear',
              }, 240);
            }, 160);
          }
        }
        return;
      case 'up':
        if (!!document.getElementById(`scroll-${(Math.floor(scrollY / 2225)) + 1}`)) {
          document.getElementById(`scroll-${(Math.floor(scrollY / 2225)) + 1}`).classList.remove('scrolled');
          if (!!document.getElementById(`edu-content-${(Math.floor(scrollY / 2225)) + 1}`)) {
            document.getElementById(`edu-content-${(Math.floor(scrollY / 2225)) + 1}`).animate({
              transform: 'scale(0.85)',
              easing: 'linear'
            }, 160);
            setTimeout(() => {
              document.getElementById(`edu-content-${(Math.floor(scrollY / 2225)) + 1}`).animate({
                transform: 'scale(1.8)',
                opacity: '0',
                easing: 'linear',
              }, 240);
            }, 160);
          }
        }
        return;
    }
  };

  return (
    <motion.div
      id="education-content"
    >
      <motion.div
        id="content-scroll-progress"
      >
        <motion.div
          id="scroll-1"
          className="scrolled"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.15 }}
          transition={{ type: 'spring', bounce: 0.6, delay: 0.5 }}
        >
        </motion.div>
        <motion.div
          id="scroll-2"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.15 }}
          transition={{ type: 'spring', bounce: 0.6, delay: 1 }}
        >
        </motion.div>
        <motion.div
          id="scroll-3"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.15 }}
          transition={{ type: 'spring', bounce: 0.6, delay: 1 }}
        >
        </motion.div>
        <motion.div
          id="scroll-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.15 }}
          transition={{ type: 'spring', bounce: 0.6, delay: 1 }}
        >
        </motion.div>
      </motion.div>
      <motion.div
        id="education-title"
        animate={{ opacity: 1, y: '25vh' }}
        transition={{ delay: 0.5 }}
      >
        Education | studies
      </motion.div>
      <motion.div
        className="all-contents"
        id="all-content"
        ref={myRef}
        onClick={() => console.log(document.getElementsByClassName('all-contents')[0].scrollHeight)}
        onScroll={() => handleScroll()}
        transition={{ delay: 0 }}
      >
        {content1}
        {content2}
        {content3}
        {content4}
      </motion.div>
    </motion.div>
  );
};

export default Education;