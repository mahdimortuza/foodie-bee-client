type TTitleProps = {
  title: string;
};

const DashboardPageTitle = ({ title }: TTitleProps) => {
  return (
    <h1 className="text-center text-3xl font-semibold text-tangerine">
      {title}
    </h1>
  );
};

export default DashboardPageTitle;
