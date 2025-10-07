import Body from "./components/Body";
import { Toaster } from "react-hot-toast";
import MovieDialog from "./components/MovieDialog";
import "@fontsource/bebas-neue";
function App() {
  // Add userId to Redux store on mount



  return (
    <div className="">
      <Body />
      <Toaster />
      <MovieDialog />
    </div>
  );
}

export default App;
