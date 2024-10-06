export default function NavbarComponent() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex h-14 items-center">
          <a
            href="#"
            className="mr-auto flex items-center gap-2 text-lg font-semibold"
          >
            <span className="font-RockSalt">Serhat</span>
            <span className="font-RockSalt text-red-600">Karaman</span>
          </a>
          <nav className="ml-auto flex items-center space-x-4">
            <a
              href="#"
              className="font-RockSalt hover:bg-black hover:text-white font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
            >
              Me, Myself and I
            </a>
            <span>*</span>
            <a
              href="#"
              className="font-RockSalt  hover:bg-black hover:text-white font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
            >
              Projects
            </a>
            <span>*</span>
            <a
              href="#"
              className="font-RockSalt  hover:bg-black hover:text-white font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </nav>
  );
}
