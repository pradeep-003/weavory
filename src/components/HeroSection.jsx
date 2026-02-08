import React from "react";
import heroImg from "../assets/heroImg.jpg";
const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-peach-100 overflow-hidden">
      {/* Decorative SVG Elements */}

      <div className=" absolute  top-75 left-20 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="570"
          height="570"
          viewBox="0 0 570 570"
          fill="none"
        >
          <g filter="url(#filter0_f_1_25)">
            <circle
              cx="285"
              cy="285"
              r="182"
              fill="#FFA793"
              fill-opacity="0.68"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1_25"
              x="0"
              y="0"
              width="570"
              height="570"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="51.5"
                result="effect1_foregroundBlur_1_25"
              />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Top Left Diamond */}
      <div className="absolute top-20 left-12 opacity-70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="66"
          height="99"
          viewBox="0 0 66 99"
          fill="none"
        >
          <path
            d="M66 49.5C54 45.9643 39 24.75 33 0C27 24.75 15 44.7857 0 49.5C18 56.5714 25 82.5 33 99C39 84.8571 48 56.5714 66 49.5Z"
            fill="#FFCCC0"
            fill-opacity="0.88"
          />
        </svg>
      </div>

      {/* Small Top Diamond */}
      <div className="absolute top-8 left-1/4 opacity-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="28"
          viewBox="0 0 19 28"
          fill="none"
        >
          <path
            d="M19 14C15.5455 13 11.2273 7 9.5 0C7.77273 7 4.31818 12.6667 0 14C5.18182 16 7.19697 23.3333 9.5 28C11.2273 24 13.8182 16 19 14Z"
            fill="#FFCCC0"
          />
        </svg>
      </div>

      {/* Right Side Diamonds */}
      <div className="absolute top-32 right-0 opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="87"
          height="267"
          viewBox="0 0 87 267"
          fill="none"
        >
          <path
            d="M129.293 115.555C155.317 134.03 177.416 152.793 192.107 168.185C199.455 175.885 204.932 182.723 208.123 188.246C209.719 191.009 210.729 193.418 211.126 195.424C211.523 197.429 211.297 198.971 210.51 200.079C209.724 201.187 208.343 201.909 206.318 202.195C204.294 202.482 201.687 202.323 198.552 201.727C192.285 200.536 184.024 197.62 174.332 193.221C154.956 184.428 129.956 169.754 103.932 151.278C77.9077 132.803 55.8097 114.04 41.1189 98.6471C33.7706 90.9477 28.2934 84.1105 25.102 78.587C23.5054 75.8239 22.4961 73.4152 22.0991 71.4095C21.7022 69.4039 21.9278 67.862 22.7144 66.754C23.5011 65.6459 24.8824 64.9245 26.9067 64.6379C28.931 64.3512 31.5378 64.5098 34.6729 65.1058C40.9399 66.2972 49.2013 69.2126 58.8932 73.6108C78.2694 82.4039 103.269 97.0793 129.293 115.555Z"
            stroke="#FFA793"
          />
          <path
            d="M36.0727 93.5514C34.3547 88.4354 36.7781 79.3474 42.1739 73.1041C34.0978 74.7984 25.9647 73.4624 21.3313 68.5321C23.4272 76.4895 17.9339 83.3009 15.2301 88.9794C20.4194 88.986 30.1278 87.8619 36.0727 93.5514Z"
            fill="#FFCCC0"
          />
        </svg>
      </div>

      <div className="absolute bottom-120 right-20 opacity-70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="66"
          height="99"
          viewBox="0 0 66 99"
          fill="none"
        >
          <path
            d="M66 49.5C54 45.9643 39 24.75 33 0C27 24.75 15 44.7857 0 49.5C18 56.5714 25 82.5 33 99C39 84.8571 48 56.5714 66 49.5Z"
            fill="#C56F54"
            fill-opacity="0.37"
          />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className=" relative max-w-6xl flex justify-self-center px-4 py-16   min-h-screen">
        <div className="relative flex  ">
          <button className={` group relative inline-block mr-8`}>
            {/* Outer Container */}
            <div className="relative w-[160px] h-[90px]">
              {/* Blurred Orange Background - Positioned lower */}
              <div className="absolute inset-0 flex items-end justify-center pt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="344"
                  height="284"
                  viewBox="0 0 344 284"
                  fill="none"
                  className="absolute"
                  style={{ width: "140px", height: "auto" }}
                >
                  <g filter="url(#filter0_f_1_5)">
                    <ellipse
                      cx="172"
                      cy="142"
                      rx="69"
                      ry="39"
                      fill="#FFA793"
                      fillOpacity="0.68"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_1_5"
                      x="0"
                      y="0"
                      width="344"
                      height="284"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="51.5"
                        result="effect1_foregroundBlur_1_5"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>

              {/* Black Outline Ellipse */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="90"
                viewBox="0 0 160 90"
                fill="none"
                className="absolute inset-0"
              >
                <path
                  d="M80 1C101.952 1 121.777 6.00722 136.078 14.0518C150.411 22.114 159 33.0953 159 45C159 56.9047 150.411 67.886 136.078 75.9482C121.777 83.9928 101.952 89 80 89C58.0479 89 38.2233 83.9928 23.9219 75.9482C9.58906 67.886 1 56.9047 1 45C1 33.0953 9.58906 22.114 23.9219 14.0518C38.2233 6.00722 58.0479 1 80 1Z"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>

              {/* Shop Now Text with Underline */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="123"
                  height="27"
                  viewBox="0 0 123 27"
                  fill="none"
                >
                  <path
                    d="M5.536 21.5679C9.984 21.5679 13.824 18.7519 13.824 15.0719C13.824 12.2239 11.488 10.4959 10.08 9.37594C8.448 8.06394 7.52 6.94394 7.52 5.47194C7.52 3.39194 9.376 1.66394 11.776 1.66394C14.336 1.66394 15.232 3.64794 14.88 6.52794H15.52L16.704 2.49594C16.128 1.82394 14.72 0.575941 11.84 0.575941C7.808 0.575941 4.544 3.03994 4.544 6.49594C4.544 9.02394 6.304 10.3359 7.84 11.5519C9.408 12.7999 10.656 14.0159 10.656 15.8719C10.656 18.3999 8.384 20.4799 5.568 20.4799C2.944 20.4799 1.568 18.5599 1.92 15.4559H1.248L0.224 19.4559C0.832 20.0959 2.432 21.5679 5.536 21.5679ZM23.3728 21.5039C26.1888 21.5039 30.8608 13.9199 31.0528 9.91994C31.1808 7.90394 30.1248 7.16794 28.7488 7.16794C26.6688 7.16794 23.7248 8.83194 20.7168 14.3039L20.4928 14.3359L21.9648 10.9439L25.4528 0.479942L25.1328 -5.91278e-05L19.8848 0.735941L19.6288 1.56794C21.7408 1.56794 22.3488 1.98394 21.7728 3.67994L15.7888 21.2159H18.3808C20.4608 15.0719 24.4928 8.95994 27.0208 8.95994C27.4368 8.95994 28.1088 9.05594 28.0128 10.9439C27.8848 13.2159 25.6128 20.5119 24.0768 20.5119C23.6288 20.5119 23.9167 18.6559 22.6688 18.6559C22.0928 18.6559 21.5168 19.1039 21.5168 19.9039C21.5168 21.0559 22.7328 21.5039 23.3728 21.5039ZM35.2195 21.5359C39.8595 21.5359 44.5635 16.2559 44.5635 11.1359C44.5635 8.22394 42.9955 7.16794 40.9155 7.16794C36.2755 7.16794 31.5715 12.3519 31.5715 17.5359C31.5715 20.4799 33.1395 21.5359 35.2195 21.5359ZM34.3555 17.8239C34.3555 14.5919 36.8195 8.12794 39.8595 8.12794C41.0755 8.12794 41.7795 9.15194 41.7795 10.8799C41.7795 14.2079 39.2515 20.5759 36.3075 20.5759C34.9955 20.5759 34.3555 19.4879 34.3555 17.8239ZM42.1535 26.1119L41.9615 26.8159H49.1615L49.3535 26.1119C47.9775 25.9519 47.2735 25.8239 47.2735 25.0879C47.2735 24.8639 47.3695 24.5439 47.4975 24.1599L48.3295 21.7599C54.6975 20.9279 59.4335 15.9359 59.4335 11.4239C59.4335 8.22394 57.0015 7.07194 54.5695 7.07194C54.2175 7.07194 53.8655 7.10394 53.4815 7.13594L54.6975 3.64794L52.0415 3.96794L50.6015 7.99994C49.3215 8.57594 47.8815 9.53594 46.3775 11.0399L46.6975 11.8079C47.9455 10.7519 49.0655 9.98394 50.0895 9.47194L44.9055 24.0959C44.3615 25.6319 43.5935 25.8559 42.1535 26.1119ZM48.6495 20.8959L52.9695 8.57594C53.1615 8.54394 53.3215 8.54394 53.4815 8.54394C55.3375 8.54394 56.6175 9.56794 56.6175 11.9679C56.6175 15.7759 53.4495 20.0959 48.6495 20.8959ZM64.8503 20.5119L64.6582 21.2159H70.9303L71.0903 20.5439C69.5223 20.2239 68.6583 20.0319 69.3623 17.8879L73.8743 4.12794L79.5703 21.2159H80.7543L86.1943 4.47994C86.8983 2.33594 87.9543 2.04794 89.5863 1.75994L89.8103 1.05594H83.5382L83.3463 1.72794C84.9143 2.04794 85.7783 2.23994 85.0743 4.38394L81.1703 16.2239L76.0823 1.05594H71.2183L71.0263 1.75994C72.4343 2.04794 73.2983 2.23994 72.5943 4.38394L68.2423 17.7919C67.5383 19.9359 66.4823 20.2239 64.8503 20.5119ZM89.6883 21.5359C94.3283 21.5359 99.0323 16.2559 99.0323 11.1359C99.0323 8.22394 97.4643 7.16794 95.3843 7.16794C90.7443 7.16794 86.0403 12.3519 86.0403 17.5359C86.0403 20.4799 87.6083 21.5359 89.6883 21.5359ZM88.8243 17.8239C88.8243 14.5919 91.2883 8.12794 94.3283 8.12794C95.5443 8.12794 96.2483 9.15194 96.2483 10.8799C96.2483 14.2079 93.7203 20.5759 90.7763 20.5759C89.4643 20.5759 88.8243 19.4879 88.8243 17.8239ZM102.51 21.5359C104.462 21.5359 107.118 19.6799 109.39 17.2799L108.654 19.2639C108.238 20.3839 108.782 21.5359 110.318 21.5359C114.606 21.5359 122.094 12.6719 122.094 8.70394C122.094 5.95194 118.798 7.45594 117.198 8.57594L117.454 9.08794C118.926 8.38394 119.47 9.15194 119.47 10.3359C119.47 13.5359 114.67 20.1279 112.014 20.1279C111.342 20.1279 111.214 19.7119 111.502 18.9119L114.894 9.34394C115.374 8.03194 114.83 7.23194 113.71 7.23194C112.238 7.23194 110.51 8.76794 108.43 12.0319L108.91 12.5759C111.214 9.43994 112.622 8.60794 111.726 11.0079L111.214 12.3839C109.966 15.7439 106.382 20.1279 104.206 20.1279C103.534 20.1279 103.406 19.7119 103.694 18.9119L107.086 9.34394C107.566 8.03194 107.022 7.23194 105.902 7.23194C104.43 7.23194 102.702 8.76794 100.622 12.0319L101.102 12.5759C103.406 9.43994 104.814 8.60794 103.918 11.0079L100.846 19.2639C100.43 20.3839 100.974 21.5359 102.51 21.5359Z"
                    fill="black"
                  />
                  <path
                    d="M0 25.2159H121.294V26.8159H0V25.2159Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </button>
          {/* Left Content */}
          <div className="space-y-18">
            {/* Heading */}
            <div className="space-y-2 -mb-18 ml-12">
              <h1 className="text-6xl md:text-7xl font-serif text-gray-800 leading-tight">
                LUXARY HAS A
              </h1>
              <div className="relative inline-block">
                <h2 className="text-5xl md:text-6xl font-serif italic text-white relative z-10 px-4">
                  new ADDRESS
                </h2>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-200/60 to-pink-200/60 blur-sm"></div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-self-center   ">
              <div className="relative flex justify-self-center rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={heroImg}
                  alt="Luxury fashion model"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
