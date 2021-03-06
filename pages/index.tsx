import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Jami Connect</title>
        <meta name="description" content="Jami-Partners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {/* About Section */}
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="flex flex-col h-full justify-center items-center  bg-white p-10 rounded-lg border-[1px] border-gray-200 -mt-24 container mx-auto"
          >
            <h4 className="font-bold">What they say about us</h4>
            <div className="flex md:flex-row gap-5 flex-col md:divide-x-2 md:divide-y-0 divide-y-2 items-center justify-evenly w-full mt-10">
              <div className="flex flex-col items-center p-5 ">
                <img
                  className="w-32"
                  src="https://assets.website-files.com/6160c9819f1e5978b56545d6/61645817bf415dc3db1c064f_logo-1-marketing-template.svg"
                  alt=""
                />
                <p className="mt-2 text-secondary text-lg text-center">
                  "“Lorem ipsum dolor sit amet consectetur adipiscing elit
                  cursus pellentesque morbi.”"
                </p>
                <img
                  className="mt-3"
                  src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6164aa8cc5852e62f512f99d_icon-stars-marketing-template.svg"
                  alt=""
                />
              </div>
              <div className="flex items-center flex-col text-center p-5">
                <img
                  className="w-36 mb-4"
                  src="https://assets.website-files.com/6160c9819f1e5978b56545d6/61645817fbac6f761fc13305_logo-2-marketing-template.svg"
                  alt=""
                />
                <p className="mt-2 text-secondary text-lg">
                  "“Lorem ipsum dolor sit amet consectetur adipiscing elit
                  cursus pellentesque morbi.”"
                </p>
                <img
                  className="mt-3"
                  src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6164aa8cc5852e62f512f99d_icon-stars-marketing-template.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center text-center p-5">
                <img
                  className="w-32 mb-4"
                  src="https://assets.website-files.com/6160c9819f1e5978b56545d6/616458166116ff44c1bbb5fa_logo-3-marketing-template.svg"
                  alt=""
                />
                <p className="mt-2 text-secondary text-lg">
                  "“Lorem ipsum dolor sit amet consectetur adipiscing elit
                  cursus pellentesque morbi.”"
                </p>
                <img
                  className="mt-3"
                  src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6164aa8cc5852e62f512f99d_icon-stars-marketing-template.svg"
                  alt=""
                />
              </div>
            </div>
          </motion.div>
          <div className="bg-[#F8F9FF] h-full pb-32">
            <div className="  container mx-auto pt-32">
              <div className="flex justify-between lg:flex-row flex-col items-center w-full">
                <div className="lg:text-left text-center">
                  <p className="text-primary text-lg">Our Services</p>
                  <h3 className="text-4xl font-bold">
                    High impact marketing <br /> services to grow your startup
                  </h3>
                </div>
                <div className="flex  flex-row gap-5 mt-10 ">
                  <button className="primary_button">Get in touch</button>
                  <button className="primary_hover">Browse Services</button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-10 mt-16">
                {/* Card 1 */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.1 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className="bg-white rounded-2xl shadow-xl hover:scale-105 duration-500  flex flex-col lg:flex-row  p-10 gap-7"
                >
                  <img
                    className="rounded-2xl w-20 h-20"
                    src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6164615c3a270be053ba8e59_icon-1-services-marketing-template.svg"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h3 className="font-semibold">Email Marketing</h3>
                    <p className="text-secondary mt-2 ">
                      Lorem ipsum dolor sit amet dolor sit consectet adipiscing
                      elit faucibus elit fermentum dolor drakomg adipiscing
                      facilis
                    </p>
                  </div>
                </motion.div>
                {/* Card 2 */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.1 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className="bg-white rounded-2xl shadow-xl flex h-full  hover:scale-105 duration-500   p-10 gap-7 flex-col lg:flex-row "
                >
                  <img
                    className="rounded-2xl w-20 h-20"
                    src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6164615cfbac6f4377c188bf_icon-2-services-marketing-template.svg"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h3 className="font-semibold">Paid Advertising</h3>
                    <p className="text-secondary mt-2">
                      Lorem ipsum dolor sit amet dolor sit consectet adipiscing
                      elit faucibus elit fermentum dolor drakomg adipiscing
                      facilis
                    </p>
                  </div>
                </motion.div>
                {/* Card 3 */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.1 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className="bg-white rounded-xl shadow-xl flex h-full p-10 gap-7 flex-col lg:flex-row hover:scale-105 duration-500  "
                >
                  <img
                    className="rounded-2xl w-20 h-20"
                    src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6164615c3a270b2f83ba8e5a_icon-3-services-marketing-template.svg"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h3 className="font-semibold">SEO</h3>
                    <p className="text-secondary mt-2">
                      Lorem ipsum dolor sit amet dolor sit consectet adipiscing
                      elit faucibus elit fermentum dolor drakomg adipiscing
                      facilis
                    </p>
                  </div>
                </motion.div>
                {/* Card 4 */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.1 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className="bg-white rounded-xl shadow-xl flex h-full p-10 gap-7 flex-col lg:flex-row hover:scale-105 duration-500  "
                >
                  <img
                    className="rounded-2xl w-20 h-20"
                    src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6164615cf6dc04668c4e2aa8_icon-6-services-marketing-template.svg"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h3 className="font-semibold">Funnel Optimization</h3>
                    <p className="text-secondary mt-2">
                      Lorem ipsum dolor sit amet dolor sit consectet adipiscing
                      elit faucibus elit fermentum dolor drakomg adipiscing
                      facilis
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 Cards */}
        <div className="flex flex-col items-center justify-center container mx-auto pt-20 pb-20">
          <p className="text-primary text-lg">OUR PROCESS</p>
          <h1 className="font-bold text-center mt-3">
            A simple, yet effective <br /> three step process
          </h1>
          {/* Card 1 */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  place-items-center mt-16 gap-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="process_cards"
            >
              <h2 className="font-semibold mt-5">1.Discovery</h2>
              <p className="text-secondary text-lg mt-2">
                Lorem ipsum dolor sit amet dolor sit consectetur adipiscing elit
                faucibus elit fermentum adipiscing facilis
              </p>
              <img
                className="mt-16"
                src="https://assets.website-files.com/6160c9819f1e5978b56545d6/61689fd5a180126fb99edd41_image-1--process-v3-marketing-template.svg"
                alt=""
              />
            </motion.div>
            {/* Card 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="process_cards"
            >
              <h2 className="font-semibold mt-5">2.Planning</h2>
              <p className="text-secondary text-lg mt-2">
                Lorem ipsum dolor sit amet dolor sit consectetur adipiscing elit
                faucibus elit fermentum adipiscing facilis
              </p>
              <img
                className="mt-16"
                src="https://assets.website-files.com/6160c9819f1e5978b56545d6/61689fd6899d6fec81531a8e_image-2--process-v3-marketing-template.svg"
                alt=""
              />
            </motion.div>
            {/* Card 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="process_cards"
            >
              <h2 className="font-semibold mt-5">3.Execution</h2>
              <p className="text-secondary text-lg mt-2">
                Lorem ipsum dolor sit amet dolor sit consectetur adipiscing elit
                faucibus elit fermentum adipiscing facilis
              </p>
              <img
                className="mt-16"
                src="https://assets.website-files.com/6160c9819f1e5978b56545d6/61689fd69652ec157975dcd9_image-3--process-v3-marketing-template.svg"
                alt=""
              />
            </motion.div>
          </div>
          <button className="primary_hover mt-20">Get in touch</button>
        </div>
        <div className="bg-[#F8F9FF] pt-28 pb-20">
          <div className="container mx-auto flex flex-col">
            {/* About */}
            <div className="flex  justify-between items-center gap-10 lg:flex-row flex-col-reverse w-full">
              <img
                className="rounded-2xl lg:w-6/12 w-full mt-10 md:mt-0"
                src="https://assets.website-files.com/6160c9819f1e5978b56545d6/616473a69b5350f32bb9838b_image-home-perks-marketing-template.png"
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-primary text-lg">WHY JAMI PARTNERS</p>
                <h2 className="font-bold mt-2 text-4xl">
                  Why working with us?
                </h2>
                <p className="text-secondary text-lg mt-5 leading-8">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  fringilla aliquam egestas ullamcorper donec porttitor massa
                  nullam lobortis varius ut pellentesque habitant aliquet ornare
                  purus nulla aliquet orci consectetur non massa eu.
                </p>
                <ul className="mt-10 space-y-5">
                  <li className="flex items-center">
                    <img
                      className="rounded-full w-8 h-8"
                      src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6168abaf530e4104348af649_icon-check-marketing-template.svg"
                      alt=""
                    />
                    <p className="font-bold text-lg ml-4">Guaranteed Results</p>
                  </li>
                  <li className="flex items-center">
                    <img
                      className="rounded-full w-8 h-8"
                      src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6168abaf530e4104348af649_icon-check-marketing-template.svg"
                      alt=""
                    />
                    <p className="font-bold text-lg ml-4">
                      Team of Industry Experts
                    </p>
                  </li>
                  <li className="flex items-center">
                    <img
                      className="rounded-full w-8 h-8"
                      src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6168abaf530e4104348af649_icon-check-marketing-template.svg"
                      alt=""
                    />
                    <p className="font-bold text-lg ml-4">
                      10+ Years of Experience
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* About 2 */}
            <div className="flex justify-between items-center lg:flex-row flex-col mt-28 gap-10">
              <div className="flex flex-col">
                <p className="text-primary tracking-wider text-lg">ABOUT US</p>
                <h2
                  className="font-bold mt-3 w-8/12 text-4xl leading-10
                "
                >
                  We are like an extension of your marketing team
                </h2>
                <p className="text-secondary text-lg mt-4">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  habitant morbi tristique senectus et netus et.
                </p>
                <hr className="bg-gray-300 w-full p-[0.7px] my-10" />
                <p className="text-secondary text-lg">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  habitant morbi tristique senectus et netus et.
                </p>
                <motion.button
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1 }}
                  animate={{ width: 500 }}
                  variants={{
                    visible: { opacity: 1, scale: 1, width: 500 },
                    hidden: { opacity: 0, scale: 0, width: 0 },
                  }}
                  className="primary_button w-min px-10 mt-10"
                >
                  About
                </motion.button>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                <img
                  className="rounded-2xl"
                  src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6168a9a0530e4156348adc3c_image-about-v3-marketing-template-p-800.jpeg"
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
