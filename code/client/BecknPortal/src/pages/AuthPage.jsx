import { useState } from "react";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { Link } from "react-router-dom";

export default function AuthPage() {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<div className="flex h-screen text-white">
			{/* Right side - Image */}
			<div
				className="flex-1 bg-cover bg-center bg-yellow-600"
				style={{
					backgroundImage: "url('/placeholder.svg?height=1080&width=1080')",
				}}
			>
				<div className="h-full w-full bg-black bg-opacity-30 flex items-center justify-center">
					<div className="text-white text-center max-w-md px-4">
						<h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
						<p className="text-xl mb-6">
							{isLogin
								? "Log in to access your account"
								: "Sign up to get started"}
						</p>
						<ul className="text-left list-disc list-inside space-y-2">
							<li>Access exclusive content</li>
							<li>Connect with like-minded individuals</li>
							<li>Track your progress and achievements</li>
							<li>Personalized recommendations</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Left side - Plain background with form */}
			<div className="w-[360px] bg-background flex items-center justify-center relative  ">
				{/* Form container */}
				<Card className="w-[450px] p-8 bg-card shadow-xl  z-20  absolute left-[-50%] border-border">
					<Tabs defaultValue="login" className="w-full">
						<TabsList className="grid w-full grid-cols-2 mb-8">
							<TabsTrigger value="login" onClick={() => setIsLogin(true)}>
								Login
							</TabsTrigger>
							<TabsTrigger value="register" onClick={() => setIsLogin(false)}>
								Sign Up
							</TabsTrigger>
						</TabsList>
						<TabsContent value="login">
							<form className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										type="email"
										placeholder="m@example.com"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="password">Password</Label>
									<Input id="password" type="password" required />
								</div>
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-2">
										<Checkbox id="remember" />
										<label htmlFor="remember" className="text-sm">
											Remember me
										</label>
									</div>
									<Link
										to="/forgot-password"
										className="text-sm text-primary hover:underline"
									>
										Forgot password?
									</Link>
								</div>
								<Button type="submit" className="w-full">
									Log In
								</Button>
							</form>
						</TabsContent>
						<TabsContent value="register">
							<form className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="name">Full Name</Label>
									<Input
										id="name"
										placeholder="Jhon Doe"
										type="text"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										type="email"
										placeholder="m@example.com"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="password">Password</Label>
									<Input id="password" type="password" required />
								</div>
								<div className="flex items-center space-x-2">
									<Checkbox id="terms" required />
									<label htmlFor="terms" className="text-sm">
										I agree to the{" "}
										<Link to="/terms" className="text-primary hover:underline">
											Terms of Service
										</Link>{" "}
										and{" "}
										<Link
											to="/privacy"
											className="text-primary hover:underline"
										>
											Privacy Policy
										</Link>
									</label>
								</div>
								<Button type="submit" className="w-full">
									Sign Up
								</Button>
							</form>
						</TabsContent>
					</Tabs>

					{/* Social login options
						<div className="mt-6">
							<Separator className="my-4">
								<span className="px-2 text-muted-foreground text-sm">
									Or continue with
								</span>
							</Separator>
							<div className="flex space-x-4">
								<Button variant="outline" className="w-full">
									<Github className="mr-2 h-4 w-4" />
									GitHub
								</Button>
								<Button variant="outline" className="w-full">
									<Twitter className="mr-2 h-4 w-4" />
									Twitter
								</Button>
							</div>
						</div> */}

					{/* Additional details */}
					<div className="mt-6 text-center text-sm">
						<p>
							Need help?{" "}
							<Link to="/support" className="text-primary hover:underline">
								Contact support
							</Link>
						</p>
					</div>
				</Card>
			</div>
		</div>
	);
}
