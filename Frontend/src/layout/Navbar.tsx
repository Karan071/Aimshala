const NavbarItems = [
    { link: "Home", href: "#" },
    { link: "Explore", href: "#" },
    { link: "Prepare", href: "#" },
    { link: "Mentorship", href: "#" },
    { link: "Engage", href: "#" },
    { link: "Contribute", href: "#" },
    { link: "Nearby", href: "#" },
];

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                {NavbarItems.map((item, i) => (
                    <li key={i}>
                        <a href={item.href} className="hover:text-gray-300 transition duration-200">
                            {item.link}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
