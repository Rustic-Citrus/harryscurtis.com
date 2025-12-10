export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="footer sm:footer-horizontal footer-center bg-base-100 shadow-sm p-4">
      <aside>
        <p>
          All content on this site was created by Harry Stuart Curtis unless
          otherwise stated. Any content produced by other authors either
          contains an appropriate citation to the original source or credits the
          author of the content.
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
