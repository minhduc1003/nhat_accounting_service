import React, { useEffect } from "react";
import Item from "../Components/Item";
import { data } from "../data";
import ScrollTop from "../Components/ScrollTop";

const Items = () => {
  return (
    <>
      <div className="max-w-[1300px] mx-auto loading3 ">
        <h1 className="text-4xl font-bold text-[#4E6878] mt-8 p-10">My Blog</h1>
        <div className="p-5 tablet:p-16">
          <div className="text-[#002662] mb-32">
            <h2 className="text-3xl font-semibold mb-7">
              Accounting function within the organisation in the context of
              regulatory and ethical constraints.
            </h2>
            <div>
              <div className="flex flex-col gap-4 relative text-lg p-4">
                <img
                  src="./pic3.png"
                  className="absolute opacity-50 bottom-[-100px] right-0 z-[-1] w-[200px] h-[200px] "
                ></img>
                <img
                  src="./pic6.png"
                  className="absolute opacity-50 top-[-50px] tablet:left-[-50px] z-[-1] w-[150px] h-[150px] "
                ></img>
                <p>
                  The regulatory and ethical constraints of accountants in an
                  organization are important. This means that accountants must
                  fully comply with regulations and ethical, technical and
                  professional standards.
                </p>
                <p>
                  Good accounting allows investors, regulators, and regulators
                  to directly compare organizations in addition to assisting
                  management to maintain control over their businesses.
                  Generally Accepted Accounting Principles (GAAP), which serves
                  as the accounting standard in the United States, was created
                  to ensure that all accounting procedures of all businesses can
                  be compared. easy.
                </p>
                <p>
                  A set of accounting standards and regulations known as GAAP is
                  applied to financial statements. Public enterprises in the
                  United States must comply with US GAAP regulations.
                </p>
                <p>
                  International Financial Reporting Standards are used by most
                  countries. (IFRS). However, the United States is transitioning
                  from US GAAP standards to IFRS through convergence.
                  Convergence aims to bring US GAAP standards closer to IFRS
                  requirements. The basic principles that businesses and their
                  accountants must follow when preparing financial statements
                  are listed below.
                </p>
                <p>
                  In addition to regulatory constraints, as an accountant, I
                  also abide by AICPA's ethics guidelines. The American
                  Institute Of Certified Public Accountants is the place that
                  sets the rules and sets the standard in the profession. This
                  includes principles of accountability, principles of public
                  interest, principles of integrity, including objectivity and
                  independence for work.
                </p>
              </div>
            </div>
          </div>

          <div className="text-[#002662] mb-5">
            <h2 className="text-3xl font-semibold mb-7 ">
              The impact of technology on accounting
            </h2>
            <div className="flex flex-col gap-4 relative text-lg p-4">
              <p>
                Accounting has been improved by technology in terms of faster
                processing, better reporting and more accuracy. Accounting
                information systems are now the primary focus for all corporate
                organizations, small and large, in managing their day-to-day
                operations. The influence and impact of contemporary technology
                on the accounting profession is discussed in this article along
                with the knowledge and abilities required of future accounting
                professionals.
              </p>
              <p>
                Accounting practices are flexible and accounting trends are
                ever-changing and self-innovating. Therefore, technology is
                crucial in streamlining the accounting process. Technological
                advances have always made accounting systems simpler to use.
              </p>
            </div>
          </div>
          <div className="text-[#002662] mb-5 p-10 flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-semibold mb-7 ">
                Improved accuracy
              </h2>
              <div className="flex flex-col gap-4 relative text-lg p-4">
                <p>
                  With the help of computerized accounting systems, accountants
                  can make fewer mistakes and provide businesses with more
                  accurate financial data. Human error has been reduced due to
                  automatic transaction recording and data transmission.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-7 ">
                Computerized accounting systems process faster
              </h2>
              <div className="flex flex-col gap-4 relative text-lg p-4">
                <p>
                  With the use of this method, accountants can quickly process
                  large amounts of financial data through the accounting system.
                  The computer can be configured with accounting software to
                  easily process the financial information of the business. An
                  application that manages and processes accounting transactions
                  is called accounting software. Accounts Payable, Accounts
                  Receivable, Payroll and Trial Balance are included as
                  functional modules.
                </p>
                <p>
                  Today, as a young accountant, I am aware of the importance of
                  technology in the development of the accounting industry.
                  Businesses are transferring their data to cloud-based
                  platforms as a result of technological advancements.
                  Furthermore, those in the accounting industry who intend to
                  use cutting-edge technology like blockchain must be familiar
                  with the relevant systems. The future of accounting requires
                  that accounting professionals gain the essential abilities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 mb-20 mt-20 loading items-center justify-center ">
          {data.map((items) => (
            <Item
              id={items.id}
              key={items.id}
              heading={items.heading}
              createAt={items.createAt}
              img={items.image}
            ></Item>
          ))}
        </div>
      </div>
      <ScrollTop></ScrollTop>
    </>
  );
};

export default Items;
