export default function About() {
  return (
    <div id="about" className="w-full max-w-7xl px-4 mx-auto sm:px-8 mt-24">
      <blockquote className="relative grid items-center bg-white shadow-xl md:grid-cols-3 rounded-xl">
        <img
          className="hidden object-cover w-full h-full rounded-l-xl md:block"
          style={{ clipPath: "polygon(0 0%, 100% 0%, 75% 100%, 0% 100%)" }}
          src="https://randomuser.me/api/portraits/men/68.jpg"
        />

        <article className="relative p-6 md:p-8 md:col-span-2">
          <svg
            className="absolute top-0 right-0 hidden w-24 h-24 -mt-12 -mr-12 text-primary-600 md:block"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
              stroke="currentColor"
              strokeWidth="8"
            ></path>
          </svg>

          <div className="space-y-8">
            <p className="text-base sm:leading-relaxed md:text-2xl">
              Hi, I'm John. I'm a 35-year-old software engineer with a passion
              for creating innovative solutions. I graduated with a degree in
              Computer Science from a prestigious university and have been
              working in the tech industry for over a decade. Throughout my
              career, I have gained extensive experience in programming
              languages like Python, Java, and C++. I thrive in challenging
              environments and enjoy collaborating with teams to develop
              cutting-edge software applications.
            </p>

            <footer className="flex items-center space-x-4 md:space-x-0">
              <img
                className="w-12 h-12 rounded-full md:hidden"
                src="https://randomuser.me/api/portraits/men/68.jpg"
              />
              <span className="font-bold text-lg">John Doe</span>
            </footer>
          </div>
        </article>
      </blockquote>
    </div>
  );
}
