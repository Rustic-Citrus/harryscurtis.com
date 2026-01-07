export default function Footer() {
  const year = new Date().getFullYear();
  return (
    // TODO: Edit footer content so that telephone number is there.
    <footer class="footer footer-horizontal footer-center bg-base-100 shadow-sm p-4 grow">
      <nav class="grid grid-flow-col gap-6">
        <a href="/" class="link link-hover">Home</a>
        <a href="/services" class="link link-hover">Services</a>
        <a href="/posts" class="link link-hover">Posts</a>
        <a href="/contact" class="link link-hover">Contact</a>
      </nav>
      <aside>
        <p>
          All the content present on this website is the sole creation of Harry
          Stuart Curtis, unless otherwise stated. Any content produced by other
          authors either contains an appropriate citation to the original source
          and credits the author of the content.
        </p>
        <p>
          Copyright ©{" "}
          {year}. The author reserves all rights to the written text on this
          website.
        </p>
      </aside>
    </footer>
  );
}
