import useUniqueId from "../hooks/useid";
import HomePage from "../pages/Home";
import { PropertiesPage } from "../pages/Properties";

export const navbar=[
  {id:useUniqueId,
  element:<HomePage/>,
  title:'Home',
  path:'/home',
  hidden:false,
  private:false},

  {id:useUniqueId,
  element:<PropertiesPage/>,
  title:'Properties',
  path:'/properties',
  hidden:false,
  private:false}

] 