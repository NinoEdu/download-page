"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent as UICarouselContent,
  CarouselItem as UICarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface CarouselContextValue {
  api: CarouselApi | undefined;
  current: number;
}

const CarouselContext = React.createContext<CarouselContextValue | undefined>(undefined);

const useCarousel = () => {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a CarouselRoot");
  }
  return context;
};

interface CarouselRootProps {
  children: React.ReactNode;
  className?: string;
  opts?: Parameters<typeof Carousel>[0]['opts'];
  maxWidth?: string;
}

const CarouselRoot = ({ children, className, opts = { loop: true }, maxWidth = "max-w-xs md:max-w-xl" }: CarouselRootProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <CarouselContext.Provider value={{ api, current }}>
      <div className={cn("mx-auto", maxWidth)}>
        <Carousel
          setApi={setApi}
          className={cn("w-full mx-2", maxWidth, className)}
          opts={opts}
        >
          {children}
        </Carousel>
      </div>
    </CarouselContext.Provider>
  );
};

interface CarouselContentProps {
  children: React.ReactNode;
  className?: string;
}

const CarouselContent = ({ children, className }: CarouselContentProps) => {
  return (
    <UICarouselContent className={className}>
      {children}
    </UICarouselContent>
  );
};

interface CarouselItemProps {
  children: React.ReactNode;
  className?: string;
  basis?: string;
}

const CarouselItem = ({ children, className, basis = "basis-3/5" }: CarouselItemProps) => {
  return (
    <UICarouselItem className={cn(basis, className)}>
      {children}
    </UICarouselItem>
  );
};

interface CarouselControlsProps {
  className?: string;
}

const CarouselControls = ({ className }: CarouselControlsProps) => {
  return (
    <>
      <CarouselPrevious className={className} />
      <CarouselNext className={className} />
    </>
  );
};

// Create the compound component with proper typing
interface SlideOpacityComponent extends React.FC<CarouselRootProps> {
  Content: typeof CarouselContent;
  Item: typeof CarouselItem;
  Controls: typeof CarouselControls;
}

const SlideOpacity: SlideOpacityComponent = (props) => {
  return <CarouselRoot {...props} />;
};

// Attach sub-components as properties
SlideOpacity.Content = CarouselContent;
SlideOpacity.Item = CarouselItem;
SlideOpacity.Controls = CarouselControls;

export default SlideOpacity;

// Named exports for individual components
export { CarouselRoot, CarouselContent, CarouselItem, CarouselControls, useCarousel };
