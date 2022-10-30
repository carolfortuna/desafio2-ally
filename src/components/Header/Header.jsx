import { HeaderBox, Menu, Logo, DefaultButton, PrimaryButton, SecondaryButton, ButtonIcon } from "./styles";
import Picture from "./Logo.png"
import Icon from "./down-arrow.svg"
function Header() {

    return (
      <div>
        <HeaderBox>
        <Logo src={Picture}/>
        <Menu>
            <DefaultButton>Solutions <ButtonIcon src={Icon}/> </DefaultButton>
            <DefaultButton>About Us</DefaultButton>
            <DefaultButton>FAQ</DefaultButton>
            <DefaultButton>Contact</DefaultButton>
            <DefaultButton>Blog</DefaultButton>
            <PrimaryButton>Book a Demo</PrimaryButton>
            <SecondaryButton>Login</SecondaryButton>
        </Menu>

        </HeaderBox>
  
      </div>
    );
  }
  
  export default Header;
  