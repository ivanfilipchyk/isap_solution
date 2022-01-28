import React from 'react'

export default function Cloud(props) {
  return (
    <section className="overflow-hidden bg-trueGray-200">
      <div className="padding-box-x box-twoColumn-left box-twoColumn-right">
        <div className="items-start flex flex-wrap">
          <div className="w-full lg:w-1/4 mr-auto text-left py-10 bg-trueGray-200 relative md:px-8 lg:px-0">
            <div className="flex flex-wrap md:pr-0 lg:pr-8 ">
              <div className="w-full md:w-1/3 lg:w-full text-center md:text-left">
                <h5 className="text-gray-700 font-medium text-lg">
                  iSAP Data Center
                </h5>
                <h1 className="text-gray-700 font-extrabold text-4xl mt-1 mb-10">
                  Cloud
                </h1>
              </div>
              <div className="w-full md:w-2/3 lg:w-full text-center md:text-left">
                <p className="text-gray-700 text-sm font-medium py-4-mini">
                  Top server hardware
                </p>
                <p className="text-gray-700 text-sm font-medium py-4-mini">
                  Highly secure facility
                </p>
                <p className="text-gray-700 text-sm font-medium py-4-mini">
                  Quantum technology
                </p>
                <p className="text-gray-700 text-sm font-medium py-4-mini">
                  SAP, WEB, Gaming
                  hosting
                </p>
                <p className="text-gray-700 text-sm font-medium py-4-mini">
                  Cost-effective
                </p>
                <p className="text-gray-700 text-sm font-medium py-4-mini">
                  Efficient
                </p>
              </div>
              <span
                className="absolute bg-gray-700 top-0 left-0 transform -translate-x-full h-full w-screen"
                style={{
                  zIndex: -1,
                }}
              ></span>
            </div>
          </div>
          <div className="w-full lg:w-3/4 ml-auto bg-trueGray-200 relative">
            <img src="/img/cloud_1.gif" />
          </div>
        </div>
      </div>
    </section>
  );
}
