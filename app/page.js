'use client'
import { useEffect } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="relative bg-white w-full h-[3777.2px] overflow-hidden text-center text-[25.65px] text-black font-kulim-park">
      <div className="absolute top-[2851.71px] left-[-1.28px] box-border w-[1234.58px] h-[2.56px] border-t-[2.6px] border-solid border-white" />
      <div className="absolute top-[2877.79px] left-[25.65px] w-[1159.32px] h-[411.23px]">
        <div className="absolute top-[0px] left-[0px] text-[68.4px] font-semibold text-teal inline-block w-[431.75px] h-[106.01px]">
          Testimonials
        </div>
        <div
          className="absolute top-[106.01px] left-[34.2px] rounded-mid-1 bg-whitesmoke box-border w-[337.71px] h-[305.22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_shadow-drop-bottom] opacity-[1] border-[0.9px] border-solid border-gray-500"
          data-animate-on-scroll
        >
          <img
            className="absolute top-[22.23px] left-[15.39px] rounded-[50%] w-[70.96px] h-[68.4px] object-cover"
            alt=""
            src="/ellipse-13@2x.png"
          />
          <div className="absolute top-[24.79px] left-[78.66px] font-semibold inline-block w-[185.53px] h-[29.92px]">
            Andres Ivan
          </div>
          <div className="absolute top-[48.73px] left-[89.77px] font-extralight inline-block w-[141.07px] h-[29.92px]">
            Bangalore
          </div>
          <img
            className="absolute top-[90.63px] left-[87.15px] w-[32.49px] h-[28.21px]"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="absolute top-[90.63px] left-[119.63px] w-[32.49px] h-[28.21px]"
            alt=""
            src="/star-2.svg"
          />
          <img
            className="absolute top-[90.63px] left-[152.12px] w-[32.49px] h-[28.21px]"
            alt=""
            src="/star-3.svg"
          />
          <img
            className="absolute top-[90.63px] left-[184.61px] w-[32.49px] h-[28.21px]"
            alt=""
            src="/star-4.svg"
          />
          <img
            className="absolute top-[90.63px] left-[217.1px] w-[32.49px] h-[28.21px]"
            alt=""
            src="/star-5.svg"
          />
          <div className="absolute top-[141.92px] left-[5.13px] font-extralight inline-block w-[272.73px] h-[73.53px]">
            Very fresh and reliable.
          </div>
        </div>
        <div
          className="absolute top-[106.01px] left-[430.04px] rounded-mid-1 bg-whitesmoke box-border w-[337.71px] h-[305.22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_shadow-drop-bottom] opacity-[1] border-[0.9px] border-solid border-gray-500"
          data-animate-on-scroll
        >
          <img
            className="absolute top-[22.23px] left-[21.37px] rounded-[50%] w-[70.96px] h-[68.4px] object-cover"
            alt=""
            src="/ellipse-14@2x.png"
          />
          <img
            className="absolute top-[90.63px] left-[88.86px] w-[32.49px] h-[28.21px]"
            alt=""
            src="/star-6.svg"
          />
          <img
            className="absolute top-[90.63px] left-[121.34px] w-[32.49px] h-[28.21px]"
            alt=""
            src="/star-7.svg"
          />
          <img
            className="absolute top-[90.63px] left-[153.83px] w-[32.49px] h-[28.21px]"
            alt=""
            src="/star-8.svg"
          />
          <img
            className="absolute top-[90.63px] left-[186.32px] w-[32.49px] h-[28.21px]"
            alt=""
            src="/star-9.svg"
          />
          <img
            className="absolute top-[90.63px] left-[218.81px] w-[32.49px] h-[28.21px]"
            alt=""
            src="/star-10.svg"
          />
          <div className="absolute top-[141.92px] left-[6.84px] font-extralight inline-block w-[272.73px] h-[73.53px]">
            Very fresh and reliable.
          </div>
          <div className="absolute top-[26.5px] left-[107.72px] font-semibold text-left inline-block w-[162.44px] h-[29.92px]">{`Adriana `}</div>
          <div className="absolute top-[53.01px] left-[96.61px] font-extralight inline-block w-[141.07px] h-[29.92px]">
            Mangalore
          </div>
        </div>
        <div
          className="absolute top-[106.01px] left-[821.61px] rounded-mid-1 bg-whitesmoke box-border w-[337.71px] h-[305.22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_shadow-drop-bottom] opacity-[1] border-[0.9px] border-solid border-gray-500"
          data-animate-on-scroll
        >
          <img
            className="absolute top-[90.83px] left-[229.92px] w-[32.49px] h-[28.21px]"
            alt=""
            src="/star-15.svg"
          />
          <img
            className="absolute top-[22.23px] left-[25.65px] rounded-[50%] w-[70.96px] h-[68.4px] object-cover"
            alt=""
            src="/ellipse-15@2x.png"
          />
          <img
            className="absolute top-[90.63px] left-[99.97px] w-[32.49px] h-[28.21px]"
            alt=""
            src="/star-11.svg"
          />
          <img
            className="absolute top-[90.63px] left-[132.46px] w-[32.49px] h-[28.21px]"
            alt=""
            src="/star-12.svg"
          />
          <img
            className="absolute top-[90.63px] left-[164.95px] w-[32.49px] h-[28.21px]"
            alt=""
            src="/star-13.svg"
          />
          <img
            className="absolute top-[90.63px] left-[197.44px] w-[32.49px] h-[28.21px]"
            alt=""
            src="/star-14.svg"
          />
          <div className="absolute top-[141.92px] left-[17.95px] font-extralight inline-block w-[272.73px] h-[73.53px]">
            Very fresh and reliable.
          </div>
          <div className="absolute top-[28.21px] left-[112px] font-semibold text-left inline-block w-[162.44px] h-[29.92px]">
            Walmart
          </div>
          <div className="absolute top-[56.43px] left-[100.88px] font-extralight inline-block w-[141.07px] h-[29.92px]">
            Tamil Nadu
          </div>
        </div>
      </div>
      <div className="absolute top-[0.86px] left-[-2.56px] w-[1313.28px] h-[2852.14px] overflow-hidden text-left text-[20.52px] text-white">
        <img
          className="absolute top-[1444.02px] left-[2.56px] w-[1231.14px] h-[1395.29px] object-cover"
          alt=""
          src="/rectangle-3@2x.png"
        />
        <div className="absolute top-[2159.62px] left-[75.24px] w-[44.46px] h-[51.3px] overflow-hidden" />
        <section className="absolute top-[0px] left-[0px] w-[1232.62px] h-[2063.87px] text-left text-[30.78px] text-black font-kulim-park">
          <img
            className="absolute top-[0px] left-[2.56px] w-[1232.62px] h-[709.61px] object-cover"
            alt=""
            src="/alimentos-orgnicos--quais-os-benefcios--1@2x.png"
          />
          <div className="absolute top-[18.81px] left-[26.5px] w-[1173px] h-[2045.06px]">
            <div className="absolute top-[49.59px] left-[0px] rounded-[34.2px] bg-white w-[1173px] h-[106.01px]" />
            <Button
              className="absolute h-[calc(100%_-_2020.26px)] w-[calc(100%_-_1072.97px)] bg-green-800 top-[98.25px] left-[1072.81px]"
              sx={{ width: 100.030029296875 }}
              color="success"
              variant="contained"
              onClick={()=>{router.push('/RetailerLogin')}}
            >
              Retailer
            </Button>
            <Button
              className="absolute h-[calc(100%_-_2020.26px)] w-[calc(100%_-_1096.91px)] bg-green-800 top-[98.25px] left-[958.78px]"
              sx={{ width: 76.09122467041016 }}
              color="success"
              variant="contained"
              onClick={()=>{router.push('/FarmerLogin')}}
            >
              Farmer
            </Button>
            <div className="absolute top-[0px] left-[486.47px] rounded-[50%] bg-white w-[205.19px] h-[205.19px]" />
            <img
              className="absolute top-[7.69px] left-[479.63px] w-[218.01px] h-[190.66px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              alt=""
              src="/farmhub-logo-1@2x.png"
              data-animate-on-scroll
            />
            <b className="absolute top-[91.48px] text-[15px] left-[58.14px] text-mid-1 inline-block font-istok-web text-green-800 w-[239.39px] h-[23.08px]">
              : farmhub.info@gmail.com
            </b>
            <div className="absolute top-[75.65px] left-[279.14px] box-border w-[0.85px] h-[59.87px] border-r-[0.9px] border-solid border-teal" />
            <img
              className="absolute top-[87.21px] left-[284.7px] w-[34.2px] h-[34.2px] overflow-hidden"
              alt=""
              src="/call-fill0-wght400-grad0-opsz24-1.svg"
            />
            <b className="absolute top-[91.48px] text-[15px] text-green-800 left-[319.75px] text-mid-1 inline-block font-istok-web text-teal w-[160.73px] h-[23.08px]">
              : +91 9897754775
            </b>
            <div className="absolute top-[67.54px] left-[779.72px] text-[20.52px] text-darkslategray inline-block w-[117.98px] h-[22.23px]">
              Register As:
            </div>
            <div className="absolute top-[65.18px] left-[996.96px] text-[20.52px] font-istok-web text-darkslategray inline-block w-[100.43px] h-[24.79px]">
              Sign In As:
            </div>
            <Button
              className="absolute h-[calc(100%_-_2020.26px)] bg-green-800 w-[calc(100%_-_1072.97px)] top-[94.84px] left-[838.51px]"
              sx={{ width: 100.030029296875 }}
              color="success"
              variant="contained"
              onClick={()=>{router.push('/RetailerRegistration')}}
            >
              Retailer
            </Button>
            <Button
              className="absolute h-[calc(100%_-_2020.26px)] bg-green-800 w-[calc(100%_-_1096.91px)] top-[94.84px] left-[729.98px]"
              sx={{ width: 76.09122467041016 }}
              color="success"
              variant="contained"
                            onClick={()=>{router.push('/FarmerLogin')}}

            >
              Farmer
            </Button>
            <div className="absolute top-[1152.94px] text-green-900 left-[603.06px] text-center inline-block w-[161.59px] h-[37.62px]">
              Karnataka
            </div>
            <div className="absolute top-[1152.94px] text-green-900 left-[764.65px] text-center inline-block w-[161.59px] h-[37.62px]">
              Tamil Nadu
            </div>
            <div className="absolute top-[1171.75px] left-[756.95px] rounded-[50%] bg-darkslategray w-[11.11px] h-[9.4px]" />
            <div className="absolute top-[1172.6px] left-[927.94px] rounded-[50%] bg-darkslategray w-[10.26px] h-[9.4px]" />
            <div className="absolute top-[1156.36px] left-[910.85px] text-center inline-block w-[161.59px] h-[37.62px]">
              Kerela
            </div>
          </div>
          <div
            className="absolute top-[224px] left-[271.88px] font-kaushan-script inline-block w-[730.13px] h-[307.78px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-[93.19px] text-mintcream"
            data-animate-on-scroll
          >
            <p className="m-0 text-white">
              <span>1</span>
              <span className="leading-[170.99px]">
                <span>00%</span>
              </span>
            </p>
            <p className="m-0 text-[188.09px] text-white">
              <span className="leading-[170.99px]">
                <span> Organic</span>
              </span>
            </p>
          </div>
        </section>
        <div
          className="absolute top-[836.15px] text-green-900 text-5xl left-[656.61px] text-[42.75px] font-kaushan-script text-darkslategray inline-block w-[396.7px] h-[63.27px] [&.animate]:animate-[1s_ease_0s_1_reverse_forwards_scale-down-center] opacity-[1]"
          data-animate-on-scroll
        >
          Welcome to Farm Hub
        </div>
        <div className="absolute top-[866.93px] left-[502.72px] box-border w-[147.05px] h-[1.71px] border-t-[1.7px] border-dashed border-darkslategray" />
        <div className="absolute top-[866.93px] left-[1060.15px] box-border w-[147.05px] h-[1.71px] border-t-[1.7px] border-dashed border-darkslategray" />
        <div
          className="absolute top-[936.18px] left-[589.07px] text-[30.78px] text-green-800 text-center inline-block w-[544.61px] h-[211.17px] [&.animate]:animate-[1s_ease_1s_1_normal_forwards_slide-in-top] opacity-[0]"
          data-animate-on-scroll
        >
          Experience the juiciest farm-fresh fruit! Our orchards bountiful
          harvest brings you natures finest: plump peaches, succulent apples,
          and ripe berries. Taste the farm-to-table difference today!
        </div>
        <img
          className="absolute top-[799.39px] left-[69.25px] rounded-mid-1 w-[403.54px] h-[430.9px] object-cover"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <img
          className="absolute top-[1620.99px] left-[613.17px] w-[7.1px] h-[1231.14px]"
          alt=""
          src="/line-4.svg"
        />
        <div className="absolute top-[1378.19px] left-[541.19px] rounded-[50%] bg-seagreen w-[156.46px] h-[156.46px]" />
        <img
          className="absolute top-[1325.18px] left-[497.59px] w-[243.66px] h-[272.73px] object-cover"
          alt=""
          src="/free-vector---100--organic--fresh-healthy-natural-organic-food-symbolremovebgpreview-1@2x.png"
        />
        <div
          className="absolute top-[1623.81px] left-[13.46px] w-[654.08px] h-[191.55px] [&.animate]:animate-[1s_ease_0s_1_reverse_forwards_scale-down-center] opacity-[1]"
          data-animate-on-scroll
        >
          <div className="absolute top-[85.84px] left-[165.28px] inline-block w-[413.2px] h-[105.7px]">{`"We handpick the best from our farmers' fields, delivering fresh, top-quality produce`}</div>
          <div className="absolute top-[0px] left-[164.64px] text-[59.85px] font-kaushan-script inline-block w-[489.44px] h-[62.78px]">
            Harvest
          </div>
          <img
            className="absolute top-[0px] left-[0px] rounded-[50%] w-[149.27px] h-[151.83px] object-cover"
            alt=""
            src="/ellipse-8@2x.png"
          />
        </div>
        <div
          className="absolute top-[1621.25px] left-[630.38px] w-[682.91px] h-[442.67px] [&.animate]:animate-[1s_ease_0s_1_reverse_forwards_scale-down-center] opacity-[1]"
          data-animate-on-scroll
        >
          <div className="absolute top-[0px] left-[75.59px] w-[410px] h-[442.67px]" />
          <div className="absolute top-[302.37px] left-[172.33px] inline-block w-[431.78px] h-[105.7px]">{`""Support local farmers and choose fresher, healthier produce by picking up fruits and vegetables directly from the source."`}</div>
          <div className="absolute top-[215.89px] left-[171.69px] text-[59.85px] font-kaushan-script inline-block w-[511.22px] h-[63.42px]">
            Pick Up
          </div>
          <img
            className="absolute top-[215.89px] left-[0px] rounded-[50%] w-[155.03px] h-[153.11px] object-cover"
            alt=""
            src="/ellipse-9@2x.png"
          />
        </div>
        <div
          className="absolute top-[2040.78px] left-[13.68px] w-[683.11px] h-[191.51px] [&.animate]:animate-[1s_ease_0s_1_reverse_forwards_scale-down-center] opacity-[1]"
          data-animate-on-scroll
        >
          <div className="absolute top-[86.35px] left-[172.7px] inline-block w-[431.75px] h-[105.16px]">{`"Our partners provide World Class processing, packaging & storage facilities to ensure you get the best produce"`}</div>
          <div className="absolute top-[0px] left-[171.85px] text-[59.85px] font-kaushan-script inline-block w-[511.26px] h-[63.27px]">
            Processing
          </div>
          <img
            className="absolute top-[0px] left-[0px] rounded-[50%] w-[155.6px] h-[152.18px] object-cover"
            alt=""
            src="/ellipse-10@2x.png"
          />
        </div>
        <div
          className="absolute top-[2271.62px] left-[630.1px] w-[683.11px] h-[191.51px] [&.animate]:animate-[1s_ease_0s_1_reverse_forwards_scale-down-center] opacity-[1]"
          data-animate-on-scroll
        >
          <div className="absolute top-[86.35px] left-[172.7px] inline-block w-[431.75px] h-[105.16px]">{`"Enjoy the freedom to choose from a varied range of farmers and their products this ensures complete autonomy for the customer"`}</div>
          <div className="absolute top-[0px] left-[171.85px] text-[59.85px] font-kaushan-script inline-block w-[511.26px] h-[63.27px]">
            Order
          </div>
          <img
            className="absolute top-[0px] left-[0px] rounded-[50%] w-[155.6px] h-[152.18px] object-cover"
            alt=""
            src="/ellipse-11@2x.png"
          />
        </div>
        <div
          className="absolute top-[2502.46px] left-[13.68px] w-[683.11px] h-[191.51px] [&.animate]:animate-[1s_ease_0s_1_reverse_forwards_scale-down-center] opacity-[1]"
          data-animate-on-scroll
        >
          <div className="absolute top-[86.35px] left-[172.7px] inline-block w-[431.75px] h-[105.16px]">{`"Bringing the farm to your doorstep with a bounty of fresh, hand-picked fruits and vegetables."`}</div>
          <div className="absolute top-[0px] left-[171.85px] text-[59.85px] font-kaushan-script inline-block w-[511.26px] h-[63.27px]">
            Delivery
          </div>
          <img
            className="absolute top-[0px] left-[0px] rounded-[50%] w-[155.6px] h-[152.18px] object-cover"
            alt=""
            src="/ellipse-12@2x.png"
          />
        </div>
        <img
          className="absolute top-[104.3px] left-[48.73px] w-[36.76px] h-[34.2px] overflow-hidden"
          alt=""
          src="/mail-fill0-wght400-grad0-opsz24-2.svg"
        />
        <div className="absolute top-[1145.64px] left-[627.54px] w-[469.37px] h-[41.04px]" />
      </div>
      <div className="absolute top-[3318.95px] left-[-6.84px] w-[1235.41px] h-[436.03px] overflow-hidden text-[30.78px] text-gray-300">
        <div className="absolute top-[0px] left-[4.27px] w-[1231.14px] h-[436.03px]">
          <div className="absolute top-[41.89px] left-[515.54px] font-semibold text-gray-800 inline-block w-[205.19px] h-[39.33px]">
            Follow Us On:
          </div>
          <div className="absolute top-[41.89px] left-[720.73px] font-semibold text-gray-800 inline-block w-[205.19px] h-[39.33px]">
            Support
          </div>
          <div className="absolute top-[41.89px] left-[941.31px] font-semibold text-gray-800 inline-block w-[237.68px] h-[39.33px]">
            Customer Care
          </div>
          <div className="absolute top-[97.47px] left-[735.26px] font-light text-gray-500 inline-block w-[176.12px] h-[41.04px]">
            Support
          </div>
          <div className="absolute top-[138.5px] left-[735.26px] font-light text-gray-500 inline-block w-[176.12px] h-[41.04px]">
            FAQ’s
          </div>
          <div className="absolute top-[97.47px] left-[964.39px] font-light text-gray-500 inline-block w-[176.12px] h-[41.04px]">
            Contact Us
          </div>
          <div className="absolute top-[138.5px] left-[964.39px] font-light text-gray-500 inline-block w-[176.12px] h-[41.04px]">
            Feedback
          </div>
          <div className="absolute top-[179.54px] left-[964.39px] font-light text-gray-500 inline-block w-[176.12px] h-[41.04px]">
            Queries
          </div>
          <div className="absolute top-[179.54px] left-[735.26px] font-light text-gray-500 inline-block w-[176.12px] h-[41.04px]">
            Blog
          </div>
          <div className="absolute top-[30.78px] left-[28.21px] rounded-[25.65px] bg-white box-border w-[449.71px] h-[400.98px] border-[0.9px] border-solid border-black rounded-xl" />
          <div className="absolute top-[91.48px] left-[59.85px] rounded-mid-1 bg-gainsboro box-border w-[392.43px] h-[51.3px] border-[0.9px] border-solid border-gray-400 rounded-xl" />
          <div className="absolute top-[163.3px] left-[59.85px] rounded-mid-1 bg-gainsboro box-border w-[392.43px] h-[51.3px] border-[0.9px] border-solid border-gray-400 rounded-xl" />
          <div className="absolute top-[237.68px] left-[59.85px] rounded-mid-1 bg-gainsboro box-border w-[392.43px] h-[136.79px] border-[0.9px] border-solid border-gray-400 rounded-xl" />
          <div className="absolute top-[101.74px] left-[67.54px] text-[25.65px] font-extralight text-gray-600 inline-block w-[98.32px] h-[41.04px]">
            Name
          </div>
          <div className="absolute top-[171.85px] left-[71.82px] text-[25.65px] font-extralight text-gray-600 inline-block w-[97.47px] h-[37.62px]">
            E-Mail
          </div>
          <div className="absolute top-[247.08px] left-[59.85px] text-[25.65px] font-extralight text-gray-600 inline-block w-[130.81px] h-[37.62px]">
            Message
          </div>
          <div className="absolute top-[47.88px] left-[74.38px] text-[34.2px] text-green-900 inline-block w-[360.79px] h-[39.33px]">
            SEND YOUR MESSAGE
          </div>
          <div className="absolute top-[238.53px] left-[495.02px] font-semibold text-gray-800 inline-block w-[342.84px] h-[44.46px]">
            Download our App at:
          </div>
          <img
            className="absolute top-[282.99px] left-[587.36px] w-[133.37px] h-[126.53px] object-cover"
            alt=""
            src="/rectangle-9@2x.png"
          />
          <img
            className="absolute top-[294.11px] left-[890.01px] rounded-[8.55px] w-[197.5px] h-[52.15px] object-cover"
            alt=""
            src="/download-2-1@2x.png"
          />
          <div className="absolute top-[241.95px] left-[817.34px] font-semibold text-gray-800 inline-block w-[342.84px] h-[44.46px]">
            Or Get it on:
          </div>
          <img
            className="absolute top-[353.95px] left-[890.01px] rounded-[8.55px] w-[197.5px] h-[55.57px] object-cover"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div className="absolute top-[13.25px] left-[-0.43px] box-border w-[1232.01px] h-[0.85px] border-t-[0.9px] border-solid border-gray-600" />
        <img
          className="absolute top-[93.19px] left-[518.96px] w-[200.92px] h-[65.83px] object-cover"
          alt=""
          src="/image-20231017-171332897removebgpreview-1@2x.png"
        />
        <div className="absolute top-[382.17px] left-[190.66px] rounded-[8.55px] bg-green-800 box-border w-[133.37px] h-[42.75px] border-[0.9px] border-solid border-gray-400" />
        <div className="absolute top-[390.45px] left-[207.75px] text-[23.94px] font-extralight text-white inline-block w-[98.32px] h-[30.78px]">
          Send
        </div>
      </div>
    </div>
  );
};

export default Page;
