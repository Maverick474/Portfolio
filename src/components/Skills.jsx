import React from "react";
import "./Style.css";

const Skills = () => {
  return (
    <div className="py-20 custom-background h-full">
      <div className="w-3/4 mx-auto">
        <div className="flex items-center">
          <span>
            <i class="fa-solid fa-code text-slate-400 fa-2x"></i>
          </span>
          <h1 className="text-3xl font-bold ml-2">Skills:</h1>
        </div>

        <div className="mt-4 custom-grid custom-grid-md">
          <div>
            <h2 className="text-xl font-bold my-2">Coding Skills</h2>
            <div className="custom-border p-2">
              <h2 className="text-xl font-semibold">HTML</h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="custom-barColor h-2.5 rounded-full flex justify-center items-center"
                  style={{ width: "90%" }}
                >
                  <span className="text-white text-xs font-medium">90%</span>
                </div>
              </div>

              <h2 className="mt-2 text-xl font-semibold">CSS & Tailwindcss</h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="custom-barColor h-2.5 rounded-full flex justify-center items-center"
                  style={{ width: "90%" }}
                >
                  <span className="text-white text-xs font-medium">90%</span>
                </div>
              </div>

              <h2 className="mt-2 text-xl font-semibold">Javascript</h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="custom-barColor h-2.5 rounded-full flex justify-center items-center"
                  style={{ width: "83%" }}
                >
                  <span className="text-white text-xs font-medium">80%</span>
                </div>
              </div>

              <h2 className="mt-2 text-xl font-semibold">React</h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="custom-barColor h-2.5 rounded-full flex justify-center items-center"
                  style={{ width: "83%" }}
                >
                  <span className="text-white text-xs font-medium">80%</span>
                </div>
              </div>

              <h2 className="mt-2 text-xl font-semibold">Python</h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="custom-barColor h-2.5 rounded-full flex justify-center items-center"
                  style={{ width: "83%" }}
                >
                  <span className="text-white text-xs font-medium">80%</span>
                </div>
              </div>

              <h2 className="mt-2 text-xl font-semibold">SQL</h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="custom-barColor h-2.5 rounded-full flex justify-center items-center"
                  style={{ width: "85%" }}
                >
                  <span className="text-white text-xs font-medium">85%</span>
                </div>
              </div>

            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold my-2">Professional Skills</h2>
            <div className="custom-border p-2">
              <h2 className="text-xl font-semibold">Web Development</h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="custom-barColor h-2.5 rounded-full flex justify-center items-center"
                  style={{ width: "85%" }}
                >
                  <span className="text-white text-xs font-medium">85%</span>
                </div>
              </div>

              <h2 className="mt-2 text-xl font-semibold">Web Design</h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="custom-barColor h-2.5 rounded-full flex justify-center items-center"
                  style={{ width: "85%" }}
                >
                  <span className="text-white text-xs font-medium">85%</span>
                </div>
              </div>

              <h2 className="mt-2 text-xl font-semibold">Artifical Intelligence</h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="custom-barColor h-2.5 rounded-full flex justify-center items-center"
                  style={{ width: "80%" }}
                >
                  <span className="text-white text-xs font-medium">80%</span>
                </div>
              </div>

              <h2 className="mt-2 text-xl font-semibold">Machine Learning</h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="custom-barColor h-2.5 rounded-full flex justify-center items-center"
                  style={{ width: "80%" }}
                >
                  <span className="text-white text-xs font-medium">80%</span>
                </div>
              </div>

              <h2 className="mt-2 text-xl font-semibold">Canvas</h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="custom-barColor h-2.5 rounded-full flex justify-center items-center"
                  style={{ width: "85%" }}
                >
                  <span className="text-white text-xs font-medium">85%</span>
                </div>
              </div>

              <h2 className="mt-2 text-xl font-semibold">Git & Github</h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="custom-barColor h-2.5 rounded-full flex justify-center items-center"
                  style={{ width: "90%" }}
                >
                  <span className="text-white text-xs font-medium">90%</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
