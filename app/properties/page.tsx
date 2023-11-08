import Property from ".";
import Design from "./Design";
import Footer from "../footer";
import Contact from "../components/contact";
import FloatingWButton from "../components/WhatsAppButton";

type Props = {};

const Properties = async (props: Props) => {
  return (
    <main>
      <Property />
      <FloatingWButton />
    </main>
  );
};

export default Properties;
