const Header = () => {
  return (
    <header className='sticky top-0 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <span className='text-lg tracking-wide font-semibold'>unstyled</span>
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'></div>
      </div>
    </header>
  );
};

export default Header;
