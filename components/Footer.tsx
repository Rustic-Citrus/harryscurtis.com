export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {year}{" "}
          - All rights reserved by Harry Stuart Curtis.
        </p>
      </aside>
    </footer>
  );
};
