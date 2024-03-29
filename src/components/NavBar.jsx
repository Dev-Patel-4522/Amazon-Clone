import { Search } from "./"
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const NavBar = () => {
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px]">
        {/* left */}
        <div className="flex items-center">
          <img
            className="h-[35px] w-[100px] m-2"
            src={"../images/amazon.png"}
            alt="#"
          />
          <div className="pr-4 pl-4">
            <div ClassName="text-xs xl:text-sm">Deliver to</div>
            <div ClassName="text-sm xl:text-base font-bold">India</div>
          </div>
        </div>
        {/* middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/* right */}
        <div className="flex items-center">
          <div className="pr-4 pl-4">
            <div ClassName="text-xs xl:text-sm">Hello, sign in</div>
            <div ClassName="text-sm xl:text-base font-bold">
              Account & Lists
            </div>
          </div>
          <div className="pr-4 pl-4">
            <div ClassName="text-xs xl:text-sm">Returns</div>
            <div ClassName="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <div className="flex pr-3 pl-3">
            <ShoppingCartIcon className=" h-[48px]" />
            <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
          </div>
        </div>
      </div>
      <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-sm xl:text-sm p-2 pl-6">
        <div>Today's Deals</div>
        <div>Coustomer Service</div>
        <div>Registiory</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
  );
}

export default NavBar