import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
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

	return (
		<header className="w-full z-50 fixed top-0 bg-[#facc15] px-6 shadow-md">
			<div className="flex h-16 items-center justify-between">
				<Link to="/" className="flex items-center space-x-2">
					<img src="logo.png" className="h-8" alt="Logo" />
				</Link>
				<div className="flex items-center space-x-4">
					<Link
						to="/docs"
						className="bg-transparent hover:opacity-60 px-2 py-2 rounded"
					>
						Docs
					</Link>
					<Link
						to="/suggested"
						className="bg-transparent hover:opacity-60 px-2 py-2 rounded"
					>
						Explore Products and Services
					</Link>
					<Link
						to="/api"
						className="bg-transparent hover:opacity-60 px-2 py-2 rounded"
					>
						Get Connected with Network
					</Link>

					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<Button variant="outline" className="w-[300px] justify-between">
								<Search className="h-4 w-4 shrink-0 opacity-50 mr-2" />
								{searchQuery || "Search..."}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0 relative top-[-50px]">
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
										{recentSearches.slice(0, 10).map((search) => (
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

					<div className="ml-auto flex items-center space-x-4">
						{user ? (
							<>
								<Avatar>
									<AvatarImage src={user.avatar} alt={user.name} />
									<AvatarFallback>{user.name[0]}</AvatarFallback>
								</Avatar>
								<Link to="/profile" className="text-sm">
									Profile
								</Link>
							</>
						) : (
							<Link to="/auth">
								<Button className=" bg-white hover:opacity-70 hover:bg-white">
									SignIn
								</Button>
							</Link>
						)}
					</div>
				</div>
			</div>
		</header>
	);
}
