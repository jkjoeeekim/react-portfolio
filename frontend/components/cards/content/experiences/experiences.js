import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import ReactTooltip from 'react-tooltip';

const Experiences = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [animating, animate] = useState(false);
  const myRef = useRef(null);

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
        id="exp-content-1"
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
              U.S. Army Reserves
            </motion.div>
            <motion.div
              className="content-title-majors"
              animate={{ opacity: 1, x: -60 }}
              transition={{ delay: 1.5 }}
            >
              Specialist E-4 | MOS 68W Combat Medic
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.ul
          className="content-descriptions"
        >
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2 }}
          >Completed 16-week bootcamp at Fort Sill, OK | 36-week AIT at Fort Sam Houston, TX</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2.15 }}
          >Acquired an NREMT certificate in 20 weeks during AIT to qualify as a national EMT</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2.3 }}
          >Deployed to Port Hueneme for 12 weeks on a Navy pre-deployment support mission</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -140 }}
            transition={{ delay: 2.45 }}
            className='content-description-dates'
          >January 2012 - December 2018</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  ) : (
    <motion.div ref={ref1}>
      <motion.div
        key='content1'
        className="contents first-content"
        id="exp-content-1"
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
              U.S. Army Reserves
            </motion.div>
            <motion.div
              className="content-title-majors"
            >
              Specialist E-4 | MOS 68W Combat Medic
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.ul
          className="content-descriptions"
        >
          <motion.li>Completed 16-week bootcamp at Fort Sill, OK | 36-week AIT at Fort Sam Houston, TX</motion.li>
          <motion.li>Acquired an NREMT certificate in 20 weeks during AIT to qualify as a national EMT</motion.li>
          <motion.li>Deployed to Port Hueneme for 12 weeks on a Navy pre-deployment support mission</motion.li>
          <motion.li
            className='content-description-dates'
          >January 2012 - December 2018</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );

  const content2 = (inView2 && inView3) ? (
    <motion.div ref={ref2}>
      <motion.div
        key='content2'
        className="contents"
        id="exp-content-2"
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
              Olympus Creations LLC
            </motion.div>
            <motion.div
              className="content-title-majors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -60 }}
              transition={{ delay: 1.5 }}
            >
              Partner | co-owner
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.ul
          className="content-descriptions"
        >
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2 }}
          >Designed an electronic-cigarette on SolidWorks/AutoCAD to accept a standard 18650 li-ion battery. Contructed of highly conductive copper alloy 110</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2.15 }}
          >Oversaw manufacturing and distributed 3 main product lines and dozens of compatible accessories</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2.3 }}
          >Accumulative 20,000 units and accessories sold worldwide to 200+ retailers, 50+ distributors, 10,000+ individuals</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -140 }}
            transition={{ delay: 2.45 }}
            className='content-description-dates'
          >October 2013 - December 2018</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  ) : (
    <motion.div ref={ref2}>
      <motion.div
        key='content2'
        className="contents"
        id="exp-content-2"
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
              Olympus Creations LLC
            </motion.div>
            <motion.div
              className="content-title-majors"
            >
              Partner | co-owner
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.ul
          className="content-descriptions"
        >
          <motion.li>Designed an electronic-cigarette on SolidWorks/AutoCAD to accept a standard 18650 li-ion battery. Contructed of highly conductive copper alloy 110</motion.li>
          <motion.li>Oversaw manufacturing and distributed 3 main product lines and dozens of compatible accessories</motion.li>
          <motion.li>Accumulative 20,000 units and accessories sold worldwide to 200+ retailers, 50+ distributors, 10,000+ individuals</motion.li>
          <motion.li
            className='content-description-dates'
          >October 2013 - December 2018</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );

  const content3 = (inView3 && inView4) ? (
    <motion.div ref={ref3}>
      <motion.div
        key='content3'
        className="contents"
        id="exp-content-3"
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
              Baekjeong KBBQ Restaurant
            </motion.div>
            <motion.div
              className="content-title-majors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -60 }}
              transition={{ delay: 1.5 }}
            >
              Supervisor
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.ul
          className="content-descriptions"
        >
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2 }}
          >Managed 30+ front-of-house staff and delegated employee sections/responsibilites for optimized workflow</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2.15 }}
          >Created training guides for staff to allow for uniformity and consistency during customer interactions</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -200 }}
            transition={{ delay: 2.3 }}
          >Restaurant maintained 4.5 stars on Yelp with 1,000+ reviews</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -140 }}
            transition={{ delay: 2.45 }}
            className='content-description-dates'
          >March 2016 - December 2020</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  ) : (
    <motion.div ref={ref3}>
      <motion.div
        key='content3'
        className="contents"
        id="exp-content-3"
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
              Baekjeong KBBQ Restaurant
            </motion.div>
            <motion.div
              className="content-title-majors"
            >
              Supervisor
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.ul
          className="content-descriptions"
        >
          <motion.li>Managed 30+ front-of-house staff and delegated employee sections/responsibilites for optimized workflow</motion.li>
          <motion.li>Created training guides for staff to allow for uniformity and consistency during customer interactions</motion.li>
          <motion.li>Restaurant maintained 4.5 stars on Yelp with 1,000+ reviews</motion.li>
          <motion.li
            className='content-description-dates'
          >March 2016 - December 2020</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );

  const content4 = (inView4 && !inView3) ? (
    <motion.div ref={ref4}>
      <motion.div
        key='content4'
        className="contents last-content"
        id="exp-content-4"
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
              U.S. Army Reserves
            </motion.div>
            <motion.div
              className="content-title-majors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -60 }}
              transition={{ delay: 1.5 }}
            >
              Specialist E-4 | MOS 68W Combat Medic
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
          >January 2012 - December 2018</motion.li>
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
              Olympus Creations LLC
            </motion.div>
            <motion.div
              className="content-title-majors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -60 }}
              transition={{ delay: 1.5 }}
            >
              Partner | co-owner
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
          >October 2013 - December 2018</motion.li>
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
              Baekjeong KBBQ Restaurant
            </motion.div>
            <motion.div
              className="content-title-majors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -60 }}
              transition={{ delay: 1.5 }}
            >
              Supervisor
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
          >March 2016 - December 2020</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  ) : (
    <motion.div ref={ref4}>
      <motion.div
        key='content4'
        className="contents last-content"
        id="exp-content-4"
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

  const handleScroll = () => {
    ReactTooltip.hide();
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
      document.getElementById(`scroll-${(Math.floor(scrollY / 2225)) + 1}`).animate({
        transform: 'scale(1.1)',
        easing: 'ease-in-out',
      }, 400);
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
          const contentBox = document.getElementById(`scroll-${(Math.floor(scrollY / 2225)) + 2}`);
          contentBox.classList.add('scrolled');
          contentBox.animate({
            transform: 'scale(0.8)',
            easing: 'ease-in-out',
          }, 850);
          if (!!document.getElementById(`exp-content-${(Math.floor(scrollY / 2225)) + 1}`)) {
            document.getElementById(`exp-content-${(Math.floor(scrollY / 2225)) + 1}`).animate({
              transform: 'scale(1.15)',
              easing: 'linear'
            }, 160);
            setTimeout(() => {
              document.getElementById(`exp-content-${(Math.floor(scrollY / 2225)) + 1}`).animate({
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
          if (!!document.getElementById(`exp-content-${(Math.floor(scrollY / 2225)) + 1}`)) {
            document.getElementById(`exp-content-${(Math.floor(scrollY / 2225)) + 1}`).animate({
              transform: 'scale(0.85)',
              easing: 'linear'
            }, 160);
            setTimeout(() => {
              document.getElementById(`exp-content-${(Math.floor(scrollY / 2225)) + 1}`).animate({
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

  const toggleTooltip = () => {
    ReactTooltip.hide();
    setTimeout(() => {
      ReactTooltip.show(myRef);
    }, 2000);
  };

  return (
    <motion.div
      id="experiences-content"
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
        id="experiences-title"
        animate={{ opacity: 1, y: '25vh' }}
        transition={{ delay: 0.5 }}
      >
        Experiences
      </motion.div>
      <motion.div
        className="all-contents"
        id="all-content"
        ref={myRef}
        onClick={() => toggleTooltip()}
        onScroll={() => handleScroll()}
        transition={{ delay: 0 }}
      // data-tip='Mouse scroll to navigate'
      >
        {content1}
        {content2}
        {content3}
        {content4}
      </motion.div>
      <ReactTooltip delayShow={1000} scrollHide={true} resizeHide={true} clickable={true} />
      {/* <motion.div
        className="contents"
        initial={{ scale: 1.15, lineHeight: 3 }}
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
              Computer Sofware Engineering
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.ul
          className="content-descriptions"
        >
          <motion.li
            animate={{ opacity: 1, x: -150 }}
            transition={{ delay: 1.25 }}
          >Highly selective software-engineering(SWE) program with a 3% acceptance rate</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -130 }}
            transition={{ delay: 1.5 }}
          >Accumulative 700+ hours full-stack SWE program</motion.li>
          <motion.li
            animate={{ opacity: 1, x: -110 }}
            transition={{ delay: 1.75 }}
          >third point</motion.li>
        </motion.ul>
      </motion.div> */}
    </motion.div>
  );
};

export default Experiences;