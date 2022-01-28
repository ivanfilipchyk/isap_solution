import React from "react";
import { Carousel } from "react-bootstrap";
import SliderCard from "../SliderCard";

export default function OneItemSlider() {
  return (
    <Carousel>
      <Carousel.Item
        className={
          "padding-box-x box-twoColumn-left box-twoColumn-right relative width-100vw"
        }
        style={{ height: "420px" }}
      >
        <div
          className={
            "h-72 c-bg-trueGray-700 w-100"
          }
          style={{
            position: "absolute",
            zIndex: "-10",
            top: "0",
            left: "0",
          }}
        ></div>
        <div
          style={{ display: "flex" }}
        >
          <SliderCard
            route={"services/sap"}
            src={
              "/img/our_services/sap.png"
            }
            alt={"SAP"}
            title={"SAP"}
            text={
              "We implement new SAP systems in organizations of all sizes and industries."
            }
          />
        </div>
      </Carousel.Item>

      <Carousel.Item
        className={
          "padding-box-x box-twoColumn-left box-twoColumn-right relative width-100vw"
        }
        style={{ height: "420px" }}
      >
        <div
          className={
            "h-72 c-bg-trueGray-700 w-100"
          }
          style={{
            position: "absolute",
            zIndex: "-10",
            top: "0",
            left: "0",
          }}
        ></div>
        <div
          style={{
            display: "flex",
          }}
        >
          <SliderCard
            route={
              "services/java_development"
            }
            src={
              "/img/our_services/java_development.png"
            }
            alt={"Java Development"}
            title={"Java Development"}
            text={
              "Our Java software development services will assist your company in achieving increased security while lowering ..."
            }
          />
        </div>
      </Carousel.Item>

      <Carousel.Item
        className={
          "padding-box-x box-twoColumn-left box-twoColumn-right relative width-100vw"
        }
        style={{ height: "420px" }}
      >
        <div
          className={
            "h-72 c-bg-trueGray-700 w-100"
          }
          style={{
            position: "absolute",
            zIndex: "-10",
            top: "0",
            left: "0",
          }}
        ></div>
        <div
          style={{
            display: "flex",
          }}
        >
          <SliderCard
            route={
              "services/web_development"
            }
            src={
              "/img/our_services/web_development.png"
            }
            alt={
              "WEB & Marketplace Development"
            }
            title={
              "WEB & Marketplace Development"
            }
            text={
              "We will work with your business to overcome the problems that B2B ..."
            }
          />
        </div>
      </Carousel.Item>

      <Carousel.Item
        className={
          "padding-box-x box-twoColumn-left box-twoColumn-right relative width-100vw"
        }
        style={{ height: "420px" }}
      >
        <div
          className={
            "h-72 c-bg-trueGray-700 w-100"
          }
          style={{
            position: "absolute",
            zIndex: "-10",
            top: "0",
            left: "0",
          }}
        ></div>
        <div
          style={{
            display: "flex",
          }}
        >
          <SliderCard
            route={
              "services/projectmanagement"
            }
            src={
              "/img/our_services/project_management.png"
            }
            alt={"Project Management"}
            title={"Project Management"}
            text={
              "Let us help you to shape a workflow that will match your team's needs."
            }
          />
        </div>
      </Carousel.Item>

      <Carousel.Item
        className={
          "padding-box-x box-twoColumn-left box-twoColumn-right relative width-100vw"
        }
        style={{ height: "420px" }}
      >
        <div
          className={
            "h-72 c-bg-trueGray-700 w-100"
          }
          style={{
            position: "absolute",
            zIndex: "-10",
            top: "0",
            left: "0",
          }}
        ></div>
        <div
          style={{
            display: "flex",
          }}
        >
          <SliderCard
            route={
              "services/itoutsource"
            }
            src={
              "/img/our_services/it_outsourcing.png"
            }
            alt={
              "IT Outsourcing and Services"
            }
            title={
              "IT Outsourcing and Services"
            }
            text={
              "Allow us to build a high-performing team that is tailored to your demands at a cost-effective rate."
            }
          />
        </div>
      </Carousel.Item>

      <Carousel.Item
        className={
          "padding-box-x box-twoColumn-left box-twoColumn-right relative width-100vw"
        }
        style={{ height: "420px" }}
      >
        <div
          className={
            "h-72 c-bg-trueGray-700 w-100"
          }
          style={{
            position: "absolute",
            zIndex: "-10",
            top: "0",
            left: "0",
          }}
        ></div>
        <div
          style={{
            display: "flex",
          }}
        >
          <SliderCard
            route={"services/host"}
            src={
              "/img/our_services/hosting_cloud.png"
            }
            alt={"Hosting & Cloud"}
            title={"Hosting & Cloud"}
            text={
              "With our cloud services, you can securely manage even the most resource-intensive projects."
            }
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
