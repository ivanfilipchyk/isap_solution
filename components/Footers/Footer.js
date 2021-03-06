import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-100 pt-8 pb-6 px-20">
        <div className="px-4">
          <div className="flex flex-wrap text-center lg:text-left jc-center">
            <div className="hidden md-flex-footer flex-grow ">
              <img src="/img/brand/logo-gray-icon.png" alt="logo" />
              <div className="block h-full border-l mx-2 border-gray-400"></div>
              <ul className="list-unstyled flex items-center">
                <li>
                  <span className="text-trueGray-400 font-medium block px-2 text-sm">
                    Terms & Conditions
                  </span>
                </li>
                <li>
                  <span className="text-trueGray-400 font-medium block px-2 text-sm">
                    GDPR
                  </span>
                </li>
                <li>
                  <span className="text-trueGray-400 font-medium block px-2 text-sm">
                    Privacy Policy
                  </span>
                </li>
                <li>
                  <span className="text-trueGray-400 font-medium block px-2 text-sm">
                    Cookie policy
                  </span>
                </li>
                <li>
                  <span className="text-trueGray-400 font-medium block px-2 text-sm">
                    Sitemap
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-auto text-center md:text-right">
              <div className="text-sm text-trueGray-400 py-1">
                <span>©</span>{" "}
                {new Date().getFullYear()}{" "}
                <span>
                  iSAP. All rights
                  reserved
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
