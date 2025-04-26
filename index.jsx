import { createRoot } from "react-dom/client"
import Header from "/src/header"
import MainContent from "/src/main"
import Footer from "/src/Footer"


const root = createRoot(document.getElementById("root"));
const ul= document.createElement("ul")
ul.classNAme=""

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

root.render(Page());
