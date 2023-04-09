import React from "react";
import Box from "../Components/Box";
import BoxList from "../Components/BoxList";
import ListItem from "../Components/ListItem";
import ScrollTop from "../Components/ScrollTop";

const Services = () => {
  return (
    <>
      <div>
        <div className="bg-[url(https://inngochuong.com/uploads/images/mau-san-pham/mau-backgroud-dep-don-gian/mau-background.jpg)] bg-no-repeat w-full h-full bg-cover">
          <div className="max-w-[1440px] mx-auto p-20 loading">
            <h1 className="text-[#002662] text-4xl font-bold">
              Our accounting services
            </h1>
            <div className="flex flex-wrap gap-10 max-w-[1100px] mx-auto items-center justify-center my-10">
              <Box
                heading={"Tax accounting services"}
                content={
                  "Our goal is No more worries about tax accounting. With a team of good, dedicated and experienced accountants in all types of production, business, trade, construction... will help your business achieve success. achieve this goal."
                }
              ></Box>
              <Box
                heading={"Audit Services"}
                content={
                  "With services: Financial statement audit, internal audit, tax audit, etc. NAS is committed to bringing efficiency to customers. We are the Protector, avoiding corporate financial loss. and contribute to the transparency of Vietnam's financial system."
                }
              ></Box>
              <Box
                heading={"Tax Reporting Service"}
                content={
                  "Tax advisors and experts with extensive expertise and acumen analysis will provide comprehensive solutions. As a result, Enterprises correctly and effectively apply the Tax Law, helping to reduce risks. tax liability."
                }
              ></Box>
              <Box
                heading={
                  "Transfer pricing service, profiling associated transactions"
                }
                content={
                  "Preparing transfer pricing reports, associated transaction reports - Transfer Pricing accurately, ensuring benefits for businesses. We represent and support you in the transfer pricing inspection."
                }
              ></Box>
              <Box
                heading={"Investment Certificate Service"}
                content={
                  "With in-depth experience and worked with many domestic and foreign investors, NAS will help you save maximum costs with a simplified process."
                }
              ></Box>
              <Box
                heading={"Business Registration Certificate Service"}
                content={
                  "The process is quick, self-contained, including: Compose documents, submit to customers to sign, submit documents, receive business certificates and hand over."
                }
              ></Box>
              <Box
                heading={"Work Permit Service"}
                content={
                  "Consulting and applying for new issuance and work permits for foreigners is done quickly and efficiently. Especially effective in difficult cases of procedures."
                }
              ></Box>
              <Box
                heading={"Business consulting service"}
                content={
                  "In order to bring maximum efficiency, NAS will accompany Enterprises from strategic planning, implementation organization, internal control system organization, performance monitoring and evaluation."
                }
              ></Box>
              <Box
                heading={"Financial services - Accounting"}
                content={
                  "NAS provides services such as: Due-Diligence, Financial - Accounting - Taxation, Consulting on organizational structure and accounting personnel, consulting on credit capital"
                }
              ></Box>
            </div>
          </div>
        </div>
        <div className="bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRokHwsB4C1ATMXQaMXb7onK4X5b5uUpFRaTqSqOjqM-07mdUzLElRlxvesCGLO7J3kc&usqp=CAU)] bg-no-repeat bg-cover">
          <div className="max-w-[1440px] mx-auto p-20 loading2">
            <div className="flex flex-col tablet:flex-row text-white items-start justify-between p-5 ">
              <div className="max-w-[400px] ">
                <h1 className="font-bold text-6xl text-[#002662]">
                  Why choose us
                </h1>
                <p className="p-5  text-xl">
                  NAS is proud to bring benefits to businesses with practical
                  and professional services.Thereby, we contribute to promoting
                  the finance, accounting, auditing and tax industries to go up
                  in a good direction to serve society and contribute to the
                  economic development of the country.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <BoxList heading={"Company's strengths"}>
                  <ListItem>
                  The staff is highly qualified, enthusiastic and dedicated
                  </ListItem>
                  <ListItem>Absolutely confidential all business information</ListItem>
                  <ListItem>
                  Comply with the provisions of the law
                  </ListItem>
                  <ListItem>
                  Perform and complete the work on time
                  </ListItem>
                  <ListItem>
                  Support businesses quickly and promptly with issues related to the operation process
                  </ListItem>
                  <ListItem>
                  Reasonable optimal cost with workload
                  </ListItem>
                </BoxList>
                <BoxList heading={"Service deployment process"}>
                  <ListItem>Receive information from customers</ListItem>
                  <ListItem>Get to know customers</ListItem>
                  <ListItem>Communicating with customers</ListItem>
                  <ListItem>
                  Build solutions, value for customers
                  </ListItem>
                  <ListItem>
                  Service quotation according to customer's request
                  </ListItem>
                  <ListItem>Sign a contract, an agreement</ListItem>
                  <ListItem>Deploy the work</ListItem>
                  <ListItem>
                  Deliver audit reports and work results
                  </ListItem>
                  <ListItem>
                    Liquidation of contracts, end of work and consulting, customer support after work
                  </ListItem>
                </BoxList>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollTop></ScrollTop>
    </>
  );
};

export default Services;
