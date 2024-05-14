import { ThemedImage } from "./ThemedImage";
import Link from "next/link"; // Import Link from next/link

export function Logo() {
  return (
    <Link href="/">
      {" "}
      {/* Use Link instead of <a> */}
      <a>
        <ThemedImage
          height={32}
          width={170}
          src="/img/logos/banner.svg"
          darkImage={"/img/logos/banner.dark.svg"}
          alt="BlockNote"
        />
      </a>
    </Link>
  );
}
