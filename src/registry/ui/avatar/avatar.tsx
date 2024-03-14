import * as React from "react";
import styles from "./avatar.module.css";

const AVATAR_NAME = "Avatar";

type ImageLoadingStatus = "idle" | "loading" | "loaded" | "error";

type AvatarContextValue = {
  imageLoadingStatus: ImageLoadingStatus;
  onImageLoadingStatusChange(status: ImageLoadingStatus): void;
};

const AvatarContext = React.createContext<AvatarContextValue | undefined>(
  undefined
);

type SpanProps = React.HTMLAttributes<HTMLSpanElement>;
interface AvatarProps extends SpanProps {}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (props: AvatarProps, forwardedRef) => {
    const { children, className, ...avatarProps } = props;
    const [imageLoadingStatus, setImageLoadingStatus] =
      React.useState<ImageLoadingStatus>("idle");

    const handleImageLoadingStatusChange = (status: ImageLoadingStatus) => {
      setImageLoadingStatus(status);
    };

    const contextValue: AvatarContextValue = {
      imageLoadingStatus,
      onImageLoadingStatusChange: handleImageLoadingStatusChange,
    };

    return (
      <AvatarContext.Provider value={contextValue}>
        <span
          className={`${styles.avatarBase} ${className ?? ""}`}
          {...avatarProps}
          ref={forwardedRef}>
          {children}
        </span>
      </AvatarContext.Provider>
    );
  }
);

const useAvatarContext = () => {
  const context = React.useContext(AvatarContext);
  if (!context) {
    throw new Error("useAvatar must be used within an AvatarContext Provider");
  }
  return context;
};

Avatar.displayName = AVATAR_NAME;

/* -------------------------------------------------------------------------------------------------
 * AVATAR IMAGE
 * -----------------------------------------------------------------------------------------------*/

const IMAGE_NAME = "AvatarImage";
type ImageProps = React.HTMLAttributes<HTMLImageElement>;

interface AvatarImageProps extends ImageProps {
  src: string;
  alt: string;
}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  (props: AvatarImageProps, forwardedRef) => {
    const { src, alt, className, ...imageProps } = props;
    const context = useAvatarContext();
    const loadingStatus = useImageLoadingStatus(src);

    React.useLayoutEffect(() => {
      context.onImageLoadingStatusChange(loadingStatus);
    }, [context, loadingStatus]);

    return loadingStatus === "loaded" ? (
      <img
        className={`${styles.avatarImage} ${className ?? ""}`}
        {...imageProps}
        ref={forwardedRef}
        src={src}
        alt={alt}
      />
    ) : null;
  }
);

AvatarImage.displayName = IMAGE_NAME;

/* -------------------------------------------------------------------------------------------------
 * AVATAR FALLBACK
 * -----------------------------------------------------------------------------------------------*/

const FALLBACK_NAME = "AvatarFallback";
interface AvatarFallbackProps extends React.HTMLAttributes<HTMLSpanElement> {}

const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  (props: AvatarFallbackProps, forwardedRef) => {
    const context = useAvatarContext();
    const { className } = props;
    return context.imageLoadingStatus !== "loaded" ? (
      <span
        className={`${styles.avatarFallback} ${className ?? ""}`}
        {...props}
        ref={forwardedRef}
      />
    ) : null;
  }
);

AvatarFallback.displayName = FALLBACK_NAME;

function useImageLoadingStatus(src?: string): ImageLoadingStatus {
  const [loadingStatus, setLoadingStatus] =
    React.useState<ImageLoadingStatus>("idle");

  React.useLayoutEffect(() => {
    if (!src) {
      setLoadingStatus("error");
      return;
    }

    const image = new window.Image();
    setLoadingStatus("loading");
    image.onload = () => setLoadingStatus("loaded");
    image.onerror = () => setLoadingStatus("error");
    image.src = src;

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [src]);

  return loadingStatus;
}

export { Avatar, AvatarImage, AvatarFallback, useAvatarContext };
export type { AvatarProps, AvatarImageProps, AvatarFallbackProps };
