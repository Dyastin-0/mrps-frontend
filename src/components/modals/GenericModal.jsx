import useModal from "../hooks/useModal";
import TruncatedText from "../ui/TruncatedText";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GenericModal = ({
  title,
  icon,
  children,
  className,
  containerClassName,
}) => {
  return (
    <div
      className={clsx(
        "relative flex flex-col h-[75vh] w-[400px] max-w-full p-3 gap-3 rounded-md bg-secondary",
        "text-xs text-primary-foreground border border-secondary-accent overflow-hidden z-50",
        className
      )}
    >
      <div className="flex items-end font-semibold gap-2 text-xs">
        <div className="flex items-center flex-1 gap-1 min-w-0">
          {icon && <FontAwesomeIcon icon={icon} />}
          <TruncatedText text={title} />
        </div>
        {/* <Button
          icon={faX}
          onClick={() => setOpen(false)}
          variant="ghost"
          className="w-fit absolute top-3 right-4"
        /> */}
      </div>

      <div className={containerClassName}>{children}</div>
    </div>
  );
};

export default GenericModal;
