import Link from "next/link";

type NotFoundLinkProps = {
  children: React.ReactNode;
};

export const NotFoundLink = ({ children }: NotFoundLinkProps) => {
  return (
    <Link href="/coming-soon">
      {children}
    </Link>
  );
};
