import { Navbar } from "./Navbar.tsx";
import { Footer } from "./Footer.tsx";

export const Layout = ({ Component }) => {
  return (
    <div>
      <Navbar />
      <div class="flex grow">
        <Component />
      </div>
      <Footer />
    </div>
  );
};
