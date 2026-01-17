export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="footer footer-horizontal footer-center bg-base-100 shadow-sm p-4 grow">
      <nav class="grid grid-flow-col gap-6">
        <a href="/" class="link link-hover">Home</a>
        <a href="/services" class="link link-hover">Services</a>
        <a href="/posts" class="link link-hover">Posts</a>
        <a href="/contact" class="link link-hover">Contact</a>
      </nav>

      <nav>
        <h6 class="footer-title" aria-label="Contact Options">Contact</h6>
        <div class="grid grid-flow-col gap-4 items-center">
          <a href="tel:+44-1497-543795" aria-label="Call Harry Curtis">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3rem"
              height="3rem"
              viewBox="0 0 24 24"
              class="stroke-base-content fill-transparent"
              role="img"
            >
              <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" />
            </svg>
          </a>
          <a
            href="mailto:contact@harryscurtis.com"
            aria-label="Send an email to Harry Curtis"
          >
            <svg
              height="3rem"
              width="3rem"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-base-content fill-transparent"
              role="img"
            >
              <path
                d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          If you find the colours on this website too bright or too dark, use
          the Toggle Dark Mode button in the bar at the top of the screen to
          switch between themes.
        </p>
        <p>
          The content present on this website is the sole creation of Harry
          Curtis, unless otherwise stated. Any content produced by other authors
          either contains an appropriate citation to the original source and
          credits the author of the content.
        </p>
        <p>
          Copyright Harry Stuart Curtis ©{" "}
          {year}. The author reserves all rights to the written text on this
          website.
        </p>
      </aside>
    </footer>
  );
}
