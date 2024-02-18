export type Element = {
  name: string;
  content: JSX.Element;
};

export type ElementProps = {
  elements: Element[];
  selectedElement: Element | null;
  handleElementClick: (element: Element) => void;
};
