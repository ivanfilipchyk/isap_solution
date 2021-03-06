import React from "react";

export default function OrderCard({
  title,
  mainText,
  mainTextSecond,
  subTitle,
  subContent,
}) {
  return (
    <section
      key={title}
      className="box-my-60px"
    >
      <div className="items-start flex flex-wrap">
        <div
          key={title + 1}
          className="w-full width-40 c-bg-trueGray-100 padding-box-x"
        >
          <div
            key={title + 2}
            className="pr-20px box-twoColumn-left"
          >
            <h5 className="c-text-trueGray-700 c-text-title-normal sub-title-text">
              {title}
            </h5>
            <p className="c-text-trueGray-400 c-text-body-normal mt-4">
              {mainText}
            </p>
            <p className="c-text-trueGray-400 c-text-body-normal mt-4 pb-20px">
              {mainTextSecond}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap c-bg-trueGray-700 padding-box-x p-25px width-100 width-60 box-twoColumn-right">
          {subTitle && (
            <div className="text-white pb-40px">
              {subTitle}
            </div>
          )}
          {subContent.map(
            (item, id) => (
              <div
                key={id}
                className="w-full flex mb-10px py-10px overflow-x"
              >
                <div
                  key={id + item.left}
                  className="inline-flex relative items-center"
                >
                  <span
                    key={id + id}
                    className="c-text-trueGray-400 c-text-title-normal absolute opacity-30 over-number"
                  >
                    {item.stat}
                  </span>
                  <p
                    key={id + id + id}
                    className="c-text-white c-text-body-bold pl-30px"
                  >
                    {item.left}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
