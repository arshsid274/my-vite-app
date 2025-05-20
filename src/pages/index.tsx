import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import LetterGlitch from "@/components/LetterGlich";
import BlurText from "@/components/BlurText";


export default function IndexPage() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <DefaultLayout>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background with glitch and blur */}
    <div className="fixed inset-0 z-0">
  <LetterGlitch
    glitchSpeed={50}
    centerVignette={true}
    outerVignette={false}
    smooth={true}
  />
</div>

        {/* Foreground - centered frosted glass content box */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="bg-white/90 dark:bg-black/90 shadow-lg p-8 w-full max-w-3xl rounded-lg">
            <section className="flex flex-col items-center justify-center gap-4">
              {/* Animated blur title block with pink/teal text */}
              <div className="inline-block max-w-lg text-center justify-center">
                <BlurText
                  text="Hello, I am"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className={title()}
                />

                <BlurText
                  text="Arsh Siddiqui"
                  delay={300}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className={`${title()} text-[#40e6b9]`} // teal text
                />

                <BlurText
                  text="I Craft Premium Web Experiences"
                  delay={450}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className={title()}
                />

                <BlurText
                  text="That Impress."
                  delay={600}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className={`${title()} text-[#40e6b9]`} // teal text
                />

                <br className="hidden lg:block" />

                
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 mt-8">
                <Link
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "shadow",
                  })}
                  href="#projects"
                >
                  View My Work
                </Link>
                <Link
                  className={buttonStyles({
                    variant: "bordered",
                    radius: "full",
                  })}
                  href="#contact"
                >
                  Hire Me
                </Link>
              </div>

              {/* Optional: GitHub and Docs links */}
              <div className="flex gap-3 mt-6">
                <Link
                  isExternal
                  className={buttonStyles({
                    variant: "bordered",
                    radius: "full",
                    size: "sm",
                  })}
                  href={siteConfig.links.github}
                >
                  <GithubIcon size={18} />
                  GitHub
                </Link>
                <Link
                  isExternal
                  className={buttonStyles({
                    variant: "bordered",
                    radius: "full",
                    size: "sm",
                  })}
                  href={siteConfig.links.docs}
                >
                  Documentation
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
