import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import ReactTooltip from 'react-tooltip';

const Techs = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [animating, animate] = useState(false);
  const myRef = useRef(null);

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const allContents = document.getElementsByClassName('techs-contents');
  console.log('1' + inView1);
  console.log('2' + inView2);

  const content = (inView1) ? (
    <motion.div
      ref={ref1}
    >
      <motion.div
        id="techs-all-icons"
        className="techs-contents"
        animate={{ opacity: [0.1, 0.1, 0.1, 0.1, 0.3, 0.4, 1], scale: [0, 0.1, 0.1, 0.1, 0.6, 1.2, 1], y: [-100, -300, -450, -550, -600, -200, 0] }}
        transition={{ delay: 0, duration: 0.7, times: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.7], type: 'spring', stiffness: 700, damping: 30 }}
      >
        <motion.div
          id="techs-all-icons-row-1"
          className="techs-all-icons-rows"
        >
          <motion.div
            className="techs-all-icons-rows-centering"
          >
            <motion.div
              id="techs-psql"
              className="techs-icons"
              animate={{ opacity: 1, y: 1320 }}
              transition={{ delay: 1 }}
            // onHover={() => toggleTooltip()}
            >
              <motion.div
                id="techs-psql-img"
                data-tip="PostgresQl | MySQL"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
            <motion.div
              id="techs-css"
              className="techs-icons"
              animate={{ opacity: 1, y: 1490 }}
              transition={{ delay: 1.36 }}
            >
              <motion.div
                id="techs-css-img"
                data-tip="CSS / SCSS"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
            <motion.div
              id="techs-aws"
              className="techs-icons"
              animate={{ opacity: 1, y: 1640 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                id="techs-aws-img"
                data-tip="Amazon Web Services"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          id="techs-all-icons-row-2"
          className="techs-all-icons-rows"
        >
          <motion.div
            className="techs-all-icons-rows-centering"
          >
            <motion.div
              id="techs-heroku"
              className="techs-icons"
              animate={{ opacity: 1, y: 1380 }}
              transition={{ delay: 0.66 }}
            >
              <motion.div
                id="techs-heroku-img"
                data-tip="Heroku deployement"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
            <motion.div
              id="techs-html"
              className="techs-icons"
              animate={{ opacity: 1, y: 1560 }}
              transition={{ delay: 1.8 }}
            >
              <motion.div
                id="techs-html-img"
                data-tip="HTML"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          id="techs-all-icons-row-3"
          className="techs-all-icons-rows"
        >
          <motion.div
            className="techs-all-icons-rows-centering"
          >
            <motion.div
              id="techs-ruby"
              className="techs-icons"
              animate={{ opacity: 1, y: 1320 }}
              transition={{ delay: 0.9 }}
            >
              <motion.div
                id="techs-ruby-img"
                data-tip="Ruby / Ruby on Rails"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
            <motion.div
              id="techs-webpack"
              className="techs-icons"
              animate={{ opacity: 1, y: 1470 }}
              transition={{ delay: 1.1 }}
            >
              <motion.div
                id="techs-webpack-img"
                data-tip="Webpack"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
            <motion.div
              id="techs-jquery"
              className="techs-icons"
              animate={{ opacity: 1, y: 1620 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                id="techs-jquery-img"
                data-tip="jQuery / JavaScript"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          id="techs-all-icons-row-4"
          className="techs-all-icons-rows"
        >
          <motion.div
            className="techs-all-icons-rows-centering"
          >
            <motion.div
              id="techs-mongo"
              className="techs-icons"
              animate={{ opacity: 1, y: 1380 }}
              transition={{ delay: 0.65 }}
            >
              <motion.div
                id="techs-mongo-img"
                data-tip="MongoDB / Atlas / Mongoose"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
            <motion.div
              id="techs-node"
              className="techs-icons"
              animate={{ opacity: 1, y: 1560 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                id="techs-node-img"
                data-tip="Node.js"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          id="techs-all-icons-row-5"
          className="techs-all-icons-rows"
        >
          <motion.div
            className="techs-all-icons-rows-centering"
          >
            <motion.div
              id="techs-npm"
              className="techs-icons"
              animate={{ opacity: 1, y: 1320 }}
              transition={{ delay: 0.88 }}
            >
              <motion.div
                id="techs-npm-img"
                data-tip="Node Package Manager"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
            <motion.div
              id="techs-github"
              className="techs-icons"
              animate={{ opacity: 1, y: 1470 }}
              transition={{ delay: 0.75 }}
            >
              <motion.div
                id="techs-github-img"
                data-tip="Git | Github"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
            <motion.div
              id="techs-redux"
              className="techs-icons"
              animate={{ opacity: 1, y: 1620 }}
              transition={{ delay: 1.65 }}
            >
              <motion.div
                id="techs-redux-img"
                data-tip="React/Redux"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        id="techs-all-icons-fuzzy-top"
        animate={{ opacity: [0, 0.1, 0.1, 0.1, 0.3, 0.4, 1], scale: [0, 0.1, 0.1, 0.1, 0.6, 1.2, 1], y: [-100, -300, -450, -550, -600, -200, 0] }}
        transition={{ delay: 0, duration: 0.7, times: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.7], type: 'spring', stiffness: 700, damping: 30 }}
      >
      </motion.div>
      <ReactTooltip delayShow={200} scrollHide={true} resizeHide={true} clickable={true} />
    </motion.div>
    // <motion.div
    // >
    //   <motion.div
    //     ref={ref1}
    //     id="techs-all-icons"
    //     className="techs-contents"
    //   >
    //     <motion.div
    //       id="techs-all-icons-row-1"
    //       className="techs-all-icons-rows"
    //     >
    //       <motion.div
    //         className="techs-all-icons-rows-centering"
    //       >
    //         <motion.div
    //           id="techs-github"
    //           className="techs-icons"
    //           animate={{ opacity: 1 }}
    //         ></motion.div>
    //         <motion.div
    //           id="techs-css"
    //           className="techs-icons"
    //           animate={{ opacity: 1 }}
    //         ></motion.div>
    //         <motion.div
    //           id="techs-aws"
    //           className="techs-icons"
    //           animate={{ opacity: 1 }}
    //         ></motion.div>
    //       </motion.div>
    //     </motion.div>
    //     <motion.div
    //       id="techs-all-icons-row-2"
    //       className="techs-all-icons-rows"
    //     >
    //       <motion.div
    //         className="techs-all-icons-rows-centering"
    //       >
    //         <motion.div
    //           id="techs-heroku"
    //         ></motion.div>
    //         <motion.div
    //           id="techs-html"
    //         ></motion.div>
    //       </motion.div>
    //     </motion.div>
    //     <motion.div
    //       id="techs-all-icons-row-3"
    //       className="techs-all-icons-rows"
    //     >
    //       <motion.div
    //         className="techs-all-icons-rows-centering"
    //       >
    //         <motion.div
    //           id="techs-ruby"
    //         ></motion.div>
    //         <motion.div
    //           id="techs-jquery"
    //         ></motion.div>
    //         <motion.div
    //           id="techs-webpack"
    //         ></motion.div>
    //       </motion.div>
    //     </motion.div>
    //     <motion.div
    //       id="techs-all-icons-row-4"
    //       className="techs-all-icons-rows"
    //     >
    //       <motion.div
    //         className="techs-all-icons-rows-centering"
    //       >
    //         <motion.div
    //           id="techs-mongo"
    //         ></motion.div>
    //         <motion.div
    //           id="techs-node"
    //         ></motion.div>
    //       </motion.div>
    //     </motion.div>
    //     <motion.div
    //       id="techs-all-icons-row-5"
    //       className="techs-all-icons-rows"
    //     >
    //       <motion.div
    //         className="techs-all-icons-rows-centering"
    //       >
    //         <motion.div
    //           id="techs-npm"
    //         ></motion.div>
    //         <motion.div
    //           id="techs-psql"
    //         ></motion.div>
    //         <motion.div
    //           id="techs-redux"
    //         ></motion.div>
    //       </motion.div>
    //     </motion.div>
    //   </motion.div>
    //   <motion.div
    //     id="techs-all-icons-fuzzy-top"
    //   >
    //   </motion.div>
    // </motion.div>
  ) : (
    <motion.div
      ref={ref1}
    >
      <motion.div
        id="techs-all-icons"
        className="techs-contents"
      >
        <motion.div
          id="techs-all-icons-row-1"
          className="techs-all-icons-rows"
        >
          <motion.div
            className="techs-all-icons-rows-centering"
          >
            <motion.div
              id="techs-github"
              className="techs-icons"
              animate={{ opacity: 1, y: 10 }}
              transition={{ delay: 1 }}
            // onHover={() => toggleTooltip()}
            >
              <motion.div
                id="techs-github-img"
                data-tip="Github"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
            <motion.div
              id="techs-css"
              className="techs-icons"
              animate={{ opacity: 1, y: 10 }}
              transition={{ delay: 1.36 }}
            >
              <motion.div
                id="techs-css-img"
                data-tip="CSS / SCSS"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
            <motion.div
              id="techs-aws"
              className="techs-icons"
              animate={{ opacity: 1, y: 10 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                id="techs-aws-img"
                data-tip="Amazon Web Services"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          id="techs-all-icons-row-2"
          className="techs-all-icons-rows"
        >
          <motion.div
            className="techs-all-icons-rows-centering"
          >
            <motion.div
              id="techs-heroku"
              className="techs-icons"
              animate={{ opacity: 1, y: 10 }}
              transition={{ delay: 0.66 }}
            >
              <motion.div
                id="techs-heroku-img"
                data-tip="Heroku deployement"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
            <motion.div
              id="techs-html"
              className="techs-icons"
              animate={{ opacity: 1, y: 10 }}
              transition={{ delay: 1.8 }}
            >
              <motion.div
                id="techs-html-img"
                data-tip="HTML"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          id="techs-all-icons-row-3"
          className="techs-all-icons-rows"
        >
          <motion.div
            className="techs-all-icons-rows-centering"
          >
            <motion.div
              id="techs-ruby"
              className="techs-icons"
              animate={{ opacity: 1, y: 10 }}
              transition={{ delay: 0.9 }}
            >
              <motion.div
                id="techs-ruby-img"
                data-tip="Ruby / Ruby on Rails"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
            <motion.div
              id="techs-jquery"
              className="techs-icons"
              animate={{ opacity: 1, y: 10 }}
              transition={{ delay: 1.1 }}
            >
              <motion.div
                id="techs-jquery-img"
                data-tip="jQuery / JavaScript"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
            <motion.div
              id="techs-webpack"
              className="techs-icons"
              animate={{ opacity: 1, y: 10 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                id="techs-webpack-img"
                data-tip="Webpack"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          id="techs-all-icons-row-4"
          className="techs-all-icons-rows"
        >
          <motion.div
            className="techs-all-icons-rows-centering"
          >
            <motion.div
              id="techs-mongo"
              className="techs-icons"
              animate={{ opacity: 1, y: 10 }}
              transition={{ delay: 0.65 }}
            >
              <motion.div
                id="techs-mongo-img"
                data-tip="MongoDB / Atlas / Mongoose"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
            <motion.div
              id="techs-node"
              className="techs-icons"
              animate={{ opacity: 1, y: 10 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                id="techs-node-img"
                data-tip="Node.js"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          id="techs-all-icons-row-5"
          className="techs-all-icons-rows"
        >
          <motion.div
            className="techs-all-icons-rows-centering"
          >
            <motion.div
              id="techs-npm"
              className="techs-icons"
              animate={{ opacity: 1, y: 10 }}
              transition={{ delay: 0.88 }}
            >
              <motion.div
                id="techs-npm-img"
                data-tip="Node Package Manager"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
            <motion.div
              id="techs-psql"
              className="techs-icons"
              animate={{ opacity: 1, y: 10 }}
              transition={{ delay: 0.75 }}
            >
              <motion.div
                id="techs-psql-img"
                data-tip="PostgresQL / PSQL lite"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
            <motion.div
              id="techs-redux"
              className="techs-icons"
              animate={{ opacity: 1, y: 10 }}
              transition={{ delay: 1.65 }}
            >
              <motion.div
                id="techs-redux-img"
                data-tip="React/Redux"
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              // ref={myRef}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        id="techs-all-icons-fuzzy-top"
      >
      </motion.div>
      <ReactTooltip delayShow={200} scrollHide={true} resizeHide={true} clickable={true} />
    </motion.div>
  );

  const content2 = (inView2) ? (
    <motion.div
      ref={ref2}
      id="techs-all-text"
    >
      <motion.div
        id="techs-all-texts"
        className="techs-contents"
        animate={{ opacity: [0.1, 0.1, 0.1, 0.1, 0.3, 0.4, 1], scale: [0, 0.1, 0.1, 0.1, 0.6, 1.2, 1], y: [-100, -300, -450, -550, -600, -200, 0] }}
        transition={{ delay: 0, duration: 0.7, times: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.7], type: 'spring', stiffness: 700, damping: 30 }}
      >
        <motion.div
          id="techs-all-texts-row-1"
          className="techs-all-texts-rows"
        >
          <motion.div
            className="techs-all-texts-rows-centering"
          >
            <motion.p
              id="techs-text-title-language"
              className="techs-texts"
              animate={{ opacity: 1, y: -25 }}
              transition={{ delay: 0.5 }}
            >
              Languages
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: 50 }}
              transition={{ delay: 0.8 }}
            >
              HTML
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: 125 }}
              transition={{ delay: 0.9 }}
            >
              CSS | SCSS
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: 200 }}
              transition={{ delay: 1 }}
            >
              JavaScript
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: 275 }}
              transition={{ delay: 1.1 }}
            >
              React | Redux
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: 350 }}
              transition={{ delay: 1.2 }}
            >
              Ruby on Rails
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          id="techs-all-texts-row-2"
          className="techs-all-texts-rows"
        >
          <motion.div
            className="techs-all-texts-rows-centering"
          >
            <motion.p
              id="techs-text-title-techs"
              className="techs-texts"
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Deployment | Hosting
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: 75 }}
              transition={{ delay: 0.8 }}
            >
              Git | Github
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: 150 }}
              transition={{ delay: 0.9 }}
            >
              Heroku
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: 225 }}
              transition={{ delay: 1 }}
            >
              AWS Cloud Hosting
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: 300 }}
              transition={{ delay: 1.1 }}
            >
              Linux | Ubuntu
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          id="techs-all-texts-row-3"
          className="techs-all-texts-rows"
        >
          <motion.div
            className="techs-all-texts-rows-centering"
          >
            <motion.p
              id="techs-text-title-databases"
              className="techs-texts"
              animate={{ opacity: 1, y: -25 }}
              transition={{ delay: 0.5 }}
            >
              Databases
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: 50 }}
              transition={{ delay: 0.8 }}
            >
              PostgresQL
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: 125 }}
              transition={{ delay: 0.9 }}
            >
              MongoDb | Atlas
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: 200 }}
              transition={{ delay: 1 }}
            >
              Amazon Web Services
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: 275 }}
              transition={{ delay: 1.1 }}
            >
              MySQL
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: 350 }}
              transition={{ delay: 1.2 }}
            >
              SQlite
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        id="techs-all-texts-fuzzy-top"
      >
      </motion.div>
    </motion.div>
  ) : (
    <motion.div
      ref={ref2}
      id="techs-all-text"
    >
      <motion.div
        id="techs-all-texts"
        className="techs-contents"
      >
        <motion.div
          id="techs-all-texts-row-1"
          className="techs-all-texts-rows"
        >
          <motion.div
            className="techs-all-texts-rows-centering"
          >
            <motion.p
              id="techs-text-title-language"
              className="techs-texts"
              animate={{ opacity: 1, y: -525 }}
              transition={{ delay: 0.5 }}
            >
              Languages
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: -550 }}
              transition={{ delay: 0.8 }}
            >
              HTML
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: -525 }}
              transition={{ delay: 0.9 }}
            >
              CSS | SCSS
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: -500 }}
              transition={{ delay: 1 }}
            >
              JavaScript
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: -575 }}
              transition={{ delay: 1.1 }}
            >
              React | Redux
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: -550 }}
              transition={{ delay: 1.2 }}
            >
              Ruby on Rails
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          id="techs-all-texts-row-2"
          className="techs-all-texts-rows"
        >
          <motion.div
            className="techs-all-texts-rows-centering"
          >
            <motion.p
              id="techs-text-title-techs"
              className="techs-texts"
              animate={{ opacity: 1, y: -500 }}
              transition={{ delay: 0.5 }}
            >
              Deployment | Hosting
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: -575 }}
              transition={{ delay: 0.8 }}
            >
              Git | Github
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: -550 }}
              transition={{ delay: 0.9 }}
            >
              Heroku
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: -525 }}
              transition={{ delay: 1 }}
            >
              AWS Cloud Hosting
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: -500 }}
              transition={{ delay: 1.1 }}
            >
              Linux | Ubuntu
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          id="techs-all-texts-row-3"
          className="techs-all-texts-rows"
        >
          <motion.div
            className="techs-all-texts-rows-centering"
          >
            <motion.p
              id="techs-text-title-databases"
              className="techs-texts"
              animate={{ opacity: 1, y: -525 }}
              transition={{ delay: 0.5 }}
            >
              Databases
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: -550 }}
              transition={{ delay: 0.8 }}
            >
              PostgresQL
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: -425 }}
              transition={{ delay: 0.9 }}
            >
              MongoDb | Atlas
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: -400 }}
              transition={{ delay: 1 }}
            >
              Amazon Web Services
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: -375 }}
              transition={{ delay: 1.1 }}
            >
              MySQL
            </motion.p>
            <motion.p
              className="techs-texts"
              animate={{ opacity: 1, y: -250 }}
              transition={{ delay: 1.2 }}
            >
              SQlite
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        id="techs-all-texts-fuzzy-top"
      >
      </motion.div>
    </motion.div>
  );

  const handleScroll = () => {
    // ReactTooltip.hide();
    console.log('scrollings');
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
      console.log(Math.floor(scrollY / 2225));
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
            transform: 'scale(1)',
            easing: 'ease-in-out',
          }, 850);
          if (!!document.getElementById(`exp-content-${(Math.floor(scrollY / 2225)) + 1}`)) {
            document.getElementById(`exp-content-${(Math.floor(scrollY / 2225)) + 1}`).animate({
              transform: 'scale(1.1)',
              easing: 'ease-in-out'
            }, 120);
            // setTimeout(() => {
            //   document.getElementById(`exp-content-${(Math.floor(scrollY / 2225)) + 1}`).animate({
            //     transform: 'scale(1)',
            //     opacity: '0',
            //     easing: 'ease-in-out',
            //   }, 180);
            // }, 115);
          }
        }
        return;
      case 'up':
        if (!!document.getElementById(`scroll-${(Math.floor(scrollY / 2225)) + 1}`)) {
          document.getElementById(`scroll-${(Math.floor(scrollY / 2225)) + 2}`).classList.remove('scrolled');
          if (!!document.getElementById(`exp-content-${(Math.floor(scrollY / 2225)) + 1}`)) {
            document.getElementById(`exp-content-${(Math.floor(scrollY / 2225)) + 1}`).animate({
              transform: 'scale(1.1)',
              easing: 'ease-in-out'
            }, 120);
            // setTimeout(() => {
            //   document.getElementById(`exp-content-${(Math.floor(scrollY / 2225)) + 1}`).animate({
            //     transform: 'scale(1)',
            //     opacity: '0',
            //     easing: 'ease-in-out',
            //   }, 180);
            // }, 115);
          }
        }
        return;
    }
  };

  return (
    <motion.div
      id="techs-content"
    >
      <motion.div
        id="content-scroll-progress"
      >
        <motion.div
          id="scroll-1"
          className="scrolled techs-scroll-1"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ type: 'spring', bounce: 0.6, delay: 0.5 }}
        >
        </motion.div>
        <motion.div
          id="scroll-2"
          className="techs-scroll-2"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ type: 'spring', bounce: 0.6, delay: 0.5 }}
        >
        </motion.div>
      </motion.div>
      <motion.div
        id="techs-title"
        animate={{ opacity: 1, y: '25vh' }}
        transition={{ delay: 0.5 }}
      >
        Tech stacks | Languages
      </motion.div>
      <motion.div
        id="techs-all-content"
        ref={myRef}
        onScroll={() => handleScroll()}
      >
        {content}
        {content2}
      </motion.div>
    </motion.div>
  );
};

export default Techs;;