import "./MatrixNetwork.css";
import { Link } from "@tanstack/react-router";
import { ecosystemDetails } from "@/data/site";

export function MatrixNetwork() {
  return (
    <nav className="matrix-network" aria-label="Ba hệ sinh thái Matrix">
      {ecosystemDetails.map((item) => (
        <Link key={item.slug} to="/he-sinh-thai/$slug" params={{ slug: item.slug }}>
          <span className="matrix-network-node" aria-hidden="true" />
          <span>
            {item.name.replace("MATRIX ", "")}
            <small>{item.focus}</small>
          </span>
        </Link>
      ))}
    </nav>
  );
}
