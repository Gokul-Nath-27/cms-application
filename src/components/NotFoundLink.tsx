import Link from "next/link";

type NotFoundLinkProps = {
  children: React.ReactNode;
  className?: string;
};

export const NotFoundLink = ({ children, className, ...props }: NotFoundLinkProps) => {
  return (
    <Link href="/coming-soon" tabIndex={-1} {...props} className={className}>
      {children}
    </Link>
  );
};
