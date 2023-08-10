import home from "../assets/home.svg";
import dashboard from "../assets/bar-chart-2.svg";
import projects from "../assets/3-layers.svg";
import tasks from "../assets/check-square.svg";
import reporting from "../assets/flag.svg";
import users from "../assets/users.svg";
import support from "../assets/life-buoy.svg";
import settings from "../assets/settings.svg";

export const navigationLinks = [
  {
    text: "Home",
    image: home,
  },
  {
    text: "Dashboard",
    image: dashboard,
    hasTag: true,
  },
  {
    text: "Projects",
    image: projects,
  },
  {
    text: "Tasks",
    image: tasks,
  },
  {
    text: "Reporting",
    image: reporting,
  },
  {
    text: "Users",
    image: users,
  },
  {
    text: "Support",
    image: support,
    pullDown: true,
  },
  {
    text: "Settings",
    image: settings,
  },
];
