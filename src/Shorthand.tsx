import React from "react";

export interface ShorthandProps {
  "data-id"?: string;
  "data-shorthand"?: string;
  src: string;
  testID?: string;
}

export const Shorthand: React.FC<ShorthandProps> = (props) => {
  const { src, testID } = props;
  const refContainer: React.RefObject<HTMLDivElement> = React.useRef(null);

  React.useEffect(() => {
    if (src && refContainer?.current) {
      const script = document.createElement("script");
      script.src = src;

      if (props["data-id"]) {
        script.dataset.id = props["data-id"];
      }

      refContainer.current?.appendChild(script);
      script.async = true;

      return () => {
        refContainer.current?.replaceChildren();
      };
    }
  }, [refContainer, props]);

  return src ? (
    <div
      ref={refContainer}
      data-testid={testID}
      {...(props["data-shorthand"] && {
        "data-shorthand": props["data-shorthand"],
      })}
    />
  ) : null;
};
