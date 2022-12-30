import { ReactNode, useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: ReactNode;
  wrapperId: string;
}

export function ReactPortal({ children, wrapperId }: Props) {
  const [wrapperElement, wrapperElementSet] = useState<HTMLDivElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId) as HTMLDivElement;
    let systemCreated = false;
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    wrapperElementSet(element);

    return () => {
      // delete the programmatically created element
      if (systemCreated && element.parentNode) {
        // element.parentNode.removeChild(element);
        element.remove();
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return ReactDOM.createPortal(children, wrapperElement);
}

const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};
