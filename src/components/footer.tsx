export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 text-center md:gap-6">
        <div className="font-bold text-xl">
          <span className="text-primary">My</span>Portfolio
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Priyansh Paila. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
