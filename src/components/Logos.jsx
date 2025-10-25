import reactLogo from "../assets/react.svg";

export const Logos = () => {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={reactLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
};
