import React, { useEffect, useState, useTransform, useRef } from 'react';
import { motion, useAnimation, useMotionValue, useElementScroll, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import $ from 'jquery';

const Education = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [animating, animate] = useState(false);

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const controls = useAnimation();

  const content1 = (inView1 && inView2) ? (
    <motion.div ref={ref1}>
      <motion.div
        key='content1'
        className="contents first-content"
        id="edu-content-1"
        // ref={ref1}
        // initial={{ opacity: 0, scale: 0.5, left: '75vw' }}
        animate={{ opacity: 1, scale: [0, 0.1, 0.1, 0.1, 0.6, 1.2, 1], y: [-100, -300, -450, -550, -600, -200, 0] }}
        transition={{ delay: 0, duration: 0.75, times: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.7], type: 'spring', bounce: 0.8 }}
      >
        <motion.div
          className="content-first-title content-titles"
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25 }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -60 }}
              transition={{ delay: 2 }}
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
            transition={{ delay: 2.25 }}
          >Highly selective software-engineering(SWE) program with a 3% acceptance rate</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2.5 }}
          >Accumulative 700+ hours full-stack SWE program</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -140 }}
            transition={{ delay: 2.75 }}
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
        // ref={ref2}
        animate={{ opacity: 1, scale: [0, 0.1, 0.1, 0.1, 0.6, 1.2, 1], y: [-100, -300, -450, -550, -600, -200, 0] }}
        transition={{ delay: 0, duration: 0.75, times: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.7], type: 'spring', bounce: 0.8 }}
      >
        <motion.div
          className="content-first-title content-titles"
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25 }}
        >
          <motion.div
            className="content-title-name-majors"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 40 }}
              transition={{ delay: 1.5 }}
            >
              Card 2
            </motion.div>
            <motion.div
              className="content-title-majors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -60 }}
              transition={{ delay: 2 }}
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
            transition={{ delay: 2.25 }}
          >Highly selective software-engineering(SWE) program with a 3% acceptance rate</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2.5 }}
          >Accumulative 700+ hours full-stack SWE program</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -140 }}
            transition={{ delay: 2.75 }}
            className='content-description-dates'
          >May 2021 - August 2021</motion.li>
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
              Card 2
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

  const content3 = (inView3 && inView4) ? (
    <motion.div ref={ref3}>
      <motion.div
        key='content3'
        className="contents"
        id="edu-content-3"
        // ref={ref3}
        animate={{ opacity: 1, scale: [0, 0.1, 0.1, 0.1, 0.6, 1.2, 1], y: [-100, -300, -450, -550, -600, -200, 0] }}
        transition={{ delay: 0, duration: 0.75, times: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.7], type: 'spring', bounce: 0.8 }}
      >
        <motion.div
          className="content-first-title content-titles"
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25 }}
        >
          <motion.div
            className="content-title-name-majors"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 40 }}
              transition={{ delay: 1.5 }}
            >
              Card 3
            </motion.div>
            <motion.div
              className="content-title-majors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -60 }}
              transition={{ delay: 2 }}
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
            transition={{ delay: 2.25 }}
          >Highly selective software-engineering(SWE) program with a 3% acceptance rate</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2.5 }}
          >Accumulative 700+ hours full-stack SWE program</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -140 }}
            transition={{ delay: 2.75 }}
            className='content-description-dates'
          >May 2021 - August 2021</motion.li>
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
              Card 3
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

  const content4 = (inView4 && !inView3) ? (
    <motion.div ref={ref4}>
      <motion.div
        key='content4'
        className="contents last-content"
        id="edu-content-4"
        // ref={ref4}
        animate={{ opacity: 1, scale: [0, 0.1, 0.1, 0.1, 0.6, 1.2, 1], y: [-100, -300, -450, -550, -600, -200, 0] }}
        transition={{ delay: 0, duration: 0.75, times: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.7], type: 'spring', bounce: 0.8 }}
      >
        <motion.div
          className="content-first-title content-titles"
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25 }}
        >
          <motion.div
            className="content-title-name-majors"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 40 }}
              transition={{ delay: 1.5 }}
            >
              Card 4
            </motion.div>
            <motion.div
              className="content-title-majors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -60 }}
              transition={{ delay: 2 }}
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
            transition={{ delay: 2.25 }}
          >Highly selective software-engineering(SWE) program with a 3% acceptance rate</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2.5 }}
          >Accumulative 700+ hours full-stack SWE program</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -140 }}
            transition={{ delay: 2.75 }}
            className='content-description-dates'
          >May 2021 - August 2021</motion.li>
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
  if (inView1) {
    // debugger;
    console.log('viewing the firsts one');
  }
  if (inView2) {
    // debugger;
    console.log('Viewing the seconds one');

  }
  if (inView3) {
    // debugger;
    console.log('Viewing the thirds one');

  }
  if (inView4) {
    // debugger;
    console.log("viewing the fourths oneeeeee");

  }

  const myRef = useRef(null);

  const handleScroll = () => {
    if (scrolling) {
      myRef.current.scrollTop = scrollY;
      console.log('cant scroll');
    } else if ((scrollY < myRef.current.scrollTop)) {
      console.log("down");
      setScrolling(true);
      setTimeout(() => {
        // document.getElementById('all-content').animate({ scrollTop: myRef.current.scrollTop }, 2000);
        myRef.current.scrollTop = ((2225 * ((Math.floor(scrollY / 2225)) + 1)));
        // document.getElementById("edu-content-2").classList.remove("conceal");
        setScrolling(false);
      }, 400);
      setScrollY(myRef.current.scrollTop);
      scrollProgressBar('down');
    } else if ((scrollY > myRef.current.scrollTop)) {
      console.log("up");
      setScrolling(true);
      setTimeout(() => {
        myRef.current.scrollTop = ((2225 * (Math.floor(scrollY / 2226))));
        setScrolling(false);
      }, 400);
      setScrollY(myRef.current.scrollTop);
      scrollProgressBar('up');
    } else {
      setScrolling(true);
    }
  };

  const scrollProgressBar = (dir) => {
    console.log(dir, (Math.floor(scrollY / 2225)), (Math.floor(scrollY / 2226)));
    if (animating) return;
    animate(true);
    setTimeout(() => {
      animate(false);
    }, 500);
    switch (dir) {
      case 'down':
        if (!!document.getElementById(`scroll-${(Math.floor(scrollY / 2225)) + 2}`)) {
          document.getElementById(`scroll-${(Math.floor(scrollY / 2225)) + 2}`).classList.add('scrolled');
          // debugger;
          console.log('scrolling', scrolling);
          if (!!document.getElementById(`edu-content-${(Math.floor(scrollY / 2225)) + 1}`)) {
            console.log('dissapearing');
            // debugger;
            console.log('animating going down');
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
        // if (Math.floor(scrollY / 2225) === 0) return;
        if (!!document.getElementById(`scroll-${(Math.floor(scrollY / 2225)) + 1}`)) {
          document.getElementById(`scroll-${(Math.floor(scrollY / 2225)) + 1}`).classList.remove('scrolled');
          console.log('scrolling', scrolling);
          if (!!document.getElementById(`edu-content-${(Math.floor(scrollY / 2225)) + 1}`)) {
            console.log('dissapearing');
            // debugger;
            console.log('animating going up');
            console.log('moving up ', (Math.floor(scrollY / 2225)) + 1);
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

        {/* {console.log(document.getElementsByClassName('all-contents')[0])} */}
        {/* <motion.div
          className="contents first-content"
          id="edu-content-1"
          initial={{ scale: 1.05, lineHeight: 3 }}
          animate={{ scale: 1, y: '3vh', lineHeight: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="content-first-title content-titles"
          >
            <motion.div
              className="content-title-name-majors"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: 40 }}
                transition={{ delay: 0.5 }}
              >
                App Academy
              </motion.div>
              <motion.div
                className="content-title-majors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: -60 }}
                transition={{ delay: 1 }}
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
              transition={{ delay: 1.25 }}
            >Highly selective software-engineering(SWE) program with a 3% acceptance rate</motion.li>
            <motion.li
              animate={{ opacity: 1, x: -200 }}
              transition={{ delay: 1.5 }}
            >Accumulative 700+ hours full-stack SWE program</motion.li>
            <motion.li
              animate={{ opacity: 1, x: -140 }}
              transition={{ delay: 1.75 }}
              className='content-description-dates'
            >May 2021 - August 2021</motion.li>
          </motion.ul>
        </motion.div> */}
        {/* <motion.div
          className="contents"
          ref={ref3}
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
        >
          <motion.div
            className="content-first-title content-titles"
          >
            <motion.div
              className="content-title-name-majors"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: 40 }}
                transition={{ delay: 0.5 }}
              >
                App Academy
              </motion.div>
              <motion.div
                className="content-title-majors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: -60 }}
                transition={{ delay: 1 }}
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
              transition={{ delay: 1.25 }}
            >Highly selective software-engineering(SWE) program with a 3% acceptance rate</motion.li>
            <motion.li
              animate={{ opacity: 1, x: -200 }}
              transition={{ delay: 1.5 }}
            >Accumulative 700+ hours full-stack SWE program</motion.li>
            <motion.li
              animate={{ opacity: 1, x: -140 }}
              transition={{ delay: 1.75 }}
              className='content-description-dates'
            >May 2021 - August 2021</motion.li>
          </motion.ul>
        </motion.div> */}
        {/* <motion.div
          className="contents last-content"
          ref={ref4}
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
        >
          <motion.div
            className="content-first-title content-titles"
          >
            <motion.div
              className="content-title-name-majors"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: 40 }}
                transition={{ delay: 0.5 }}
              >
                App Academy
              </motion.div>
              <motion.div
                className="content-title-majors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: -60 }}
                transition={{ delay: 1 }}
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
              transition={{ delay: 1.25 }}
            >Highly selective software-engineering(SWE) program with a 3% acceptance rate</motion.li>
            <motion.li
              animate={{ opacity: 1, x: -200 }}
              transition={{ delay: 1.5 }}
            >Accumulative 700+ hours full-stack SWE program</motion.li>
            <motion.li
              animate={{ opacity: 1, x: -140 }}
              transition={{ delay: 1.75 }}
              className='content-description-dates'
            >May 2021 - August 2021</motion.li>
          </motion.ul>
        </motion.div> */}
        {/* <motion.div id="icons">
          <motion.button id="left-icon">
            <motion.div className="left-arrow-icon" onClick={() => window.scrollTo(0, 200)}>
              <i className="fas fa-angle-double-left"></i>
            </motion.div>
          </motion.button>
          <motion.button id="right-icon">
            <motion.div className="right-arrow-icon">
              <i className="fas fa-angle-double-right"></i>
            </motion.div>
          </motion.button>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Education;