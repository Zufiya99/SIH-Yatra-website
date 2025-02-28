export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 shadow-lg">
      <div className="container mx-auto flex flex-col items-center px-4 md:px-8 lg:px-12 space-y-2">
        <p className="text-lg font-semibold tracking-wide text-yellow-400 text-center">
          &copy; {new Date().getFullYear()} Yatra | Your Travel Partner
        </p>
        <p className="text-sm text-gray-400 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 text-center">
          <span>Made by</span>
          <a
            href="https://www.linkedin.com/in/zufiyaidrisi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-bold hover:underline hover:text-yellow-300 transition-all"
          >
            Zufiya Idrisi
          </a>
          <span className="hidden md:inline">|</span>
          <span>Team</span>
          <a
            href="https://www.linkedin.com/company/techtravellers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-bold hover:underline hover:text-yellow-300 transition-all"
          >
            TechTravellers
          </a>
          <span className="hidden md:inline">|</span>
          <span>All rights reserved</span>
        </p>
      </div>
    </footer>
  );
}
