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
import image from "../asets/Branding.png"; // Use default import syntax for images
import { FaSistrix, FaUser, FaBagShopping } from "react-icons/fa6";

function Navbar() {
  return (
    <div>
      <NavbarCompont>
        <ContainerNav>
          <Navitembar>
            <Icons>
              <img src={image} alt="this is icon" />
            </Icons>

            <UnOrder>
              <ListUl>
                <a href="#">Home</a>
              </ListUl>
              <ListUl>
                <a href="#">Product</a>
              </ListUl>
              <ListUl>
                <a href="#">Category</a>
              </ListUl>
            </UnOrder>

            <FlexBoxitem>
              <a href="#">
                <FaSistrix />
              </a>
              <a href="#">
                <FaUser />
              </a>

              <IconBag>
                <a href="#">
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
