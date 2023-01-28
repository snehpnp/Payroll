import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    // path: "/employee",
    name: "Employee",
    icon: <FaUser />,
    exact: true,
    subRoutes: [
      {
        path: "/employee/add",
        name: "Add Employees",
        icon: <FaUser />,
      },
      {
        path: "/employee/manage",
        name: "Manage Employees",
        icon: <FaLock />,
      },
   
    ],
  },
  {
    path: "/department",
    name: "Department",
    icon: <MdMessage />,
    exact: true,
    subRoutes: [
      {
        path: "/department/add",
        name: "Add Department",
        icon: <FaUser />,
      },
      {
        path: "/department/manage",
        name: "Manage Department",
        icon: <FaLock />,
      },
   
    ],
  },
  {
    path: "/attendence",
    name: "Attendence",
    icon: <MdMessage />,
    exact: true,
    subRoutes: [
      {
        path: "/attendence/daily",
        name: "Daily Attendence",
        icon: <FaUser />,
      },
      {
        path: "attendence/report",
        name: "Attendece Report",
        icon: <FaLock />,
      },
   
    ],
  },
  {
    path: "/leave",
    name: "Leave",
    icon: <MdMessage />,
    exact: true,
    subRoutes: [
      {
        path: "/leave/add",
        name: "Add Leave ",
        icon: <FaUser />,
      },
      {
        path: "/leave/manage",
        name: "Manage Leave",
        icon: <FaLock />,
      }
    ],
  },
  {
    path: "/payroll",
    name: "Payroll",
    icon: <MdMessage />,
    exact: true,
    subRoutes: [
      {
        path: "/payslip/add",
        name: "Create Payslip ",
        icon: <FaUser />,
      },
      {
        path: "/payslip/list",
        name: "Payslp List",
        icon: <FaLock />,
      }
    ],
  },
  {
    path: "/holiday",
    name: "Holiday",
    icon: <BiAnalyse />,
    exact: true,
    subRoutes: [
      {
        path: "/holiday/add",
        name: "Create Holiday ",
        icon: <FaUser />,
      },
      {
        path: "/holiday/manage",
        name: "Manage Holiday",
        icon: <FaLock />,
      }
    ],
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/change-password",
        name: "Change Password ",
        icon: <FaUser />,
      },
      
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/logout",
    name: "Logout",
    icon: <BsCartCheck />,
  },
 
 
];


const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div>
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Payroll Portal 
                </motion.h1>
              )}
            </AnimatePresence>

            {/* <div className="bars">
              <FaBars onClick={toggle} />
            </div> */}
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index)  => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                  setIsOpen={setIsOpen}
                  key={route.name}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
          </div>
        </motion.div>

        <main className="container-fluid mainRight">{children}</main>
      </div>
    </>
  );
};

export default SideBar;
