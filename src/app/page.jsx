import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen">
      {/* Header */}
      <div className="flex w-[500px] items-center">
        <div className="flex items-left justify-between">
          <img src="assets/logo.png" alt="YouTube Logo" className="h-20" />
        </div>
        <div className="flex flex-row text-lg ml-auto space-x-1 mt-5 ">
          <Link
            href="/atWork.htm"
            className="text-[#3366CC] font-bold text-[17px]"
          >
            Sign Up
          </Link>
          <span>|</span>
          <Link
            href="/atWork.htm"
            className="text-[#3366CC] font-bold text-[17px]"
          >
            My Account
          </Link>
          <span>|</span>
          <Link
            href="/atWork.htm"
            className="text-[#3366CC] font-bold text-[17px]"
          >
            History
          </Link>
          <span>|</span>
          <Link
            href="/atWork.htm"
            className="text-[#3366CC] font-bold text-[17px]"
          >
            Help
          </Link>
          <span>|</span>
          <Link
            href="/atWork.htm"
            className="text-[#3366CC] font-bold text-[17px]"
          >
            Log In
          </Link>
        </div>
        <div className="ml-10 mt-5 relative flex ">
          <input
            type="text"
            placeholder="Maybe hire me?"
            className="border border-gray-300 rounded-md p-2 w-80"
          />
          <Link href="https://www.linkedin.com/in/suhasghosal/" target="_blank">
            <button className="ml-2 px-3 py-2 bg-gray-200 rounded-md">
              Search
            </button>
          </Link>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center w-[110vh] mt-7">
        <button className="bg-[url('/assets/nav.png')] bg-cover bg-no-repeat border-2 border-blue-200 rounded-t-md text-[#3366CC] font-bold px-4 mr-2">
          Videos
        </button>
        <button className="bg-[url('/assets/nav.png')] bg-cover bg-no-repeat border-2 border-blue-200 rounded-t-md text-[#3366CC] font-bold px-4 mr-2">
          Categories
        </button>
        <button className="bg-[url('/assets/nav.png')] bg-cover bg-no-repeat border-2 border-blue-200 rounded-t-md text-[#3366CC] font-bold px-4 mr-2">
          Channels
        </button>
        <button className="bg-[url('/assets/nav.png')] bg-cover bg-no-repeat border-2 border-blue-200 rounded-t-md text-[#3366CC] font-bold px-6 py-1 mr-2">
          Community
        </button>
        <Link href="/atWork.htm">
          <img src="assets\uploadimg.png" alt="Upload" className="ml-6" />
        </Link>
      </div>

      {/* Arrow Image */}
      <div>
        <img src="assets\navdown.png" alt="Arrow" />
      </div>

      <main className="flex flex-col items-center w-full max-w-5xl">
        <div className="box1 relative h-[200px] w-full lg:w-[560px] lg:max-w-[560px] lg:self-start">
          <div className="vidTit text-gray-500 font-bold text-[20px] ml-3 mt-2 mb-1 text-center lg:text-left">
            SusTube Shorts
          </div>
          <div className="video-container flex justify-center items-start p-2 gap-6">
            {/* First Video */}
            <div className="video-item text-center w-[120px] mx-2">
              <a
                href="https://youtu.be/yEAiAgCM7JU"
                target="_blank"
                className="block"
              >
                <img
                  src="/assets/shortVid1.png"
                  alt="Sophia Draws For Th..."
                  className="w-[100px] h-[75px] mx-auto border border-black/20 mb-[2px]"
                />
                <span className="block text-[14px] text-[#3366CC] leading-4 mt-2">
                  Gobbl announces new airdro...
                </span>
              </a>
              <span className="block text-[12px] text-gray-500 leading-tight">
                Gobbl
              </span>
            </div>

            {/* Second Video */}
            <div className="video-item text-center w-[120px] mx-2">
              <a
                href="https://youtube.com/shorts/jHiOigtjmu8?feature=share"
                target="_blank"
                className="block"
              >
                <img
                  src="/assets/shortVid2.png"
                  alt="Domino Fall Down 12"
                  className="w-[100px] h-[75px] mx-auto border border-black/20 mb-[2px]"
                />
                <span className="block text-[14px] text-[#3366CC] leading-4 mt-2">
                  America visits FoodFury
                </span>
              </a>
              <span className="block text-[12px] text-gray-500 leading-tight">
                FlippyCat
              </span>
            </div>

            {/* Third Video */}
            <div className="video-item text-center w-[120px] mx-2">
              <a
                href="https://youtube.com/shorts/q4NJb2nymzM?feature=share"
                target="_blank"
                className="block"
              >
                <img
                  src="/assets/shortVid3.png"
                  alt="Clouds over a Silo ..."
                  className="w-[100px] h-[75px] mx-auto border border-black/20 mb-[2px]"
                />
                <span className="block text-[14px] text-[#3366CC] leading-4 mt-2">
                  How to play FoodFur..
                </span>
              </a>
              <span className="block text-[12px] text-gray-500 leading-tight">
                Zzx4k
              </span>
            </div>

            {/* Fourth Video */}
            <div className="video-item text-center w-[120px] mx-2">
              <a
                href="https://youtube.com/shorts/xVx0clYxM8k?feature=share"
                target="_blank"
                className="block"
              >
                <img
                  src="/assets/shortVid4.png"
                  alt="President Bush Visi..."
                  className="w-[100px] h-[75px] mx-auto border border-black/20 mb-[2px]"
                />
                <span className="block text-[14px] text-[#3366CC] leading-4 mt-2">
                  Should you use boosters?
                </span>
              </a>
              <span className="block text-[12px] text-gray-500 leading-tight">
                craigmcf
              </span>
            </div>
          </div>
        </div>

        {/* Second Section: Responsive Layout for Box 2 */}
        <div className="p-2 rounded-md mt-6 lg:mt-0 lg:ml-8">
          <div className="container w-full max-w-xs">
            {/* My Videos Section */}
            <div className="nav-box text-center bg-[#f1f5f9] p-2 rounded-md border border-gray-300">
              <p className="font-extrabold text-[15px]">
                My:{" "}
                <Link href="/atWork.htm" className="text-[#0073e6]">
                  Videos
                </Link>{" "}
                -{" "}
                <Link href="/atWork.htm" className="text-[#0073e6]">
                  Favorites
                </Link>{" "}
                -{" "}
                <Link href="/atWork.htm" className="text-[#0073e6]">
                  Playlists
                </Link>{" "}
                -{" "}
                <Link href="/atWork.htm" className="text-[#0073e6]">
                  Inbox
                </Link>
              </p>
            </div>

            {/* About Section */}
            <div className="bio mt-3">
              <div className="about-image mb-4 text-center">
                <img
                  src="/assets/lmao.png"
                  alt="About Image"
                  className="w-full h-[370px] object-cover border border-gray-300 rounded-md"
                />
              </div>

              <div className="box about p-4 rounded-md border border-gray-300 mb-5">
                <h2 className="text-center font-bold text-lg bg-[url('/assets/nav.png')] border-b border-gray-300">
                  About
                </h2>
                <p className="mt-3 text-sm text-gray-800">
                  Suhas Ghosal on the scene, at my Pre-final year at Heritage
                  Institute of Technology, navigating the tech landscape with my
                  BTech. Working as a Community Manager at Gobbl, keeping things
                  fresh and fun with my content...
                </p>
                <Link
                  href="https://drive.google.com/file/d/1Dlm5R5fdRpx-S3pRobm7qX1bzpU_W50i/view?usp=sharing"
                  target="_blank"
                  className="block text-center text-[#0073e6] font-semibold mt-2"
                >
                  See More →
                </Link>
              </div>

              {/* Progress Section */}
              <div className="box progress bg-[#f1f5f9] p-4 rounded-md border border-gray-300">
                <h2 className="text-center font-bold text-lg bg-[url('/assets/nav.png')] border-b border-gray-300">
                  Progress
                </h2>
                <div className="progress-item mt-3">
                  <span className="block text-sm text-gray-700">Anxiety</span>
                  <div className="progress-bar bg-gray-200 rounded-full overflow-hidden h-[6px] mt-1">
                    <div
                      className="progress bg-blue-500 h-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress-item mt-3">
                  <span className="block text-sm text-gray-700">
                    Overthinking
                  </span>
                  <div className="progress-bar bg-gray-200 rounded-full overflow-hidden h-[6px] mt-1">
                    <div
                      className="progress bg-blue-500 h-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress-item mt-3">
                  <span className="block text-sm text-gray-700">Fat loss</span>
                  <div className="progress-bar bg-gray-200 rounded-full overflow-hidden h-[6px] mt-1">
                    <div
                      className="progress bg-blue-500 h-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress-item mt-3">
                  <span className="block text-sm text-gray-700">ADHD</span>
                  <div className="progress-bar bg-gray-200 rounded-full overflow-hidden h-[6px] mt-1">
                    <div
                      className="progress bg-blue-500 h-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress-item mt-3">
                  <span className="block text-sm text-gray-700">
                    Dark humour
                  </span>
                  <div className="progress-bar bg-gray-200 rounded-full overflow-hidden h-[6px] mt-1">
                    <div
                      className="progress bg-blue-500 h-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Login Section */}
              <div className="mt-5 login1 p-4 rounded-md bg-[#f9f9f9] border border-gray-300 mb-5">
                <h2 className="font-bold text-lg text-left bg-[#d1d1d1] p-2 rounded-t-md mb-2">
                  Member Login
                </h2>
                <form action="atWork.htm">
                  <div className="form-group mb-3">
                    <label
                      htmlFor="username"
                      className="block text-sm text-gray-700"
                    >
                      User Name:
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label
                      htmlFor="password"
                      className="block text-sm text-gray-700"
                    >
                      Password:
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div className="form-group flex items-center">
                    <button
                      type="submit"
                      className="bg-gray-300 p-2 rounded-md border border-gray-500"
                    >
                      Login
                    </button>
                    <Link
                      href="atWork.htm"
                      className="ml-4 text-[#007bff] text-sm"
                    >
                      Sign Up
                    </Link>
                  </div>
                </form>
                <div className="forgot-links mt-3 text-sm">
                  <p>
                    Forgot:{" "}
                    <Link href="atWork.htm" className="text-[#007bff]">
                      Username
                    </Link>{" "}
                    |{" "}
                    <Link href="atWork.htm" className="text-[#007bff]">
                      Password
                    </Link>
                  </p>
                </div>
              </div>

              {/* Featured Channel Section */}
              <div className="featured3 p-4 bg-[#FBF9E8] border border-gray-300 rounded-md">
                <h3 className="title3 font-bold text-[15px] mb-3">
                  Featured Channel Worked For
                </h3>

                <div className="video-item3 flex mb-4">
                  <a
                    href="https://www.youtube.com/watch?v=mFiXJPtc110"
                    target="_blank"
                    className="block w-[100px] h-[100px] mr-3"
                  >
                    <img
                      src="/assets/yt1.png"
                      alt="Featured Video 1"
                      className="thumbnail3 border border-gray-300"
                    />
                  </a>
                  <div className="video-info3 flex-1">
                    <a
                      href="https://www.youtube.com/watch?v=mFiXJPtc110"
                      target="_blank"
                      className="video-title3 text-[#0073E6] font-bold text-[14px] leading-[0.1px]"
                    >
                      He's Beginning to Believe | Indian CS in a nutshell
                    </a>
                    <p className="video-from3 text-sm text-gray-700">
                      From:{" "}
                      <a
                        href="https://www.youtube.com/@DeeDeeEm"
                        target="_blank"
                      >
                        DeeDeeEm
                      </a>
                    </p>
                    <p className="video-views3 text-sm text-gray-600">
                      Views: 1974
                    </p>
                  </div>
                </div>

                <div className="video-item3 flex mb-4">
                  <a
                    href="https://www.youtube.com/@DeeDeeEm"
                    target="_blank"
                    className="block w-[100px] h-[100px] mr-3"
                  >
                    <img
                      src="/assets/yt2.png"
                      alt="Featured Video 2"
                      className="thumbnail3 border border-gray-300  "
                    />
                  </a>
                  <div className="video-info3 flex-1">
                    <a
                      href="https://www.youtube.com/watch?v=jqAzDauHCJY"
                      target="_blank"
                      className="video-title3 text-[#0073E6] font-bold text-[14px] leading-[0.1px]"
                    >
                      DESI LADAI | Toxic Teammates | CS:GO wtf moments |
                      Indian..
                    </a>
                    <p className="video-from3 text-sm text-gray-700">
                      From:{" "}
                      <a
                        href="https://www.youtube.com/@DeeDeeEm"
                        target="_blank"
                      >
                        DeeDeeEm
                      </a>
                    </p>
                    <p className="video-views3 text-sm text-gray-600">
                      Views: 280
                    </p>
                  </div>
                </div>

                <Link
                  href="https://www.youtube.com/@DeeDeeEm/videos"
                  className="more-videos3 block text-center font-bold text-[#0073E6] mb-3"
                >
                  See more videos
                </Link>
                <img
                  src="/assets/vzon.gif"
                  alt="Verizon Wireless"
                  className="verizon-logo3 mx-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
