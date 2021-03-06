import React from "react";

export default function InfoServiceCard({
  mainTitle,
  infoBox,
}) {
  return (
    <div
      key={mainTitle}
      className="mx-auto box-twoColumn-left box-twoColumn-right"
    >
      <h3 className="sub-title-text padding-box-x text-gray-700 font-extrabold c-3x-title-container c-3x-title">
        {mainTitle}
      </h3>
      <div
        key={mainTitle + 1}
        className="flex flex-wrap padding-box-x o-hidden -m-3x-text c-3x-text"
      >
        {infoBox && infoBox.map((box, id) => (
              <div
                key={mainTitle + id}
                className="w-3x-text"
              >
                <div
                  key={
                    mainTitle + id + 1
                  }
                  className="relative m-3x-text c-bg-trueGray-200"
                >
                  <h5
                    key={id + 1}
                    className="text-gray-700 text-lg font-extrabold c-3x-sub-title"
                  >
                    {box.title}
                  </h5>
                  <ul
                    key={id + 11}
                    className="c-3x-sub-box"
                  >
                    {box.textBox &&
                      box.textBox.map(
                        (item) => (
                          <li
                            key={
                              item.id
                            }
                          >
                            <p className="c-text-trueGray-400 text-sm font-medium c-3x-sub-title">
                              {
                                item.text
                              }
                            </p>
                          </li>
                        )
                      )}
                  </ul>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
