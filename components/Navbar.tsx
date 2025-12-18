interface NavbarProps {
  title: string;
  theme: "rustic" | "night";
}

export default function Navbar({ title, theme }: NavbarProps) {
  return (
    <div class="navbar sticky top-0 bg-base-100/75 backdrop-blur-md shadow-sm z-100">
      <div class="hidden sm:block sm:navbar-start">
      </div>
      <div class="navbar-start sm:navbar-center sm:justify-center">
        <a class="text-xl text-center pl-6 sm:pl-0">{title}</a>
      </div>
      <div class="navbar-end">
        <label class="flex cursor-pointer gap-2 pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <a
            href="/api/theme"
            data-fresh-disable-lock
            class="flex"
            aria-label="Toggle Night Mode"
          >
            <input
              type="checkbox"
              class="toggle theme-controller pointer-events-none self-center"
              checked={theme === "night"}
              value="night"
              tabIndex={-1}
              readOnly
            />
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        <div class="dropdown dropdown-end pl-2">
          <span class="hidden sm:inline">Menu</span>
          <div
            tabindex={0}
            role="button"
            class="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabindex={0}
            class="menu menu-sm dropdown-content bg-base-100 z-101 mt-3 w-52 p-2 shadow-xl"
          >
            <li>
              <a href="/" class="text-sm">Homepage</a>
            </li>
            <li>
              <a href="/posts" class="text-sm">Posts</a>
            </li>
            <li>
              <a href="/services" class="text-sm">Services</a>
            </li>
            <li>
              <a href="/contact" class="text-sm">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
