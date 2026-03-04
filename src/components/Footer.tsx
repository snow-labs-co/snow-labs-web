import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-card-border/30 bg-midnight">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/snow-labs-logo-only.png"
              alt="Snow Labs"
              width={80}
              height={45}
              className="object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-sm tracking-widest text-ice-50 uppercase">Snow Labs</span>
              <span className="font-mono text-[9px] tracking-[0.18em] text-ice-400/70 uppercase mt-0.5">Colorado Springs, CO</span>
            </div>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/snow-labs-co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-ice-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-card-border/20 text-center">
          <p className="font-mono text-[10px] text-text-muted tracking-wider">
            © {new Date().getFullYear()} Snow Labs · Colorado Springs, CO
          </p>
        </div>
      </div>
    </footer>
  );
}
