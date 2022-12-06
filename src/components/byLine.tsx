import { type Contributor } from "@prisma/client";
import Link from "next/link";
import React from "react";

const ByLine: React.FC<{
  writers: Contributor[];
}> = ({ writers }) => {
  return (
    <p className="text-xs text-gray-500">
      By{" "}
      {writers.map((writer, idx) => (
        <React.Fragment key={writer.id}>
          <Link
            href={`/contributor/${writer.slug}`}
            className="link-hover hover:text-leman-blue"
          >
            {writer.firstName} {writer.lastName}
          </Link>
          {idx !== writers.length - 1 ? <>, </> : <></>}
          {idx === writers.length - 2 ? <>& </> : <></>}
        </React.Fragment>
      ))}
    </p>
  );
};

export default ByLine;
