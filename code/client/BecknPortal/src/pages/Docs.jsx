import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const sections = [
	{ id: "introduction", title: "Introduction" },
	{ id: "installation", title: "Installation" },
	{ id: "basic-usage", title: "Basic Usage" },
	{ id: "api-reference", title: "API Reference" },
];

const CodeBlock = ({ children }) => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(children);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<Card className="my-4 relative">
			<pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto font-mono text-sm">
				<code className="language-json">{children}</code>
			</pre>	
			<button
				onClick={copyToClipboard}
				className="absolute top-3 right-3 p-2 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-100"
			>
				{copied ? <Check size={16} /> : <Copy size={16} />}
			</button>
		</Card>
	);
};

const TextBlock = ({ children }) => (
	<div className="prose prose-slate max-w-none">{children}</div>
);

export default function Docs() {
	const scrollToSection = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="flex min-h-screen bg-white">
			{/* Desktop Sidebar - Now Fixed */}
			<aside className="hidden lg:block w-64 fixed top-0 left-0 h-screen border-r bg-gray-50">
				<ScrollArea className="h-full p-6">
					<nav className="space-y-2">
						{sections.map((section) => (
							<button
								key={section.id}
								onClick={() => scrollToSection(section.id)}
								className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
							>
								{section.title}
							</button>
						))}
					</nav>
				</ScrollArea>
			</aside>

			{/* Mobile Navigation */}
			<Sheet>
				<SheetTrigger asChild className="lg:hidden">
					<Button
						variant="outline"
						size="icon"
						className="fixed top-4 left-4 z-50"
					>
						<Menu className="h-4 w-4" />
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="w-64">
					<nav className="space-y-2 mt-6">
						{sections.map((section) => (
							<button
								key={section.id}
								onClick={() => scrollToSection(section.id)}
								className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
							>
								{section.title}
							</button>
						))}
					</nav>
				</SheetContent>
			</Sheet>

			{/* Main Content - Adjusted margin for fixed sidebar */}
			<main className="flex-1 p-8 max-w-4xl ml-64 lg:mr-auto">
				<section id="introduction" className="mb-12">
					<TextBlock>
						<h2 className="text-3xl font-bold mb-6">
							Introduction to Beckn Protocol
						</h2>
						<p>
							Beckn Protocol is an open protocol that enables location-aware,
							local commerce across industries. It provides a standardized way
							to enable commerce between buyers and sellers in a decentralized
							ecosystem.
						</p>
					</TextBlock>
				</section>

				<section id="installation" className="mb-12">
					<TextBlock>
						<h2 className="text-3xl font-bold mb-6">Installation</h2>
						<p>
							To get started with Beckn Protocol, install the package using npm:
						</p>
					</TextBlock>

					<CodeBlock>npm install @beckn/protocol</CodeBlock>
				</section>

				<section id="basic-usage" className="mb-12">
					<TextBlock>
						<h2 className="text-3xl font-bold mb-6">Basic Usage</h2>
						<p>Initialize a Beckn client with your configuration:</p>
					</TextBlock>

					<CodeBlock>
						{`const client = new BecknClient({
  domain: 'retail',
  city: 'bangalore',
  country: 'IND',
  bppUri: 'https://example.com/bpp'
});`}
					</CodeBlock>
				</section>

				<section id="api-reference" className="mb-12">
					<TextBlock>
						<h2 className="text-3xl font-bold mb-6">API Reference</h2>
						<p>Core API methods for interacting with the Beckn network:</p>
					</TextBlock>

					<CodeBlock>
						{`// Search for items
await client.search({
  intent: {
    item: {
      descriptor: {
        name: "Coffee"
      }
    }
  }
});

// Confirm an order
await client.confirm({
  order: {
    id: "order_id",
    items: [{
      id: "item_id",
      quantity: 1
    }]
  }
});`}
					</CodeBlock>
				</section>
			</main>
		</div>
	);
}
