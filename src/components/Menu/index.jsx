import React from "react";
import { MenuContainer, MenuItem } from "./styles";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionLight } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { GrBookmark } from "react-icons/gr";
import { TbChairDirector } from "react-icons/tb";
import { LuUser2 } from "react-icons/lu";

export default function Menu() {
  return (
    <MenuContainer>
      <Link to="/">
        <MenuItem>
          <AiOutlineDashboard /> Dashboard
        </MenuItem>
      </Link>

      <Link to="/movie">
        <MenuItem>
          <MdLocalMovies /> Movies
        </MenuItem>
      </Link>

      <Link to="/#">
        <MenuItem>
        <PiTelevisionLight /> Tv Series
        </MenuItem>
      </Link>

      <Link to="/#">
        <MenuItem>
        <GrBookmark /> Genre
        </MenuItem>
      </Link>

      <Link to="/#">
        <MenuItem>
        <TbChairDirector /> Directors
        </MenuItem>
      </Link>

      <Link to="/#">
        <MenuItem>
        <LuUser2 /> Actors
        </MenuItem>
      </Link>

      <Link to="/#">
        <MenuItem>
        <GrGroup /> Users
        </MenuItem>
      </Link>
    </MenuContainer>
  );
}
