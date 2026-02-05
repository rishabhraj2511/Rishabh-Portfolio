import { GooeyText } from "@/components/ui/gooey-text-morphing";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="lab-bg absolute inset-0" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="relative flex h-full w-full items-center justify-center px-6 text-center">
        <GooeyText
          texts={["Loading", "Preparing", "Almost there"]}
          morphTime={1.1}
          cooldownTime={0.3}
          className="relative h-[240px] w-full max-w-3xl"
          textClassName="font-display text-4xl md:text-6xl"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
