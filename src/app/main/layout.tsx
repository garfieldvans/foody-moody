export default function MainContentLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
        <main className="p-6">
            {children}
        </main>
    )
  }