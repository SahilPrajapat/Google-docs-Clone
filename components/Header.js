import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signOut, useSession } from "next-auth/client";

function Header() {

  const session = useSession();
    return (
        <header className ='sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white'>
            <Button
             color="gray"
             buttonType="outline"
              rounded={true}
              iconOnly={true}
              ripple="dark"
              className="md:inline-flex h-20 w-20 border-0"
              >
                <Icon name="menu" size ="3xl"/>
              </Button>

              <Icon name="description" size="3xl" color="blue"></Icon>
              <h1 className="md:inline-flex ml-2 text-grey-700 text-2xl">Docs</h1>
              
              <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-5 bg-gray-100 text-gray-600 rounded-lg focus-within:text-grey-600 focus-within:shadow-md">
                  <Icon name="search" size="3xl" color="grey"/>
                  <input type="text" placeholder="Search" 
                    className="flex-grow px-5 text-base bg-transparent outline-none"></input>
              </div>

              <Button
              color="gray"
              buttonType="outline"
              rounded={true}
              iconOnly={true}
              ripple="dark"
              className="ml-5 md:ml-20 h-20 w-20 border-0"
              >
                <Icon name="apps" size ="3xl"/>
              </Button>

              <img
                onClick={signOut}
                loading="lazy"
               className="cursor-pointer h-12 w-12 rounded-full ml-2"
               src={session[0]?.user?.image}
               alt=""
               />
        </header>
    )
}

export default Header
