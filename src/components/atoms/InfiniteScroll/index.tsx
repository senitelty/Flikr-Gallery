import React, { ComponentPropsWithRef, FC, RefObject, useEffect, useRef, useState } from 'react';

type Props = {
  onBottomHit: () => void;
  isLoading: boolean;
  hasMoreData: boolean;
  loadOnMount?: boolean;
  component?: FC<ComponentPropsWithRef<any>>;
};

function isLoadPosition(ref: RefObject<HTMLDivElement>) {
  if (!ref.current) {
    return false;
  }
  return ref.current.getBoundingClientRect().bottom * 0.8 <= window.innerHeight;
}

export const InfiniteScroll: FC<Props> = ({
  onBottomHit,
  isLoading,
  hasMoreData,
  children,
  loadOnMount = false,
  component: Component = 'div',
}) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loadOnMount && initialLoad) {
      onBottomHit();
      setInitialLoad(false);
    }
  }, [onBottomHit, loadOnMount, initialLoad]);

  useEffect(() => {
    const onScroll = () => {
      // console.log(!isLoading, hasMoreData, window.innerHeight + window.scrollY >= document.body.offsetHeight);
      if (!isLoading && hasMoreData && isLoadPosition(contentRef)) {
        onBottomHit();
      }
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [onBottomHit, isLoading, hasMoreData]);

  return <Component ref={contentRef}>{children}</Component>;
};
