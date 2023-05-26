import React, { useState } from 'react';
import styled from 'styled-components';
import Image from '../../image//logo.png'

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
    position: sticky;
    top: 0;
    z-index: 2;
`;

const Logo = styled.img`
  height: 54px;
`;

const NavbarLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;
const NavbarATag = styled.a`
    text-decoration: none;
    color: black;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: orange;
        transition: color 0.3s ease-in-out;
    }

    &:focus {
        outline:none
    }
`
const NavbarLink = styled.li`
  margin: 0 20px;
  position: relative;

  &:hover {
    ul {
      display: block;
    }
  }
`;

const NavbarDropdown = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  list-style: none;
`;

const NavbarDropdownItem = styled.li`
  margin: 10px;
`;

const SearchBoxDiv = styled.div`
   display:flex;
   align:item:center;
   justify-content:space-between;
`

const SearchIcon = styled.i`
  cursor: pointer;
  margin-left:5px;
`;

const SearchBox = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  margin-left: 10px;
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 0;
  background: transparent;

  &:focus {
    outline:none
}
`;

const Navbar = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <NavbarContainer>
            <Logo src={Image} alt="Company Logo" />
            <NavbarLinks>
                <NavbarLink>
                    <NavbarATag href="#">Home</NavbarATag>
                </NavbarLink>
                <NavbarLink>
                    <NavbarATag href="#">Places</NavbarATag>
                </NavbarLink>
                <NavbarLink>
                    <NavbarATag href="#" onClick={toggleDropdown}>
                        Packages
                    </NavbarATag>
                    <NavbarDropdown style={{ display: dropdownOpen ? 'block' : 'none' }}>
                        <NavbarDropdownItem>
                            <NavbarATag href="#">Dropdown Item 1</NavbarATag>
                        </NavbarDropdownItem>
                        <NavbarDropdownItem>
                            <NavbarATag href="#">Dropdown Item 2</NavbarATag>
                        </NavbarDropdownItem>
                        <NavbarDropdownItem>
                            <NavbarATag href="#">Dropdown Item 3</NavbarATag>
                        </NavbarDropdownItem>
                    </NavbarDropdown>
                </NavbarLink>
                <NavbarLink>
                    <NavbarATag href="#">Hotel</NavbarATag>
                </NavbarLink>
                <NavbarLink>
                    <NavbarATag href="#">About</NavbarATag>
                </NavbarLink>
                <NavbarLink>
                    <NavbarATag href="#">Contact</NavbarATag>
                </NavbarLink>
                <NavbarLink>
                    <SearchBoxDiv>
                        <SearchIcon className="uil uil-search" style={{ margin: 0 }} onClick={toggleSearch} />
                        <SearchBox open={searchOpen} type="text" placeholder="Search" />
                    </SearchBoxDiv>
                </NavbarLink>
            </NavbarLinks>
        </NavbarContainer>
    );
};

export default Navbar;
