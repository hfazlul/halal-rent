'use Client';

import Logo from "./Logo";
import Container from "../Container";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import Categories from "./Categories";

interface NavbarProps{
  currentUser?: SafeUser | null;
}

const Nav: React.FC<NavbarProps> = ({
  currentUser
}) => {
    return (  
        <header className=" sticky top-0 w-full bg-white z-10 shadow-sm rounded-t-md">
                <div className="py-3 border-b-[1px] rounded-t-md">
                  <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo/>
                        <Search/>
                        <UserMenu currentUser={currentUser} />
                    </div>
                  </Container>

                </div>

                <Categories/>
        </header>
        
    );
}
 
export default Nav