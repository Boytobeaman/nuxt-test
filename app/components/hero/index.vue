<script setup>
import Header from "./Header.vue";

const playVideo = () => {
  let video = document.getElementById("introduceVideo");
  video.play();
  video.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
}
</script>

<template>
  <div class="relative">
    <Header />
    <section class="w-full grid grid-cols-1 md:grid-cols-2 items-center p-3 sm:p-12 my-2">
      <div class="space-y-3">
        <p class="uppercase font-poppins text-sm text-[#DF6951] font-bold">
          Our LI-SOCl2 ER battery are renowned for
        </p>
        <div
          class="font-volkhov font-bold text-3xl md:text-4xl lg:text-5xl text-[#181E4B]"
        >
          <div class="flex space-x-3">
            <div class="py-5">Exceptional performance </div>
          </div>
          <div class="py-3">And reliability</div>
          <div class="text-3xl">In wholesale price</div>
        </div>
        <p class="font-poppins text-gray-500 text-sm">
          Whether you need batteries for industrial applications, medical devices,IoT, or something else, we got you covered,our batteries are designed to deliver long-lasting power and are capable of operating in extreme temperatures
        </p>
        <div class="flex items-center space-x-3">
          <!-- <button type="button" aria-label="Find out more"
            class="block bg-[#F1A501] text-white p-3 text-sm font-poppins rounded-md"
          >
            Find out more
          </button> -->
          <!-- <button type="button" aria-label="Play demo" class="font-poppins flex mt-5">
            <svg
              class="w-20"
              viewBox="0 0 112 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1_131)">
                <circle cx="56" cy="41" r="26" fill="#DF6951" />
              </g>
              <path
                d="M64 42.5L52.75 48.9952L52.75 36.0048L64 42.5Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_d_1_131"
                  x="0"
                  y="0"
                  width="112"
                  height="112"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="15" />
                  <feGaussianBlur stdDeviation="15" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.87451 0 0 0 0 0.411765 0 0 0 0 0.317647 0 0 0 0.3 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_131"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_131"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <p class="mt-5">Play Video</p>
          </button> -->
        </div>
      </div>
      <div>
        <nuxt-picture
          src="/images/hybrid-capacitor-battery.png"
          width="765"
          height="764"
          alt="hybrid capacitor battery"
          sizes="sm:100vw md:50vw lg:400px"
        />
        <svg
          class="absolute top-0 right-0 w-[35rem] -z-10"
          viewBox="0 0 704 724"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.3069 222C-18.0931 153.2 5.4736 13.3333 22.3069 -48L701.807 -149L766.307 122.5L727.807 723.5C649.14 724.5 473.707 717 401.307 679C310.807 631.5 351.807 555 276.807 515C201.807 475 244.807 369.5 218.807 329.5C192.807 289.5 72.8069 308 22.3069 222Z"
            fill="#FFF1DA"
          />
        </svg>
      </div>
    </section>
    <section class="px-32 py-10 bg-slate-100">
      
      <h2 class="text-center text-4xl font-bold">Our battery technology intruduction</h2>
      <div class="flex justify-center cursor-pointer" @click="playVideo">
        <svg
          class="w-20"
          viewBox="0 0 112 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1_131)">
            <circle cx="56" cy="41" r="26" fill="#DF6951" />
          </g>
          <path
            d="M64 42.5L52.75 48.9952L52.75 36.0048L64 42.5Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_1_131"
              x="0"
              y="0"
              width="112"
              height="112"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="15" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.87451 0 0 0 0 0.411765 0 0 0 0 0.317647 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_131"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_131"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <video width="100%" height="auto" id="introduceVideo" controls poster="/images/iot-bettery-poster.png">
        <source src="/videos/video-of-iot-battery.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p class="text-slate-100 text-xxs">smart IoT
        products and solutions as well as the arrival of 5g
        will touch every aspect of our lives
        advanced IoT devices such as cargo trackers or
        smart sensors require battery with high
        current pulses and stable operation under
        extreme environmental conditions
        however conventional lithium
        ion batteries cannot meet these requirements
        due to inherent drawbacks
        where the electrolyte is unstable under
        high temperature
        leading to battery failure
        and loses its conductivity under low temperature
        moreover lithium
        ions cannot insert into the rigid
        electrode lattice under
        extreme temperatures
        thus ceasing the battery operation
        these drawbacks limit the
        operating temperatures of conventional batteries
        to only minus 20
        to 60 degrees Celsius
        with the structural
        design and materials formulation for anode materials
        cathode materials and electrolyte
        Nami has developed a brand new rechargeable lithium
        ion battery which enables stable operation
        and high pulse current under
        extreme temperatures from minus 40
        to 85 degrees Celsius
        unlike conventional batteries
        Nami's extreme temperature
        battery is designed with nanomized
        electrode materials with increased lattice distance
        which facilitates the lithium diffusion during battery
        operation innovative additives can make the
        electrolyte have better
        tolerance to extreme temperatures
        preventing the
        electrolyte from freezing or decomposing
        the adoption of these new materials
        enable stable power output under
        extreme temperatures
        which is 60 times that of the conventional battery
        Nami's extreme temperature battery
        also has a long battery lifespan
        of more than 3000
        charge and discharge cycles
        outperforming conventional batteries in terms of pulse
        current
        operating temperature range
        power output and lifespan
        Nami's extreme temperature battery is ideal for IoT
        and 5g devices under harsh environmental conditions
        it has been successfully applied in
        electronic toll collection
        an outdoor smart water meter
        future applications include cold chain transportation
        GPS tracking and smart farming
        this technology will enable a sustainable
        energy source to power
        today's smart city
        </p>
    </section>
  </div>
</template>