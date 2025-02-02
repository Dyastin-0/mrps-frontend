import React from "react";
import { colors } from "../helpers/color";
import { parseJSON } from "../helpers/parse";
import clsx from "clsx";

const Log = ({ log }) => {
  const parsed = parseJSON(log);

  return (
    <div className="flex flex-wrap gap-2 text-sm">
      {Object.entries(parsed).map(([key, value], index) => {
        return key === "level" ? (
          <div key={index} className="flex">
            <span
              className={clsx(
                colors[value] || "text-primary-foreground",
                "font-semibold w-fit"
              )}
            >
              {value}
            </span>{" "}
          </div>
        ) : (
          <div key={index} className="flex">
            <span className="text-blue w-fit">{key}=</span>
            <span
              className={clsx(
                colors[value] || colors[key] || "text-primary-foreground",
                "font-semibold w-fit"
              )}
            >
              {key === "time"
                ? new Date(value)
                    .toLocaleString("en-US", {
                      month: "short",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: false,
                    })
                    .replace(",", "")
                : value}
            </span>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Log;
