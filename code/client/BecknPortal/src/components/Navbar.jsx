import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AuthContext } from "../Store/AuthContext";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Navbar() {
  const { user, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedSearches =
      JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(savedSearches);
  }, []);

  const handleSearch = (query) => {
    if (query.trim() !== "") {
      const updatedSearches = [
        query,
        ...recentSearches.filter((item) => item !== query).slice(0, 9),
      ];
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
      setRecentSearches(updatedSearches);
      setSearchQuery("");
      setOpen(false);
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchQuery);
    }
  };

  const isEcommerceRoute =
    location.pathname.startsWith("/shop") ||
    location.pathname.startsWith("/orders");

  return (
    <header className="w-full border-b border-border z-50 fixed top-0 bg-white px-6">
      <div className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <ShoppingCart className="h-6 w-6 " />
          <span className="text-xl font-bold">EcoShop</span>
        </Link>
        <div className="flex items-center">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {isEcommerceRoute ? (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/shop/electronics" className="block p-3">
                            Electronics
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem>
                  <Link to="/suggested" className="px-4 py-2">
                    Suggested
                  </Link>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[300px] justify-between">
                <Search className="h-4 w-4 shrink-0 opacity-50 mr-2" />
                {searchQuery || "Search..."}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
              <Command>
                <CommandInput
                  placeholder="Search..."
                  value={searchQuery}
                  onValueChange={setSearchQuery}
                  onKeyDown={handleKeyDown}
                />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Recent Searches">
                    {recentSearches.map((search) => (
                      <CommandItem
                        key={search}
                        onSelect={() => handleSearch(search)}
                      >
                        <Search className="mr-2 h-4 w-4" />
                        {search}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          {user ? (
            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <Link to="/profile" className="text-sm">
                Profile
              </Link>
            </div>
          ) : (
            <Button className="ml-4" onClick={login}>
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
