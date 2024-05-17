import React, {useState} from "react";
import logo from "../Assets/hafib.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "../Components/Footer"
import "../App.css";
import { Link } from "react-router-dom";
import Select from 'react-select';

const Options=[
    {value:'Months', label:'Months'},
    {value:'Days', label:'Days'},
]

const Subscribe = () => {
    const [isServiceVisible, setIsServiceVisible] = useState(false);

    const toggleServiceVisibility = () => {
        setIsServiceVisible(!isServiceVisible);
    };
  return (
    <section className="subscribe">
      <div className="nav bg-[#065982] h-52 flex flex-col justify-start items-center gap-8 p-10">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-row p-5 text-white items-center cursor-pointer">
            <img src={logo} alt="" width={40} />
            <p className="text-2xl font-sans font-semibold">Hafi Yacu</p>
          </div>
          <div className="search flex flex-row justify-between items-center gap-7">
            <div className="flex justify-between items-center bg-white rounded-3xl p-2 w-96 ">
              <input
                type="text"
                name="search"
                id=""
                placeholder="Seach here"
                className="flex p-1 w-[90%] focus:border-0"
              />
              <Icon
                icon="material-symbols:search"
                className="w-[10%] cursor-pointer"
              />
            </div>
            <div className="flex gap-7 justify-center items-center text-white font-semibold">
              <Link to="/">
                <p className="hover:text-blue-400 cursor-pointer">Home</p>
              </Link>
              <div
                // onClick={toggleServiceVisibility}
                className="flex items-center justify-center gap-1"
              >
                <p className="hover:text-blue-400 cursor-pointer">Service</p>
                <Icon
                  className="hover:text-blue-400 cursor-pointer hover:text-lg"
                  icon="oui:arrow-down"
                />
              </div>
              <Link to="/subscribe">
                <p className="hover:text-blue-400 cursor-pointer">Subscribe</p>
              </Link>
              <p className="hover:text-blue-400 cursor-pointer">Login</p>
              <p className="hover:text-blue-400 cursor-pointer">Register</p>
              <p className="hover:text-blue-400 cursor-pointer">En</p>
              <p className="hover:text-blue-400 cursor-pointer">Kin</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 justify-center items-center text-center text-white font-bold text-xl">
          Hafi Yacu
        </div>
      </div>
      <div id="subscribe" className="flex flex-col justify-center items-center p-8 gap-6">
        <div className="sub text-lg font-semibold text-[#011936]">Subscription</div>
        <div className="sub2 w-full flex justify-between items-start px-28 w-full gap-24">
          <div className="words w-[50%] flex flex-col gap-5 justify-start items-start text-[#011936] text-start">
            <p>
              Hafi yawe ni company yiteguye gukorana n’ubishaka yaba umuntu ku
              giti cye cyangwa company, kugirango abashe gukurikiranirwa
              ibijyanye n’imisoro gucunga uko imisoro ndetse ninzindi service
              yifuza yazihabwa muburyo bwihuse
            </p>
            <p>
              Ikindi kandi hafi yawe ku mu client waguze iri fatabuguzi wese
              abasha gukurikiranirwa imisoro ye yose nk’uko amasezerano abyemeza
              ko nta mu client uzigera acibwa amande yafashe irifatabuguzi kuwo
              bizabaho hafi yawe yemera kuriha amande ndetse ninyungu ku mande
              azaba yiciwe n’icyigo gishinzwe imisoro.
            </p>
            <p>
              buri client waguze iri fatabuguzi wese yemerewe kujya ahabwa
              service yihuse kandi inogeye buri umwe
            </p>
            <p>
              Umu client wese ugura iri fata buguzi azajya agabanyirizwa 20%
              kuyo yishyuraga iyo service
            </p>
            <p>Murakoze kugura iri fatabuguzi</p>
            <p>
              Kubindi bisobanuro wahamagara <a href="">0783544930</a>
            </p>
            <p>Ukabasha gusobanurirwa ibyiza byiyi subscription</p>
          </div>
          <div className="form w-[50%] flex justify-start items-start">
            <div className="form1 flex flex-col justify-start items-start gap-5">
                <input type="text" name="name" id="name" placeholder="Name" className="flex justify-start items-start py-2 px-4 border border-gray-300 rounded-md w-96 focus:border-blue-600" required/>
                <Select options={Options} placeholder="Duration_Type" required className="w-96"/>
                <input type="text" name="value" id="vl"  placeholder="Duration_Value" className="flex justify-start items-start py-2 px-4 border border-gray-300 rounded-md w-96 focus:border-blue-600" required/>
                <input type="number" name="tin" id="tin" placeholder="Tin_Number" className="flex justify-start items-start py-2 px-4 border border-gray-300 rounded-md w-96 focus:border-blue-600" required/>
                <input type="text" name="desc" id="desc" placeholder="Description" className="flex justify-start items-start py-2 px-4 border border-gray-300 rounded-md w-96 focus:border-blue-600" required/>
                <div className="w-96 flex justify-between items-center">
                    <button className="bg-[#065982] p-2 w-24 cursor-pointer rounded-sm text-white font-semibold text-sm hover:w-28">Back</button>
                    <button className="bg-gray-100 p-2 w-24 cursor-pointer rounded-sm text-[#065982] font-semibold text-sm hover:w-28">Next</button>
                </div>
            </div>
            {/* <div className="form2"></div> */}
          </div>
        </div>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </section>
  );
};

export default Subscribe;
