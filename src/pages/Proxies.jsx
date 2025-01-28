import Proxy from "../components/Proxy";
import useDomains from "../hooks/useDomains";

const Proxies = () => {
  const { domains } = useDomains();

  return (
    <div className="flex w-full h-full justify-center bg-primary rounded-md p-3">
      <div className="grid grid-cols-2 w-full max-w-[900px] h-fit gap-3">
        {domains &&
          Object.entries(domains).map(([domain, config]) => (
            <Proxy key={domain} domain={domain} config={config} />
          ))}
      </div>
    </div>
  );
};

export default Proxies;
