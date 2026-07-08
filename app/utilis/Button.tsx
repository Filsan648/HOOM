import type { LucideIcon } from "lucide-react";

interface ButtonProps {
  text1?: string;
  text2?: string;
  icone1?: LucideIcon;
  icone2?: LucideIcon;
}

function Button({
  text1,
  text2,
  icone1: Icon1,
  icone2: Icon2,
}: ButtonProps) {
  return (
    <div className="flex items-center gap-4 select-none">
      
      {/* SECONDARY BUTTON */}
      {text1 && (
        <a href="#services" className="hidden sm:inline-block">
          <button className="group relative overflow-hidden rounded-full border border-back/20 bg-transparent px-6 py-3.5 text-back transition-colors duration-500 hover:border-blue-600">
            <span className="relative z-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-500 group-hover:text-white">
              {Icon1 && <Icon1 size={14} />}
              {text1}
            </span>

            <span className="absolute inset-0 z-0 bg-back translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
          </button>
        </a>
      )}

      {/* PRIMARY BUTTON */}
      {text2 && (
        <a href="#about" className="inline-block">
          <button className="group relative overflow-hidden rounded-full bg-blue-600 px-6 py-3.5 text-white border border-blue-600">
            <span className="relative z-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors duration-500 group-hover:text-blue-600">
              {text2}

              {Icon2 && (
                <div className="relative w-4 h-4 overflow-hidden">
                  <Icon2
                    size={14}
                    className="absolute inset-0 transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4"
                  />
                  <Icon2
                    size={14}
                    className="absolute inset-0 -translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                </div>
              )}
            </span>

            <span className="absolute inset-0 z-0 bg-[#fcfbf9] translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
          </button>
        </a>
      )}
    </div>
  );
}

export default Button;