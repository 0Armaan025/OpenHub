import React from "react";
import { CCard, CCardBody, CCardText, CCardTitle } from "@coreui/react";
import Footer from "../../../components/footer/Footer";

const MiddlePart = () => {
  return (
    <>
      <div className="middlePart">
        <center>
          <br />

          <div className="textAreaDiv items-center flex flex-col justify-start">
            <h3
              className="text-6xl mt-8 font-medium text-[#b3b3b3]"
              style={{ fontFamily: "Poppins" }}
            >
              Open source contribution
            </h3>
            <h4
              className="text-start text-5xl mt-4 text-[#3ecf8e]"
              style={{ fontFamily: "Poppins" }}
            >
              Made easy
            </h4>
          </div>

          <h4
            className="mt-6 text-[#ededed] w-[35rem] font-medium"
            style={{ fontFamily: "Poppins" }}
          >
            OpenHub is an amazing place to start your open source adventure!🚀
            You can create projects, have realtime collaborative to-dos, assign
            tasks, and learn about open-source contributions! 🤩
          </h4>
          <div className="buttonsDiv mt-8 flex flex-row justify-center items-center">
            <input
              type="button"
              value={"Start your journey"}
              className="py-2 px-6 bg-[#309b67] cursor-pointer border-2 hover:bg-[#32805aca] transition-all text-white rounded-lg border-green-400"
              style={{ fontFamily: "poppins" }}
            />
            <input
              type="button"
              value={"📖 Documentation"}
              className="py-2 px-6 ml-4 bg-transparent cursor-pointer border-2 transition-all text-white rounded-lg border-gray-500 hover:border-gray-400"
              style={{ fontFamily: "poppins" }}
            />
          </div>
          <br />
          <br />
          <br />

          <a
            href="#"
            className="block max-w-sm p-6  border border-gray-200 rounded-lg shadow hover:bg-[#212121] dark:bg-[#2a2a2a] dark:border-gray-700 dark:hover:bg-[#212121] transition-all"
          >
            <h5
              className="mb-2 text-2xl font-black tracking-tight text-gray-900 dark:text-white"
              style={{ fontFamily: "Poppins" }}
            >
              Interactive Dashboard
            </h5>
            <p
              className="font-normal text-gray-700 dark:text-gray-400"
              style={{ fontFamily: "Poppins" }}
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFzaGJvYXJkfGVufDB8fDB8fHww"
                className="mt-8 rounded"
              />
              <br />
              Get Insights on contributions, tasks completed etc etc.
            </p>
          </a>
          <br />
          <br />
          <Footer />
        </center>
      </div>
    </>
  );
};

export default MiddlePart;
