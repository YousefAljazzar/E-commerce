import React from "react";
import {
  ContainerNav,
  FlexBoxitem,
  IconBag,
  Icons,
  ListUl,
  NavbarCompont,
  Navitembar,
  Number,
  UnOrder,
} from "./nav.styled";
import image from "../assits/Branding.png"; // Use default import syntax for images
import { FaSistrix, FaUser, FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavbarCompont>
        <ContainerNav>
          <Navitembar>
            <Icons>
              <Link to="/">
                <img src={image} alt="this is icon" />
              </Link>
            </Icons>
            <UnOrder>
              <ListUl>
                <Link to="/">Home</Link>
              </ListUl>
              <ListUl>
                <Link to="cloth">Proudct</Link>
              </ListUl>
              <ListUl>
                <Link to="cloth">Category</Link>
              </ListUl>
            </UnOrder>

            <FlexBoxitem>
              <a href="asd" alt="">
                <FaSistrix />
              </a>
              <a href="asd" alt="">
                <FaUser />
              </a>

              <IconBag>
                <a href="asd" alt="">
                  <FaBagShopping />
                </a>
                <Number>2</Number>
              </IconBag>
            </FlexBoxitem>
          </Navitembar>
        </ContainerNav>
      </NavbarCompont>
    </div>
  );
}

export default Navbar;
